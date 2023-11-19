import {sticker} from '../lib/sticker.js';

const handler = (m) => m;

handler.all = async function(m) {
  const chat = db.data.chats[m.chat];
  const user = db.data.users[m.sender];

  if (chat.autosticker && m.isGroup) {
    const q = m;
    let stiker = false;
    const mime = (q.msg || q).mimetype || q.mediaType || '';
    if (/webp/g.test(mime)) return;
    if (/image/g.test(mime)) {
      const img = await q.download?.();
      if (!img) return;
      stiker = await sticker(img, false, packname, author);
    } else if (/video/g.test(mime)) {
      if (/video/g.test(mime)) if ((q.msg || q).seconds > 8) return await m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝘌𝘓 𝘝𝘐𝘋𝘌𝘖 𝘕𝘖 𝘗𝘜𝘌𝘋𝘌 𝘋𝘜𝘙𝘈𝘙 𝘔𝘈𝘚 𝘋𝘌 7 𝘚𝘌𝘎𝘜𝘕𝘋𝘖𝘚*\n\n𝘗𝘈𝘙𝘈 𝘋𝘌𝘚𝘈𝘊𝘛𝘐𝘝𝘈𝘙 𝘌𝘚𝘛𝘈 𝘖𝘗𝘊𝘐Ó𝘕 𝘌𝘚𝘊𝘙𝘐𝘉𝘈 (#𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚊𝚞𝚝𝚘𝚜𝚝𝚒𝚌𝚔𝚎𝚛)`);
      // await this.sendButton(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝘌𝘓 𝘝𝘐𝘋𝘌𝘖 𝘕𝘖 𝘗𝘜𝘌𝘋𝘌 𝘋𝘜𝘙𝘈𝘙 𝘔𝘈𝘚 𝘋𝘌 7 𝘚𝘌𝘎𝘜𝘕𝘋𝘖𝘚*', wm, [['𝘋𝘌𝘚𝘈𝘊𝘛𝘐𝘝𝘈𝘙 𝘈𝘜𝘛𝘖𝘚𝘛𝘐𝘊𝘒𝘌𝘙', '/disable autosticker']], m)
      const img = await q.download();
      if (!img) return;
      stiker = await sticker(img, false, packname, author);
    } else if (m.text.split(/\n| /i)[0]) {
      if (isUrl(m.text)) stiker = await sticker(false, m.text.split(/\n| /i)[0], packname, author);
      else return;
    }
    if (stiker) {
      await mconn.conn.sendFile(m.chat, stiker, null, {asSticker: true});
    }
  }
  return !0;
};
export default handler;

const isUrl = (text) => {
  return text.match(new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png|mp4)/, 'gi'));
};
