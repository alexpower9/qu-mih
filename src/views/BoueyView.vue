<template>
    <RinkWithButtons :toolTipTextWin="'Be prepared if the extra player on the outside is a d-man, which alters the defensive alignment.'"  :tooltipText="'A common play call against the Bouey would be ID.'" @reset="resetPlayers" @play-win="onPlayWin" @play-loss="onPlayLoss"> </RinkWithButtons>
    <!--Team 1-->
    <HockeyPlayer :position="'RW'" :team="1" :tooltipText="tooltipsActive ? 'Get to the net.' : ''" :top="playerPositions.team1.RW.top" :left="playerPositions.team1.RW.left" class="team-1-RW"></HockeyPlayer>
    <HockeyPlayer :position="'LW'" :team="1" :tooltipText="tooltipsActive ? 'Win the pocket and get to the net.' : ''" :top="playerPositions.team1.LW.top" :left="playerPositions.team1.LW.left" class="team-1-LW"></HockeyPlayer>
    <HockeyPlayer :position="'C'" :team="1" :tooltipText="tooltipsActive ? 'Push, or win it to the LD.' : ''" :top="playerPositions.team1.C.top" :left="playerPositions.team1.C.left" class="team-1-C"></HockeyPlayer>
    <HockeyPlayer :position="'LD'" :team="1" :tooltipText="tooltipsActive ? 'Be ready to get a quick shot off.' : ''" :top="playerPositions.team1.LD.top" :left="playerPositions.team1.LD.left" class="team-1-LD"></HockeyPlayer>
    <HockeyPlayer :position="'RD'" :team="1" :tooltipText="tooltipsActive ? 'Win the pocket and go back to the your spot..' : ''" :top="playerPositions.team1.RD.top" :left="playerPositions.team1.RD.left" class="team-1-RD"></HockeyPlayer>
    <!-- Team 2 -->
    <HockeyPlayer :position="'C'" :team="2" :tooltipText="tooltipsActive ? 'Win the draw to either side depending on your play call.' : ''" :top="playerPositions.team2.C.top" :left="playerPositions.team2.C.left" class="team-2-C"></HockeyPlayer>
    <HockeyPlayer :position="'LW'" :team="2" :tooltipText="tooltipsActive ? 'Win the pocket, get out to the LD.' : ''" :top="playerPositions.team2.LW.top" :left="playerPositions.team2.LW.left" class="team-2-LW"></HockeyPlayer>
    <HockeyPlayer :position="'RW'" :team="2" :tooltipText="tooltipsActive ? 'Get out to the LD.' : ''" :top="playerPositions.team2.RW.top" :left="playerPositions.team2.RW.left" class="team-2-RW"></HockeyPlayer>
    <HockeyPlayer :position="'RD'" :team="2" :tooltipText="tooltipsActive ? 'Take the LW.' : ''" :top="playerPositions.team2.RD.top" :left="playerPositions.team2.RD.left" class="team-2-RD"></HockeyPlayer>
    <HockeyPlayer :position="'LD'" :team="2" :tooltipText="tooltipsActive ? 'Take the RW.' : ''" :top="playerPositions.team2.LD.top" :left="playerPositions.team2.LD.left" class="team-2-LD"></HockeyPlayer>
    <!--Puck-->
    <HockeyPuck :top="puckLocation.top" :left="puckLocation.left" :class="{ 'puck-win-animation': puckWinAnimation, 'puck-loss-animation': !puckWinAnimation}"></HockeyPuck>
</template>

<script>
import RinkWithButtons from '@/components/RinkWithButtons.vue';
import HockeyPlayer from '@/components/HockeyPlayer.vue';
import HockeyPuck from '@/components/HockeyPuck.vue';

export default {
    name: 'BoueyView',
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
                    RW: { top: 46, left: 45 },
                    LW: { top: 46, left: 39 },
                    C: { top: 47, left: 31.2 },
                    RD: { top: 46, left: 23 },
                    LD: { top: 27, left: 28 }
                },
                team2: {
                    C: { top: 54, left: 31.2 },
                    LW: { top: 54, left: 23.1 },
                    RW: { top: 54, left: 39.1 },
                    RD: { top: 59, left: 38 },
                    LD: { top: 54, left: 45}
                }
            }
        }
    },
    methods: {
        resetPlayers() {
        this.playerPositions = {
            team1: {
                RW: { top: 46, left: 45 },
                LW: { top: 46, left: 39 },
                C: { top: 47, left: 31.2 },
                RD: { top: 46, left: 23 },
                LD: { top: 27, left: 28 }
            },
            team2: {
                C: { top: 54, left: 31.2 },
                LW: { top: 54, left: 23.1 },
                RW: { top: 54, left: 39.1 },
                RD: { top: 59, left: 38 },
                LD: { top: 54, left: 45}
            }
        }
        this.puckLocation = { top: 50.25, left: 31.14 };
        this.tooltipsActive = true;
        this.puckWinAnimation = false;
        },
        onPlayWin() {
            this.puckWinAnimation = true;
            this.puckLocation = this.playerPositions.team1.LD;

            //have the RD and LW come in a bit
            this.playerPositions.team1.RD = { top: this.playerPositions.team1.RD.top + 2, left: this.playerPositions.team1.RD.left + 3 }; //now do the same for the RD
            this.playerPositions.team2.LW = { top: this.playerPositions.team2.LW.top -2, left: this.playerPositions.team2.LW.left + 3 }; //now do the same for the LW

            //Have the RW get out to the LD
            this.playerPositions.team2.RW = { top: this.playerPositions.team1.LD.top + 4, left: this.playerPositions.team1.LD.left + 3 };

            //Move the two team 1 wingers a bit
            this.playerPositions.team1.RW = { top: this.playerPositions.team1.RW.top + 4, left: this.playerPositions.team1.RW.left};
            this.playerPositions.team1.LW = { top: this.playerPositions.team1.LW.top + 4, left: this.playerPositions.team1.LW.left + 2};

            //move the team 2 RW
            this.playerPositions.team2.RD = { top: this.playerPositions.team2.RD.top - 5, left: this.playerPositions.team2.RD.left + 3};
        }   
    }
}
</script>

<style scoped>
.puck-win-animation{
    position: absolute;
    transition: top 0.3s ease, left 0.3s ease;
}
.team-1-RD, .team-2-LW, .team-2-RW, .team-1-RW, .team-1-LW, .team-2-RD{
    position: absolute;
    transition: top 0.6s ease, left 0.6s ease;
}
</style>