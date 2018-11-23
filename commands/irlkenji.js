const Discord = require('discord.js');
module.exports = {
    name: 'irlkenji',
    description: 'shows Kenji irl!',
    execute(message, args) {
      const embed = new Discord.RichEmbed()
        .attachFiles([new Discord.Attachment('./media/kenjiride.PNG')])
        .setTitle('KenjiBot IRL')
        .setColor(0xC90808)
        .setDescription("Wow! It's Kenji!")
        .setImage('attachment://kenjiride.PNG')
        .setFooter('In awe of this absolute unit.')
        .setThumbnail('attachment://kenjiride.PNG');
    message.channel.send(embed);
    },
};

//https://i.imgur.com/8RkPa1X.jpg
