let handler = async (m) => {
    let toos = "https://file.zyfn.pw/file/wEWuIZnGBtAk.jpg"
    let anu =`───❑ 「 DONASI 」 ❑────
📇 *Dana*: 08988293493
🆔 *Gopay* : 08988293493
💌 *All Payment* : Scan QR
`
    conn.sendButtonImg(m.chat, toos, anu, wm2, 'Chat Owner 🐦', '.owner', m) 
}
handler.help = ['donasi']
handler.tags = ['main']
handler.command = /^(donasi|donate)$/i

module.exports = handler