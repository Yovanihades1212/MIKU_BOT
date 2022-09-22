/**
POR FAVOR TENGAN LA AMABILIDAD Y BONDAD DE NO CAMBIAR MÍNIMAMENTE LOS CRÉDITOS DE GATABOT-MD, 
SI VAS A AÑADIR TUS DATOS O CRÉDITOS, ESTA BIEN. PERO NO QUITEN LOS QUE YA ESTAN DE hades-bot-MD, GRACIAS 
**/

/** PLEASE BE KIND AND KINDNESS NOT TO MINIMALLY CHANGE GATABOT-MD CREDITS, 
IF YOU ARE GOING TO ADD YOUR DATA  OR CREDITS, IT'S OK. BUT DO NOT REMOVE THOSE THAT ARE ALREADY FROM HADESBOT-MD, THANK YOU **/
let handler = async (m, { conn, command, usedPrefix }) => {
let picture = 'https://i.imgur.com/EhkvI4W.jpeg'
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado =`
╭─────────────┈⊷
│◦➛☘️✨𝐌𝐈𝐊𝐔_𝐁𝐎𝐓💫
╰┬────────────┈⊷
┌┤📚𝐄𝐒𝐓𝐀𝐃𝐎☃️
│◦➛📚ᩭ✎${gt}
│◦➛📔ᩭ✎𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾:${uptime}
│◦➛🌱𝐎𝐅𝐂 𝐘𝐎𝐕𝐀𝐍𝐈☘️ 
╰────────────┈⊷`.trim()

conn.sendHydrated(m.chat, estado, wm, picture, 'https://github.com/Yovanihades1212/MIKU_BOT.git', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝐌𝐄𝐍𝐔', '.menu'],
['𝐆𝐑𝐔𝐏𝐎𝐒', '#grupos']
], m,)}

handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(estado|status|estate|state|heygata|stado|stats|botstat(us)?)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
