let handler = async (m, { conn }) => {
let esce = `*RULES BAGI PENGGUNA BOT*
    
➤ Tolong Gunakan Delay Jangan Spam Saat Menggunakan Bot, Mentang Mentang Gratis Diborong semua.
➤ Call/VC Bot Auto Block.
➤ Jangan Call/VC Bot Kalau Tidak Merespon
➤ Bot aktif 24 jam, jadi Bot Bisa di gunakan kapan saja, jika bot offline tandanya *Maintenance* ATAU *Menambah Fitur*


*Konsekuensi Bila Melanggar Rules*
Bot Akan Memblokir Kamu Atau Keluar Dari Grup Yang Kamu Kelola.


━━━━━━━[ *PENTING!* ]━━━━━━━━

*➤ Kami tidak pernah memaksa anda untuk berdonasi! jika ingin donasi chat owner aja
*➤ Kami tidak menyimpan gambar, video,  audio, dan dokumen yang anda kirim*
*➤ Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi*
*➤ Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot*
*➤ Jika kamu menelpon bot Dan di block,Owner Tidak Bertanggung Jawab*
*➤ Apapun yang anda perintah pada bot ini , KAMI TIDAK AKAN BERTANGGUNG JAWAB*

━━━━━━━━━━━━━━━━━━━━━━━━`
conn.sendButtonImg(m.chat, fla + 'Rules', esce, wm2, 'Menu', '.menu', m) 
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules)$/i

module.exports = handler