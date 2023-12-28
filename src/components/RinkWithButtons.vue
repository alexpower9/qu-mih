<template>
    <div class="button-container">
        <button :disabled="isDisabled" class="play-win-button" @click="onPlayWin">
            Play Win
        </button>
        <VueCustomTooltip v-if="tooltipText" :label="tooltipText">
            <button :disabled="isDisabled" class="play-loss-button" @click="onPlayLoss">
                Play Loss
            </button>
        </VueCustomTooltip>
        <button :disabled="isDisabled" v-else class="play-loss-button" @click="onPlayLoss">
            Play Loss
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
import { VueCustomTooltip } from '@adamdehaven/vue-custom-tooltip';

    export default {
    name: 'RinkWithButtons',
    data() {
        return {
            isDisabled: false
        }
    },
    props: {
        tooltipText: {
            type: String,
            required: true
        }
    },
    methods: {
        onPlayWin() {
            this.isDisabled = true;
            this.$emit('play-win');
        },
        onPlayLoss() {
            this.isDisabled = true;
            this.$emit('play-loss');
        },
        onReset() {
            this.isDisabled = false;
            this.$emit('reset');
        }
    },
    components: { VueCustomTooltip }
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
.play-win-button,.play-loss-button, .reset-button {
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
.play-win-button:hover,.play-loss-button:hover, .reset-button:hover {
  background-color: #3468a4;
}
.button-container {
  position: absolute;
  top: 37px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  width: 400px; /* Adjust as needed */
}
</style>