module.exports = {
    name: 'killbot',
    description: 'kills KenjiBot :(',
    execute(message, args) {
      console.log(1)
      if (message.member.roles.has('515280398037811204')) {
        console.log(2)
        message.channel.send("bruh this can't be happening")
        process.exit()
      }
      console.log(3)
    },
};
