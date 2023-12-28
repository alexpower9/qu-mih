<template>
    <div class="puck" :style="{ top: top + '%', left: left + '%', position: 'absolute', transform: 'translate(-50%, -50%)' }">
    </div>
</template>

<script>
export default 
{
    name: 'HockeyPuck',
    props: {
        top: {
            type: Number,
            required: true
        },
        left: {
            type: Number,
            required: true
        }
    },
}
</script>

<style scoped>
.puck{
    background-color: black;
    border-radius: 50%;
    width: 10px;  
    height: 10px; 
}
</style>