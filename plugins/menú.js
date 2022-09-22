import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './src/Miku/Hola.mp3'
let pp = 'https://i.imgur.com/whjPeyh.jpeg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let str = `

┌「✨𝐓𝐇𝐄_𝐌𝐈𝐊𝐔_𝐁𝐎𝐓💫」
│◦➛╭────────────
│◦➛│๖ۜ͜𝐇𝐨𝐥𝐚ঔৣֳ᷌᷈͜͡ ${name}💖✨ 
│◦➛│⌚𝐓𝐈𝐄𝐌𝐏𝐎 𝐀𝐂𝐓𝐈𝐕𝐎 ${uptime}
│◦➛│📊𝐅𝐄𝐂𝐇𝐀 ${week}, ${date}
│◦➛│📈𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 ${rtotalreg}
│◦➛│🤴𝐂𝐑𝐄𝐀𝐃𝐎𝐑 𝐃𝐄𝐋 𝐁𝐎𝐓 
│◦➛│http://wa.me/5212411719888  
│◦➛╰────────────
╰─────────────
╭─────────────┈⊷
│◦➛🪀✨𝐌𝐈𝐊𝐔_𝐁𝐎𝐓💫🪀
╰┬────────────┈⊷
┌┤☘️𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐏𝐀𝐑𝐀 𝐀𝐃𝐌𝐈𝐍🌱
│◦➛📲ᩭ✎ /enable antilink2 
│◦➛📲ᩭ✎ /disable antilink2
│◦➛📲ᩭ✎ /enable welcome
│◦➛📲ᩭ✎ /disable welcome
│◦➛📲ᩭ✎ /enable autolevelup
│◦➛📲ᩭ✎ /disable autolevelup
│◦➛📲ᩭ✎ /enable restrict
│◦➛📲ᩭ✎ /disable restrict 
│◦➛📲ᩭ✎ /enable antiprivado
│◦➛📲ᩭ✎ /disable antiprivado
│◦➛📲ᩭ✎ /enable antifake
│◦➛📲ᩭ✎ /disable antifake
│◦➛📲ᩭ✎ /enable antiToxic
│◦➛📲ᩭ✎ /disable antiToxic
│◦➛📲ᩭ✎ /enable autosticker
│◦➛📲ᩭ✎ /disable autosticker
│◦➛📲ᩭ✎ /enable simsimi
│◦➛📲ᩭ✎ /disable simsimi
│◦➛📲ᩭ✎ /sacar @tag
│◦➛📲ᩭ✎ /grupo abrir
│◦➛📲ᩭ✎ /grupo cerrar
│◦➛📲ᩭ✎ /añadir número 
│◦➛📲ᩭ✎ /hidetag
│◦➛📲ᩭ✎ /tagall 
│◦➛🌱𝐎𝐅𝐂 𝐘𝐎𝐕𝐀𝐍𝐈☘️ 
╰────────────┈⊷
╭─────────────┈⊷
│◦➛🪀✨𝐌𝐈𝐊𝐔_𝐁𝐎𝐓💫🪀
╰┬────────────┈⊷
┌┤◦➛🗃️𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒📩
│◦➛🗃️ᩭ✎ /play→texto
│◦➛🗃️ᩭ✎ /playlist →texto
│◦➛🗃️ᩭ✎ /play.1→texto
│◦➛🗃️ᩭ✎ /play.2→texto
│◦➛🗃️ᩭ✎ /play3→ texto
│◦➛🗃️ᩭ✎ /playdocumento→texto
│◦➛🗃️ᩭ✎ /facebook→enlace / link
│◦➛🗃️ᩭ✎ /instagram→enlace / link
│◦➛🗃️ᩭ✎ /mediafire→enlace / link 
│◦➛🗃️ᩭ✎ /tiktok→enlace / link 
│◦➛🗃️ᩭ✎ /spotify→texto
│◦➛🗃️ᩭ✎ /imagen→texto
│◦➛🗃️ᩭ✎ /pinteret→texto
│◦➛🗃️ᩭ✎ /wallpaper→texto
│◦➛🗃️ᩭ✎ /wallpaper2→texto
│◦➛🗃️ᩭ✎ /pptiktok→nombre de usuario
│◦➛🗃️ᩭ✎ /igstalk→nombre de usuario
│◦➛🗃️ᩭ✎ /tiktokstalk→nombre de usuario
│◦➛🗃️ᩭ✎/mp3→responde a un video / nota de voz
│◦➛🗃️ᩭ✎ /toptt→responde a un video / audio
│◦➛🗃️ᩭ✎ /tovideo→responde a un audio
│◦➛🗃️ᩭ✎ /tourl→responde a un video / imagen / audio
│◦➛🗃️ᩭ✎ /tts es→texto
│◦➛🌱𝐎𝐅𝐂 𝐘𝐎𝐕𝐀𝐍𝐈☘️ 
╰────────────┈⊷
╭─────────────┈⊷
│◦➛🪀✨𝐌𝐈𝐊𝐔_𝐁𝐎𝐓💫🪀
╰┬────────────┈⊷
┌┤🌆𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒✨
│◦➛☘️ᩭ✎ /emojimix→emoji 1→&→emoji 2
│◦➛☘️ᩭᩭ✎ /attp→texto
│◦➛☘️ᩭᩭ✎ /ttp→texto
│◦➛☘️ᩭᩭ✎ /pat→@tag
│◦➛☘️ᩭᩭ✎ /slap→@tag
│◦➛☘️ᩭᩭ✎ /kiss→@tag
│◦➛☘️ᩭᩭ✎ /dado
│◦➛☘️ᩭᩭ✎ /wm→packname→author
│◦➛☘️ᩭᩭ✎ /stickermarker→efecto →responder a imagen
│◦➛☘️ᩭ️ᩭᩭ✎ /stickerfilter→efecto→responder a imagen
│◦➛☘️ᩭᩭ✎ /searchsticker→links
│◦➛☘️ᩭᩭ✎ /toimg→responde a un sticker
│◦➛🌱𝐎𝐅𝐂 𝐘𝐎𝐕𝐀𝐍𝐈☘️ 
╰────────────┈⊷
╭─────────────┈⊷
│◦➛🪀✨𝐌𝐈𝐊𝐔_𝐁𝐎𝐓💫🪀
╰┬────────────┈⊷
┌┤✨𝐀𝐍𝐈𝐌𝐄 𝐘 𝐀𝐔𝐃𝐈𝐎𝐒🍃
│◦➛🌴ᩭ✎ /hades
│◦➛🌴ᩭ✎ /gawrgura
│◦➛🌴ᩭ✎ /helaila
│◦➛🌴ᩭ✎ /miku
│◦➛🌴ᩭ✎ Hola 
│◦➛🌴ᩭ✎ canta miku
│◦➛🌴ᩭ✎ canta miku2
│◦➛🌴ᩭ✎ canta miku3
│◦➛🌱𝐎𝐅𝐂 𝐘𝐎𝐕𝐀𝐍𝐈☘️ 
╰────────────┈⊷
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/Yovanihades1212/MIKU_BOT.git', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝐌𝐄𝐍𝐔', '/menu'],
['𝐄𝐒𝐓𝐀𝐃𝐎','/estado'],


], m,)
await conn.sendFile(m.chat, vn, 'Hola.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
