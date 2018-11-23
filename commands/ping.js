module.exports = {
    name: 'ping',
    description: "KenjiBot's first ever command!",
    execute(message, args) {
        message.channel.send('pong');
    },
};
