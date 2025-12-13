// server/src/api/vk-news/services/vk-news.js
'use strict';

const fetch = require('node-fetch'); // strapi/node env обычно имеет fetch; если нет, поставьте node-fetch

const VK_API_URL = 'https://api.vk.com/method/wall.get';

function groupOwnerId(groupId) {
  // VK API expects negative owner_id for groups
  return -Math.abs(Number(groupId));
}

/**
 * Получить посты одной группы
 * @param {string|number} groupId
 * @param {string} token
 * @param {number} count
 */
async function fetchGroupPosts(groupId, token, count = 50) {
  const owner_id = groupOwnerId(groupId);
  const params = new URLSearchParams({
    owner_id: String(owner_id),
    access_token: token,
    v: '5.131',
    count: String(count),
    filter: 'owner' // только посты от сообщества
  });

  const url = `${VK_API_URL}?${params.toString()}`;
  const res = await fetch(url);
  const json = await res.json();
  if (json.error) {
    throw new Error(`VK API error for group ${groupId}: ${JSON.stringify(json.error)}`);
  }
  return json.response?.items || [];
}

/**
 * Извлекаем первую фотографию из массива attachments (если есть)
 */
function extractFirstPhotoFromAttachments(attachments = []) {
  for (const att of attachments) {
    if (!att) continue;
    if (att.type === 'photo' && att.photo && att.photo.sizes) {
      // выбрать наибольшую по типу/размеру (sizes содержит несколько)
      const sizes = att.photo.sizes;
      // возьмём последний (он обычно самый большой)
      const best = sizes[sizes.length - 1];
      return best?.url || null;
    }
    // если есть вложенные (например, copy_history) — игнорируем, потому что мы уже исключаем reposts
  }
  return null;
}

/**
 * Преобразуем один пост wall item в наш формат
 */
function normalizePost(item, originGroupId, originLabel) {
  if (item.copy_history && item.copy_history.length > 0) {
    return null;
  }

  const firstPhoto = extractFirstPhotoFromAttachments(item.attachments || []);
  if (!firstPhoto) return null;

  return {
    id: `vk_${originGroupId}_${item.id}`,
    originGroupId: String(originGroupId),
    originLabel,
    text: item.text || '',
    date: item.date ? item.date * 1000 : Date.now(),
    photo: firstPhoto,
    url: `https://vk.com/public${originGroupId}?w=wall-${originGroupId}_${item.id}`
  };
}


module.exports = {
  fetchGroupPosts,
  normalizePost,
};
