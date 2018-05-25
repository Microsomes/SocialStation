<!--

 @author Daking123
  @date- 24/05/2018

  Comments-
  This is a dynamic that will load and display a random fact

-->

<style scoped>
p:hover{
     cursor: pointer;
}
.factText{
    position: relative;
    top:7px;
}
</style>

<template>
    <div>
        <p class="factText" @click="generateNewFact">{{randomFact}}</p>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            randomFact:'loading random fact',
            facts:[
             "Bitcoin was created by 1 person",
             "Banging your head against a wall burns 150 calories an hour.",
             "In the UK, it is illegal to eat mince pies on Christmas Day!",
             "The average woman uses her height in lipstick every 5 years",
             "Human saliva has a boiling point three times that of regular water",
             "Bananas are curved because they grow towards the sun",
             "During your lifetime you will produce enough saliva to fill two swimming pools",
             "Heart attacks are more likely to happen on Monday",
             "Jibrel Network is tokenizing the world",
             "A baby spider is called a spiderling",
             "95% of people text things they could never say in person",
             "A crocodile can't poke its tongue out",
             "Every human spent about half an hour as a single cell"
         ]
        }
    },created(){
        var home=this;
        //store instance of this
        setInterval(function(){ 
         home.generateNewFact();

         }, 10000);

         
  

    },methods:{
        generateNewFact(){
            //method generates a new fact

         var factsLength= this.facts.length;
        
        var randomIndex= Math.floor(Math.random() * factsLength) + 0;
        
        this.randomFact= this.facts[randomIndex];
        }
    }
}
</script>

