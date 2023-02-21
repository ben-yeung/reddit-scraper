const mongoose = require("mongoose");

const guild_schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  guild_id: {
    type: String,
    required: true,
  },
  alert_channel: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("guilds", guild_schema);
