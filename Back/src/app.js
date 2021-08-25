require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT;

const session = require("express-session");
const mongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const passport = require("passport");

const authRoute = require("./routes/auth");

app.use(cors({ credentials: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    name: "insightz.sid",
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

app.use("/api", authRoute);

// Vue-Router

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

app.get("*", function (req, res) {
  res.status(404).sendFile(__dirname + "/routes/404.html");
});

app.listen(PORT, () => {
  console.log("[APP] Aberto na porta " + PORT);
});
