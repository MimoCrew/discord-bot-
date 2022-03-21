const express = require("express")
const app = express();
app.get('/', (req, res) =>{
  res.send("Server 24/7 Start! Mimo sagt danke")
})
app.listen(3000, () => {
  console.log("Server Online")
})

const { Client, Intents, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const client = new Client({ intents:[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const Discord = require('discord.js');
const statusmessages = ["m!help" , "Spielt auf deinem Server" , "Ja genau lol"]
current = [0]

const prefix = "m!"

client.on('ready', () => {
  console.log("Eingeloggt als "+client.user.tag+"! Auf "+client.guilds.cache.size+" Servern")
  client.user.setActivity(statusmessages[0] , {type:"PLAYING"})
    setInterval(() => {
      if (statusmessages[current]){
          client.user.setActivity(statusmessages[current] , {type:"PLAYING"})
          current++
      }else{
          current = 0
          client.user.setActivity(statusmessages[current] , {type:"PLAYING"})
      }
    }, 5*1000)
    client.user.setPresence({
        status: "dnd"
  })
})

client.on("messageCreate", async message => {
  if(message.content == "hallo"){
	message.channel.send("Hallo "+message.author.username)
  }
  if(message.content == prefix+"botinfo"{
	message.channel.send("Hier ist die Botinfo:\nDeveloped by hyped.lukas\n Ping: "+client.ws.ping)
   }
  if(message.content.startsWith(prefix+"help")){
    message.channel.send("Hier ist die Hilfe: \nCommands coming soon)
   }
  if(message.content == prefix+"embedbutton"){
    let button = new Discord.MessageButton()
    .setLabel("Hier klicken")
    .setCustomId("klicken_1")
    .setStyle("DANGER")
    .setEmoji("💯")

    let row = new Discord.MessageActionRow()
    .addComponents(button);

    let embed = new Discord.MessageEmbed()
    .setTitle("klick Title")
    .setDescription("Klick Beschreibung")
    .setColor("PURPLE")
    .setAuthor({name: "hyped.lukas"})
    .setTimestamp()
    .setFooter({text: "Text"})

    message.channel.send({embeds: [embed], components: [row]})
  }
})

client.on("interactionCreate", async interaction => {
  if(interaction.customId == "klicken_1") {
    interaction.reply("Du hast geklickt!", ephemeral: true)
  }
})

client.login("Dein-Bot-Token")