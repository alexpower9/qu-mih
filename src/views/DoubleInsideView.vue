<template>
    <div class="double-inside">
        <RinkWithButtons></RinkWithButtons>
    </div>
    <div class="team-1"> <!-- This will be the offensive team in blue-->
        <HockeyPlayer :position="'RW'" :team="1" :tooltipText="'Quick shot! It is important to note that the LW and RW are interchangable, depending on the handedness of the player'" class="team-1-RW"></HockeyPlayer>
        <HockeyPlayer :position="'LW'" :team="1" :tooltipText="'Win the pocket.'" class="team-1-LW"></HockeyPlayer>
        <HockeyPlayer :position="'C'" :team="1" :tooltipText="'Win the draw to the inside forward.'" class="team-1-C"></HockeyPlayer>
    </div>
    <div class="team-2"> <!-- This will be the defensive team in red-->
        
    </div>
</template>

<script>
import RinkWithButtons from '@/components/RinkWithButtons.vue';
import HockeyPlayer from '@/components/HockeyPlayer.vue';

export default {
    name: 'DoubleInsideView',
    components: { RinkWithButtons, HockeyPlayer}
}
</script>

<style scoped>
.team-1-LW{
    position: absolute;
    top: 46%;
    left: 39%;
    transform: translate(-50%, -50%);
}
.team-1-C{
    position: absolute;
    top: 47%;
    left: 31.2%;
    transform: translate(-50%, -50%);
}
.team-1-RW{
    position: absolute;
    top: 37%;
    left: 35.9%;
    transform: translate(-50%, -50%);
}

</style>
