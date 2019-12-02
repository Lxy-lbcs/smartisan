const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        '/mobile',
        proxy({
            target:'http://shopapi.smartisan.com',
            changeOrigin:true,
        })
    )
}

// http://shopapi.smartisan.com/mobile/classify