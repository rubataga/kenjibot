module.exports = {
    name: 'killbot',
    description: 'kills KenjiBot :(',
    async execute(message, args) {
      console.log(1)
      if (message.member.roles.has('515280398037811204')) {
        console.log(2)
        if (!(process.env.NODE && ~process.env.NODE.indexOf("heroku"))){
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
