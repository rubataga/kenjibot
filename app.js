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
  if (command === 'ping') {
    message.channel.send('pong');
  }

  else if (client.commands.has(command)) {
    try {
      client.commands.get(command).execute(message, args);
    }
    catch (error) {
      console.error(error);
      message.reply('Uh oh. Houston, we have a bruh "moment" (an error has occured)');
    }
  }

  //help command
  else if(command === 'help'){
    const embed = new Discord.RichEmbed()
      .setTitle("KenjiBot's Commands")
      .setDescription('all commands begin with "~"')
      .setColor(0xC90808)
      .addField('pong', 'returns "ping"')
      .addField('ping', 'returns "pong"')
      .addField('nohomo', 'become non homosexual')
      .addField('repeat', 'KenjiBot repeats after you (broken)')
      .addField('hey', 'hi')
      .addField('uwu', 'perish')
      .addField("maybe i'll be tracer", "i'm already tracer")
      .addField("what about widomaker", "i'm already widowmaker (etc.)")
      .addField('bruh', 'sends "Bruh Sound Effect #2"')
      .addField('bruhyt', 'sends a YouTube link to "Bruh Sound Effect #2"')
      .addField('sicko mode', 'sends a YouTube link to "Sicko Mode"')
      .addField('irlkenji', 'see the real Kenji');
    message.channel.send(embed);
  }

  else if (command === 'pong') {
    message.channel.send('ping');
  }

  //respond to hey
  else if (command === 'hey') {
    message.channel.send('hi')
  }

  //repeat back the command ~repeat a
  else if (message.content.startsWith(prefix + 'repeat')) {
    message.channel.send(message.content.subStr(8));
  }

  else if (command === "maybe i'll be tracer"){
    message.channel.send("i'm already tracer")
  }

  else if (command === "what about widowmaker"){
    message.channel.send("i'm already widowmaker")
  }

  else if (command === "i'll be bastion"){
    message.channel.send("NERF BASTION")
  }

  else if (command === "you're right, so winston"){
    message.channel.send("i wanna be winston")
  }

  else if (command === "i guess i'll be genji"){
    message.channel.send("i'm already genji")
  }

  else if (command === "then i'll be mccree"){
    message.channel.send("i already chose mccree")
  }
  //uwu reponse
  else if (command === 'uwu'){
    message.channel.send('st*u weeaboo scum');
    message.channel.send('jk chieftains that was a prank of course uwu uwu uuuwd');
  }

  //send an embed of Kenji
  else if(command === 'irlkenji'){
    const embed = new Discord.RichEmbed()
      .setTitle('KenjiBot IRL')
      .setColor(0xC90808)
      .setDescription("Wow! It's Kenji!")
      .setImage('https://i.imgur.com/8RkPa1X.jpg')
      .setFooter('In awe of this absolute unit.')
      .setThumbnail('https://i.imgur.com/8RkPa1X.jpg');
    message.channel.send(embed);
  }

});

client.login(TOKEN);
