module.exports = {
    name: 'killbot',
    description: 'kills KenjiBot :(',
    async execute(message, args) {
      if (message.member.roles.has('515280398037811204')) {
        if (!(process.env.NODE && ~process.env.NODE.indexOf("heroku"))){
          await console.log("bruh i literaly just died chief")
          await message.channel.send("bruh this can't be happening")
          process.exit()
        } else {
          message.channel.send("you can't run this command while the bot is hosted online!")
        }
      } else {
        message.channel.send("you aren't a botmaster!")
      }
      console.log(3)
    },
};
