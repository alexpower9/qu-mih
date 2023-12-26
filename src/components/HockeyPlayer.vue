<template>
    <div class="player" :class="{'team-1': team === 1, 'team-2': team === 2}">
        <VueCustomTooltip :label="tooltipText" class="custom-tooltip">
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
        }
    }
}
</script>

<style scoped>
.player{
    font-size: 2em;
    font-weight: bold;
}
.team-1{
    color: #1a4386;
}
.team-2{
    color: #ec0229;
}
.custom-tooltip{
    z-index: 10000 !important;
}
</style>