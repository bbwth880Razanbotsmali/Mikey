import {sticker} from '../lib/sticker.js';
import fetch from 'node-fetch';
import MessageType from '@whiskeysockets/baileys';


const handler = async (m, {conn, text}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/ar.json`))
  const tradutor = _translate.plugins.sticker_kiss

  try {
    const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender;
    if (!who) throw tradutor.texto1;
    const res = await fetch(' https://telegra.ph/file/eccc3ce99c0e59817e56d.mp4');
    const json = await res.json();
    const {url} = json;
    const name_1 = conn.getName(m.sender)
    const name_2 = conn.getName(who)
    const stiker = await sticker(null, url, `${name_1} le dio besos a ${name_2}`);
    conn.sendFile(m.chat, stiker, null, null, m, false, {asSticker: true});
  } catch { }
};
handler.command = /^(قبله|بوسه)$/i;
handler.group = true;
export default handler;