let handler = async (m, { conn, usedPrefix, text }) => {
  let { key } = await conn.sendMessage(m.chat, { text: "Ahora te voy a hacer una rica paja😏 " }, { quoted: m });
  const array = [
    "8==👊==D", "8===👊=D", "8=👊===D", "8=👊===D", "8==👊==D", "8===👊=D", "8=👊===D", "8==👊==D", "8===👊=D", "8=👊===D","8==👊==D","8===👊=D","8===👊=D💦"
  ];

  for (let item of array) {
    await conn.sendMessage(m.chat, { text: `${item}`, edit: key }, { quoted: m });
    await new Promise(resolve => setTimeout(resolve, 20)); // Delay 5 seconds
  }
  return conn.sendMessage(m.chat, { text: `Oh, ${text} se corrió bien rico, quieres mas?!😋💦`.trim() , edit: key, mentions: [m.sender] }, { quoted: m });
};

handler.help = ['fun', 'fap'];
handler.tags = ['fun', 'sega'];
handler.command = /^(sega|sierra|fap)$/i;

export default handler;
