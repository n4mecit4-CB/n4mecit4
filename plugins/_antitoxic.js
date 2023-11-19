const toxicRegex = /puto|puta|rata|estupido|imbecil|rctmre|mrd|verga|vrga|maricon/i;

export async function before(m, {isAdmin, isBotAdmin, isOwner}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) {
    return !1;
  }
  const user = global.db.data.users[m.sender];
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[mconn.conn.user.jid] || {};
  const isToxic = toxicRegex.exec(m.text);

  if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
    user.warn += 1;
    if (!(user.warn >= 5)) await m.reply('*[❗] ' + `${user.warn == 1 ? `𝐻𝒪𝐿𝒜 @${m.sender.split`@`[0]}` : `@${m.sender.split`@`[0]}`}, 𝘋𝘦𝘤𝘪𝘳 𝘭𝘢 𝘱𝘢𝘭𝘢𝘣𝘳𝘢 "${isToxic}" 𝘌𝘴𝘵á 𝘱𝘳𝘰𝘩𝘪𝘣𝘪𝘥𝘰 𝘦𝘯 𝘦𝘴𝘵𝘦 𝘨𝘳𝘶𝘱𝘰. 𝘈𝘥𝘷𝘦𝘳𝘵𝘦𝘯𝘤𝘪𝘢: ${user.warn}/5.` + '*', false, {mentions: [m.sender]});
  }

  if (user.warn >= 5) {
    user.warn = 0;
    await m.reply(`*[❗] Hola @${m.sender.split`@`[0]}, 𝙨𝙪𝙥𝙚𝙧𝙖𝙨𝙩𝙚 𝙡𝙖𝙨 5 𝙖𝙙𝙫𝙚𝙧𝙩𝙚𝙣𝙘𝙞𝙖𝙨 𝙥𝙤𝙧 𝙡𝙤 𝙦𝙪𝙚 𝙨𝙚𝙧á𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙙𝙚 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤 𝙥𝙤𝙧 𝙩𝙪 𝙘𝙤𝙢𝙥𝙤𝙧𝙩𝙖𝙢𝙞𝙚𝙣𝙩𝙤.*`, false, {mentions: [m.sender]});
    user.banned = true;
    await mconn.conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
    // await this.updateBlockStatus(m.sender, 'block')
  }
  return !1;
}
