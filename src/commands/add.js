const Discord = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const mongoose = require("mongoose");
const botconfig = require("../botconfig.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("add")
    .setDescription("Add a subreddit to monitor")
    .addStringOption((option) => option.setName("subreddit").setDescription("name of subreddit").setRequired(true)),
  options: "[subreddit]",
  async execute(interaction, args, client) {
    let sub = interaction.options.getString("subreddit");
    let res = await fetch(`https://www.reddit.com/r/${sub}/new.json`)
      .then(function (res) {
        return res.json(); // Convert the data into JSON
      })
      .then(function (data) {
        return data;
      })
      .catch(function (err) {
        console.log(err);
        return { erorr: 404 };
      });
    console.log(res);
    if (res.error) {
      return interaction.reply({ content: "Could not find a subreddit with the name specified.", ephemeral: true });
    }

    return interaction.reply({ content: "Added subreddit to list.", ephemeral: true });
  },
};
