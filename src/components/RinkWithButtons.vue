<template>
    <div class="button-container">
        <button class="play-button" @click="onClick">
            Play
        </button>
        <button class="reset-button" @click="onReset">
            Reset
        </button>
    </div>
    <div class="rink-background">
        <img src="../assets/rink-background.png" alt="Rink" class="rink-image">
    </div>
</template>

<script>
    export default {
        name: 'RinkWithButtons',
        methods: {
            onClick() {
                this.$emit('play');
            },
            onReset() {
                this.$emit('reset');
            }
        }
    }
</script>

<style scoped>
.rink-background{
    display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full height of the viewport */
}
.rink-image{
    width: 70%;
    height: auto;
    max-width: 100%;
}
.play-button, .reset-button {
    background-color: #1a4386;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 12px;
  transition-duration: 0.3s;
}
.play-button:hover, .reset-button:hover {
  background-color: #3468a4;
}
.button-container {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  width: 250px; /* Adjust as needed */
}
</style>