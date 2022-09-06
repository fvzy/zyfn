const dzlabs = require('ditzzlabs')
let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
	if (!args[0]) throw `Link tiktoknya mana?\n\ncontoh:\n${usedPrefix}${command} https://vm.tiktok.com/ZGJAmhSrp/`
    await dzlabs.downloader.tiktok(args[0]).then(tete => {
    let video = tete.media[1].url
    conn.sendFile(m.chat, video, '', `*${tete.title}*`, m)
    })
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.limit = true
handler.command = /^(tt|tiktok|tik)$/i

module.exports = handler

