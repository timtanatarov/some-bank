import { defineConfig } from 'cypress';
//@ts-ignore no types for find-webpack
import findWebpack from 'find-webpack';
import webpackPreprocessor from '@cypress/webpack-preprocessor';

export default defineConfig({
    viewportWidth: 1200,
    viewportHeight: 956,
    component: {
        devServer: {
            framework: 'create-react-app',
            bundler: 'webpack',
        },
    },
    e2e: {
        baseUrl: 'http://localhost:3000',
        setupNodeEvents(on, config) {
            const webpackOptions = findWebpack.getWebpackOptions();

            if (!webpackOptions) {
                throw new Error('Could not find Webpack in this project');
            }

            const cleanOptions = { reactScripts: true };

            findWebpack.cleanForCypress(cleanOptions, webpackOptions);

            const options = {
                webpackOptions,
                watchOptions: {},
            };

            on('file:preprocessor', webpackPreprocessor(options));
            return config;
        },
    },
    fixturesFolder: false,
    watchForFileChanges: false,
    video: false,
    retries: {
        runMode: 0,
        openMode: 0,
    },
});
