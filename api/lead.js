function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  try {
    const { name, phone, direction, utm } = req.body || {};
    if (!phone) {
      return res.status(400).json({ ok: false, error: 'Phone is required' });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (token && chatId) {
      let utmText = 'Прямой заход (без меток)';
      if (utm) {
        if (typeof utm === 'object' && Object.keys(utm).length > 0) {
          utmText = Object.entries(utm)
            .map(([k, v]) => `• <b>${escapeHtml(k)}:</b> ${escapeHtml(v)}`)
            .join('\n');
        } else if (typeof utm === 'string' && utm.trim()) {
          utmText = escapeHtml(utm);
        }
      }

      const text = `🌸 <b>Новая заявка на пробное занятие | FIT9</b>\n\n` +
        `👤 <b>Имя:</b> ${escapeHtml(name) || 'Не указано'}\n` +
        `📞 <b>Телефон:</b> <code>${escapeHtml(phone)}</code>\n` +
        `🎯 <b>Направление:</b> ${escapeHtml(direction) || 'Не выбрано'}\n` +
        `📍 <b>Локация:</b> Уфа, «Конди Лофт»\n\n` +
        `📊 <b>Маркетинговые метки:</b>\n${utmText}`;

      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'HTML',
        }),
      });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Lead handler error:', err);
    return res.status(500).json({ ok: false, error: 'Internal Server Error' });
  }
}
