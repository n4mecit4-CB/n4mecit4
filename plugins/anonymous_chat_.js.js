export async function before(m, {match}) {
  if (!m.chat.endsWith('@s.whatsapp.net')) {
    return !0;
  }
  this.anonymous = this.anonymous ? this.anonymous : {};
  const room = Object.values(this.anonymous).find((room) => [room?.a, room?.b].includes(m.sender) && room?.state === 'CHATTING');
  if (room) {
    if (/^(next|leave|start)/.test(m.text)) {
      const other = [room?.a, room?.b].find((user) => user !== m.sender);
      if (other) {
        await m.copyNForward(other, true);
      } else {
        conn.sendMessage(m.chat, {text: `*[❗] 𝘕𝘰 𝘦𝘴𝘵á𝘴 𝘦𝘯 𝘶𝘯 𝘤𝘩𝘢𝘵, 𝘱𝘰𝘳 𝘧𝘢𝘷𝘰𝘳 𝘦𝘴𝘱𝘦𝘳𝘢 𝘢 𝘦𝘴𝘵𝘢𝘳 𝘦𝘯 𝘶𝘯𝘰.*`}, {quoted: m});
      }
    }
  } else {
    if (!/^(next|leave|start)/.test(m.text)) {
      return;
    }
    conn.sendMessage(m.chat, {text: `*[❗] 𝘕𝘰 𝘦𝘴𝘵á𝘴 𝘦𝘯 𝘶𝘯 𝘤𝘩𝘢𝘵, 𝘱𝘰𝘳 𝘧𝘢𝘷𝘰𝘳 𝘦𝘴𝘱𝘦𝘳𝘢 𝘢 𝘦𝘴𝘵𝘢𝘳 𝘦𝘯 𝘶𝘯𝘰.*`}, {quoted: m});
  }
  return !0;
}
