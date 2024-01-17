<template>
    <RinkWithButtons :toolTipTextWin="'There is no win animation for this face off play.'" :tooltipText="'There is no loss play for this face off.'" @reset="resetPlayers" @play-win="onPlayWin" @play-loss="onPlayLoss"></RinkWithButtons>
    <!--Team 1-->
    <HockeyPlayer :position="'RW'" :team="1" :tooltipText="tooltipsActive ? 'Win the pocket. Get to the net on a win, and hunt the puck on a loss.' : ''" :top="playerPositions.team1.RW.top" :left="playerPositions.team1.RW.left" class="team-1-RW"></HockeyPlayer>
    <HockeyPlayer :position="'C'" :team="1" :tooltipText="tooltipsActive ? 'Win the draw to the RD or the LW.' : ''" :top="playerPositions.team1.C.top" :left="playerPositions.team1.C.left" class="team-1-C"></HockeyPlayer>
    <HockeyPlayer :position="'LD'" :team="1" :tooltipText="tooltipsActive ? 'Play hockey.' : ''" :top="playerPositions.team1.LD.top" :left="playerPositions.team1.LD.left" class="team-1-LD"></HockeyPlayer>
    <HockeyPlayer :position="'RD'" :team="1" :tooltipText="tooltipsActive ? 'Play hockey.' : ''" :top="playerPositions.team1.RD.top" :left="playerPositions.team1.RD.left" class="team-1-RD"></HockeyPlayer>
    <HockeyPlayer :position="'LW'" :team="1" :tooltipText="tooltipsActive ? 'Be ready for the puck off the faceoff. On a loss, hold and be the F3.' : ''" :top="playerPositions.team1.LW.top" :left="playerPositions.team1.LW.left" class="team-1-LW"></HockeyPlayer>
    <!-- Team 2 -->
    <HockeyPlayer :position="'C'" :team="2" :tooltipText="tooltipsActive ? 'Win the draw to either side depending on your play call.' : ''" :top="playerPositions.team2.C.top" :left="playerPositions.team2.C.left" class="team-2-C"></HockeyPlayer>
    <HockeyPlayer :position="'LW'" :team="2" :tooltipText="tooltipsActive ? 'Win the pocket, get out to the LD.' : ''" :top="playerPositions.team2.LW.top" :left="playerPositions.team2.LW.left" class="team-2-LW"></HockeyPlayer>
    <HockeyPlayer :position="'RW'" :team="2" :tooltipText="tooltipsActive ? 'Hold.' : ''" :top="playerPositions.team2.RW.top" :left="playerPositions.team2.RW.left" class="team-2-RW"></HockeyPlayer>
    <HockeyPlayer :position="'RD'" :team="2" :tooltipText="tooltipsActive ? 'Get out to the LW.' : ''" :top="playerPositions.team2.RD.top" :left="playerPositions.team2.RD.left" class="team-2-RD"></HockeyPlayer>
    <HockeyPlayer :position="'LD'" :team="2" :tooltipText="tooltipsActive ? 'Win the pocket and take the RW.' : ''" :top="playerPositions.team2.LD.top" :left="playerPositions.team2.LD.left" class="team-2-LD"></HockeyPlayer>
    <!--Puck-->
    <HockeyPuck :top="puckLocation.top" :left="puckLocation.left" :class="{ 'puck-win-animation': puckWinAnimation, 'puck-loss-animation': !puckWinAnimation}"></HockeyPuck>
</template>

<script>
import RinkWithButtons from '@/components/RinkWithButtons.vue';
import HockeyPlayer from '@/components/HockeyPlayer.vue';
import HockeyPuck from '@/components/HockeyPuck.vue';

export default
{
    name: 'PittView',
    components: { RinkWithButtons, HockeyPlayer, HockeyPuck },
    data()
    {
        return {
            tooltipsActive: true,
            puckLocation: { top: 50.25, left: 31.14 },
            isWin: false,
            puckWinAnimation: false,
            playerPositions: {
                team1: {
                    RW: { top: 46, left: 23.1 },
                    LW: { top: 39, left: 37 },
                    C: { top: 47, left: 31.2 },
                    RD: { top: 27, left: 23 },
                    LD: { top: 27, left: 37 }
                },
                team2: {
                    C: { top: 54, left: 31.2 },
                    LW: { top: 54, left: 39.1 },
                    RW: { top: 54, left: 45 },
                    RD: { top: 59, left: 38 },
                    LD: { top: 54, left: 23.1}
                }
            }
        }
    },
    methods: {
        resetPlayers() {
            this.playerPositions = {
            team1: {
                RW: { top: 46, left: 23.1 },
                LW: { top: 39, left: 37 },
                C: { top: 47, left: 31.2 },
                RD: { top: 27, left: 23 },
                LD: { top: 27, left: 37 }
            },
            team2: {
                C: { top: 54, left: 31.2 },
                LW: { top: 54, left: 39.1 },
                RW: { top: 54, left: 45 },
                RD: { top: 59, left: 38 },
                LD: { top: 54, left: 23.1}
            }
        }
            this.puckLocation = { top: 50.25, left: 31.14 };
            this.tooltipsActive = true;
            this.puckWinAnimation = false;
        }
    },
    
}
</script>

<style scoped>

</style>