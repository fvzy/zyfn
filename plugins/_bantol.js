let handler = m => m
handler.before = async function (m) {
	let dibennd = global.db.data.users[m.sender].banned
      if (dibennd == true) {
                        this.reply(m.chat, `Kamu Telah Di Banned`, m)
                        this.updateBlockStatus(m.sender, "block")                        
                    }   
    }

module.exports = handler