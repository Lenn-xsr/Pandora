const { Client } = require("discord.js")
const client = new Client({fetchAllMembers:true})
client.on("ready",() => console.log("Bot online"))
client.login(process.env.CLIENT_TOKEN).catch(console.log)

module.exports = client