const xpperlimit = 100 
let handler = async (m, { conn, command, args }) => {

  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count
    global.db.data.users[m.sender].limit += count
    conn.relayMessage(m.chat,  {
      requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: count,
      requestFrom: '0@s.whatsapp.net',
      noteMessage: {
      extendedTextMessage: {
      text: `Berhasil Membeli ${count} Limit 🏷 Dengan ${xpperlimit * count} Xp 🧬`,
      contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
      
  } else conn.reply(m.chat, `XP anda tidak mencukupi untuk membeli ${count} limit, Anda dapat menambah exp dengan bermain game dan rpg`, m) 
}
handler.help = ['buy<jumlah limit>', 'buy <jumlah limit>', 'buyall']
handler.tags = ['xp']
handler.command = /^buylimit([0-9]+)|buylimit|buyalllimit$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler