<template>
    <div class="button-container">
      <p class="button-text">Double Inside</p>
    </div>
</template>
  
<script>
  export default {
    name: 'DoubleInside'
  }
</script>
  
<style scoped>
.button-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px; /* adjust as needed */
  height: 100px; /* adjust as needed */
  border: 1px solid black;
  border-radius: 10px; /* adjust as needed for smoothness */
  cursor: pointer;
  overflow: hidden; /* this is important to make the image corners rounded */
}

.button-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('../assets/button-background.png') no-repeat center center; /* adjust the path as needed */
  background-size: cover;
  opacity: 0.5; /* adjust as needed */
  z-index: -1;
}

.button-text {
  margin-left: 10px;
  z-index: 1;
  color: rgb(0, 0, 0);  
  font-size:20px;
  font-weight:bold;
  transition: transform 0.2s ease-in-out;
  z-index: 1;
}

.button-container:hover .button-text {
  transform: scale(1.05); /* adjust as needed */
}
</style>