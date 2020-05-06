const {createProxyMiddleware} = require("http-proxy-middleware");
module.exports = function (app) {

    app.use("/api", createProxyMiddleware({
        target: "https://api.juooo.com",
        changeOrigin: true,
        pathRewrite: {
            "^/api": ""
        }
    }))

    app.use("/dl", createProxyMiddleware({
        target: "http://127.0.0.1",
        changeOrigin: true,
        pathRewrite: {
            "^/dl": ""
        }
    }))
    app.use("/juooo", createProxyMiddleware({
        target: "https://m.juooo.com",
        changeOrigin: true,
        pathRewrite: {
            "^/juooo": ""
        }
    }))
}



