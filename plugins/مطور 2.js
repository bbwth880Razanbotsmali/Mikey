

let handler = async(m, { conn, text, usedPrefix, command }) => {

    // Sound
    let name = m.pushName || conn.getName(m.sender)
    var vn = "https://cdn.jsdelivr.net/gh/Guru322/GURU-BOT@main/Assets/mp3/Alive.mp3"
    let url = "https://github.com/Guru322/GURU-BOT"
    let murl = "https://youtu.be/DibiLc17dh0?si=xp9bQ-_frEyDB1-i"
    let img = "https://telegra.ph/file/daa78bd17e96d5508d169.jpg"
    let con = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '201228616765@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mpeg',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "Guru",

        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "ادخل وكلمو بحترام",
          body: "شادو",
          thumbnailUrl: img,
          sourceUrl: 'https://api.whatsapp.com/send?phone=+201228616765',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };

      await conn.sendMessage(m.chat, doc, { quoted: con });

    }

    handler.help = ['alive']
    handler.tags = ['main']
    handler.command = /^(مطور)$/i 

    export default handler;