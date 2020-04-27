const {createProxyMiddleware} = require("http-proxy-middleware");
module.exports = function (app) {

    app.use("/juooo",createProxyMiddleware({
        target:"https://api.juooo.com",
        changeOrigin:true,
        pathRewrite:{
            "^/juooo":""
        }
    }))
}

