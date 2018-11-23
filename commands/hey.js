module.exports = {
    name: 'hey',
    description: 'hey there KenjiBot',
    execute(message, args) {
        message.channel.send('hey there, ' + message.author)
    },
};
