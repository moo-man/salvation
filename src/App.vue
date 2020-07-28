<template>
  <div id="app">
    <component :is="modal" v-if="showModal"></component>
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
      modal: ''
    }
  },
  components : {
    appAuthModal : Authorization,
    appAdminModal : Admin
  },
  computed : {
    showModal() {
      this.modal = this.$store.getters.modal
      console.log("modal", this.$store.getters.modal)
      return true
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
