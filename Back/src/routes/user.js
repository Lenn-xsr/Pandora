const router = require("express").Router();
const client = require("../bot/client");

router.get("/user", async (req, res) => {
  if (req.user) {
    const user = await client.users.fetch(req.user._id);
    return res.json({
      tag: user.tag,
      avatar:
        user.avatarURL() ?? "https://cdn.discordapp.com/embed/avatars/0.png",
    });
  } else res.json({});
});

module.exports = router;
