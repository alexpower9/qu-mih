<template>
  <img alt="Bobcat" src="./assets/newBobcat.jpeg" class="img">
  <MyBobcat msg="Welcome to the Quinnipiac Men's Ice Hockey Plays."></MyBobcat>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import MyBobcat from './components/MyBobcat.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
    MyBobcat
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.img {
  width: 100px;
  height: 100px;
}
</style>