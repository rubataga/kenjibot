module.exports = {
    name: 'thank',
    description: 'Thank another user',
    execute(message, args) {
      if (!message.mentions.users.size) {
        return message.channel.send(message.author + " thanked " message.author + ".");
      }
      else {
        return message.channel.send(message.author + "thanked " message.mentions.users.first() + ".");
      }
    },
};
