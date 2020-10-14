<template>
  <div class="cadBox">
    <figure>
      <img :src="user.avatar" />
    </figure>
    <div v-if="finalizado">
      <div class="cadTitle">
        <h3>Tudo pronto!</h3>
        <small>Basta clicar em finalizar para salvar as informações e liberar os canais!</small>
      </div>

      <div class="cadButton">
        <button @click="sendInfo">Finalizar</button>
      </div>
    </div>

    <div v-else>
      <div class="cadTitle">
        <h3>Seja bem vindo!</h3>
        <small>Verifique o servidor, está tudo pronto :)</small>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Finalizado",
  data() {
    return {
      finalizado: true,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    sendInfo() {
      axios.post("/finish", {
        language: this.user.language,
        categories: this.user.categories,
        color: this.user.color
      });
      this.finalizado = false;
    },
  },
};
</script>

<style scoped>
.cadButton button {
  background-color: var(--button-fill);
  color: white;
  border: 0;
  border-radius: 5px;
  padding: 5px 20px;
  margin: 15px;
  float: right;
}

.cadBox {
  background-color: var(--background-primary);
  box-shadow: var(--boxshadow-primary);
  width: 100%;
  margin: 15% 22%;
  border-radius: 20px;
  display: grid;
  grid-template-areas: "user" "text" "button";
  align-content: normal;
  text-align: center;
}

.cadBox > figure {
  grid-area: user;
  margin: auto;
  margin-top: 6%;
}

.cadBox > figure > img {
  width: 150px;
  border-radius: 100%;
}

.cadBox > div:first-child {
  display: contents;
}

.cadTitle {
  margin: 15px;
  color: var(--text-normal);
}

.cadContent {
  grid-area: image;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;
}

.cadContent figure {
  opacity: 0.5;
}

.cadContent img {
  width: 80%;
  min-height: 100px;
  max-height: 100px;
  max-width: 180px;
}

.cadContent input[type="radio"] {
  display: none;
}

.cadContent input[type="radio"]:checked ~ figure {
  opacity: 1;
}

@media only screen and (max-width: 768px) {
  .cadBox {
    width: 80%;
    margin: 40% auto;
  }
  .cadBox > figure > img {
    width: 100px;
  }
  .cadContent img {
    width: 60%;
    min-height: 65px;
    max-height: 80px;
    max-width: 200px;
  }
  .cadTitle {
    margin: 25px;
  }
}
</style>
