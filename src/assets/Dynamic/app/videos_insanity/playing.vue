<template>
    <div class="playingContainer">
        <div id="player" class="left">
            <video width="100%" height="100%" controls>
            <source v-bind:src="source" type="video/mp4" >
             </video>
         </div> 
        <div class="right">
            <h2>Suggested Videos</h2>
            <div @click="openVideo(n)" v-for="(n,index) in videosList" class="videoSuggestionItem">
                <div v-bind:style="{ backgroundColor:n.backgroundCol }" class="videoSuggestionItemImage">
                   Day {{index+1}}
                </div>
                <div class="text">{{n.name}}</div>
            </div>
        </div> 
    </div>
</template>

<style scoped>
.playingContainer{
     height:1000px;
    display: flex;
    flex-wrap: wrap;
}
.left{
    height:500px;
     width: 800px;
     
 }
 .right h2{
     color:lightgray;
     font-weight: bold;
     padding: 5px;
 }
.right{
     width:400px;
    height:460px;
    margin-top: 40px;
    overflow-y: auto;
 }
 .videoSuggestionItem:hover{
     cursor:pointer;
 }
 .videoSuggestionItem{
      width: 100%;
     height:100px;
     display: flex;
     margin-top: 5px;
      padding: 10px;
 }
 .videoSuggestionItemImage{
      width: 100px;
     height: 100%;
     display: flex;
     align-items: center;
     justify-content: center;
     text-align: center;
     color:white;
     font-size: 25px;

 }
 .videoSuggestionItem .text{
      display: flex;
     align-items: center;
     justify-content: center;
     text-align: center;
     width: 80%;
 }
</style>

<script>
 

export default{
    data:function(){
        return {
            source:null,
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
    },created(){
        //scroll up
        window.scrollTo(0,0);

        let link= "https://socialstation.nyc3.digitaloceanspaces.com/"+this.$route.params.src;
        this.source=link;
    },mounted(){
      

        

    },methods:{
        openVideo(n){
            if(n.sourceLink=="rest"){
                return;
            }
            this.$router.push("/c/insanity/play/"+n.sourceLink);
            location.reload();
            //reload the page

        }
    }
}
</script>