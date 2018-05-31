<!--

 @author Daking123
  @date- 15/05/2018

  Comments-
  create a fact

-->

<style scoped>
.createFactContainer{
    padding:30px;
    width:500px;
    font-family: 'Roboto', sans-serif;

}
.factInput{
    width:300px;
    padding:10px;
    border-radius: 4px;
    border:none;
    position: relative;
    top:10px;
    outline:none;
}
.charRemaining{
    position: relative;
    top:20px;
    color:grey;
}
 
 .progressBarCont{
     display: flex;
     align-items: center;
     justify-content: center;
 }
</style>


<template>
<div>
    <div class="createFactContainer">
          create a fact here, fill in the form below
        <input v-model="factTyped"  v-on:keyup.enter="submitFact" v-on:keyup="typingFact" class="factInput" type="text" placeholder="type a fact and push enter"/>
        <div class="charRemaining">{{charRemaining}}/141 characters</div>
        
     </div>
     <div v-if="isLoading" class="progressBarCont">
         <v-progress-circular :size="60" :width="6" indeterminate color="red"></v-progress-circular>
     </div>
     </div>
</template>


<script>
import {db} from './../../firestore.js';

console.log(db);

//import the firebase database instance
export default{
    data:function(){
        return {
            charRemaining:0,
            factTyped:'',
            isLoading:false
        }
    }, 
    firestore(){
            return {
                randiFactsCollection:db.collection("randiFactsCollection")
            }
        },methods:{
        typingFact(){
            var totalChars= this.factTyped.length;
            this.charRemaining=totalChars;
        },submitFact(){
            var home=this;
            if(this.factTyped.length>=142){
                alert("too many characters delete some chracters and try submitting again");

            }else{
                 //crear fact input
                 home.isLoading=true;
                 this.$firestore.randiFactsCollection.add({
                    fact:home.factTyped
                }).then((result) => {
                    home.isLoading=false;
                    this.factTyped="";
                }).catch((err) => {
                    
                });
             }
        }
    }
}
</script>