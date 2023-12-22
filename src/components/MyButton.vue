<template>
    <div class="counter">
      <button class="counter-button" @click="incrementCounter">Click me</button>
      <button class="counter-button reset-button" @click="resetCounter">Reset</button>
      <p>You have clicked the button {{ counter }} times.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      incrementCounter() {
        this.counter++;
      },
      resetCounter() {
        this.counter = 0;
      }
    }
  }
  </script>
  
  <style scoped>
  .counter {
    text-align: center;
    font-family: Arial, sans-serif;
  }
  
  .counter-button {
    margin: 20px;
    padding: 10px 20px;
    font-size: 1em;
    color: white;
    background-color: #007BFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .counter-button:hover {
    background-color: #0056b3;
  }

  .reset-button {
  background-color: #1c039c;
}

.reset-button:hover {
  background-color: #3a3b9b;
}
  
  p {
    font-size: 1.2em;
  }
  </style>