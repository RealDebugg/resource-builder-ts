var glob = require("glob");
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');
const HotReloadPlugin = require('./webpack.hotreload');

const buildPath = path.resolve(__dirname, 'dist');

module.exports = () => ({
    entry: glob.sync('./src/client/**/*.ts'),
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
                    path.resolve(buildPath, 'client')
                ]
            },
            watch: {
                include: [
                    path.resolve(buildPath, 'client')
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
        filename: 'client.js',
        path: path.resolve('./dist')
    },
});