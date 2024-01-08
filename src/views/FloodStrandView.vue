<template>
    <RinkWithButtons @reset="resetPlayers" @play-win="onPlayWin" @play-loss="onPlayLoss"></RinkWithButtons>
    <!--Team 1-->
    <HockeyPlayer :position="'RW'" :team="1" :tooltipText="tooltipsActive ? 'Roll into the top of the circle.' : ''" :top="playerPositions.team1.RW.top" :left="playerPositions.team1.RW.left" class="team-1-RW"></HockeyPlayer>
    <HockeyPlayer :position="'LW'" :team="1" :tooltipText="tooltipsActive ? 'Get around the bottom of the circle for a pass from the RD.' : ''" :top="playerPositions.team1.LW.top" :left="playerPositions.team1.LW.left" class="team-1-LW"></HockeyPlayer>
    <HockeyPlayer :position="'C'" :team="1" :tooltipText="tooltipsActive ? 'Win the draw to the RD, get the net.' : ''" :top="playerPositions.team1.C.top" :left="playerPositions.team1.C.left" class="team-1-C"></HockeyPlayer>
    <HockeyPlayer :position="'LD'" :team="1" :tooltipText="tooltipsActive ? 'Widen out and down.' : ''" :top="playerPositions.team1.LD.top" :left="playerPositions.team1.LD.left" class="team-1-LD"></HockeyPlayer>
    <HockeyPlayer :position="'RD'" :team="1" :tooltipText="tooltipsActive ? 'Get the puck and walk slightly to the middle.' : ''" :top="playerPositions.team1.RD.top" :left="playerPositions.team1.RD.left" class="team-1-RD"></HockeyPlayer>
    <!-- Team 2 -->
    <HockeyPlayer :position="'C'" :team="2" :tooltipText="tooltipsActive ? 'Win the draw to either side depending on your play call.' : ''" :top="playerPositions.team2.C.top" :left="playerPositions.team2.C.left" class="team-2-C"></HockeyPlayer>
    <HockeyPlayer :position="'LW'" :team="2" :tooltipText="tooltipsActive ? 'Win the pocket, get out to the LD.' : ''" :top="playerPositions.team2.LW.top" :left="playerPositions.team2.LW.left" class="team-2-LW"></HockeyPlayer>
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

            //move the LW
            this.animateTeam1LW();
            this.animateTeam2RD();
            this.animateTeam1RW();

            setTimeout(() => {
               this.puckLocation = {top: this.playerPositions.team1.LW.top, left: this.playerPositions.team1.LW.left};
            }, 1000);
        }, 300);
        
    },
    animateTeam1LW()
    {
        //this will also animate the team 2 LD
        const start = { top: this.playerPositions.team1.LW.top, left: this.playerPositions.team1.LW.left };
        const control = { top: 65, left: 30 }; //change the shape of the curve
        const end = { top: this.playerPositions.team2.LD.top + 3, left: this.playerPositions.team2.LD.left + 1 };
        let t = 0;

        const animation = () => {
            const top = Math.pow(1 - t, 2) * start.top + 2 * (1 - t) * t * control.top + Math.pow(t, 2) * end.top;
            const left = Math.pow(1 - t, 2) * start.left + 2 * (1 - t) * t * control.left + Math.pow(t, 2) * end.left;


            this.playerPositions.team1.LW.top = top;
            this.playerPositions.team1.LW.left = left;

            t += 0.007; //will change the speed

            if (t <= 1) {
                requestAnimationFrame(animation);
            }
        };
        animation();
    },
    animateTeam2RD()
    {
        //this will also animate the team 2 LD
        const start = { top: this.playerPositions.team2.RD.top, left: this.playerPositions.team2.RD.left };
        const control = { top: 65, left: 30 }; //change the shape of the curve
        const end = { top: this.playerPositions.team2.LD.top + 6, left: this.playerPositions.team2.LD.left + 3 };
        let t = 0;

        const animation = () => {
            const top = Math.pow(1 - t, 2) * start.top + 2 * (1 - t) * t * control.top + Math.pow(t, 2) * end.top;
            const left = Math.pow(1 - t, 2) * start.left + 2 * (1 - t) * t * control.left + Math.pow(t, 2) * end.left;


            this.playerPositions.team2.RD.top = top;
            this.playerPositions.team2.RD.left = left;

            t += 0.007; //will change the speed

            if (t <= 1) {
                requestAnimationFrame(animation);
            }
        };
        animation();
    },
    animateTeam1RW()
    {
        const start = { top: this.playerPositions.team1.RW.top, left: this.playerPositions.team1.RW.left };
        const control = { top: 30, left: 30 }; //change the shape of the curve
        const end = { top: this.playerPositions.team1.C.top - 12, left: this.playerPositions.team1.C.left};
        let t = 0;

        const animation = () => {
            const top = Math.pow(1 - t, 2) * start.top + 2 * (1 - t) * t * control.top + Math.pow(t, 2) * end.top;
            const left = Math.pow(1 - t, 2) * start.left + 2 * (1 - t) * t * control.left + Math.pow(t, 2) * end.left;


            this.playerPositions.team1.RW.top = top;
            this.playerPositions.team1.RW.left = left;

            this.playerPositions.team2.LD.top = top + 8;
            this.playerPositions.team2.LD.left = left

            t += 0.007; //will change the speed

            if (t <= 1) {
                requestAnimationFrame(animation);
            }
        };
        animation();
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