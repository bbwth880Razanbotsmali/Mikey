let handler = async (m, { conn }) => {
conn.reply(m.chat,`———————𝐵𝛩𝑇 SHADOW————————\n\n“${pickRandom(global.verdaad)}“\n\n——————–—𝐵𝛩𝑇 SHADOW——————–—`, m)
}
handler.help = ['تاج']
handler.tags = ['fun']
handler.command = /^تاج/i
export default handler
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
global.verdaad = [
"اول منشن ذكي",
"اول منشن عمك", 
"اول منشن يحبك", 
"ثاني منشن حمار", 
" ثالث منشن يحب كانيكي اكثر منك", 
"خامس منشن اوتاكو ورع", 
"ثالث منشن خايس", 
"ثاني منشن انت عمه", 
"ثالث منشن محنك", 
"ثالث منشن يشوف اتاك عمك", 
"ثاني منشن يشوف ون بيس عمك", 
" ثالث منشن يحبك", 
" رابع منشن غدار", 
" خامس منشن ورع", 
" خامس منشن ", 
"ثاني منشن بيترقي قبلك", 
" ثاني منشن نوب", 
" اول منشن بيكراش عليك", 
" اول منشن زهقان منك", 
" ثالث منشن نرد", 
" سادس منشن سحبه", 
" اول منشن هيهرب منكم", 
"ثالث منشن حمار", 
"ثالث منشن يثق فيك", 
"ثاني منشن زهق منك", 
"رابع منشن فإن ناروتو", 
"خامس منشن غبي", 
"رابع منشن خروف" , 
"ثاني منشن بيكرهك" , 
"اول منشن يحبك" , 
"ثالث منشن عوطاكو" , 
"هش بقا صدعتني" , 
"ثالث منشن ذكي" , 
"ثاني منشن فخم" , 
"اول منشن فخم" , 
"خامس منشن اذكي منك" , 
"رابع منشن اغبي منك" , 
"اول منشن بيفداك😉" , 
"اول منشن يكرهك" , 
"ثالث منشن يراقبك" , 
"تاسع منشن يشوفك بطل" , 
" رابع منشن يشوفك ورع"
]
