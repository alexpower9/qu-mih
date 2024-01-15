<template>
    <RinkWithButtons :tooltipText="'There is no loss play for this face off.'" :toolTipTextWin="'Clear the puck for the Zamboni driver'" @play-win="onPlayWin" @reset="onReset" @resize="onResize">
        <template v-slot:animations>
            <PuckSVG :key="resetKey" :style="puckStyles" ref="puck" />
        </template>
    </RinkWithButtons>
</template>

<script>
import RinkWithButtons from '@/components/RinkWithButtons'
import PuckSVG from '../components/PuckSVG'

export default {
    name : 'ZamboniView',
    components: {
        RinkWithButtons,
        PuckSVG
    },
    data() {
        return {
            resetKey: 0,
            rinkSize: 'LARGE',
            puckAnimationInterval: null,
            puckAnimationFrameTracker: 0
        }
    },
    computed: {
        puckStyles() {
            if (this.rinkSize === 'LARGE') {
                return {
                    position: 'absolute',
                    display: 'block',
                    top: '22.8rem',
                    left: '18.67rem'
                }
            }
            else if (this.rinkSize === 'MEDIUM') {
                return {
                    position: 'absolute',
                    display: 'block',
                    top: '15.3rem',
                    left: '12.5rem',
                    scale: '.67'
                }
            }
            else {
                return {
                    position: 'absolute',
                    display: 'block',
                    top: '6.65rem',
                    left: '5.4rem',
                    scale: '.3'
                }
            }
        }
    },
    methods: {
        onPlayWin() {
            const puck = this.$refs.puck.$el
            this.puckAnimationFrameTracker = 0
            let self = this
            let speed = .05
            if (this.rinkSize === 'MEDIUM') {
                speed *= .67
            }
            else if (this.rinkSize === 'SMALL') {
                speed *= .3
            }
            this.puckAnimationInterval = () => {
                if (self.puckAnimationFrameTracker < 80) {
                    const currentTop = parseFloat(puck.style.top || 0)
                    puck.style.top = (currentTop + speed) + 'rem'
                    requestAnimationFrame(self.puckAnimationInterval)
                }
                self.puckAnimationFrameTracker++
            }
            this.puckAnimationInterval()
        },
        onReset() {
            this.resetKey++
        },
        onResize(rinkSize) {
            this.rinkSize = rinkSize
            this.onReset()
        }
    }
}
</script>

<style scoped>

</style>