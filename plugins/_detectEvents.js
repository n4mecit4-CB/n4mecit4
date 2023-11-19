// Creditos del codigo a @Gatito-kw //

/* GitHub: https://github.com/Gatito-kw */

/* Bot: https://github.com/Gatito-kw/nekobot-md */

import {WAMessageStubType} from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, {conn, participants}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  const groupName = (await conn.groupMetadata(m.chat)).subject;
  const groupAdmins = participants.filter((p) => p.admin);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png';
  const img = await (await fetch(pp)).buffer();
  const chat = global.db.data.chats[m.chat];
  const mentionsString = [m.sender, m.messageStubParameters[0], ...groupAdmins.map((v) => v.id)];
  const mentionsContentM = [m.sender, m.messageStubParameters[0]];
  const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};

  if (chat.detect2 && m.messageStubType == 29) {
    let txt1 = `*𝘙𝘦𝘤𝘪𝘦𝘯𝘵𝘦𝘮𝘦𝘯𝘵𝘦 𝘴𝘦 𝘩𝘢 𝘱𝘳𝘰𝘮𝘰𝘷𝘪𝘥𝘰 𝘶𝘯 𝘮𝘪𝘦𝘮𝘣𝘳𝘰 𝘢 𝘢𝘥𝘮𝘪𝘯𝘪𝘴𝘵𝘳𝘢𝘥𝘰𝘳.*\n\n`;
    txt1 += `*◦  𝙂𝙧𝙪𝙥𝙤:* ${groupName}\n`;
    txt1 += `*◦  𝙉𝙪𝙚𝙫𝙤 𝙖𝙙𝙢𝙞𝙣:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    txt1 += `*◦  𝙀𝙟𝙚𝙘𝙪𝙩𝙖𝙙𝙤 𝙥𝙤𝙧:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: img, caption: txt1, mentions: mentionsString}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 30) {
    let txt2 = `*𝘙𝘦𝘤𝘪𝘦𝘯𝘵𝘦𝘮𝘦𝘯𝘵𝘦 𝘴𝘦 𝘩𝘢 𝘥𝘦𝘨𝘳𝘢𝘥𝘢𝘥𝘰 𝘶𝘯 𝘢𝘥𝘮𝘪𝘯𝘪𝘴𝘵𝘳𝘢𝘥𝘰𝘳 𝘢 𝘮𝘪𝘦𝘮𝘣𝘳𝘰.*\n\n`;
    txt2 += `*◦  𝙂𝙧𝙪𝙥𝙤:* ${groupName}\n`;
    txt2 += `*◦  𝙎𝙚 𝙦𝙪𝙞𝙩ó 𝙖:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    txt2 += `*◦  𝙀𝙟𝙚𝙘𝙪𝙩𝙖𝙙𝙤 𝙥𝙤𝙧:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: img, caption: txt2, mentions: mentionsString}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 27) {
    let txt3 = `*𝘙𝘦𝘤𝘪𝘦𝘯𝘵𝘦𝘮𝘦𝘯𝘵𝘦 𝘴𝘦 𝘩𝘢 𝘪𝘯𝘤𝘰𝘳𝘱𝘰𝘳𝘢𝘥𝘰 𝘢𝘭 𝘨𝘳𝘶𝘱𝘰 𝘶𝘯 𝘯𝘶𝘦𝘷𝘰 𝘮𝘪𝘦𝘮𝘣𝘳𝘰.*\n\n`;
    txt3 += `*◦  𝙂𝙧𝙪𝙥𝙤:* ${groupName}\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt3 += `*◦  𝙎𝙚 𝙖ñ𝙖𝙙𝙞ó 𝙖:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt3 += `*◦  𝙀𝙟𝙚𝙘𝙪𝙩𝙖𝙙𝙤 𝙥𝙤𝙧:* @${m.sender.split`@`[0]}`;
    } else {
      txt3 += `*◦  𝙎𝙚 𝙖ñ𝙖𝙙𝙞ó:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: img, caption: txt3, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 28) {
    let txt4 = `*𝘙𝘦𝘤𝘪𝘦𝘯𝘵𝘦𝘮𝘦𝘯𝘵𝘦 𝘴𝘦 𝘩𝘢 𝘦𝘭𝘪𝘮𝘪𝘯𝘢𝘥𝘰 𝘶𝘯 𝘮𝘪𝘦𝘮𝘣𝘳𝘰 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰.*\n\n`;
    txt4 += `*◦  𝙂𝙧𝙪𝙥𝙤:* ${groupName}\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt4 += `*◦  𝙎𝙚 𝙚𝙡𝙞𝙢𝙞𝙣ó 𝙖:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt4 += `*◦  𝙀𝙟𝙚𝙘𝙪𝙩𝙖𝙙𝙤 𝙥𝙤𝙧:* @${m.sender.split`@`[0]}`;
    } else {
      txt4 += `*◦  𝙎𝙚 𝙚𝙡𝙞𝙢𝙞𝙣ó 𝙖:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt4, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 32) {
    let ax;
    if (m.messageStubParameters[0] === m.sender) {
      ax = 'salido';
    } else {
      ax = 'eliminado';
    }
    let txt5 = `*𝘙𝘦𝘤𝘪𝘦𝘯𝘵𝘦𝘮𝘦𝘯𝘵𝘦 𝘴𝘦 𝘩𝘢 ${ax} 𝘶𝘯 𝘮𝘪𝘦𝘮𝘣𝘳𝘰 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰.*\n\n`;
    txt5 += `*◦  𝙂𝙧𝙪𝙥𝙤:* ${groupName}\n`;
    if (ax === 'eliminado') {
      txt5 += `*◦  𝙎𝙚 𝙚𝙡𝙞𝙢𝙞𝙣ó 𝙖:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt5 += `*◦  𝙀𝙟𝙚𝙘𝙪𝙩𝙖𝙙𝙤 𝙥𝙤𝙧:* @${m.sender.split`@`[0]}`;
    } else {
      txt5 += `*◦  𝙎𝙚 𝙨𝙖𝙡𝙞ó:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt5, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 26) {
    let accion;
    if (m.messageStubParameters[0].split`@`[0] === 'on') {
      accion = 'cerrado';
    } else {
      accion = 'abierto';
    }
    let txt6 = `*𝙍𝙚𝙘𝙞𝙚𝙣𝙩𝙚𝙢𝙚𝙣𝙩𝙚 𝙨𝙚 𝙝𝙖𝙣 𝙢𝙤𝙙𝙞𝙛𝙞𝙘𝙖𝙙𝙤 𝙡𝙤𝙨 𝙖𝙟𝙪𝙨𝙩𝙚𝙨 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.*\n\n`;
    txt6 += `*◦  𝙂𝙧𝙪𝙥𝙤:* ${groupName}\n`;
    txt6 += `*◦  𝙀𝙡 𝙜𝙧𝙪𝙥𝙤 𝙨𝙚 𝙝𝙖:* ${'```' + 𝙖𝙘𝙘𝙞ó𝙣 + '```'}\n`;
    txt6 += `*◦  𝙀𝙟𝙚𝙘𝙪𝙩𝙖𝙙𝙤 𝙥𝙤𝙧:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt6, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 21) {
    let txt7 = `*𝙍𝙚𝙘𝙞𝙚𝙣𝙩𝙚𝙢𝙚𝙣𝙩𝙚 𝙨𝙚 𝙝𝙖 𝙘𝙖𝙢𝙗𝙞𝙖𝙙𝙤 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.*\n\n`;
    txt7 += `*◦  𝙉𝙪𝙚𝙫𝙤 𝙣𝙤𝙢𝙗𝙧𝙚:* ${'```' + groupName + '```'}\n`;
    txt7 += `*◦  𝙀𝙟𝙚𝙘𝙪𝙩𝙖𝙙𝙤 𝙥𝙤𝙧:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt7, mentions: mentionsContentM}, {quoted: fkontak2});
  }
} /* Cierre del comando */
