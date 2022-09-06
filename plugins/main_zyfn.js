let handler = async(m, { conn }) => { 
conn.sendContact(m.chat, "79017746029", "ZyfnV2 - Beta", m)
}
handler.help = ['zyfnv2']
handler.tags = ['main']
handler.command = /^(zyfnv2)$/i

module.exports = handler
