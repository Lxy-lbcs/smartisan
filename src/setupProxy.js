const proxy = require('http-proxy-middleware');// 反向代理
module.exports = function (app) {
  // 第一个代理
  app.use(
    '/product',
    proxy({
      target: 'https://shopapi.smartisan.com',
      changeOrigin: true,
    })
  );
  app.use(
    'mobile',
    proxy({
      target: 'https://shopapi.smartisan.com',
      changeOrigin: true,
    })
  )

};
