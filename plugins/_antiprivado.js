export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`*[❗] ʜᴏʟᴀ @${m.sender.split`@`[0]}, єѕтα ρяσнιвι∂σ нαвℓαя αℓ ρяινα∂σ ∂є 💋Ɲ4MЄƇƖƬ4_ƁƇ 💞 🚫 ᴘᴏʀ ʟᴏ ᴄᴜᴀʟ sᴇʀᴀs ʙʟᴏϙᴜᴇᴀᴅᴏ.\n\nѕι qυιєяєѕ вσт ραяα тυѕ gяυρσѕ σ вσт ρєяzσηαℓιzα∂σѕ:\n\n𝐇𝐚𝐛𝐥𝐚𝐫 𝐚: Wa.me/56936399966`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
