<template>
    <RinkWithButtons :tooltipText="'There is no loss play for this face off.'" :toolTipTextWin="'In the 21 bump back variation, the defenseman going down the wall with the puck bumps it back to the LW.'" @reset="resetPlayers" @play-win="onPlayWin" @play-loss="onPlayLoss"></RinkWithButtons>
    <!--Team 1-->
    <HockeyPlayer :position="'RW'" :team="1" :tooltipText="tooltipsActive ? 'Win the pocket, get to the net.' : ''" :top="playerPositions.team1.RW.top" :left="playerPositions.team1.RW.left" class="team-1-RW"></HockeyPlayer>
    <HockeyPlayer :position="'LW'" :team="1" :tooltipText="tooltipsActive ? 'If the draw is won, replace the RDs position.' : ''" :top="playerPositions.team1.LW.top" :left="playerPositions.team1.LW.left" class="team-1-LW"></HockeyPlayer>
    <HockeyPlayer :position="'C'" :team="1" :tooltipText="tooltipsActive ? 'Win the draw to the RD.' : ''" :top="playerPositions.team1.C.top" :left="playerPositions.team1.C.left" class="team-1-C"></HockeyPlayer>
    <HockeyPlayer :position="'LD'" :team="1" :tooltipText="tooltipsActive ? 'Widen out.' : ''" :top="playerPositions.team1.LD.top" :left="playerPositions.team1.LD.left" class="team-1-LD"></HockeyPlayer>
    <HockeyPlayer :position="'RD'" :team="1" :tooltipText="tooltipsActive ? 'Get the puck and go down the wall with it.' : ''" :top="playerPositions.team1.RD.top" :left="playerPositions.team1.RD.left" class="team-1-RD"></HockeyPlayer>
    <!-- Team 2 -->
    <HockeyPlayer :position="'C'" :team="2" :tooltipText="tooltipsActive ? 'Win the draw to either side depending on your play call.' : ''" :top="playerPositions.team2.C.top" :left="playerPositions.team2.C.left" class="team-2-C"></HockeyPlayer>
    <HockeyPlayer :position="'LW'" :team="2" :tooltipText="tooltipsActive ? 'Win the pocket, get out to the RD. If you get stuck in traffic, you may have to meet him around the pile.' : ''" :top="playerPositions.team2.LW.top" :left="playerPositions.team2.LW.left" class="team-2-LW"></HockeyPlayer>
    <HockeyPlayer :position="'RW'" :team="2" :tooltipText="tooltipsActive ? 'Hold.' : ''" :top="playerPositions.team2.RW.top" :left="playerPositions.team2.RW.left" class="team-2-RW"></HockeyPlayer>
    <HockeyPlayer :position="'RD'" :team="2" :tooltipText="tooltipsActive ? 'Sprint to get out to the LW going to the blue line.' : ''" :top="playerPositions.team2.RD.top" :left="playerPositions.team2.RD.left" class="team-2-RD"></HockeyPlayer>
    <HockeyPlayer :position="'LD'" :team="2" :tooltipText="tooltipsActive ? 'Win the pocket and take the RW.' : ''" :top="playerPositions.team2.LD.top" :left="playerPositions.team2.LD.left" class="team-2-LD"></HockeyPlayer>
    <!--Puck-->
    <HockeyPuck :top="puckLocation.top" :left="puckLocation.left" :class="{ 'puck-win-animation': puckWinAnimation, 'puck-loss-animation': !puckWinAnimation}"></HockeyPuck>
</template>

<script>
import RinkWithButtons from '@/components/RinkWithButtons.vue';
import HockeyPlayer from '@/components/HockeyPlayer.vue';
import HockeyPuck from '@/components/HockeyPuck.vue';

export default {
    name : 'TwentyOneView',
    components: { RinkWithButtons, HockeyPlayer, HockeyPuck},
    data() {
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
        onPlayWin() {
            this.isWin = true;
            this.tooltipsActive = false;
            this.puckWinAnimation = true;

            //move the RD and LW. these will be going to the net later on in the play
            // this.playerPositions.team1.RW = { top: 47, left: 27 };
            // this.playerPositions.team2.LD = { top: 50, left: 27 };

            //just shift the centers up and down slightly so the wings can get through'
            this.playerPositions.team1.C.top = this.playerPositions.team1.C.top + 1;
            this.playerPositions.team2.C.top = this.playerPositions.team2.C.top - 1;

            //move the puck to the RD
            this.puckLocation = this.playerPositions.team1.RD;

            //Move the RD and the puck
            setTimeout(() => {
                this.animateTeam1RD();
                this.playerPositions.team1.LD.left = this.playerPositions.team1.LD.left + 4; //shift the LD over slightly
                this.playerPositions.team1.LW = {top: 27, left: 23}; //move the LW to the RD position

                //animate the RD getting out to the LW
                this.animateTeam2RD();
                //animate the RW and LD going to the net
                this.animateTeam1RW();
                //animate the LW for team 2
                this.animateTeam2LW();

            }, 400);
        },
        animateTeam1RD()
        {
            this.puckWinAnimation = false;
            const start = { top: this.playerPositions.team1.RD.top, left: this.playerPositions.team1.RD.left };
            const control = { top: 40, left: 20 }; //change the shape of the curve
            const end = { top: 60, left:  20};
            let t = 0;

            const animation = () => {
                const top = Math.pow(1 - t, 2) * start.top + 2 * (1 - t) * t * control.top + Math.pow(t, 2) * end.top;
                const left = Math.pow(1 - t, 2) * start.left + 2 * (1 - t) * t * control.left + Math.pow(t, 2) * end.left;


                this.playerPositions.team1.RD = { top: top, left: left };
                this.puckLocation = { top: top, left: left };

                t += 0.007; //will change the speed

                if (t <= 1) {
                    requestAnimationFrame(animation);
                }
            };
            animation();
        },
        animateTeam2RD()
        {
            const start = { top: this.playerPositions.team2.RD.top, left: this.playerPositions.team2.RD.left };
            const control = { top: 29, left: 27 }; //change the shape of the curve
            const end = { top: this.playerPositions.team1.LW.top + 3, left: this.playerPositions.team1.LW.left + 3 };
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
            //this will also animate the team 2 LD
            const start = { top: this.playerPositions.team1.RW.top, left: this.playerPositions.team1.RW.left };
            const control = { top: 60, left: 30 }; //change the shape of the curve
            const end = { top: this.playerPositions.team2.RW.top + 4, left: this.playerPositions.team2.RW.left + 2 };
            let t = 0;

            const animation = () => {
                const top = Math.pow(1 - t, 2) * start.top + 2 * (1 - t) * t * control.top + Math.pow(t, 2) * end.top;
                const left = Math.pow(1 - t, 2) * start.left + 2 * (1 - t) * t * control.left + Math.pow(t, 2) * end.left;


                this.playerPositions.team1.RW.top = top;
                this.playerPositions.team1.RW.left = left;

                this.playerPositions.team2.LD = { top: top + 7, left: left};

                t += 0.007; //will change the speed

                if (t <= 1) {
                    requestAnimationFrame(animation);
                }
            };
            animation();
        },
        animateTeam2LW()
        {
            //this will also animate the team 2 LD
            const start = { top: this.playerPositions.team2.LW.top, left: this.playerPositions.team2.LW.left };
            const control = { top: 30, left: 30 }; //change the shape of the curve
            const end = { top: 60, left: 23};
            let t = 0;

            const animation = () => {
                const top = Math.pow(1 - t, 2) * start.top + 2 * (1 - t) * t * control.top + Math.pow(t, 2) * end.top;
                const left = Math.pow(1 - t, 2) * start.left + 2 * (1 - t) * t * control.left + Math.pow(t, 2) * end.left;


                this.playerPositions.team2.LW.top = top;
                this.playerPositions.team2.LW.left = left;

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
.puck-win-animation, .team-2-C, .team-1-C  {
    position: absolute;
    transition: top 0.4s ease, left 0.4s ease;
}
.team-1-LD{
    position: absolute;
    transition: top 0.4s ease, left 0.4s ease;
}
.team-1-LW{
    position: absolute;
    transition: top 0.9s ease, left 0.8s ease;
}
</style>