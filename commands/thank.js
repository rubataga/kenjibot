module.exports = {
    name: 'thank',
    description: 'Thank another user',
    execute(message, args) {
      if (!message.mentions.users.size) {
        return message.channel.send("bruh");
      }
      else {
        return message.channel.send("chief");
      }
    },
};
