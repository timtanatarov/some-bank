const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/user-service/**',
        createProxyMiddleware({
            target: 'http://172.17.1.24:8081',
            changeOrigin: true,
        })
    );
    app.use(
        '/credit-service/**',
        createProxyMiddleware({
            target: 'http://172.17.1.24:9002',
            changeOrigin: true,
        })
    );
    app.use(
        '/deposit-service/**',
        createProxyMiddleware({
            target: 'http://172.17.1.24:9003',
            changeOrigin: true,
        })
    );
    app.use(
        '/info-service/**',
        createProxyMiddleware({
            target: 'http://172.17.1.24:9005',
            secure: false,
            changeOrigin: true,
        })
    );
};
