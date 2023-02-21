const { Discord, WebhookClient, MessageEmbed } = require("discord.js");

exports.scrape = async (client) => {
  try {
    async function monitor() {}

    const refresh = setInterval(async function () {
      let res = await monitor();

      if (res.code != 200) {
        debugChannel.send(`[Error]: ${res.message}`);
        clearInterval(refresh);
        return;
      }
      //   clearInterval(refresh);
      //   return;
    }, 2000);
  } catch (error) {
    console.log("Outermost");
    console.log(error);
  }
};
