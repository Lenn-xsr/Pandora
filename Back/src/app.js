require('dotenv').config()

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const session = require('express-session')
const mongoStore = require('connect-mongo')(session)
const mongoose = require('mongoose')
const passport = require('passport')
const discordStrategy = require('./strategies/discordStrategy')
const DiscordUser = require('./database/mongo');
const client = require('./bot/client')

const authRoute = require('./routes/auth')
const finishRoute = require('./routes/finish')

function isAuthorized(req, res, next) {
  if(req.user){
    console.log(req.user.registred)
    if(req.user.registred)
      return res.redirect('/home');
    else
    next();
  }else{
    res.redirect('/auth');
  }
}

app.use("/assets", express.static(__dirname + "/dist"));

app.use(express.json())

app.use(session({
  secret: 'some random secret',
  cookie: {
    maxAge: 60000 * 60 * 24
  },
  store: new mongoStore({ mongooseConnection: mongoose.connection }),
  resave: false,
  saveUninitialized: false
}));
 
app.use(passport.initialize())
app.use(passport.session())
 
app.get("/", isAuthorized, (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/routes/home.html");
});

app.use('/auth', authRoute)

app.post("/finish",async (req,res)=>{
  const mongUser = await DiscordUser.findOne({ _id: req.user._id});
  const guild = client.guilds.cache.get("604300993944879104");
  const roles = [];
  const member = guild.members.cache.get(req.user._id);

  mongUser.registred = true
  mongUser.save()

  req.body.categories.push(req.body.color,req.body.language)
  req.body.categories.forEach(r => roles.push(guild.roles.cache.find(s => s.name === r).id))
  member.roles.add(roles)
})

app.get("/userinfo",function(req,res){
  if (req.user){
    user = client.users.cache.get(req.user._id)
    return res.json({
      tag: user.tag, 
      avatar: user.displayAvatarURL()
    })
  }
  res.json({})
})
 
app.get('*', function(req, res){
  res.status(404).sendFile(__dirname +"/routes/404.html");
});

app.listen(PORT, () => {
  console.log('App aberto na porta ' + PORT)
});