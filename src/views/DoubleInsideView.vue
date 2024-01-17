<template>
    <div class="double-inside">
        <RinkWithButtons :tooltipText="'This is for an ID play being run'" @reset="resetPlayers" @play-win="onPlayWin" @play-loss="onPlayLoss"></RinkWithButtons>
    </div>
        <div class="team-1">
            <HockeyPlayer :position="'RW'" :team="1" :tooltipText="tooltipsActive ? 'Quick shot! It is important to note that the LW and RW are interchangable, depending on the handedness of the player' : ''" :top="playerPositions.team1.RW.top" :left="playerPositions.team1.RW.left" class="team-1-RW"></HockeyPlayer>
            <HockeyPlayer :position="'LW'" :team="1" :tooltipText="tooltipsActive ? 'Win the pocket.' : ''" :top="playerPositions.team1.LW.top" :left="playerPositions.team1.LW.left" class="team-1-LW"></HockeyPlayer>
            <HockeyPlayer :position="'C'" :team="1" :tooltipText="tooltipsActive ? 'Win the draw to the inside forward.' : ''" :top="playerPositions.team1.C.top" :left="playerPositions.team1.C.left" class="team-1-C"></HockeyPlayer>
            <HockeyPlayer :position="'LD'" :team="1" :tooltipText="tooltipsActive ? 'Play hockey.' : ''" :top="playerPositions.team1.LD.top" :left="playerPositions.team1.LD.left" class="team-1-LD"></HockeyPlayer>
            <HockeyPlayer :position="'RD'" :team="1" :tooltipText="tooltipsActive ? 'Win the pocket, if the face-off is lost cleanly, back off.' : ''" :top="playerPositions.team1.RD.top" :left="playerPositions.team1.RD.left" class="team-1-RD"></HockeyPlayer>
        </div>
        <div class="team-2">
            <HockeyPlayer :position="'C'" :team="2" :tooltipText="tooltipsActive ? 'A common defensive play call against the DI would be ID, but the puck can also be won to the LW corner.' : ''" :top="playerPositions.team2.C.top" :left="playerPositions.team2.C.left" class="team-2-C"></HockeyPlayer>
            <HockeyPlayer :position="'LW'" :team="2" :tooltipText="tooltipsActive ? 'Win the pocket, be ready to make a play if the puck gets won to your corner.' : ''" :top="playerPositions.team2.LW.top" :left="playerPositions.team2.LW.left" class="team-2-LW"></HockeyPlayer>
            <HockeyPlayer :position="'RW'" :team="2" :tooltipText="tooltipsActive ? 'Hold.' : ''" :top="playerPositions.team2.RW.top" :left="playerPositions.team2.RW.left" class="team-2-RW"></HockeyPlayer>
            <HockeyPlayer :position="'RD'" :team="2" :tooltipText="tooltipsActive ? 'Win the pocket.' : ''" :top="playerPositions.team2.RD.top" :left="playerPositions.team2.RD.left" class="team-2-RD"></HockeyPlayer>
            <HockeyPlayer :position="'LD'" :team="2" :tooltipText="tooltipsActive ? 'Be ready for the puck off the face-off, and also be prepared to help with the shot-block' : ''" :top="playerPositions.team2.LD.top" :left="playerPositions.team2.LD.left" :class="{ 'win-animation': isWin }" class="team-2-LD"></HockeyPlayer>
        </div>
        <HockeyPuck :top="puckLocation.top" :left="puckLocation.left" :class="{ 'puck-win-animation': puckWinAnimation }" class="puck"></HockeyPuck>
</template>

<script>
import RinkWithButtons from '@/components/RinkWithButtons.vue';
import HockeyPlayer from '@/components/HockeyPlayer.vue';
import HockeyPuck from '@/components/HockeyPuck.vue';

export default {
    name: 'DoubleInsideView',
    components: { RinkWithButtons, HockeyPlayer, HockeyPuck},
    data() {
        return{
            tooltipsActive: true,
            puckLocation: {
                top: 50.25,
                left: 31.14
            },
            isWin: false,
            puckWinAnimation: false,
            playerPositions: {
                team1: {
                    RW: {
                        top: 37,
                        left: 35.9
                    },
                    LW: {
                        top: 46,
                        left: 39
                    },
                    C: {
                        top: 47,
                        left: 31.2
                    },
                    RD: {
                        top: 46,
                        left: 23.4
                    },
                    LD: {
                        top: 22,
                        left: 28
                    }
                },
                team2: {
                    C: {
                        top: 54,
                        left: 31.2
                    },
                    LW: {
                        top: 54,
                        left: 23.1
                    },
                    RW: {
                        top: 54,
                        left: 45
                    },
                    RD: {
                        top: 54,
                        left: 39.1
                    },
                    LD: {
                        top: 59,
                        left: 38
                    }
                }
            }
        }   
    },
    methods: {
        resetPlayers() {

            this.playerPositions = {
                team1: {
                RW: { top: 37, left: 35.9 },
                LW: { top: 46, left: 39 },
                C: { top: 47, left: 31.2 },
                RD: { top: 46, left: 23.4 },
                LD: { top: 22, left: 28 }
            },
                team2: {
                C: { top: 54, left: 31.2 },
                LW: { top: 54, left: 23.1 },
                RW: { top: 54, left: 45 },
                RD: { top: 54, left: 39.1 },
                LD: { top: 59, left: 38 }
            }
          };
          this.puckLocation = { top: 50.25, left: 31.14 };
          this.tooltipsActive = true;
        },
        animateTeam2LD() {
            const start = { top: this.playerPositions.team2.LD.top, left: this.playerPositions.team2.LD.left };
            const control = { top: 63, left: 30 }; //change the shape of the curve
            const end = { top: 56, left: 27 };
            let startTime = null;

            const animation = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;
                const t = progress / 1000; // Adjust the denominator to change the speed

                const top = Math.pow(1 - t, 2) * start.top + 2 * (1 - t) * t * control.top + Math.pow(t, 2) * end.top;
                const left = Math.pow(1 - t, 2) * start.left + 2 * (1 - t) * t * control.left + Math.pow(t, 2) * end.left;
                this.puckWinAnimation = false;

                this.playerPositions.team2.LD.top = top;
                this.playerPositions.team2.LD.left = left;
                this.puckLocation.top = top;
                this.puckLocation.left = left;

                if (t <= 1) {
                    requestAnimationFrame(animation);
                }
            };
            requestAnimationFrame(animation);
        },
        onPlayWin(){
            this.isWin = true; //handles the LD animation, as they are different if the play is won or lost
            this.puckWinAnimation = true;
            this.tooltipsActive = false;
            
            //first, move the puck
            this.puckLocation.top = 38.7;
            this.puckLocation.left = 35.9;

            //Team 1 LW
            this.playerPositions.team1.LW.top = 47;
            this.playerPositions.team1.LW.left = 36;

            //Team 1 RD
            this.playerPositions.team1.RD.top = 47;
            this.playerPositions.team1.RD.left = 26;
            
            //Team 2 RD
            this.playerPositions.team2.RD.top = 50;
            this.playerPositions.team2.RD.left = 36

            //Team 2 LD
            this.playerPositions.team2.LD.top = 52;
            this.playerPositions.team2.LD.left = 38;

            //Team 2 LW
            this.playerPositions.team2.LW.top = 50;
            this.playerPositions.team2.LW.left = 26;

        },
        onPlayLoss(){
            this.isWin = false; //handles the LD animation, as they are different if the play is won or lost
            this.puckWinAnimation = true;
            this.tooltipsActive = false;

            this.puckLocation.top = 59;
            this.puckLocation.left = 38;
            setTimeout(() => {
                this.animateTeam2LD();
            }, 200);
            setTimeout(() => {
                //Team 1 LW
                this.playerPositions.team1.LW.top = 47;
                this.playerPositions.team1.LW.left = 36; 

                //Team 1 LD
                this.playerPositions.team1.LD.left = 35.9;

                //Team 2 RD
                this.playerPositions.team2.RD.top = 50;
                this.playerPositions.team2.RD.left = 36

                //team 1 RD
                this.playerPositions.team1.RD.top = 22;

                //team 2 LW
                this.playerPositions.team2.LW.top = 30;

                this.playerPositions.team2.RW.top = 52;

                //Just move the centers upwards a bit
                this.playerPositions.team1.C.top = 40;
                this.playerPositions.team2.C.top = 45;

            }, 200);
        }
    }
}
</script>

<style scoped>
.team-1-LW, .team-2-RD, .team-2-LW, .team-1-C, .team-2-C, .team-2-RW,.win-animation{
    position: absolute;
    transition: top 0.5s ease, left 0.5s ease;
}
.team-1-LD
{
    position: absolute;
    transition: left 0.8s ease;
}
.team-1-RD,.team-2-LW{
    position: absolute;
    transition: top 0.8s ease, left 0.8s ease;
}
.puck-win-animation{
    position: absolute;
    transition: top 0.2s ease, left 0.2s ease;
}
</style>
