// server/src/api/vk-news/controllers/vk-news.js
'use strict';

const { fetchGroupPosts, normalizePost } = require('../services/vk-news');

const GROUPS = [
  { id: '212739472', label: 'МТИД' }, // первая группа
  { id: '186468120', label: 'ГУИ' }   // вторая группа
];

module.exports = {
  async find(ctx) {
    try {
      const VK_TOKEN = process.env.VK_TOKEN;
      if (!VK_TOKEN) {
        return ctx.badRequest('VK_TOKEN is not set in server environment');
      }

      // Для каждой группы запрашиваем N постов (берём 50, чтобы отфильтровать репосты/видео)
      const perGroupFetch = 50;
      const promises = GROUPS.map(g => fetchGroupPosts(g.id, VK_TOKEN, perGroupFetch)
        .then(items => ({ group: g, items }))
      );
      const results = await Promise.all(promises);

      // Нормализуем и объединяем
      let all = [];
      for (const { group, items } of results) {
        for (const it of items) {
          const normalized = normalizePost(it, group.id, group.label);
          if (normalized) all.push(normalized);
        }
      }

      // Сортируем по дате (убывание)
      all.sort((a, b) => b.date - a.date);

      // Берем 6 последних
      const limited = all.slice(0, 6);

      // Формат даты: в клиенте будем форматировать, но можно вернуть и на сервере.
      ctx.send({ data: limited });
    } catch (err) {
      strapi.log.error(err);
      ctx.internalServerError({ error: err.message || 'vk fetch error' });
    }
  }
};
