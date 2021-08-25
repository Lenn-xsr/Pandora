<template>
  <div class="cadBox">
    <figure>
      <img :src="user.avatar" />
    </figure>

    <div class="cadTitle">
      <h3>Idioma</h3>
      <small>Escolha o seu idioma principal.</small>
    </div>

    <div class="cadContent">
      <label>
        <input type="radio" name="language" v-model="language" value="BR" />
        <figure>
          <img src="../assets/flagBrasil.svg" class="flag" />
        </figure>
      </label>
      <label>
        <input type="radio" name="language" v-model="language" value="USA" />
        <figure>
          <img src="../assets/flagUS.svg" class="flag" />
        </figure>
      </label>
    </div>

    <div class="cadButton">
      <button @click="toNext">Próximo</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Language",
  data() {
    return {
      language: "BR",
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    toNext() {
      this.$emit("Next", "CadastroCatg");
      this.user.language = this.language;
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

.cadButton {
  grid-area: button;
  align-self: end;
}

.cadBox {
  background-color: var(--background-primary);
  box-shadow: var(--boxshadow-primary);
  width: 100%;
  margin: 8% 15%;
  border-radius: 20px;
  display: grid;
  grid-template-areas: "user user user" "text text text" "image image image" "space space button";
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

.cadTitle {
  grid-area: text;
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
    margin: 17% auto;
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
