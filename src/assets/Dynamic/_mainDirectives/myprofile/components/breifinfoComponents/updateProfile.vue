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
    <div class="title">Edit Profile</div>
    <div class="explanation">_Full in all the data you feel comforable filling in. Its highly recommeneded that you fill in the entire form to have a more attractive profile.</div>

    <input class="textInput" type="text" placeholder="Your name"/>
    <input class="textInput" type="text" placeholder="Country,city"/>
    <textarea class="textInput textarea" placeholder="bio"></textarea>
    <input class="textInput" type="text" placeholder="Your Website"/>
    <input class="textInput" type="text" placeholder="Birthday"/>
    <div class="explanation" style="margin:0px;padding-top:5px;padding-top:5px;">Upload a profile picture</div>
    <input type="file"/>
    <v-btn @click="updateProfile();" class="updateProfileButtons" >Update</v-btn>
    <v-btn class="updateProfileButtons">Cancel</v-btn>
</div>
</template>

<script>
export default{
    data:function(){
        return {}
    },methods:{
        updateProfile(){
            //method will connect to my server and update profile
            alert("updating profile");
        },cancelUpdate(){
            //sends
        }
    }
}
</script>