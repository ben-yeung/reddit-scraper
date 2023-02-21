const mongoose = require("mongoose");
const guildSchema = require("./guild-schema");

/**
 * Keep a record of all tracked subreddits
 * Each subreddit schema will hold a list of guilds that want to monitor it
 * This way we only have to iterate through the list of subs rather than guilds
 * Optimizes cases where multiple guilds want to monitor the same subreddit
 *
 */
const subreddit_schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  guilds: {
    type: [guildSchema],
    required: true,
  },
});

module.exports = mongoose.model("subreddits", subreddit_schema);
