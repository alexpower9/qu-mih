<template>
    <RinkWithButtons :toolTipText="'There is no loss play for this face off.'" :toolTipTextWin="'In the Princeton +1 variation, the center pops up looking for a quick pass from the LW with the puck'" @reset="resetPlayers" @play-win="onPlayWin" @play-loss="onPlayLoss"></RinkWithButtons>
    <!--Team 1-->
    <HockeyPlayer :position="'RW'" :team="1" :tooltipText="tooltipsActive ? 'Win the pocket, get to the net.' : ''" :top="playerPositions.team1.RW.top" :left="playerPositions.team1.RW.left" class="team-1-RW"></HockeyPlayer>
    <HockeyPlayer :position="'LW'" :team="1" :tooltipText="tooltipsActive ? 'If the draw is won, get nice and high close to the blue line for a pass from the RD.' : ''" :top="playerPositions.team1.LW.top" :left="playerPositions.team1.LW.left" class="team-1-LW"></HockeyPlayer>
    <HockeyPlayer :position="'C'" :team="1" :tooltipText="tooltipsActive ? 'Win the draw to the RD.' : ''" :top="playerPositions.team1.C.top" :left="playerPositions.team1.C.left" class="team-1-C"></HockeyPlayer>
    <HockeyPlayer :position="'LD'" :team="1" :tooltipText="tooltipsActive ? 'Be ready to walk the line and pass to the LW coming high.' : ''" :top="playerPositions.team1.LD.top" :left="playerPositions.team1.LD.left" class="team-1-LD"></HockeyPlayer>
    <HockeyPlayer :position="'RD'" :team="1" :tooltipText="tooltipsActive ? 'Play hockey.' : ''" :top="playerPositions.team1.RD.top" :left="playerPositions.team1.RD.left" class="team-1-RD"></HockeyPlayer>
    <!-- Team 2 -->
    <HockeyPlayer :position="'C'" :team="2" :tooltipText="tooltipsActive ? 'Win the draw to either side depending on your play call.' : ''" :top="playerPositions.team2.C.top" :left="playerPositions.team2.C.left" class="team-2-C"></HockeyPlayer>
    <HockeyPlayer :position="'LW'" :team="2" :tooltipText="tooltipsActive ? 'Win the pocket, get out to the LD.' : ''" :top="playerPositions.team2.LW.top" :left="playerPositions.team2.LW.left" class="team-2-LW"></HockeyPlayer>
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
    name: 'PrincetonView',
    components: { RinkWithButtons, HockeyPlayer, HockeyPuck},
    data() {
        return {
            tooltipsActive: true,
            puckLocation: { top: 50.25, left: 31.14 },
            isWin: false,
            puckWinAnimation: false,
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
            this.puckLocation = this.playerPositions.team1.RD;
    
            //Both LW's
            setTimeout(() => {
                //now move the puck to the RD
                this.puckWinAnimation = false;


                this.playerPositions.team1.LW = { top: 27, left: 23 };
                this.playerPositions.team2.LW = { top: 54, left: 39.1 };

                //shift both the team 1 D to the Right
                this.playerPositions.team1.RD = { top: 25, left: 33 };
                this.playerPositions.team1.LD = { top: 27, left: 47 };

                //move the puck
                this.puckLocation = { top: 25, left: 33 };

                this.playerPositions.team1.RW.top = 47;
                this.playerPositions.team1.RW.left = 27;

                this.playerPositions.team2.LD.top = 50;
                this.playerPositions.team2.LD.left = 27;

                //move the team 2 lw and the RD
                this.playerPositions.team2.LW.top = this.playerPositions.team1.RD.top + 4;
                this.playerPositions.team2.LW.left = this.playerPositions.team1.RD.left +1;

                //RD
                this.animateTeam2RD();

            }, 300);
            setTimeout(() => {
                this.puckLocation = this.playerPositions.team1.LW;

            }, 600);
        },
        animateTeam2RD() {
            const start = { top: this.playerPositions.team2.RD.top, left: this.playerPositions.team2.RD.left };
            const control = { top: 29, left: 27 }; //change the shape of the curve
            const end = { top: this.playerPositions.team1.LW.top + 4, left: this.playerPositions.team1.LW.left + 2 };
            let startTime = null;

            const animation = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;
                const t = progress / 1000; // Adjust the denominator to change the speed

                const top = Math.pow(1 - t, 2) * start.top + 2 * (1 - t) * t * control.top + Math.pow(t, 2) * end.top;
                const left = Math.pow(1 - t, 2) * start.left + 2 * (1 - t) * t * control.left + Math.pow(t, 2) * end.left;

                this.playerPositions.team2.RD.top = top;
                this.playerPositions.team2.RD.left = left;

                if (t <= 1) {
                    requestAnimationFrame(animation);
                }
            };
            requestAnimationFrame(animation);
        }
    }
}
</script>

<style scoped>
.team-1-LW, .team-2-LW, .team-1-LD, .team-1-RD,.puck-loss-animation, .team-1-RW, .team-2-LD, .team-2-LW{
    position: absolute;
    transition: top 0.8s ease, left 0.8s ease;
}
.puck-win-animation{
    position: absolute;
    transition: top 0.3s ease, left 0.3s ease;
}
</style>
