let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `𝐿𝐼𝑆𝑇𝐴 𝐹𝐸𝑀💗: ${pesan}`
let teks = `╭┈┈ ๑❀๑ •• ${oi} ๑❀๑ ••:\n`
for (let mem of participants) {
teks += `@${mem.id.split('@')[0]}💗`}
teks += `ㅤ
│
│         💗 𝐁𝐨𝐭 𝐝𝐞 Ɲ4MЄƇƖƬ4_ƁƇ 💗
│        ₊˚︶︶︶︶︶︶︶︶˚ ‧₊
│
│      ෆ 𝘌𝘯𝘤𝘢𝘳𝘨𝘢𝘥𝘢:
│      ෆ 𝘏𝘰𝘳𝘢𝘳𝘪𐐫:
│         ‧₊⌗ 00 🇵🇪 ⌇ 01 🇨🇱 ⌇ 02 🇦🇷      
│
│ㅤㅤʚ 𔘓  𝘑𝘶𝘨𝘢𝘥𝘰𝘳𝘢𝘴:
│ㅤ💗• 
│ㅤ💗• 
│ㅤ💗• 
│    💗•
│   ㅤㅤ
│ㅤㅤʚ 𔘓 𝘚𝘶𝘱𝘭𝘦𝘯𝘵𝘦𝘴:
│ㅤ💗•
│ㅤ💗•
│
│   ⊹ ִֶָ  𝘋𝘰𝘯𝘢𝘥𝘰𝘳𝘢 𝘥𝘦 𝘴𝘢𝘭𝘢: 
│
╰───────────────๑❀๑ •`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['smsf00 <mesaje>','fem00 <mesaje>','listafem00 <mesaje>']
handler.tags = ['group']
handler.command = /^(smsf00|fem00|listafem00)$/i
handler.admin = true
handler.group = true
export default handler
