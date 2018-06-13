<!--
@author Muhammed T Javed
@date 13/06/2018
-- add confession form
-->

<style scoped>
.addConfessionContainer{
    display: flex;
    align-items: center;
    justify-content: center;
 }
.title{
    color:grey;
    font-weight: bold;
    padding: 10px;
    font-family: 'Roboto', sans-serif;
    text-align: center;

}
.confessionformcon{
    display: flex;
    flex-flow: column;
}
textarea{
       padding: 5px;
    background: #F2F2F2;
    margin: 5px;
    border-radius: 5px;
    outline:none;
    text-align: center;
    min-width: 300px;
    resize: none;
    min-height:100px;
}
.confessionformcon input[type="text"]{
     padding: 5px;
    background: #F2F2F2;
    margin: 5px;
    border-radius: 5px;
    outline:none;
    text-align: center;
    min-width: 300px;
}

@media only screen and (max-width: 600px) {
    .addConfessionContainer{
         width:100%;
    }
    .confessionForm{
        width:100%;
        overflow: hidden;
     }
    .confessionformcon{
         width:100%;
    }
    .confessionformcon input[type="text"]{
        width:100%;
        margin:0px;
        margin-top:4px;
    }
    textarea{
        width:100%;
        margin:0px;
    }
}

</style>

<template>
<div class="addConfessionContainer">
    <div class="confessionForm">
        <div class="title">Add Confession</div>
        <div class="confessionformcon">
        <textarea v-model="confessionText" type="text" placeholder="confession"></textarea>
        <div v-for="(n,index) in tags">
                <input type="text" v-model="tags[index]" placeholder="type a tag then click tab"/>
        </div>
        <input v-on:keyup.enter="addTag" v-model="typing" type="text" placeholder="type a tag then click enter"/>
        <v-btn @click="addConfession()" style="padding:0px;font-family: 'Roboto', sans-serif;">Add Confession</v-btn>
        <em style="text-align:center;" v-if="feedback">{{feedback}}</em>
        </div>
    </div>
 </div>
</template>

<script>

import {db} from './../../../../firestore.js';
//import firebase database sdk
import slugify from 'slugify';
//import the slugify library

export default{
    data:function(){
        return {
            feedback:null,
            typing:'',
            tags:[],
            confessionText:null
        }
    },methods:{
        addTag(){
            if(this.typing.length>=1){
                //their is something here
                 // //method that adds a tag
             this.tags.push(this.typing);
             this.typing="";
            }else{
                this.feedback="nothing in tags";
            }
            
        },
        addConfession(){
             const username=this.$store.state.authRelated.loginDetails.profileMeta.username;
            //grab currently signed in username

            
          
            this.feedback="Adding confession.";
            if(this.confessionText && this.tags.length>=1){
            this.feedback="Adding confession.";
             //create a slug and tac a timestamp at the end
             var slug= slugify(this.$moment().format()+"-"+this.confessionText,{
                replacement:'-',
                remove:/[$*_+~.()'"!\-:@]/g,
                lower:true
            });
                db.collection("confessions").add({
                    confessionText:this.confessionText,
                    confessionTimestamp:this.$moment().format(),
                    confessionby:username,
                    confessionTags:this.tags,
                    slug:slug
                }).then(stats=>{
                    this.feedback="Confession Added";
                    this.confessionText=""
                    this.tags=[];

                }).catch(err=>{
                    this.feedback="Error Please try again";
                })
            }else{
                this.feedback="Please fill in all the boxex.";
            }

            

            
        }
    }
}

</script>