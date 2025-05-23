


const {cmd , commands} = require('../command')

cmd({
    pattern: "Alien",
    desc: "Alien the bot",
    category: "main",
    react: "⛱️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*ALien-Assistance Lien PHOTOS*`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/2yy1yf.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/r8b5gw.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/strcny.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/pjfboa.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/pjfboa.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/hbaw7e.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/yjn6dz.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
