const router = require("express").Router();
const passport = require("passport");

router.get("/auth", passport.authenticate("discord"));

router.get(
  "/redirect",
  passport.authenticate("discord", {
    failureRedirect: "/forbidden",
    successRedirect: "/",
  }),
  (req, res) => {
    res.send(req.user);
  }
);

module.exports = router;
