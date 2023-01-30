var glob = require("glob");
const path = require('path');
const RemovePlugin = require('remove-files-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HotReloadPlugin = require('./webpack.hotreload');

const buildPath = path.resolve(__dirname, 'dist');

module.exports = () => ({
    entry: glob.sync('./src/server/**/*.ts'),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new RemovePlugin({
            before: {
                include: [
                    path.resolve(buildPath, 'server')
                ]
            },
            watch: {
                include: [
                    path.resolve(buildPath, 'server')
                ]
            }
        }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['*.LICENSE.txt'],
        }),
        new HotReloadPlugin()
    ],
    optimization: {
        minimize: true,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'server.js',
        path: path.resolve('./dist')
    },
});