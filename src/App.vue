<template>
  <div id="app">
    <app-auth v-if="showAuth"></app-auth>
    <app-admin></app-admin>
    <router-view></router-view>
  </div>
</template>

<script>

import Authorization from "./Authorization.vue"
import Admin from "./Admin.vue"
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components : {
    appAuth : Authorization,
    appAdmin : Admin
  },
  computed : {
    showAuth() {
      return this.$store.getters.showAuth
    }
  }
}
</script>

<style>
/* 
@font-face {
  font-family: "CinzelDecorative";
  src: url("./assets/fonts/CinzelDecorative-Black.tff");
} */

#app {
  background-color: #ddb96d;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
