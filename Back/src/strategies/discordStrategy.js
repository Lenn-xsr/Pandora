const DiscordStrategy = require('passport-discord').Strategy;
const passport = require('passport')
const DiscordUser = require('../database/mongo');

passport.serializeUser((user, done) => {
  done(null, user._id)
})

passport.deserializeUser(async (id, done) => {
  const user = await DiscordUser.findById(id)
  if (user)
    done(null, user);
})

passport.use(new DiscordStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.CLIENT_REDIRECT,
  scope: ['identify']
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const user = await DiscordUser.findOne({ _id: profile.id })
    if (user) {
      done(null, user);
    } else {
      const newUser = await DiscordUser.create({
        _id: profile.id,
        username: profile.username,
        registred: false
      })
      const saveUser = await newUser.save();
      done(null, saveUser)
    }
  }
  catch (err) {
    console.log(err)
    done(err, null)
  }
}))