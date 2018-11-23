const Discord = require('discord.js');
module.exports = {
    name: 'help',
    description: 'shows commands',
    aliases: ['h'],
    execute(message, args) {
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
    },
};
