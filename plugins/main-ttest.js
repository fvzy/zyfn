let handler = async (m, { conn, text, usedPrefix, command }) => {
let msg = "Pilih List si bawah"
const sections = [
   {
	title: `𝗖𝗟𝗜𝗖𝗞 𝗕𝗘𝗟𝗢𝗪 𝗔𝗡𝗗 𝗖𝗛𝗢𝗢𝗦𝗘`,
	rows: [
	 {title: "✨ ✦ Menu", rowId: `.menu`},
	{title: "💕 ✦ Owner", rowId: `.owner`},
	{title: "📁 ✦ Daftar", rowId: `.daftar`}
	]
    },
]
const listMessage = {
  text: 'Ya? Ada yg bisa di kenthu? eeh bantu?',
  footer: msg,
  title: null,
  buttonText: "𝗖𝗟𝗜𝗖𝗞 𝗛𝗘𝗥𝗘",
  sections
}

  await conn.sendMessage(m.chat, listMessage)
}

handler.customPrefix = /^(tes|test|bot|)$/i
handler.command = new RegExp

module.exports = handler