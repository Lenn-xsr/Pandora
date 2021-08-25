const mongoose = require("mongoose");

const { Schema } = mongoose;

const Users = new Schema({
  _id: { type: String, required: true },
  username: { type: String, required: true },
  registred: { type: Boolean, required: true },
});

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (error) {
      console.error("[MONGO] Erro ao conectar ao banco de dados");
      console.error(error);
    } else {
      console.info("[MONGO] Conectado!");
    }
  }
);

module.exports = mongoose.model("Users", Users);
