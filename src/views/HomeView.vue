<template>
  <div class="home">
    <img class="bobcat-image" alt="Bobcat" src="../assets/newBobcat.jpeg">
    <MyBobcat class="welcome-message" msg="Welcome to the Quinnipiac Mens Ice Hockey Play Page!"></MyBobcat>
  </div>
</template>

<script>
// @ is an alias to /src
import MyBobcat from '@/components/MyBobcat.vue'

export default {
  name: 'HomeView',
  components: {
    MyBobcat
  }
}
</script>

<style scoped>
.bobcat-image {
  width: 75px;
  height: 75px;
}
</style>


