let fs = require('fs')
let handler = m => m
handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
   if (isBanned) return reply("Lu itu dah di banned")
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `Awokawok mau nyulik yh bg? izin dulu lah`
    this.sendBut(m.chat, teks, wm3, 'OWNER', '.owner', m) 
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}
module.exports = handler