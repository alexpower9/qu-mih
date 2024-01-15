<template>
    <div class="container">
        <div class="button-container">
            <VueCustomTooltip v-if="!isMobile() && toolTipTextWin" :label="toolTipTextWin">
                <button :disabled="isDisabled" class="play-win-button" @click="onPlayWin">
                    Play Win
                </button>
            </VueCustomTooltip>
            <button :disabled="isDisabled" v-else class="play-win-button" @click="onPlayWin">
                Play Win
            </button>
            <VueCustomTooltip v-if="!isMobile() && tooltipText" :label="tooltipText">
                <button :disabled="isDisabledLoss" class="play-loss-button" @click="onPlayLoss">
                    Play Loss
                </button>
            </VueCustomTooltip>
            <button :disabled="isDisabledLoss" v-else class="play-loss-button" @click="onPlayLoss">
                Play Loss
            </button>
            <button class="reset-button" @click="onReset">
                Reset
            </button>
        </div>
        <div class="rink-background">
            <img src="../assets/rink-background.png" alt="Rink" class="rink-image" ref="rink-background-image">
            <slot name="animations"></slot>
        </div>
    </div>
</template>

<script>
import { VueCustomTooltip } from '@adamdehaven/vue-custom-tooltip';

export default {
    name: 'RinkWithButtons',
    components: { VueCustomTooltip },
    created() {
        window.addEventListener('resize', this.onReset);
    },
    mounted() {
        this.resizeObserver = new ResizeObserver(this.onResize)
        this.resizeObserver.observe(this.$refs['rink-background-image'])
        this.onResize()
    },
    unmounted() {
        window.removeEventListener('resize', this.onReset);
        this.resizeObserver = null
    },
    data() {
        return {
            isDisabled: false,
            isDisabledLoss: false,
            resizeObserver: null,
            currentRinkSizeLabel: 'LARGE'
        }
    },
    props: {
        tooltipText: {
            type: String,
            required: false
        },
        toolTipTextWin: {
            type: String,
            required: false
        }
    },
    emits: ['reset', 'play-win', 'play-loss', 'resize'],
    methods: {
        isMobile() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        },
        onResize() {
            this.onReset()
            if (this.$refs['rink-background-image']) {                
                const rinkWidth = this.$refs['rink-background-image'].clientWidth 
                const rinkSizeLabel = this.getRinkSizeLabel(rinkWidth)
                if (this.currentRinkSizeLabel !== rinkSizeLabel) {
                    this.$emit('resize', rinkSizeLabel)
                    this.currentRinkSizeLabel = rinkSizeLabel
                }
            }
        },
        getRinkSizeLabel(rinkWidth) {
            if (rinkWidth === 1330) {
                return 'LARGE'
            }
            else if (rinkWidth === 900) {
                return 'MEDIUM'
            }
            else {
                return 'SMALL'
            }
        },
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
    }
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.rink-background{
    display: flex;
    justify-content: center;
    position: relative;    
}

.rink-image{
    height: auto;
    width:80%;
    position: relative;
    display: block;
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
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
}

@media screen and (max-width: 1358px) {
    .rink-image{
        width: 900px;
    }
}

@media screen and (max-width: 908px) {
    .rink-image{
        width: 400px;
    }
}
</style>