import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 

wm = global.wm
vs = global.vs
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
const sections = [  
{
title: `𝙻𝙸𝚂𝚃𝙰 𝙳𝙴𝙻 𝙼𝙴𝙽𝚄`,
rows: [
     {title: "│☘️│𝐀𝐧𝐢𝐦𝐞=𝐒𝐡𝐢𝐧𝐤𝐚 𝐂𝐚𝐩1", description: "𝐀𝐧𝐢𝐦𝐞=𝐒𝐡𝐢𝐧𝐤𝐚 𝐭𝐞𝐦𝐩𝐨𝐫𝐚𝐝𝐚 1 𝐞𝐬𝐩𝐚𝐧𝐨𝐥 𝐥𝐚𝐭𝐢𝐧𝐨 𝐂𝐚𝐩1", rowId: `${usedPrefix}play4 https://youtu.be/6DA30Tk3-j4`},
     {title: "│☃️│𝐀𝐧𝐢𝐦𝐞=𝐒𝐡𝐢𝐧𝐤𝐚 𝐂𝐚𝐩2", description: "𝐀𝐧𝐢𝐦𝐞=𝐒𝐡𝐢𝐧𝐤𝐚 𝐭𝐞𝐦𝐩𝐨𝐫𝐚𝐝𝐚 1 𝐞𝐬𝐩𝐚𝐧𝐨𝐥 𝐥𝐚𝐭𝐢𝐧𝐨 𝐂𝐚𝐩2", rowId: `${usedPrefix}play4 https://youtu.be/o5lJCzyUKl0`},
     {title: "│🍀│𝐀𝐧𝐢𝐦𝐞=𝐒𝐡𝐢𝐧𝐤𝐚 𝐂𝐚𝐩3", description: "𝐀𝐧𝐢𝐦𝐞=𝐒𝐡𝐢𝐧𝐤𝐚 𝐭𝐞𝐦𝐩𝐨𝐫𝐚𝐝𝐚 1 𝐞𝐬𝐩𝐚𝐧𝐨𝐥 𝐥𝐚𝐭𝐢𝐧𝐨 𝐂𝐚𝐩3", rowId: `${usedPrefix}play4 https://youtu.be/JmcY70v6sD4`},
     {title: "│☃️│𝐀𝐧𝐢𝐦𝐞=𝐒𝐡𝐢𝐧𝐤𝐚 𝐂𝐚𝐩4", description: "𝐀𝐧𝐢𝐦𝐞=𝐒𝐡𝐢𝐧𝐤𝐚 𝐭𝐞𝐦𝐩𝐨𝐫𝐚𝐝𝐚 1 𝐞𝐬𝐩𝐚𝐧𝐨𝐥 𝐥𝐚𝐭𝐢𝐧𝐨 𝐂𝐚𝐩4", rowId: `${usedPrefix}play4 https://youtu.be/KLH7lsiYMcM`},
     {title: "│☘️│𝐀𝐧𝐢𝐦𝐞=𝐒𝐡𝐢𝐧𝐤𝐚 𝐂𝐚𝐩5", description: "𝐀𝐧𝐢𝐦𝐞=𝐒𝐡𝐢𝐧𝐤𝐚 𝐭𝐞𝐦𝐩𝐨𝐫𝐚𝐝𝐚 1 𝐞𝐬𝐩𝐚𝐧𝐨𝐥 𝐥𝐚𝐭𝐢𝐧𝐨 𝐂𝐚𝐩5", rowId: `${usedPrefix}play4 https://youtu.be/13yrKIrYy7g`},
     {title: "│☃️│𝐀𝐧𝐢𝐦𝐞=𝐒𝐡𝐢𝐧𝐤𝐚 𝐂𝐚𝐩6", description: "𝐀𝐧𝐢𝐦𝐞=𝐒𝐡𝐢𝐧𝐤𝐚 𝐭𝐞𝐦𝐩𝐨𝐫𝐚𝐝𝐚 1 𝐞𝐬𝐩𝐚𝐧𝐨𝐥 𝐥𝐚𝐭𝐢𝐧𝐨 𝐂𝐚𝐩6", rowId: `${usedPrefix}play4 https://youtu.be/YJ1sHXSA7XQ`},
     {title: "│☘️│𝐀𝐧𝐢𝐦𝐞=𝐒𝐡𝐢𝐧𝐤𝐚 𝐂𝐚𝐩7", description: "𝐀𝐧𝐢𝐦𝐞=𝐒𝐡𝐢𝐧𝐤𝐚 𝐭𝐞𝐦𝐩𝐨𝐫𝐚𝐝𝐚 1 𝐞𝐬𝐩𝐚𝐧𝐨𝐥 𝐥𝐚𝐭𝐢𝐧𝐨 𝐂𝐚𝐩7", rowId: `${usedPrefix}play4 https://youtu.be/mUp2f7DMc50`},
     {title: "│☃️│𝐀𝐧𝐢𝐦𝐞=𝐒𝐡𝐢𝐧𝐤𝐚 𝐂𝐚𝐩8", description: "𝐀𝐧𝐢𝐦𝐞=𝐒𝐡𝐢𝐧𝐤𝐚 𝐭𝐞𝐦𝐩𝐨𝐫𝐚𝐝𝐚 1 𝐞𝐬𝐩𝐚𝐧𝐨𝐥 𝐥𝐚𝐭𝐢𝐧𝐨 𝐂𝐚𝐩8", rowId: `${usedPrefix}play4 https://youtu.be/_xzH6oJhVnU`},
     {title: "│☘️│𝐀𝐧𝐢𝐦𝐞=𝐒𝐡𝐢𝐧𝐤𝐚 𝐂𝐚𝐩9", description: "𝐀𝐧𝐢𝐦𝐞=𝐒𝐡𝐢𝐧𝐤𝐚 𝐭𝐞𝐦𝐩𝐨𝐫𝐚𝐝𝐚 1 𝐞𝐬𝐩𝐚𝐧𝐨𝐥 𝐥𝐚𝐭𝐢𝐧𝐨 𝐂𝐚𝐩9", rowId: `${usedPrefix}play4 https://youtu.be/yyrDg5mKl30`},
    {title: "│☃️│𝐀𝐧𝐢𝐦𝐞=𝐒𝐡𝐢𝐧𝐤𝐚 𝐂𝐚𝐩10", description: "𝐀𝐧𝐢𝐦𝐞=𝐒𝐡𝐢𝐧𝐤𝐚 𝐭𝐞𝐦𝐩𝐨𝐫𝐚𝐝𝐚 1 𝐞𝐬𝐩𝐚𝐧𝐨𝐥 𝐥𝐚𝐭𝐢𝐧𝐨 𝐂𝐚𝐩10", rowId: `${usedPrefix}play4 https://youtu.be/z0TYEJYyL7c`},
    {title: "│☘️│𝐀𝐧𝐢𝐦𝐞=𝐒𝐡𝐢𝐧𝐤𝐚 𝐂𝐚𝐩11", description: "𝐀𝐧𝐢𝐦𝐞=𝐒𝐡𝐢𝐧𝐤𝐚 𝐭𝐞𝐦𝐩𝐨𝐫𝐚𝐝𝐚 1 𝐞𝐬𝐩𝐚𝐧𝐨𝐥 𝐥𝐚𝐭𝐢𝐧𝐨 𝐂𝐚𝐩11", rowId: `${usedPrefix}play4 https://youtu.be/Z8cAkGLDJKI`},
    {title: "│☃️│𝐀𝐧𝐢𝐦𝐞=𝐒𝐡𝐢𝐧𝐤𝐚 𝐂𝐚𝐩12", description: "𝐀𝐧𝐢𝐦𝐞=𝐒𝐡𝐢𝐧𝐤𝐚 𝐭𝐞𝐦𝐩𝐨𝐫𝐚𝐝𝐚 1 𝐞𝐬𝐩𝐚𝐧𝐨𝐥 𝐥𝐚𝐭𝐢𝐧𝐨 𝐅𝐢𝐧𝐚𝐥 𝐂𝐚𝐩12", rowId: `${usedPrefix}play4 https://youtu.be/xNpAjM68hXA`},
     
]}, ]  
let name = await conn.getName(m.sender)
const listMessage = {
text: `
╭─────────────┈⊷
│◦➛☘️✨𝐌𝐈𝐊𝐔_𝐁𝐎𝐓💫
╰┬────────────┈⊷
┌┤${ucapan()}
│◦➛🍀ᩭ✎๖ۣۜۜ͜͡𝙷𝙾𝙻𝙰✨${name}💖 
│◦➛📚ᩭ✎𝐁𝐈𝐄𝐍𝐕𝐄𝐍𝐈𝐃𝐎 𝐀𝐋 𝐌𝐄𝐍Ú 𝐃𝐄 𝐒𝐄𝐑𝐈𝐄𝐒 
│◦➛📔ᩭ✎𝐀𝐧𝐢𝐦𝐞=𝐒𝐡𝐢𝐧𝐤𝐚 𝐧𝐨 𝐦𝐢 𝐂𝐚𝐩1 𝐀𝐋 12
│◦➛🍀ᩭ✎𝐓𝐄𝐌𝐏𝐎𝐑𝐀𝐃𝐀 1
│◦➛🍀ᩭ✎𝐒𝐄𝐋𝐄𝐂𝐂𝐈𝐎𝐍𝐀 𝐄𝐋 𝐂𝐀𝐏Í𝐓𝐔𝐋𝐎 𝐐𝐔𝐄 𝐐𝐔𝐈𝐄𝐑𝐄 𝐕𝐄𝐑 
│◦➛🌱𝐎𝐅𝐂 𝐘𝐎𝐕𝐀𝐍𝐈☘️ 
╰────────────┈⊷`, footer: `${wm}`, //${name} ${ucapan()}
title: null,
buttonText: "𝐒𝐄𝐋𝐄𝐂𝐂𝐈𝐎𝐍𝐄 𝐀𝐐𝐔𝐢", 
sections }

await conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(Anime-shinka|Anime-shinka\?)$/i
handler.exp = 20
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = "🌉Buenas madrugadas|Good early morning🌠"
  if (time >= 4) {
    res = "🌇Buenos Días|Good Morning⛅"
  }
  if (time >= 11) {
    res = "🏙️Buenas Tardes|Good Afternoon🌤️"
  }
  if (time >= 15) {
    res = "🌆Buenas tardes|Good Afternoon🌥️"
  }
  if (time >= 17) {
    res = "🌃Buenas noches|Good Evening💫"
  }
  return res
}
