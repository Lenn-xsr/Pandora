const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS],
});

client.on("ready", () => console.log("[BOT] Online!"));
client.login(process.env.CLIENT_TOKEN).catch(console.log);

module.exports = client;
