let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
await conn.reply(id, '*لقد قضيت معكم وقتاً رائعاً الى اللقاء تحياتي 𝐵𝛩𝑇 MAIKY ⁦^⁠_⁠^⁩*') 
await conn.groupLeave(id)}
handler.command = /^(اخرج|اطلع|غادر|خروج|برا)$/i
handler.group = true
handler.rowner = true
export default handler
