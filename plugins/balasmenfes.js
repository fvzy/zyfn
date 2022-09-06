var fs = require('fs');
var listmenf = fs.readFileSync('../menfesdb.json');
let handler = async(m, { conn, text, usedPrefix }) => {
let [id, pesan] = text.split("|")
if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya.\n\nKetik .balasmenfes ID|PESAN\nContoh .balasmenfes gztw|haii', m)
if (pesan > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
    
let menpes = listmenf.menfes
let idmenf = `${menpes}.id`
let nomp = `${menpes}.nomor`
let pesn = `Balasan Menfess \nPesan : ${pesan}`
conn.reply(nomp)
let logs = `[!] Berhasil Membalas Menfes`
conn.reply(m.chat, logs, m)
}
handler.command = /^(bmenfes|balasmenfes|balasm)$/i
handler.limit = true
handler.group = false
handler.private = true
module.exports = handler