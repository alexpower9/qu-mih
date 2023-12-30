<template>
    <RinkWithButtons :tooltipText="'There is no loss play for this face off.'" @reset="resetPlayers" @play-win="onPlayWin" @play-loss="onPlayLoss"></RinkWithButtons>
    <!-- Team 1 -->
    <HockeyPlayer :position="'RW'" :team="1" :tooltipText="tooltipsActive ? 'This player should be a left shot to make it effective, and a right shot for doria from the other circle.' : ''" :top="playerPositions.team1.RW.top" :left="playerPositions.team1.RW.left" class="team-1-RW"></HockeyPlayer>
    <HockeyPlayer :position="'LW'" :team="1" :tooltipText="tooltipsActive ? 'Win the pocket, get to the net.' : ''" :top="playerPositions.team1.LW.top" :left="playerPositions.team1.LW.left" class="team-1-LW"></HockeyPlayer>
    <HockeyPlayer :position="'C'" :team="1" :tooltipText="tooltipsActive ? 'Win the draw to the RW.' : ''" :top="playerPositions.team1.C.top" :left="playerPositions.team1.C.left" class="team-1-C"></HockeyPlayer>
    <HockeyPlayer :position="'LD'" :team="1" :tooltipText="tooltipsActive ? 'Be ready for a pass from the RW if he opts not to shoot (This is called the Telly).' : ''" :top="playerPositions.team1.LD.top" :left="playerPositions.team1.LD.left" class="team-1-LD"></HockeyPlayer>
    <HockeyPlayer :position="'RD'" :team="1" :tooltipText="tooltipsActive ? 'Play hockey.' : ''" :top="playerPositions.team1.RD.top" :left="playerPositions.team1.RD.left" class="team-1-RD"></HockeyPlayer>
    <!-- Team 2 -->
    <HockeyPlayer :position="'C'" :team="2" :tooltipText="tooltipsActive ? 'Win the draw to either side depending on your play call.' : ''" :top="playerPositions.team2.C.top" :left="playerPositions.team2.C.left" class="team-2-C"></HockeyPlayer>
    <HockeyPlayer :position="'LW'" :team="2" :tooltipText="tooltipsActive ? 'Win the pocket, get out to the RD, and be ready to help on the other teams RW coming around the circle.' : ''" :top="playerPositions.team2.LW.top" :left="playerPositions.team2.LW.left" class="team-2-LW"></HockeyPlayer>
    <HockeyPlayer :position="'RW'" :team="2" :tooltipText="tooltipsActive ? 'Hold.' : ''" :top="playerPositions.team2.RW.top" :left="playerPositions.team2.RW.left" class="team-2-RW"></HockeyPlayer>
    <HockeyPlayer :position="'RD'" :team="2" :tooltipText="tooltipsActive ? 'Take the LW' : ''" :top="playerPositions.team2.RD.top" :left="playerPositions.team2.RD.left" class="team-2-RD"></HockeyPlayer>
    <HockeyPlayer :position="'LD'" :team="2" :tooltipText="tooltipsActive ? 'It is crucial you get on the RW as quickly as possible if the draw is lost.' : ''" :top="playerPositions.team2.LD.top" :left="playerPositions.team2.LD.left" class="team-2-LD"></HockeyPlayer>
    <!--Puck-->
    <HockeyPuck :top="puckLocation.top" :left="puckLocation.left" :class="{ 'puck-win-animation': puckWinAnimation }" class="puck"></HockeyPuck>
</template>

<script>
import RinkWithButtons from '@/components/RinkWithButtons.vue';
import HockeyPlayer from '@/components/HockeyPlayer.vue';
import HockeyPuck from '@/components/HockeyPuck.vue';

export default
{
    name: "DoriaView",
    components: { RinkWithButtons, HockeyPlayer, HockeyPuck},
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
                    RW: {
                        top: 40,
                        left: 24.2
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
                        top: 22,
                        left: 23
                    },
                    LD: {
                        top: 22,
                        left: 39
                    }
                },
                team2: {
                    C: {
                        top: 54,
                        left: 31.2
                    },
                    LW: {
                        top: 54,
                        left: 39.1
                    },
                    RW: {
                        top: 54,
                        left: 45
                    },
                    RD: {
                        top: 59,
                        left: 38
                    },
                    LD: {
                        top: 54,
                        left: 23.1
                    }
                }
            }
        }
    },
    methods: {
        resetPlayers() {
            this.playerPositions = {
                team1: {
                    RW: { top: 40, left: 24.2 },
                    LW: { top: 46, left: 39 },
                    C: { top: 47, left: 31.2 },
                    RD: { top: 22, left: 23 },
                    LD: { top: 22, left: 39 }
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
            this.puckWinAnimation = true;
            //move the puck first
            this.puckLocation = { top: 40, left: 24.2 };
            
            setTimeout(() =>
            {
                this.playerPositions.team1.LW.top = 47;
                this.playerPositions.team1.LW.left = 36;

                this.playerPositions.team2.LW.top = 50;
                this.playerPositions.team2.LW.left = 36;

                this.playerPositions.team2.RD.top = 54;
                this.playerPositions.team2.RD.left = 39.1;
            }, 200);
            setTimeout(() =>
            {
                this.animateTeam1LW();
                this.playerPositions.team2.LD.top = 39;
                this.playerPositions.team2.LD.left = 31.2;
                
            }, 400);
        },
        animateTeam1LW()
        {
            const start = { top: this.playerPositions.team1.RW.top, left: this.playerPositions.team1.RW.left };
            const control = { top: 30, left: 30 }; //change the shape of the curve
            const end = { top: 35, left: 31.2 };
            let t = 0;

            const animation = () => {
                const top = Math.pow(1 - t, 2) * start.top + 2 * (1 - t) * t * control.top + Math.pow(t, 2) * end.top;
                const left = Math.pow(1 - t, 2) * start.left + 2 * (1 - t) * t * control.left + Math.pow(t, 2) * end.left;
                this.puckWinAnimation = false;


                this.playerPositions.team1.RW.top = top;
                this.playerPositions.team1.RW.left = left;
                this.puckLocation.top = top;
                this.puckLocation.left = left;

                t += 0.009; //will change the speed

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
.puck-win-animation, .team-1-LW, .team-2-LW, .team-2-RD
{
    position: absolute;
    transition: top 0.5s, left 0.5s ease;
}
.team-2-LD
{
    position: absolute;
    transition: top 1.2s, left 1.2s ease;
}
</style>
