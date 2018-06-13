<!--
@author Muhammed T Javed
@date 06/06/2018
- this module updates the currently signed in users profile 
-->

<style scoped>
.updateProfileContainer{
    min-height:300px;
    width: 100%;
}
.title{
    color:grey;
    padding: 10px;
    font-family: 'Roboto', sans-serif;
}

.explanation{
    color:grey;
    font-family: 'Roboto', sans-serif;
    padding: 10px;
}

.textInput{
    border:1px solid lightblue;
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    margin-top: 5px;
    outline:none;
}

.textarea{
    resize: none;
}
.updateProfileButtons{
background:#D35B5B;
border-radius:5px;
color:white;
font-family: 'Roboto', sans-serif;

}
</style>

<template>
<div class="updateProfileContainer">
    <div class="title">Add pinned read.</div>
    <div class="explanation">
    Want to read something but don't have time pin it within your pinned read to keep track of it and read it later.
    </div>    
    <input class="textInput" type="text" v-model="formValues.title" placeholder="Title"/>
    <input class="textInput" type="text" v-model="formValues.link" placeholder="Link"/>
 
      <v-btn style="padding:0px;" @click="addPin();" class="updateProfileButtons" >Add</v-btn>
    <v-btn style="padding:0px;" @click="cancelPinForm();" class="updateProfileButtons">Cancel</v-btn>
    <em v-if="feedback">{{feedback}}</em>
</div>
</template>

<script>

 import {db} from './../../../../../firestore.js';
//import database to update valeus
import {storage} from './../../../../../firestore.js';
 // //import storage sdk to upload images to firebase

export default{
    data:function(){
        return {
            feedback:null,
            formValues:{
                link:null,
                title:null,
                timestamp:''
            }
        }
    },methods:{
        cancelPinForm(){
            //sent emit message to parent to close the add pin form
            this.$emit("closePinForm","close");
        },
        addPin(){
        //method used to add pin form
        //check if link and title have been fileld
         const useruid= this.$store.state.authRelated.loginDetails.profileMeta.uid;
        //user id needed to grab user reference
        this.feedback="Adding pin";
        if(this.formValues.title && this.formValues.link){
            //fields have been filled 

            //send data up to fire store

            var usersRef= db.collection("users").where("uid","==",useruid);
            usersRef.get().then(user=>{
                user.forEach(u=>{
                   
                   u.ref.collection("pinnedReads").add({
                       link:this.formValues.link,
                       title:this.formValues.title,
                       timestamp:this.$moment().format()
                   }).then(status=>{
                       this.feedback="Pin added.";
                   }).catch(err=>{
                       this.feedback="Error please try again."
                   })
                })
            }).catch(err=>{
                this.feedback="Something went wrong please try again.";
            })

        }else{
            this.feedback="Please enter all fields";
        }



        }
    }
}

</script>