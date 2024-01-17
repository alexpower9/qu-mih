<template>
    <RinkWithButtons @reset="resetPlayers" @play-win="onPlayWin" @play-loss="onPlayLoss"></RinkWithButtons>
    <!--Team 1-->
    <HockeyPlayer :position="'RW'" :team="1" :tooltipText="tooltipsActive ? 'Win the pocket, get to the net.' : ''" :top="playerPositions.team1.RW.top" :left="playerPositions.team1.RW.left" class="team-1-RW"></HockeyPlayer>
    <HockeyPlayer :position="'C'" :team="1" :tooltipText="tooltipsActive ? 'Win the draw to the RW.' : ''" :top="playerPositions.team1.C.top" :left="playerPositions.team1.C.left" class="team-1-C"></HockeyPlayer>
    <HockeyPlayer :position="'LD'" :team="1" :tooltipText="tooltipsActive ? 'Play hockey,' : ''" :top="playerPositions.team1.LD.top" :left="playerPositions.team1.LD.left" class="team-1-LD"></HockeyPlayer>
    <HockeyPlayer :position="'RD'" :team="1" :tooltipText="tooltipsActive ? 'Play hockey' : ''" :top="playerPositions.team1.RD.top" :left="playerPositions.team1.RD.left" class="team-1-RD"></HockeyPlayer>
    <HockeyPlayer :position="'LW'" :team="1" :tooltipText="tooltipsActive ? 'Get the puck and go around the top of the circle.' : ''" :top="playerPositions.team1.LW.top" :left="playerPositions.team1.LW.left" class="team-1-LW"></HockeyPlayer>
    <!-- Team 2 -->
    <HockeyPuck :top="puckLocation.top" :left="puckLocation.left" :class="{ 'puck-win-animation': puckWinAnimation, 'puck-loss-animation': !puckWinAnimation}"></HockeyPuck>
    <HockeyPlayer :position="'C'" :team="2" :tooltipText="tooltipsActive ? 'Win the draw to either side depending on your play call.' : ''" :top="playerPositions.team2.C.top" :left="playerPositions.team2.C.left" class="team-2-C"></HockeyPlayer>
    <HockeyPlayer :position="'LW'" :team="2" :tooltipText="tooltipsActive ? 'Win the pocket, get out to the LD.' : ''" :top="playerPositions.team2.LW.top" :left="playerPositions.team2.LW.left" class="team-2-LW"></HockeyPlayer>
    <HockeyPlayer :position="'RW'" :team="2" :tooltipText="tooltipsActive ? 'Hold.' : ''" :top="playerPositions.team2.RW.top" :left="playerPositions.team2.RW.left" class="team-2-RW"></HockeyPlayer>
    <HockeyPlayer :position="'RD'" :team="2" :tooltipText="tooltipsActive ? 'Take the LW going around the circle. If you get blocked, you may have to meet him on the other side of the pile.' : ''" :top="playerPositions.team2.RD.top" :left="playerPositions.team2.RD.left" class="team-2-RD"></HockeyPlayer>
    <HockeyPlayer :position="'LD'" :team="2" :tooltipText="tooltipsActive ? 'Win the pocket, take the RW going to the net.' : ''" :top="playerPositions.team2.LD.top" :left="playerPositions.team2.LD.left" class="team-2-LD"></HockeyPlayer>
    <!--Puck-->
</template>

<script>
import RinkWithButtons from '@/components/RinkWithButtons.vue';
import HockeyPlayer from '@/components/HockeyPlayer.vue';
import HockeyPuck from '@/components/HockeyPuck.vue';

export default {
    name: 'NiagaraView',
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
        },
        onPlayWin() {
            this.tooltipsActive = false;
            this.puckWinAnimation = true;

            //give the puck to the LW
            this.puckLocation = this.playerPositions.team1.LW;
            
            setTimeout(() => {
                this.puckWinAnimation = false;

                //get the team 2 LW out to the team 1 RD
                this.playerPositions.team2.LW = { top: this.playerPositions.team1.RD.top + 4, left: this.playerPositions.team1.RD.left + 3 };
                this.animateTeam1LW();
                this.animateTeam2RD();
                this.animateTeam1RW();
                
            }, 200);
        },
        animateTeam1LW() {
            const start = { top: this.playerPositions.team1.LW.top, left: this.playerPositions.team1.LW.left };
            const control = { top: 25, left: 30 }; //change the shape of the curve
            const end = { top: 56, left: 23.1 };
            let startTime = null;

            const animation = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;
                const t = progress / 1000; // Adjust the denominator to change the speed

                const top = Math.pow(1 - t, 2) * start.top + 2 * (1 - t) * t * control.top + Math.pow(t, 2) * end.top;
                const left = Math.pow(1 - t, 2) * start.left + 2 * (1 - t) * t * control.left + Math.pow(t, 2) * end.left;

                this.playerPositions.team1.LW.top = top;
                this.playerPositions.team1.LW.left = left;

                if (t <= 1) {
                    requestAnimationFrame(animation);
                }
            };
            requestAnimationFrame(animation);
        },
        animateTeam2RD() {
            const start = { top: this.playerPositions.team2.RD.top, left: this.playerPositions.team2.RD.left };
            const control = { top: 55, left: 30 }; //change the shape of the curve
            const end = { top: 59, left: 28 };
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
        },
        animateTeam1RW() {
            const start = { top: this.playerPositions.team1.RW.top, left: this.playerPositions.team1.RW.left };
            const control = { top: 70, left: 30 }; //change the shape of the curve
            const end = { top: 57, left: 43 };
            let startTime = null;

            const animation = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;
                const t = progress / 1000; // Adjust the denominator to change the speed

                const top = Math.pow(1 - t, 2) * start.top + 2 * (1 - t) * t * control.top + Math.pow(t, 2) * end.top;
                const left = Math.pow(1 - t, 2) * start.left + 2 * (1 - t) * t * control.left + Math.pow(t, 2) * end.left;

                this.playerPositions.team1.RW.top = top;
                this.playerPositions.team1.RW.left = left;
                this.playerPositions.team2.LD = { top: top + 8, left: left };

                if (t <= 1) {
                    requestAnimationFrame(animation);
                }
            };
            requestAnimationFrame(animation);
        },
        animateTeam1RWStraight() {
            const start = { top: this.playerPositions.team1.RW.top, left: this.playerPositions.team1.RW.left };
            const end = { top: 60, left: 23.1 };
            let startTime = null;

            const animation = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;
                const t = progress / 1000; // Adjust the denominator to change the speed

                const top = start.top + (end.top - start.top) * t;
                const left = start.left + (end.left - start.left) * t;

                this.playerPositions.team1.RW.top = top;
                this.playerPositions.team1.RW.left = left;
                this.playerPositions.team2.LD = { top: top + 8, left: left };

                if (t <= 1) {
                    requestAnimationFrame(animation);
                }
            };
            requestAnimationFrame(animation);
        },
        animateTeam1LWForLoss() {
            const start = { top: this.playerPositions.team1.LW.top, left: this.playerPositions.team1.LW.left };
            const end = { top: 34, left: 32 };
            let startTime = null;

            const animation = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;
                const t = progress / 1000; // Adjust the denominator to change the speed

                const top = start.top + (end.top - start.top) * t;
                const left = start.left + (end.left - start.left) * t;

                this.playerPositions.team1.LW.top = top;
                this.playerPositions.team1.LW.left = left;

                if (t <= 1) {
                    requestAnimationFrame(animation);
                }
            };
            requestAnimationFrame(animation);
        },
        onPlayLoss()
        {
            this.puckWinAnimation = true;
            this.tooltipsActive = false;

            //move the puck to the left corner
            this.puckLocation = { top: 70, left: 23.1 };
            this.animateTeam1RWStraight();
            this.animateTeam1LWForLoss();
        }
    },
}

</script>

<style scoped>
.puck-win-animation {
    position: absolute;
    transition: top 0.2s ease, left 0.2s ease;
}

.team-2-LW {
    position: absolute;
    transition: top 1.8s ease, left 1.8s ease;
}

</style>