const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("563681891333439500")
setInterval(function() {
channel.send(`HACKED BY KING ZIKXO : 3`);
}, 30)
})

client.login(process.env.BOT_TOKEN);