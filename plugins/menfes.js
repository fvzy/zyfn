let handler = async(m, { conn, text, usedPrefix }) => {
if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys) return 
let [number, pesan] = text.split `|`
if (!number) return conn.reply(m.chat, 'Silahkan masukan nomor dan pesan yang akan dikirim\n\n.menfes 628xxxx|isi pesan', m)
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya\n.menfes 628xxxx|isi pesan', m)
    if (text > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)    
    let user = global.db.data.users[m.sender]
    let korban = `${number}`
    var nomor = m.sender
    conn.reply(korban + '@s.whatsapp.net',  `*「 Pesan Menfes! 」*\n\nDari : _Secret Number!_\nPesan : _${pesan}_\n\n*_Reply/Gesek pesan ini kekanan untuk mengirim balasan!_*`, nomor#)
if (/()!/i.test(m.quoted.text)) {
        if (!m.text) return m.reply('Harap gunakan teks untuk membalas pesan rahasia!')
        let med = "https://file.zyfn.pw/file/bo5VUuqd2iLD.jpg"
        let { data } = await conn.getFile(med)
        conn.reply(m.quoted.mentionedJid[0], `*MENFESSIN!*\n\nBalasan menfess\n\nPesan : ${m.text}`, 0, {
            ephemeralExpiration: 86400,
            contextInfo: {
                mentionedJid: [m.sender],
                externalAdReply :{
                  showAdAttribution: true,
                  title: 'Pesan',
                  body: 'Follow instagram developer',
                  thumbnail: data,
                  sourceUrl: 'https://instagram.com/zyfn.dev'
                }
            } 
        })
    }
}

handler.help = ['menfes', 'kirim', 'screet']
handler.tags = ['fun', 'main']
handler.command = /^(menfes|kirim|screet)$/i
handler.limit = true
handler.group = false
handler.private = true
module.exports = handler