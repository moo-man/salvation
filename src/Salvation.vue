<template>
  <div class="salvation">
    <h2>{{title}}</h2>
    <div class="salvation-menu">
      <div class="menu-image">
        <a href="https://moohammer.club">
        <img src="./assets/images/the-world.jpg"/>
        </a>
      </div>
      <div class="menu-image">
        <router-link to="/calendar">
        <img src="./assets/images/wheel-of-fortune.jpg"/>
        </router-link>
      </div>
    </div>
        <div class="salvation-menu">
      <div style="padding: 0px" class="menu-image">
        <img src="./assets/images/the-emperor.jpg"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'The Hand Of Fate'
    }
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@900&display=swap');

.salvation h2 {
  font-family: "Cinzel Decorative";
  font-size: 60px;
  color: #6a070a
}

.salvation img {
  max-width: 100%;
  max-height: 100%;
}

.salvation-menu .menu-image img,
.salvation .menu-image {
  width: 18vh;
  height: 28.8vh;
}

.salvation-menu .menu-image img{

  box-shadow: 10px 10px 8px #000000;
  cursor: pointer
}

.salvation-menu {
  display: flex;
  padding : 5vh
}

.salvation-menu .menu-image{
  flex: 1
}

/* .card_trigger {
  padding: 100px;
}
div:hover .cards {
  box-shadow: 0px 10px 20px 20px rgba(0,0,0,0.17);
  display: inline-block;
  perspective: 1800px;
  text-align: left;
  transform-origin: 50% 50%;
  transform-style: preserve-3d;
  transform: rotateX(11deg) rotateY(16.5deg);
} */

</style>
