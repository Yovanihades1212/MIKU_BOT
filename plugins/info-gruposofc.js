let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `
╭─────────────┈⊷
│◦➛☘️✨𝐌𝐈𝐊𝐔_𝐁𝐎𝐓💫
╰┬────────────┈⊷
┌┤๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚ঔৣֳ᷌᷈͜͡ 💖✨ HOLA TE ENVIAMOS 
│◦➛☃️️ᩭ✎UNIRTE AL LOS💖 GRUPOS 
│◦➛🌹️ᩭ✎OFICIALES DEL BOT DE👩‍🏫✨
│◦➛🍃️ᩭ✎𝐇𝐀𝐃𝐄𝐒 _𝐁𝐎𝐓 y miku bot 
│◦➛📚️ᩭ✎ SOMOS UNA FAMILIA DE BOTS 
│◦➛🌆ᩭ✎𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃 𝚈 𝙼𝙸𝙺𝚄-𝙱𝙾𝚃1 
│◦➛🍀ᩭ✎https://chat.whatsapp.com/CG5ZPcJ22fL7QjNRzjguD0
│◦➛☘️ᩭ✎𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃 𝚈 𝙼𝙸𝙺𝚄-𝙱𝙾𝚃2 
│◦➛✨ᩭ✎https://chat.whatsapp.com/DDm7HC6e5MF9qcdLqB22RQ
│◦➛📚ᩭ✎𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃 𝚈 𝙼𝙸𝙺𝚄-𝙱𝙾𝚃3 
│◦➛❤️ᩭ✎https://chat.whatsapp.com/KnpPbr8BN4VDLtwJFMNTtw
│◦➛🌱ᩭ✎𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃 𝚈 𝙼𝙸𝙺𝚄-𝙱𝙾𝚃4 
│◦➛📔ᩭ✎https://chat.whatsapp.com/BtzGZregRxzFswm0FgunHL
│◦➛🌱𝐎𝐅𝐂 𝐘𝐎𝐕𝐀𝐍𝐈☘️ 
╰────────────┈⊷`
let buttonMessage= {
'document': { url: `https://youtu.be/4eA5nDxPjOA` },
'mimetype': `application/${document}`,
'fileName': `📚𝐌𝐈𝐊𝐔_𝐁𝐎𝐓☘️`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/Yovanihades1212/MIKU_BOT.git',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://youtu.be/4eA5nDxPjOA' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = ['grupos','script']
export default handler