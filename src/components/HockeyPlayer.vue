<template>
    <div class="player" 
       :class="{'team-1': team === 1, 'team-2': team === 2}" 
       :style="{ top: top + '%', left: left + '%', position: 'absolute', transform: 'translate(-50%, -50%)' }">
        <VueCustomTooltip :label="tooltipText">
            <p>{{ position }}</p>
        </VueCustomTooltip>
    </div>
</template>

<script>
export default {
    name: 'HockeyPlayer',
    props: {
        position: {
            type: String,
            required: true
        },
        team: {
            type: Number,
            required: true
        },
        tooltipText: {
            type: String,
            required: true
        },
        top: {
            type: Number,
            required: true
        },
        left: {
            type: Number,
            required: true
        }
    }
}
</script>

<style scoped>
.player{
    font-size: 4vh;
    font-weight: bold;
}
.team-1{
    color: #1a4386;
}
.team-2{
    color: #ec0229;
}
</style>