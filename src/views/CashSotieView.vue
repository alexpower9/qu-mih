<template>
    <RinkWithButtons :tooltipText="'There is no loss play for this face off.'" @reset="resetPlayers" @play-win="onPlayWin" @play-loss="onPlayLoss"></RinkWithButtons>
    <!--Team 1-->
    <HockeyPlayer :position="'RW'" :team="1" :tooltipText="tooltipsActive ? 'Win the pocket, get to the net.' : ''" :top="playerPositions.team1.RW.top" :left="playerPositions.team1.RW.left" class="team-1-RW"></HockeyPlayer>
    <HockeyPlayer :position="'LW'" :team="1" :tooltipText="tooltipsActive ? 'Win the pocket, get to the net.' : ''" :top="playerPositions.team1.LW.top" :left="playerPositions.team1.LW.left" class="team-1-LW"></HockeyPlayer>
    <HockeyPlayer :position="'C'" :team="1" :tooltipText="tooltipsActive ? 'Win the draw to the RD.' : ''" :top="playerPositions.team1.C.top" :left="playerPositions.team1.C.left" class="team-1-C"></HockeyPlayer>
    <HockeyPlayer :position="'LD'" :team="1" :tooltipText="tooltipsActive ? 'Be ready for the one timer pass from the RD.' : ''" :top="playerPositions.team1.LD.top" :left="playerPositions.team1.LD.left" class="team-1-LD"></HockeyPlayer>
    <HockeyPlayer :position="'RD'" :team="1" :tooltipText="tooltipsActive ? 'Give a quick one-timer pass to the LD.' : ''" :top="playerPositions.team1.RD.top" :left="playerPositions.team1.RD.left" class="team-1-RD"></HockeyPlayer>
    <!-- Team 2 -->
    <HockeyPlayer :position="'C'" :team="2" :tooltipText="tooltipsActive ? 'Win the draw to either side depending on your play call.' : ''" :top="playerPositions.team2.C.top" :left="playerPositions.team2.C.left" class="team-2-C"></HockeyPlayer>
    <HockeyPlayer :position="'LW'" :team="2" :tooltipText="tooltipsActive ? 'Win the pocket, get out to the LD.' : ''" :top="playerPositions.team2.LW.top" :left="playerPositions.team2.LW.left" class="team-2-LW"></HockeyPlayer>
    <HockeyPlayer :position="'RW'" :team="2" :tooltipText="tooltipsActive ? 'Get out to block the one timer from the LD.' : ''" :top="playerPositions.team2.RW.top" :left="playerPositions.team2.RW.left" class="team-2-RW"></HockeyPlayer>
    <HockeyPlayer :position="'RD'" :team="2" :tooltipText="tooltipsActive ? 'Take the LW' : ''" :top="playerPositions.team2.RD.top" :left="playerPositions.team2.RD.left" class="team-2-RD"></HockeyPlayer>
    <HockeyPlayer :position="'LD'" :team="2" :tooltipText="tooltipsActive ? 'Win the pocket and take the RW.' : ''" :top="playerPositions.team2.LD.top" :left="playerPositions.team2.LD.left" class="team-2-LD"></HockeyPlayer>
    <!--Puck-->
    <HockeyPuck :top="puckLocation.top" :left="puckLocation.left" :class="{ 'puck-win-animation': puckWinAnimation }" class="puck"></HockeyPuck>
</template>

<script>
import RinkWithButtons from '@/components/RinkWithButtons.vue';
import HockeyPlayer from '@/components/HockeyPlayer.vue';
import HockeyPuck from '@/components/HockeyPuck.vue';

export default {
  name: 'CashSotieView',
  components: {RinkWithButtons, HockeyPlayer, HockeyPuck},
  data() {
    return {
        tooltipsActive: true,
            puckLocation: {
                top: 50.25,
                left: 31.14
            },
            isWin: false,
            puckWinAnimation: false,
            playerPositions: {
                team1: {
                    RW: { top: 46, left: 23.1 },
                    LW: { top: 46, left: 39 },
                    C: { top: 47, left: 31.2 },
                    RD: { top: 27, left: 23 },
                    LD: { top: 22, left: 30 }
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
                LW: { top: 46, left: 39 },
                C: { top: 47, left: 31.2 },
                RD: { top: 27, left: 23 },
                LD: { top: 22, left: 30 }
            },
            team2: {
                C: { top: 54, left: 31.2 },
                LW: { top: 54, left: 39.1 },
                RW: { top: 54, left: 45 },
                RD: { top: 59, left: 38 },
                LD: { top: 54, left: 23.1 }
            }
        };
        this.puckLocation = { top: 50.25, left: 31.14 };
        this.tooltipsActive = true;
    },
    onPlayWin() {
        this.isWin = true;
        this.tooltipsActive = false;

        //Player Animations
        this.playerPositions.team1.LW.top = 47;
        this.playerPositions.team1.LW.left = 36;

        this.playerPositions.team2.LW.top = 50;
        this.playerPositions.team2.LW.left = 36

        //team 1 RW and team 2 LD
        this.playerPositions.team1.RW.top = 47;
        this.playerPositions.team1.RW.left = 27;

        this.playerPositions.team2.LD.top = 50;
        this.playerPositions.team2.LD.left = 27;

        //team 2 RW going out to block the shot
        this.playerPositions.team2.RW.top = 40;
        this.playerPositions.team2.RW.left = 39;

        //team 2 RD
        this.playerPositions.team2.RD.top = 55;
        this.playerPositions.team2.RD.left = 39;

        //puck animation
        this.puckLocation.top = 27;
        this.puckLocation.left = 23;


        
        setTimeout(() => {
            this.puckLocation.top = 22;
            this.puckLocation.left = 30;
        }, 250);
    },
    onPlayLoss() {
        }
    }
}
</script>

<style scoped>
.team-1-LW, .team-2-LW, .team-1-RW, .team-2-LD, .team-2-RW, .team-2-RD
{
    position: absolute;
    transition: top 0.5s ease, left 0.5s ease;
}
.puck{
    position: absolute;
    transition: top 0.3s ease, left 0.3s ease;
}
</style>