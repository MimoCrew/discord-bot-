const express = require("express")

const app = express();
app.get('/', (req, res) =>{
  res.send("Server 24/7 Start! Mimo Crew sagt danke!")
})
app.listen(3000, () => {
  console.log('Server Online');
})

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES ] });
const Discord = require('discord.js');

client.on('ready', () => {
  console.log(`Eingeloggt als ${client.user.tag}! Auf `+client.guilds.cache.size+" Servern")

})

client.login('Dein Bot Token')