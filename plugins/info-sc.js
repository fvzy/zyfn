let handler = async (m, { conn }) => {
m.reply(`Lupa, keknya sc hyzer`)
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc|script)$/i
module.exports = handler