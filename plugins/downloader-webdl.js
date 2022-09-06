let axios = require("axios")
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
if (!text) return m.reply(`Kirim perintah ${usedPrefix + command} *link*`)
if (!args[0].includes('https')) return m.reply("pake https lah")
let mdjon = args.join(' ')
res = await axios.get(`https://std.zyfn.pw/api?url=${text}`)
result = `「 *SITE DOWNLOADER* 」
*Data Berhasil Didapatkan!*
🆔 Nama : ${res.filename}
📊 Ukuran : ${res.size}
💬 Link : ${res.url}
_Tunggu Proses Upload Media_`
m.reply(result)
//await sleep(100)
conn.sendFile(m.chat, res.url, res.filename, null, m)
}
handler.command = ['webdl']

module.exports = handler