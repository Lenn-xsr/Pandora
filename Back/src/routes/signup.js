const router = require("express").Router();
const client = require("../bot/client");
const DiscordUser = require("../database/mongo");

router.post("/signup", async (req, res) => {
  const mongUser = await DiscordUser.findOne({ _id: req.user._id });
  const guild = client.guilds.cache.get(process.env.GUILD_MASTER);
  const member = await guild.members.fetch(req.user._id);
  const roles = [];

  mongUser.registred = true;
  mongUser.save();

  const gettingRoles = [
    req.body.language,
    req.body.color,
    ...req.body.categories,
  ];

  gettingRoles.forEach((roleName) =>
    roles.push(
      guild.roles.cache.find((guildRole) => guildRole.name === roleName).id
    )
  );

  member.roles.add(roles);
});

module.exports = router;
