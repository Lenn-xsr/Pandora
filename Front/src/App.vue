<template>
  <div id="app">
    <div>
      <figure>
        <img src="./assets/Logo.svg" alt="Pandora logo" />
      </figure>
    </div>
    <transition mode="out-in">
      <router-view />
    </transition>
    <div class="background">
      <img src="./assets/background.jpg" />
    </div>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style-type: none;
  font-family: Whitney, Helvetica Neue, Helvetica, Arial, sans-serif;
}

h1,
h2,
h3,
span {
  color: var(--header-secondary);
  font-size: medium;
}

small,
p {
  color: var(--interactive-normal);
}

label,
button {
  cursor: pointer;
}

:root {
  --text-normal: #dcddde;
  --text-default: hsla(0, 0%, 100%, 0.8);
  --text-link: #00b0f4;
  --button-fill: #7289da;
  --header-secondary: #b9bbbe;
  --interactive-normal: #b9bbbe;
  --interactive-hover: #dcddde;
  --interactive-active: #fff;
  --interactive-muted: #4f545c;
  --background-primary: #36393f;
  --background-secondary: #2f3136;
  --background-secondary-alt: #292b2f;
  --background-tertiary: #202225;
  --background-accent: #4f545c;
  --background-modifier-hover: rgba(79, 84, 92, 0.16);
  --background-modifier-active: rgba(79, 84, 92, 0.24);
  --background-modifier-selected: rgba(79, 84, 92, 0.32);
  --background-modifier-accent: hsla(0, 0%, 100%, 0.06);
  --boxshadow-primary: 5px 5px 40px rgba(54, 57, 63, 0.5);
}

#app {
  display: flex;
  flex-direction: row;
}

#app > div:first-child {
  background-color: var(--background-secondary);
  height: 100vh;
  width: 30vw;
  display: flex;
}

#app > div:first-child > figure {
  margin: auto;
}

#app > div:first-child img {
  width: 20vw;
}

.background {
  position: fixed;
  bottom: -15px;
  right: 0;
  width: auto;
  transition: opacity 0.4s ease;
  opacity: 1;
  pointer-events: none;
  z-index: -1;
}

.background image {
  width: auto;
}

.v-enter,
.v-leave-to {
  transform: translate3d(-20px, 0, 0);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}

@media only screen and (max-width: 768px) {
  body {
    height: 100%;
  }

  html {
    height: auto;
  }

  #app {
    flex-direction: column;
  }

  #app > div:first-child {
    height: 20vh;
    width: 100vw;
  }
}
</style>
