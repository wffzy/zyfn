let handler = async (m, { conn, args }) => {
    let group = m.chat
    if (/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(args[0])) group = args[0]
    if (!/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(group)) throw 'Hanya bisa dibuka di grup'
    let groupMetadata = await conn.groupMetadata(group)
    if (!groupMetadata) throw 'groupMetadata is undefined :\\'
    if (!('participants' in groupMetadata)) throw 'participants is not defined :('
    let me = groupMetadata.participants.find(user => areJidsSameUser(user.id, conn.user.id))
    if (!me) throw 'Gw gk ada di grup itu ðŸ—¿'
    if (!me.admin) throw 'Gw bukan atmin bg ðŸ—¿'
  await conn.sendMessage(m.chat, {
  text: ` `,
  templateButtons: [{
    index: 1,
    urlButton: {
      displayText: `Salin tautan`,
      url: https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
    }
  }],
  footer: groupMetadata.subject
})
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link(group|gc)?$/i


module.exports = handler