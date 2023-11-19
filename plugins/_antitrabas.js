//
// By @NeKosmic || https://github.com/NeKosmic/
//

import * as fs from 'fs';

export async function before(m, {conn, isAdmin, isBotAdmin, usedPrefix}) {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) return !1;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  const delet = m.key.participant;
  const bang = m.key.id;
  const name = await conn.getName(m.sender);
  const fakemek = {'key': {'participant': '0@s.whatsapp.net', 'remoteJid': '0@s.whatsapp.net'}, 'message': {'groupInviteMessage': {'groupJid': '56922396080-1616969743@g.us', 'inviteCode': 'm', 'groupName': 'P', 'caption': 'Ɲ4MЄƇƖƬ4_ƁƇ', 'jpegThumbnail': null}}};
  if (chat.antiTraba && m.text.length > 5000) { // 𝘊𝘢𝘯𝘵𝘪𝘥𝘢𝘥 𝘮á𝘹𝘪𝘮𝘢 𝘥𝘦 𝘤𝘢𝘳𝘢𝘤𝘵𝘦𝘳𝘦𝘴 𝘢𝘤𝘦𝘱𝘵𝘢𝘥𝘰𝘴 𝘦𝘯 𝘶𝘯 𝘮𝘦𝘯𝘴𝘢𝘫𝘦//
    if (isAdmin) return conn.sendMessage(m.chat, {text: `El administrador @${m.sender.split('@')[0]} 𝘢𝘤𝘢𝘣𝘢 𝘥𝘦 𝘦𝘯𝘷𝘪𝘢𝘳 𝘶𝘯 𝘵𝘦𝘹𝘵𝘰 𝘲𝘶𝘦 𝘤𝘰𝘯𝘵𝘪𝘦𝘯𝘦 𝘮𝘶𝘤𝘩𝘰𝘴 𝘤𝘢𝘳𝘢𝘤𝘵𝘦𝘳𝘦𝘴 -.-!`, mentions: [m.sender]}, {quoted: fakemek});
    conn.sendMessage(m.chat, `*[ ! ] 𝘚𝘦 𝘥𝘦𝘵𝘦𝘤𝘵𝘰 𝘶𝘯 𝘮𝘦𝘯𝘴𝘢𝘫𝘦 𝘲𝘶𝘦 𝘤𝘰𝘯𝘵𝘪𝘦𝘯𝘦 𝘮𝘶𝘤𝘩𝘰𝘴 𝘤𝘢𝘳𝘢𝘤𝘵𝘦𝘳𝘦𝘴 [ ! ]*\n`, `${isBotAdmin ? '' : '𝘕𝘰 𝘴𝘰𝘺 𝘢𝘥𝘮𝘪𝘯𝘪𝘴𝘵𝘳𝘢𝘥𝘰𝘳, 𝘯𝘰 𝘱𝘶𝘦𝘥𝘰 𝘩𝘢𝘤𝘦𝘳 𝘯𝘢𝘥𝘢 :/'}`, m);
    // await conn.sendButton(m.chat, `*[ ! ] 𝘚𝘦 𝘥𝘦𝘵𝘦𝘤𝘵𝘰 𝘶𝘯 𝘮𝘦𝘯𝘴𝘢𝘫𝘦 𝘲𝘶𝘦 𝘤𝘰𝘯𝘵𝘪𝘦𝘯𝘦 𝘮𝘶𝘤𝘩𝘰𝘴 𝘤𝘢𝘳𝘢𝘤𝘵𝘦𝘳𝘦𝘴 [ ! ]*\n`, `${isBotAdmin ? '' : '𝘕𝘰 𝘴𝘰𝘺 𝘢𝘥𝘮𝘪𝘯𝘪𝘴𝘵𝘳𝘢𝘥𝘰𝘳, 𝘯𝘰 𝘱𝘶𝘦𝘥𝘰 𝘩𝘢𝘤𝘦𝘳 𝘯𝘢𝘥𝘢 :/'}`, author, ['[ 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝙍 𝘼𝙉𝙏𝙄 𝙏𝙍𝘼𝘽𝘼𝙎 ]', usedPrefix+'apagar antitraba'], fakemek )
    if (isBotAdmin && bot.restrict) {
      conn.sendMessage(m.chat, {delete: {remoteJid: m.chat, fromMe: false, id: bang, participant: delet}});
        	setTimeout(() => {
        	conn.sendMessage(m.chat, {text: `𝙈𝙖𝙧𝙘𝙖𝙧 𝙚𝙡 𝙘𝙝𝙖𝙩 𝙘𝙤𝙢𝙤 𝙡𝙚𝙞𝙙𝙤 ✓\n${'\n'.repeat(400)}\n=> 𝙀𝙡 𝙣ú𝙢𝙚𝙧𝙤 : wa.me/${m.sender.split('@')[0]}\n=> Alias : ${name}\n[ ! ] 𝘼𝙘𝙖𝙗𝙖 𝙙𝙚 𝙚𝙣𝙫𝙞𝙖𝙧 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙦𝙪𝙚 𝙘𝙤𝙣𝙩𝙞𝙚𝙣𝙚 𝙢𝙪𝙘𝙝𝙤𝙨 𝙘𝙖𝙧𝙖𝙘𝙩𝙚𝙧𝙚𝙨 𝙦𝙪𝙚 𝙥𝙪𝙚𝙙𝙚 𝙤𝙘𝙖𝙨𝙞𝙤𝙣𝙖𝙧 𝙛𝙖𝙡𝙡𝙤𝙨 𝙚𝙣 𝙡𝙤𝙨 𝙙𝙞𝙨𝙥𝙤𝙨𝙞𝙩𝙞𝙫𝙤𝙨`, mentions: [m.sender]}, {quoted: fakemek});
      }, 0);
      setTimeout(() => {
        	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      }, 1000);
    } else if (!bot.restrict) return m.reply('[ ! ] 𝙋𝙖𝙧𝙖 𝙧𝙚𝙖𝙡𝙞𝙯𝙖𝙧 𝙖𝙘𝙘𝙞𝙤𝙣𝙚𝙨 𝙙𝙚 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙘𝙞ó𝙣, 𝙢𝙞 𝙙𝙪𝙚ñ𝙤 𝙩𝙞𝙚𝙣𝙚 𝙦𝙪𝙚 𝙚𝙣𝙘𝙚𝙣𝙙𝙚𝙧 𝙚𝙡 𝙢𝙤𝙙𝙤 𝙧𝙚𝙨𝙩𝙧𝙞𝙣𝙜𝙞𝙙𝙤!');
  }
  return !0;
}
