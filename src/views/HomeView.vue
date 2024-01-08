<template>
  <div class="home">
    <img class="bobcat-image" alt="Bobcat" src="../assets/newBobcat.jpeg">
    <MyBobcat class="welcome-message" msg="Welcome to the Quinnipiac Mens Ice Hockey Play Page!"></MyBobcat>
    <div class = "play-button-container">
      <PlaysButton imagePath="button-background.png" buttonText="Double Inside" route="/double-inside"></PlaysButton>
      <PlaysButton imagePath="button-background.png" buttonText="Doria" route="/doria"></PlaysButton>
      <PlaysButton imagePath="button-background.png" buttonText="Cash Sotie" route="/cash-sotie"></PlaysButton>
      <PlaysButton imagePath="button-background.png" buttonText="Princeton" route="/princeton"></PlaysButton>
      <PlaysButton imagePath="button-background.png" buttonText="21" route="/twenty-one"></PlaysButton>
      <PlaysButton imagePath="button-background.png" buttonText="Floodstrand" route="/flood-strand"></PlaysButton>
      <PlaysButton imagePath="button-background.png" buttonText="Bouey" route="/bouey"></PlaysButton>
      <PlaysButton imagePath="button-background.png" buttonText="Niagara" route="/niagara"></PlaysButton>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MyBobcat from '@/components/MyBobcat.vue'
import PlaysButton from '@/components/PlaysButton.vue'

export default {
  name: 'HomeView',
  components: {
    MyBobcat,
    PlaysButton
  }
}
</script>

<style scoped>
.bobcat-image {
  width: 75px;
  height: 75px;
}
.play-button-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 700px;
  gap: 20px;
  margin:auto;
}
</style>


