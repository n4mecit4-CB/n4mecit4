export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`*[❗] ʜᴏʟᴀ @${m.sender.split`@`[0]}, ᴇsᴛᴀ ᴘʀᴏʜɪʙɪᴅᴏ ʜᴀʙʟᴀʀ ᴀʟ ᴘʀɪᴠᴀᴅᴏ ᴅᴇʟ 𝕵𝖔𝖘𝖘 🏴‍☠️ ᴘᴏʀ ʟᴏ ᴄᴜᴀʟ sᴇʀᴀs ʙʟᴏϙᴜᴇᴀᴅᴏ.\n\n𝑺𝒊 𝒒𝒖𝒊𝒆𝒓𝒆𝒔 𝒃𝒐𝒕, 𝒊𝒏𝒕𝒆𝒓𝒄𝒂𝒎𝒃𝒊𝒂𝒓 𝒏𝒖𝒎𝒆𝒓𝒐 𝒙 𝒃𝒐𝒕 𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒍𝒊𝒛𝒂𝒅𝒐±𝑪𝒖𝒆𝒏𝒕𝒂 𝒅𝒆 𝒔𝒕𝒓𝒆𝒂𝒎𝒊𝒏𝒈:\n\n𝐇𝐚𝐛𝐥𝐚𝐫 𝐚: Wa.me/56986469687*`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
