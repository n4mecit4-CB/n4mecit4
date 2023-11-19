const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
export async function before(m, {conn, isAdmin, isBotAdmin}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const delet = m.key.participant;
  const bang = m.key.id;
  const bot = global.db.data.settings[this.user.jid] || {};
  const user = `@${m.sender.split`@`[0]}`;
  const isGroupLink = linkRegex.exec(m.text);
  const grupo = `https://chat.whatsapp.com`;
  if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*єу єℓ αηтιℓιк єѕтá α¢тινσ, ρєяσ єяєѕ υη α∂мιη, єѕтαѕ ѕαℓνα∂σ/𝙰🤞!*');
  if (chat.antiLink && isGroupLink && !isAdmin) {
    if (isBotAdmin) {
      const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
      if (m.text.includes(linkThisGroup)) return !0;
    }
    await this.sendMessage(m.chat, {text: `*「 𝐀𝐍𝐓𝐈𝐋𝐈𝐍𝐊𝐒 」*\n*нαѕтα ℓα νιѕтα вαву 👋 ${user} яσмριѕтє ℓαѕ яєgℓαѕ ∂єℓ gяυρσ, ѕєяÁѕ єχтєямιηα∂σ...!!*`, mentions: [m.sender]}, {quoted: m});
    if (!isBotAdmin) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] єℓ вσт ησ єѕ α∂мιη, ησ ρυє∂є єχтєямιηαя α ℓαѕ ρєяѕσηαѕ*');
    if (isBotAdmin && bot.restrict) {
      await conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
      const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === '404') return;
    } else if (!bot.restrict) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] єℓ ρяσριєтαяισ ∂єℓ вσт ησ тιєηє нαвιℓιтα∂α ℓαѕ яєѕтяι¢¢ισηєѕ (#𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) ¢σηтα¢тє ¢ση єℓ ραяα нαвιℓιтαяℓσ*');
  }
  return !0;
}
