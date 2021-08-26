<template>
  <article class="cadBox">
    <figure>
      <img :src="user.avatar" alt="User avatar" />
    </figure>

    <div class="cadTitle">
      <h3>Categorias</h3>
      <small
        >Escolha categorias das quais você goste.<br />Isso vai definir os
        canais que irão aparecer para você</small
      >
    </div>
    <div class="cadContent">
      <ul class="cadCatg">
        <li>
          <div>
            <h2>Programação</h2>
            <small
              >Una-se com a intenção de trocar ideias, compartilhar soluções e
              ficar por dentro das tendências da área de TI.</small
            >
          </div>
          <div>
            <label class="switch">
              <input type="checkbox" v-model="categories" value="Programacao" />
              <span class="slider"></span>
            </label>
          </div>
        </li>

        <li>
          <div>
            <h2>Gaming</h2>
            <small
              >Lugar perfeito para você que é gamer ou está na parte de criação
              de jogos.</small
            >
          </div>
          <div>
            <label class="switch">
              <input type="checkbox" v-model="categories" value="Gaming" />
              <span class="slider"></span>
            </label>
          </div>
        </li>

        <li>
          <div>
            <h2>Design</h2>
            <small
              >Projetos gráficos, comunicação visual, artes, assuntos sobre
              design, tudo aqui.</small
            >
          </div>
          <div>
            <label class="switch">
              <input type="checkbox" v-model="categories" value="Design" />
              <span class="slider"></span>
            </label>
          </div>
        </li>

        <li>
          <div>
            <h2>Audiovisual</h2>
            <small
              >Venha para estudar ou apenas apreciar uma boa arte, seja ela em
              qualquer forma.</small
            >
          </div>
          <div>
            <label class="switch">
              <input type="checkbox" v-model="categories" value="Audiovisual" />
              <span class="slider"></span>
            </label>
          </div>
        </li>
      </ul>
    </div>
    <div class="cadButton">
      <button @click="nextRoute">Próximo</button>
    </div>
  </article>
</template>

<script>
import signupActions from "@/mixins/signupActions.js";

export default {
  name: "Category",
  mixins: [signupActions],
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    nextRoute() {
      this.updateUser({ categories: this.categories });
      this.$router.push({ name: "Color" });
    },
  },
};
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 22px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--background-modifier-accent);
  border-radius: 34px;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider::before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 4px;
  bottom: 4px;
  border-radius: 50%;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider::before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}

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
  margin: 4% 12%;
  border-radius: 20px;
  display: grid;
  grid-template-areas: "text text user" "content content content" ". . button";
  align-content: normal;
  text-align: center;
}

.cadBox > figure {
  grid-area: user;
  margin: 25px 0 0 0;
}

.cadBox > figure > img {
  width: 140px;
  border-radius: 100%;
}

.cadTitle {
  grid-area: text;
  color: var(--text-normal);
  align-self: center;
}

.cadTitle h3 {
  font-size: x-large;
}

.cadContent {
  display: grid;
  grid-area: content;
  margin: auto;
  text-align: left;
  padding: 20px;
  padding-bottom: 0;
}

.cadCatg {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 20px;
}

.cadCatg > li {
  display: flex;
  align-items: center;
}

.cadCatg > li > div:first-child {
  margin: 15px;
}

@media only screen and (max-width: 768px) {
  .cadBox {
    width: 90%;
    margin: 10% auto;
  }

  .cadBox > figure {
    margin: 25px 0 0 25px;
  }

  .cadBox > figure > img {
    width: 80px;
  }

  .cadTitle {
    align-self: end;
    padding-left: 30px;
    width: 100%;
  }

  .cadCatg {
    grid-template-columns: repeat(1, auto);
  }
}
</style>