<template>
  <article class="cadBox">
    <div class="cadTitle">
      <h3>Cor</h3>
      <small
        >Escolha uma cor na qual você goste.<br />Todos vão te ver com essa
        corzinha.</small
      >
    </div>

    <div class="cadContent">
      <ul class="cadColorList">
        <li v-for="cor in colors" :key="cor.name">
          <label>
            <input type="radio" name="color" v-model="hash" :value="cor.hash" />
            <span class="cadColor">{{ cor.name }}</span>
          </label>
        </li>
      </ul>
    </div>

    <div class="cadContent2">
      <div>
        <div :style="{ background: hash }">
          <figure>
            <img :src="user.avatar" />
          </figure>
          <small class="cadUserTag"
            ><b>{{ user.tag }}</b></small
          >
        </div>
        <div>
          <h2>Cargos</h2>
          <div>
            <ul class="cadRoles">
              <li :style="cargStyle">{{ selected[0].name }}</li>
              <li v-for="categorie in categories" :key="categorie">
                {{ categorie }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="cadButton">
      <button @click="toNext">Próximo</button>
    </div>
  </article>
</template>

<script>
import colors from "@/colors.json";
import { mapState } from "vuex";

export default {
  name: "Color",
  data() {
    return {
      hash: "#e2bd15",
      selected: [],
      colors,
    };
  },
  methods: {
    getColor(hash) {
      this.selected = colors.filter((r) => r.hash === hash);
    },
    toNext() {
      this.$emit("Next", "Finalizado");
      this.user.color = this.selected[0].name;
    },
  },
  computed: {
    cargStyle() {
      return {
        "--color-active": this.selected[0].hash,
      };
    },
    categories() {
      return this.$store.state.user.categories;
    },
    ...mapState(["user"]),
  },
  watch: {
    hash() {
      this.getColor(this.hash);
    },
  },
  created() {
    this.getColor(this.hash);
  },
};
</script>

<style scoped>
.cadRoles li:first-child {
  color: var(--color-active);
  border-color: var(--color-active);
}

.cadRoles li:first-child::before {
  background: var(--color-active);
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
  background-color: var(--background-secondary-alt);
  border-radius: 0 0 20px 20px;
}

.cadBox {
  background-color: var(--background-primary);
  box-shadow: var(--boxshadow-primary);
  width: 100%;
  margin: 8% 15%;
  border-radius: 20px;
  display: grid;
  grid-template-areas: "text content2" "content content2" "content content2" "button button";
  align-content: normal;
  text-align: center;
  overflow: hidden;
}

.cadContent {
  grid-area: content;
  display: grid;
  justify-content: center;
}

.cadContent input[type="radio"] {
  display: none;
}

.cadContent input[type="radio"]:checked ~ .cadColor {
  background-color: #ffffff21;
}

.cadTitle {
  grid-area: text;
  color: var(--text-normal);
  align-self: center;
}

.cadColor::before {
  position: absolute;
  content: "";
  height: 10px;
  width: 10px;
  left: 4px;
  bottom: 5px;
  border-radius: 50%;
  background-color: white;
}

.cadColor {
  position: relative;
  display: inline-block;
  width: 80px;
  height: 20px;
  border-radius: 5px;
  padding-left: 18px;
  text-align: left;
  font-size: 15px;
}

.cadColor:hover {
  background-color: #ffffff21;
}

.cadColorList {
  display: grid;
  grid-template-columns: repeat(3, 110px);
  gap: 10px;
  align-content: space-between;
}

.cadContent2 {
  grid-area: content2;
  width: 153px;
  justify-self: end;
}

.cadContent2 > div > div:first-child {
  background-color: var(--button-fill);
  padding: 40px 0 40px 0;
  border-radius: 20px 20px 0 0;
}

.cadContent2 > div > div:last-child {
  background-color: var(--background-secondary);
  height: 100%;
}

.cadContent2 img {
  width: 110px;
  border-radius: 100%;
}

.cadContent2 > div > div:last-child h2 {
  text-align: left;
  padding: 20px;
  padding-bottom: 5px;
}

.cadContent2 > div {
  float: right;
  width: 260px;
  height: 100%;
}

.cadRoles {
  padding: 20px;
  padding-top: 10px;
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.cadRoles li {
  border: 1px solid var(--text-default);
  color: var(--text-default);
  font-size: 15px;
  border-radius: 30px;
  padding-left: 5px;
  width: max-content;
  padding-right: 10px;
}

.cadRoles li::before {
  content: "";
  background-color: white;
  height: 10px;
  width: 10px;
  display: block;
  float: left;
  margin: 4px;
  margin-left: 0;
  border-radius: 100%;
}

.cadUserTag {
  color: white;
}

@media only screen and (max-width: 768px) {
  .cadBox {
    width: 90%;
    margin: 10% auto;
    grid-template-areas: "text text" "content content" "content2 content2" "button button";
  }

  .cadContent {
    margin-bottom: 40px;
  }

  .cadContent2 {
    justify-self: center;
    width: auto;
  }

  .cadTitle {
    margin: 40px;
  }

  .cadColorList {
    justify-items: center;
    margin-left: 0;
    grid-template-columns: repeat(3, auto);
  }
}
</style>
