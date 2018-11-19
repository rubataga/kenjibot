const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const TOKEN = settings.token;
const PREFIXES = settings.prefixes;

client.on('ready',() => {
  console.log('This is it chief.');
});


client.on('message', message => {
  let prefix;
  for (i in PREFIXES)
  {
    let p = PREFIXES[i]
    if (message.content.startsWith(p))
      prefix = p
  }
  if (!prefix)
    return

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

  else if (message.content === 'bruh') {
    message.channel.send('this is a "bruh" moment!')
    message.channel.send('https://www.youtube.com/watch?v=2ZIpFytCSVc')
    //https://www.youtube.com/watch?v=2ZIpFytCSVc
  }

  else if(message.content === prefix + 'bruhtest') {
    message.channel.send("bruh test", {
      file: "https://www.youtube.com/watch?v=2ZIpFytCSVc"
  })}

  else if(message.content === prefix + 'bruhfile') {
    const bruhsound = new Discord.Attatchment('./media/bruh2.mp3')
    message.channel.send(bruhsound)
  }

  else if (message.content === prefix + 'pong') {
    message.channel.send('ping');
  }

  //the commander is double gay
  else if (message.content === prefix + 'nohomo') {
    message.channel.send('^ is extra double gay')
  }

  //respond to hey
  else if (message.content === prefix + 'hey') {
    message.channel.send('hi')
  }

  else if (message.content === 'sicko mode'){
    message.channel.send('SICKO MODE!')
    message.channel.send('https://www.youtube.com/watch?v=6ONRf7h3Mdk')
  }
  //repeat back the command ~repeat a
  else if (message.content.startsWith(prefix + 'repeat')) {
    message.channel.send(message.content.subStr(8));
  }

  else if (message.content === "maybe i'll be tracer"){
    message.channel.send("i'm already tracer")
  }

  else if (message.content === "what about widowmaker"){
    message.channel.send("i'm already widowmaker")
  }

  else if (message.content === "i'll be bastion"){
    message.channel.send("NERF BASTION")
  }

  else if (message.content === "you're right, so winston"){
    message.channel.send("i wanna be winston")
  }

  else if (message.content === "i guess i'll be genji"){
    message.channel.send("i'm already genji")
  }

  else if (message.content === "then i'll be mccree"){
    message.channel.send("i already chose mccree")
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

client.login(TOKEN);
