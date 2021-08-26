const router = require("express").Router();
const client = require("../bot/client");
const DiscordUser = require("../database/mongo");

router.post("/signup", async (req, res) => {
  const mongUser = await DiscordUser.findOne({ _id: req.user._id });
  const guild = client.guilds.cache.get(process.env.GUILD_MASTER);
  const member = guild.members.cache.get(req.user._id);
  const roles = [];

  mongUser.registred = true;
  mongUser.save();

  req.body.categories.push(req.body.color, req.body.language);
  req.body.categories.forEach((r) =>
    roles.push(guild.roles.cache.find((s) => s.name === r).id)
  );
  member.roles.add(roles);
});

app.get("/userinfo", function (req, res) {
  if (req.user) {
    user = client.users.cache.get(req.user._id);

    return res.json({
      tag: user.tag,
      avatar: user.displayAvatarURL(),
    });
  }
  res.json({});
});

module.exports = router;
