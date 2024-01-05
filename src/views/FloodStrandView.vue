<template>
    <RinkWithButtons @reset="resetPlayers" @play-win="onPlayWin" @play-loss="onPlayLoss"></RinkWithButtons>
    <!--Team 1-->
    <HockeyPlayer :position="'RW'" :team="1" :tooltipText="tooltipsActive ? 'Roll into the top of the circle.' : ''" :top="playerPositions.team1.RW.top" :left="playerPositions.team1.RW.left" class="team-1-RW"></HockeyPlayer>
    <HockeyPlayer :position="'LW'" :team="1" :tooltipText="tooltipsActive ? 'Get around the bottom of the circle for a pass from the RD.' : ''" :top="playerPositions.team1.LW.top" :left="playerPositions.team1.LW.left" class="team-1-LW"></HockeyPlayer>
    <HockeyPlayer :position="'C'" :team="1" :tooltipText="tooltipsActive ? 'Win the draw to the RD.' : ''" :top="playerPositions.team1.C.top" :left="playerPositions.team1.C.left" class="team-1-C"></HockeyPlayer>
    <HockeyPlayer :position="'LD'" :team="1" :tooltipText="tooltipsActive ? 'Widen out and down.' : ''" :top="playerPositions.team1.LD.top" :left="playerPositions.team1.LD.left" class="team-1-LD"></HockeyPlayer>
    <HockeyPlayer :position="'RD'" :team="1" :tooltipText="tooltipsActive ? 'Get the puck and walk slightly to the middle.' : ''" :top="playerPositions.team1.RD.top" :left="playerPositions.team1.RD.left" class="team-1-RD"></HockeyPlayer>
    <!-- Team 2 -->
    <HockeyPlayer :position="'C'" :team="2" :tooltipText="tooltipsActive ? 'Win the draw to either side depending on your play call.' : ''" :top="playerPositions.team2.C.top" :left="playerPositions.team2.C.left" class="team-2-C"></HockeyPlayer>
    <HockeyPlayer :position="'LW'" :team="2" :tooltipText="tooltipsActive ? 'Win the pocket, get out to the LD. If you get stuck in traffic, you may have to meet him around the pile.' : ''" :top="playerPositions.team2.LW.top" :left="playerPositions.team2.LW.left" class="team-2-LW"></HockeyPlayer>
    <HockeyPlayer :position="'RW'" :team="2" :tooltipText="tooltipsActive ? 'Hold.' : ''" :top="playerPositions.team2.RW.top" :left="playerPositions.team2.RW.left" class="team-2-RW"></HockeyPlayer>
    <HockeyPlayer :position="'RD'" :team="2" :tooltipText="tooltipsActive ? 'Take the LW going around the circle' : ''" :top="playerPositions.team2.RD.top" :left="playerPositions.team2.RD.left" class="team-2-RD"></HockeyPlayer>
    <HockeyPlayer :position="'LD'" :team="2" :tooltipText="tooltipsActive ? 'Win the pocket and take the RW.' : ''" :top="playerPositions.team2.LD.top" :left="playerPositions.team2.LD.left" class="team-2-LD"></HockeyPlayer>
    <!--Puck-->
    <HockeyPuck :top="puckLocation.top" :left="puckLocation.left" :class="{ 'puck-win-animation': puckWinAnimation, 'puck-loss-animation': !puckWinAnimation}"></HockeyPuck>
</template>

<script>
import RinkWithButtons from '@/components/RinkWithButtons.vue';
import HockeyPlayer from '@/components/HockeyPlayer.vue';
import HockeyPuck from '@/components/HockeyPuck.vue';

export default {
  name: 'FloodStrandView',
  components: { RinkWithButtons, HockeyPlayer, HockeyPuck },
  data()
  {
    return {
        tooltipsActive: true,
        puckLocation: { top: 50.25, left: 31.14 },
        isWin: false,
        puckWinAnimation: false,
        //this is good position for a normal alignment
        playerPositions: {
            team1: {
                RW: { top: 46, left: 23.1 },
                LW: { top: 46, left: 39 },
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
                LW: { top: 46, left: 39 },
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
    },
    onPlayWin()
    {
        this.isWin = true;
        this.tooltipsActive = false;
        this.puckWinAnimation = true;

        //Send the puck back to the RD
        this.puckLocation = { top: 27, left: 23 };

        setTimeout(() => {
            this.playerPositions.team1.RD.left = 25;
            this.puckLocation = this.playerPositions.team1.RD;

            //Widen out the LD
            this.playerPositions.team1.LD.left = this.playerPositions.team1.LD.left + 2;
            this.playerPositions.team1.LD.top = this.playerPositions.team1.LD.top + 2;

            //move the LW out to the RD
            this.playerPositions.team2.LW = {top : this.playerPositions.team1.RD.top + 4, left: this.playerPositions.team1.RD.left + 2};
        }, 300);
    }
  }
}
</script>

<style scoped>
.puck-win-animation, .team-1-RD, .team-1-LD {
    position: absolute;
    transition: top 0.3s ease, left 0.3s ease;
}
.team-2-LW {
    position: absolute;
    transition: top 0.7s ease, left 0.7s ease;
}
</style>