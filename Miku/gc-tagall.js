let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let vn = './media/ven.mp3'
let oi = `πΌπ΄π½ππ°πΉπ΄${pesan}`
let teks = `β­βββββββββββββββ·\nββ¦ββοΈβ¨ππππ_ππππ«\nβ°β¬ββββββββββββββ·\nββ€ππππππππ π ππππππ’\nββ¦βπα©­β${oi}\nββ¦βπα©­βπ΄ππΈπππ΄ππ°π\nββ¦βπ±πππ ππππππβ\nοΈ`
for (let mem of participants) {
teks += `ββ¦βπ±α©­β@${mem.id.split('@')[0]}\n`}
teks += `β°ββββββββββββββ·`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocaciΓ³n)$/i
handler.admin = true
handler.group = true
export default handler




