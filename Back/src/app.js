require("dotenv").config();
require("./database/mongo");
require("./bot/client");
require("./strategies/discordStrategy");

const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT;

const history = require("connect-history-api-fallback");
const session = require("express-session");
const mongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const passport = require("passport");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const signupRoute = require("./routes/signup");

app.use(cors({ credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    name: "pandora.sid",
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000 * 60 * 24,
      secure: false,
      sameSite: "lax",
    },
    store: new mongoStore({
      mongooseConnection: mongoose.connection,
      clear_interval: 3600,
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.set("x-powered-by", "Pandora");
  next();
});

app.use("/auth", authRoute);
app.use("/api", userRoute);
app.use("/api", signupRoute);

// Vue-Router

app.use((req, res, next) => {
  if (req?.user && req.user?.registred) res.redirect("/home");
  else if (!req?.user) res.redirect("/auth");
  else next();
});

app.get("/home", (req, res) => {
  if (!req.user.registred) return res.redirect("/");
  res.json(req.user);
});

const staticFileMiddleware = express.static(__dirname + "/dist");

app.use(staticFileMiddleware);

const historyMiddleware = history({
  disableDotRule: true,
  verbose: true,
});

app.use((req, res, next) => {
  historyMiddleware(req, res, next);
});

app.use(staticFileMiddleware);

// End-Vue-Router

app.get("*", (req, res) => {
  res.status(404).sendFile(__dirname + "/routes/404.html");
});

app.listen(PORT, () => {
  console.log("[APP] Aberto na porta " + PORT);
});
