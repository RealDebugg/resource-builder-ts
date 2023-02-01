# FiveM TS Boilerplate/Resource Builder
## Setup
Place all of the repository files in the main directory of your CFX server.

If you haven't already; install the latest version of [NodeJS](https://nodejs.org/en/) and [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

In your main directory where these files are located, in a terminal run the command `yarn` to download all required dependencies.

## Usage
- **Create a new resource:** `yarn create-resource [insert resource name]` or `yarn create-resource`
- **To watch for changes:** `yarn watch`
- **To build latest changes:** `yarn build`

NOTE: These commands should only be ran in the main directory, where you placed these repository files, all resources built with the create-resource command will watch/build parallel to each other and restart automatically in the game console if changes have been detected. **(Check environment.cfg.example)**

## Credit
Most of the research made for this to work was done by spAnser and the contributors over at [pioneer-village](https://github.com/spAnser/pioneer-village) their work is amazing, make sure to check their stuff out.

For a JS only version check out: https://github.com/RealDebugg/resource-builder-js
The JS version was built a little differently, resources won't restart automatically. You'll also need to initialise every new resource manually (run `yarn` within the resource folder). After that, you'll be able to watch/build every initialised resource individually, however the setup process is the same.

Both of these boilerplates don't have any native support for UI, if anything it'll probably be added to this version in the future. If you're building any type of UI on top of this then you'll have to add the dependencies yourself.

This is just a general baseline which can be expanded upon depending on your needs.
