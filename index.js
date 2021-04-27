const Discord = require('discord.js');
const env = require("dotenv");
const client = new Discord.Client();
const schedule = require("node-schedule");

env.config()

client.on('ready', (event) => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '.shreksexta') {
    // msg.channel.send('Agendando...')
    console.log(`Agendando em: ${msg.guild} - ${msg.channel.name}. `)
    scheduleMessage(msg.channel)
  }
  
});

function scheduleMessage(channel) {
  const rule = '0 0 12 * * 5'
  schedule.scheduleJob({rule}, function () {
    channel.send("GRAÇAS A DEUS É SEXTA-FEIRA EM", {
      files: ["./content/shrek_sexta.mp4"]
    })
  })
}

function channelsFilter(e, index) {
  return e.type === 'text' && !e.deleted && e.name.includes('geral')
}

client.login(`${process.env.BOT_TOKEN}`);