const router = require("express").Router();

router.get("/user", (req, res) => {
  if (req.user) res.json(req.user);
});

module.exports = router;
