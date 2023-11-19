import yts from 'yt-search';
import fs from 'fs';

const handler = async (m, {conn, text}) => {
  if (!text) throw '⚠️ *_𝘘𝘶𝘦 𝘲𝘶𝘪𝘦𝘳𝘦𝘴 𝘲𝘶𝘦 𝘣𝘶𝘴𝘲𝘶𝘦 𝘦𝘯 𝘠𝘰𝘶𝘛𝘶𝘣𝘦?_*';
  const results = await yts(text);
  const tes = results.all;
  const teks = results.all.map((v) => {
    switch (v.type) {
      case 'video': return `
° *_${v.title}_*
↳ 🫐 *_Link :_* ${v.url}
↳ 🕒 *_Duración :_* ${v.timestamp}
↳ 📥 *_Subido :_* ${v.ago}
↳ 👁 *_Vistas :_* ${v.views}`;
    }
  }).filter((v) => v).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n');
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m);
};
handler.help = ['ytsearch *<texto>*'];
handler.tags = ['search'];
handler.command = ['ytsearch', 'yts'];
export default handler;
