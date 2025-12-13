// server/src/api/vk-news/routes/vk-news.js
module.exports = [
  {
    method: 'GET',
    path: '/vk-news',
    handler: 'vk-news.find',
    config: {
      auth: false // при желании включите авторизацию
    }
  }
];
