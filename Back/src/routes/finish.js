const router = require("express").Router();

function isAuthorized(req, res, next) {
  if (req.user) {
    console.log("usuário logado");
    next();
  } else {
    console.log("usuario não logado");
    res.redirect("/");
  }
}

router.get("/", isAuthorized, (req, res) => {
  res.send(200);
});

module.exports = router;
