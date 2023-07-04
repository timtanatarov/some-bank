module.exports = {
    apps: [
        {
            name: 'mock',
            script: 'node_modules/react-scripts/bin/react-scripts.js',
            args: 'start',
            env: {
                NODE_ENV: 'development',
                REACT_APP_CROSS_ENV_MODE: 'mock',
            },
        },
    ],
};
