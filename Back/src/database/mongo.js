const mongoose = require('mongoose');

const { Schema } = mongoose

const Users = new Schema({
  _id: { type: String, required: true },
  username: { type: String, required: true },
  registred: { type: Boolean, required: true}
})

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, function (error) {
  if (error) {
    console.error("Erro ao conectar ao banco de dados ");
    console.error(error)
  } else {
    console.info("Conectado ao banco de dados!");
  }
})

const DiscordUser = module.exports = mongoose.model('User', Users)