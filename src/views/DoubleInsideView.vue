<template>
    <div class="double-inside">
        <RinkWithButtons @reset="resetPlayers" @play-win="onPlayWin" @play-loss="onPlayLoss"></RinkWithButtons>
    </div>
        <div class="team-1">
            <HockeyPlayer :position="'RW'" :team="1" :tooltipText="'Quick shot! It is important to note that the LW and RW are interchangable, depending on the handedness of the player'" :top="playerPositions.team1.RW.top" :left="playerPositions.team1.RW.left" class="team-1-RW"></HockeyPlayer>
            <HockeyPlayer :position="'LW'" :team="1" :tooltipText="'Win the pocket.'" :top="playerPositions.team1.LW.top" :left="playerPositions.team1.LW.left" class="team-1-LW"></HockeyPlayer>
            <HockeyPlayer :position="'C'" :team="1" :tooltipText="'Win the draw to the inside forward.'" :top="playerPositions.team1.C.top" :left="playerPositions.team1.C.left" class="team-1-C"></HockeyPlayer>
            <HockeyPlayer :position="'RD'" :team="1" :tooltipText="'Win the pocket, if the face-off is lost cleanly, back off.'" :top="playerPositions.team1.LD.top" :left="playerPositions.team1.LD.left" class="team-1-RD"></HockeyPlayer>
            <HockeyPlayer :position="'LD'" :team="1" :tooltipText="'Play hockey.'" :top="playerPositions.team1.RD.top" :left="playerPositions.team1.RD.left" class="team-1-LD"></HockeyPlayer>
        </div>
        <div class="team-2">
            <HockeyPlayer :position="'C'" :team="2" :tooltipText="'A common defensive play call against the DI would be ID, but the puck can also be won to the LW corner.'" :top="playerPositions.team2.C.top" :left="playerPositions.team2.C.left" class="team-2-C"></HockeyPlayer>
            <HockeyPlayer :position="'LW'" :team="2" :tooltipText="'Win the pocket, be ready to make a play if the puck gets won to your corner.'" :top="playerPositions.team2.LW.top" :left="playerPositions.team2.LW.left" class="team-2-LW"></HockeyPlayer>
            <HockeyPlayer :position="'RW'" :team="2" :tooltipText="'Hold.'" :top="playerPositions.team2.LW.top" :left="playerPositions.team2.RW.left" class="team-2-RW"></HockeyPlayer>
            <HockeyPlayer :position="'RD'" :team="2" :tooltipText="'Win the pocket.'" :top="playerPositions.team2.RD.top" :left="playerPositions.team2.RD.left" class="team-2-RD"></HockeyPlayer>
            <HockeyPlayer :position="'LD'" :team="2" :tooltipText="'Be ready for the puck off the face-off, and also be prepared to help with the shot-block'" class="team-2-LD"></HockeyPlayer>
        </div>
</template>

<script>
import RinkWithButtons from '@/components/RinkWithButtons.vue';
import HockeyPlayer from '@/components/HockeyPlayer.vue';

export default {
    name: 'DoubleInsideView',
    components: { RinkWithButtons, HockeyPlayer},
    data() {
        return{
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
        },
        onPlayWin(){
            this.playerPositions.team1.LW.top = 46;
            this.playerPositions.team1.LW.left = 36;
        }
    }
}
</script>

<style scoped>

</style>
