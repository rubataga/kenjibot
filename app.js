const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const settings = require('./settings.json');
const TOKEN = process.env.TOKEN ? process.env.TOKEN : require('./token.json').token;
const PREFIXES = settings.prefixes;

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require('./commands/' + file);
    client.commands.set(command.name, command);
}

client.on('ready',() => {
  console.log('This is it chief.');
  client.user.setActivity('prefix: "~", type "~help" for help');
});


client.on('message', message => {
  let prefix;
  for (i in PREFIXES)
  {
    let p = PREFIXES[i]
    if (message.content.startsWith(p)){
      prefix = p
    }
  }
  if (!prefix || message.author.bot){
    return
  }

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  //commands

  else if (client.commands.has(command)) {
    try {
      client.commands.get(command).execute(message, args);
    }
    catch (error) {
      console.error(error);
      message.reply('Uh oh. Houston, we have a bruh "moment" (an error has occured)');
    }
  }

});

client.login(TOKEN);
