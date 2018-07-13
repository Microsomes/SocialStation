<template>
<div class="listContainer">
    <div @click="openVideo(index)"  v-bind:style="{ backgroundColor:index.backgroundCol }"  v-for="(index,key) in videosList" class="videoItem">
        {{index.name}}
    </div>
      
</div>
</template>

<script>
export default{
    data:function(){
        return {
            videosList:[
                {
                    name:'Shape Shift Day 1 Speed',
                    backgroundCol:'#ff6698',
                    sourceLink:'1.%20Speed%2025.mp4'
                },
                {
                    name:'Shape Shift Day 2 Strength',
                    backgroundCol:'#ff6698',
                    sourceLink:'2.%20Strength%2025.mp4'
                },
                {
                    name:'Shape Shift Day 3 Speed',
                    backgroundCol:'#ff6698',
                    sourceLink:'1.%20Speed%2025.mp4'
                },
                {
                     name:'Shape Shift Day 4 Strength',
                    backgroundCol:'#ff6698',
                    sourceLink:'2.%20Strength%2025.mp4'
                },
                {
                    name:'Shape Shift Day 5 Speed',
                    backgroundCol:'#ff6698',
                    sourceLink:'1.%20Speed%2025.mp4'
                },
                {
                    name:'Shape Shift Day 6 Strength',
                    backgroundCol:'#ff6698',
                    sourceLink:'2.%20Strength%2025.mp4'
                },
                {
                    name:'Rest',
                    backgroundCol:'#ff6698',
                    sourceLink:'rest'
                },
                 {
                    name:'Shape Shift Day 8 Speed',
                    backgroundCol:'#ffb366',
                    sourceLink:'1.%20Speed%2025.mp4'
                },
                {
                    name:'Shape Shift Day 9 Strength ',
                    backgroundCol:'#ffb366',
                    sourceLink:'3.%20Sp%D0%B5%D0%B5d%2035.mp4'
                },
                {
                    name:'Shape Shift Day 10 Super Speed',
                    backgroundCol:'#ffb366',
                    sourceLink:'5.%20Sp%D0%B5%D0%B5d%2045.mp4'
                },
                {
                     name:'Shape Shift Day 11 Super Strength',
                    backgroundCol:'#ffb366',
                    sourceLink:'6.%20Strength%2045.mp4'
                },
                {
                    name:'Shape Shift Day 12 Core',
                    backgroundCol:'#ffb366',
                    sourceLink:'7.%20Shift%20Core.mp4'
                },
                {
                    name:'Shape Shift Day 13 Easy Speed',
                    backgroundCol:'#ffb366',
                    sourceLink:'3.%20Sp%D0%B5%D0%B5d%2035.mp4'
                },
                {
                    name:'Have a coke (: rest',
                    backgroundCol:'#ffb366',
                    sourceLink:'rest'
                },
                 {
                    name:'Shape Shift Day 15 Super Speed',
                    backgroundCol:'#6698ff',
                    sourceLink:'5.%20Sp%D0%B5%D0%B5d%2045.mp4'
                },
                {
                    name:'Shape Shift Day 16 Super Stength',
                    backgroundCol:'#6698ff',
                    sourceLink:'5.%20Sp%D0%B5%D0%B5d%2045.mp4'
                },
                {
                    name:'Shape Shift Day 17 Core',
                    backgroundCol:'#6698ff',
                    sourceLink:'7.%20Shift%20Core.mp4'
                },
                {
                     name:'Shape Shift Day 18 Morb',
                    backgroundCol:'#6698ff',
                    sourceLink:'8.%20Shift%20Mobility.mp4'
                },
                {
                    name:'Shape Shift Day 19 Mid Speed',
                    backgroundCol:'#6698ff',
                    sourceLink:'3.%20Sp%D0%B5%D0%B5d%2035.mp4'
                },
                {
                    name:'Shape Shift Day 20 Mid Strength',
                    backgroundCol:'#6698ff',
                    sourceLink:'4.%20Strength%2035.mp4'
                },
                {
                    name:'Doritos time (: congrats',
                    backgroundCol:'#6698ff',
                    sourceLink:'rest'
                }
            ]
        }
    },methods:{
        openVideo(sourceLink){
            if(sourceLink.sourceLink=="rest"){
                return;
            }
            this.$router.push("/c/insanity/play/"+sourceLink.sourceLink)
        }
    },mounted(){
        window.scrollTo(0,0);
    }
}
</script>

<style scoped>
.listContainer{
     display: flex;
    flex-wrap: wrap;
    font-family: 'Roboto', sans-serif;
    width: 100%;
    justify-content: center;

}
    .videoItem:hover{
        cursor:pointer;
    }

    .videoItem{
         width:200px;
        height:200px;
        margin:10px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        font-size: 20px;
        color:white;
    }
</style>