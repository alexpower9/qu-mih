<template>
  <div class="home">
    <img class="bobcat-image" alt="Bobcat" src="../assets/newBobcat.jpeg">
    <MyBobcat class="welcome-message" msg="Welcome to the Quinnipiac Mens Ice Hockey Play Page!"></MyBobcat>
    <div class = "button-container">
      <DoubleInside></DoubleInside>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MyBobcat from '@/components/MyBobcat.vue'
import DoubleInside from '@/components/DoubleInside.vue'

export default {
  name: 'HomeView',
  components: {
    MyBobcat,
    DoubleInside
  }
}
</script>

<style scoped>
.bobcat-image {
  width: 75px;
  height: 75px;
}
.button-container{
  margin-left:auto;
  margin-right:auto;
}
</style>


