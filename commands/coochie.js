module.exports = {
    name: 'coochie',
    description: 'spare coochie',
    aliases: ['cooch'],
    execute(message, args) {
      if (message.member.roles.has('506232046771896320')) {
        message.channel.send(message.author + " has spared coochie :cookie:")
      } else {
        message.channel.send(message.author + ", you're not an egirl :rage:")
      }
    },
};
