module.exports = {
    name: 'bruh',
    description: 'activates a bruh moment',
    execute(message, args) {
      message.channel.send('bruh moment!', {
        files: [
          './media/bruh2.mp3'
        ]
      })
    },
};
