let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
  let users = global.db.data.users
  let brp = text
  if (brp == "") {
  users[m.sender].money += 99999999999 // dapat * 1
  users[m.sender].atm += 9999999999999
  m.reply(`added `99999999999)
  } else {
  users[m.sender].money += brp // dapat * 1
  users[m.sender].atm += brp
  m.reply(`added ${brp}`)	
  }
}
handler.help = ['ed']
handler.tags = ['owner']
handler.command = /^ed$/
handler.owner = true

module.exports = handler