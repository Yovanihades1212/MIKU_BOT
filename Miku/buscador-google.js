import { googleIt } from '@bochilteam/scraper'
let handler = async (m, { conn, command, args, usedPrefix }) => {
{await m.reply('⌛ _Cargando..._\n▰▰▰▱▱▱▱▱▱')}
const fetch = (await import('node-fetch')).default
let full = /f$/i.test(command)
let text = args.join` `
if (!text) return conn.reply(m.chat, `${mg}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙇𝙊 𝙌𝙐𝙀 𝙌𝙐𝙄𝙀𝙍𝙀 𝘽𝙐𝙎𝘾𝘼𝙍\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} hades*\n\n𝙏𝙔𝙋𝙀 𝙒𝙃𝘼𝙏 𝙔𝙊𝙐 𝙒𝘼𝙉𝙏 𝙏𝙊 𝙎𝙀𝘼𝙍𝘾𝙃 𝙁𝙊𝙍\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} Cat*`, m)
let pp = 'https://i.imgur.com/whjPeyh.jpeg'
let url = 'https://google.com/search?q=' + encodeURIComponent(text)
let search = await googleIt(text)
let msg = search.articles.map(({
// header,
title,
url,
description
}) => {
return `
╭─────────────┈⊷
│◦➛☘️✨𝐌𝐈𝐊𝐔_𝐁𝐎𝐓💫
╰┬────────────┈⊷
┌┤💎Resultados Encontrados🏓
│◦➛📔ᩭ✎𝙽𝙾𝙼𝙱𝚁𝙴 ${title}
│◦➛🍀ᩭ✎𝚄𝚁𝙻 𝙳𝙸𝚁𝙴𝙲𝚃𝙾 ${url}
│◦➛🌆ᩭ✎𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:${description}
│◦➛🌱𝐎𝐅𝐂 𝐘𝐎𝐕𝐀𝐍𝐈☘️ 
╰────────────┈⊷`
}).join('\n\n')

let info = `☘️𝐓𝐔 𝐏𝐄𝐃𝐈𝐃𝐎 𝐅𝐔𝐄 𝐄𝐍𝐓𝐑𝐄𝐆𝐀𝐃𝐎 𝐂𝐎𝐍 É𝐗𝐈𝐓𝐎📚
`.trim()
conn.sendHydrated(m.chat, info, wm, pp, md, '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝐄𝐒𝐓𝐀𝐃𝐎', '/estado'],
['𝑴𝑬𝑵𝑼', '/menu'],
['𝐆𝐑𝐔𝐏𝐎𝐒️', '/grupos']
], m,) 

try {
let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).arrayBuffer()
if (/<!DOCTYPE html>/i.test(ss.toBuffer().toString())) throw ''
await conn.sendFile(m.chat, ss, 'error.png', url + '\n\n' + msg, m)
} catch (e) {
m.reply(msg)
}}
handler.help = ['google', 'googlef'].map(v => v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^googlef?$/i
handler.exp = 40
export default handler
