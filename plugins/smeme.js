let handler = async (m, { conn, text, usedPrefix, command }) => {

    m.reply("Smeme Lagi error ngaff, Nanti di benerin")
}
handler.help = ['smeme<teks atas>|<teks bawah>']
handler.tags = ['sticker']
handler.command = /^(smeme)$/i

handler.limit = false

module.exports = handler