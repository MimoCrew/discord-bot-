const express = require("express")
const app = express();
app.get('/', (req, res) =>{
  res.send("Server 24/7 Start! Mimo sagt danke")
})
app.listen(3000, () => {
  console.log("Server Online")
})

const { Client, Intents } = require('discord.js')
const client = new Client({ intents:[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const Discord = require('discord.js');
const statusmessages = ["m!help" , "Spielt auf deinem Server" , "Ja genau lol"]
current = [0]

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

client.login("Dein-Bot-Token")