const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./settings.json').token;
var prefix = '~';
var prefix2 = 'kb.';

client.on('ready',() => {
  console.log('This is it chief.');
});


client.on('message', message => {
  if(!message.content.startsWith(prefix)) return;
  console.log("prefix detected");
  if (message.author.bot) return;

  //commands
  if (message.content === prefix + 'ping') {
    message.channel.send('pong');
  }

  //help command
  else if(message.content === prefix + 'help'){
    const embed = new Discord.RichEmbed()
      .setTitle("KenjiBot's Commands")
      .setDescription('all commands begin with "~"')
      .setColor(0xC90808)
      .addField('pong', 'returns "ping"')
      .addField('ping', 'returns "pong"')
      .addField('nohomo', 'become non homosexual')
      .addField('repeat', 'KenjiBot repeats after you')
      .addField('hey', 'hi')
      .addField('uwu', 'perish')
      .addField('bruh2', 'sends "Bruh Sound Effect #2"')
      .addField('irlkenji', 'see the real Kenji');
      message.channel.send(embed);
  }

  else if (message.content === prefix + 'bruh2') {
    const embed = new Discord.RichEmbed()
      .setTitle("Bruh Sound Effect #2")
      .setDescription('bruh!')
      .setColor(0xC90808)
      .addField('https://www.youtube.com/watch?v=2ZIpFytCSVc')
      .setFooter('bruh moment');
      message.channel.send(embed);
    //https://www.youtube.com/watch?v=2ZIpFytCSVc
  }

  else if (message.content === prefix + 'pong') {
    message.channel.send('ping');
  }

  //the commander is double gay
  else if (message.content === prefix + 'nohomo') {
    message.channel.send('^ is extra double gay');
  }

  //respond to hey
  else if (message.content === prefix + 'hey') {
    message.channel.send('hi');
  }

  //repeat back the command ~repeat a
  else if (message.content.startsWith(prefix + 'repeat')) {
    message.channel.send(message.content.subStr(8));
  }

  //uwu reponse
  else if (message.content === prefix + 'uwu'){
    message.channel.send('st*u weeaboo scum');
    message.channel.send('jk chieftains that was a prank of course uwu uwu uuuwd');
  }

  //send an embed of Kenji
  else if(message.content === prefix + 'irlkenji'){
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

client.login(token);
