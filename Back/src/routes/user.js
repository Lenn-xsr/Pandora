const router = require("express").Router();
const client = require("../bot/client");

router.get("/user", async (req, res) => {
  if (req.user) {
    const user = await client.users.fetch(req.user._id);
    return res.json({
      tag: user.tag,
      avatar: user.avatarURL(),
    });
  } else
    res.json({
      tag: "Lennart#5600",
      avatar:
        "https://cdn.discordapp.com/avatars/265924655276228618/df7c415d3b260ab3e4b27f400d2677cc.webp",
    });
});

module.exports = router;
