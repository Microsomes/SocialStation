<!--
@author Muhammed T Javed
@date 02/06/2018
- login form
-->

<style scoped>
h1{
    color:white;
    font-family: 'Roboto', sans-serif;

}
.header{
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.signUpContainer{
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    height: 300px;
    font-family: 'Roboto', sans-serif;

}
.signUpContainer input[type="text"], input[type="password"]{
    background: white;
    color:black;
    padding: 10px;
    border-radius: 5px;
    outline:none;
    margin-top:20px;
}
.promo{
    color:white;
    padding: 10px;
}
</style>


<template>
    <div class="loginCont">
        <div class="header">
        <h1>Sign up</h1>
        </div>
        <div class="promo">
  <div style="text-align:center;" class="promo">
            Social station is an open source modular social media platform. Learn more at <a target="_blank" style="color:white" href="https://socialstation.info">socialstation.info</a>
         </div>        </div>
        <div class="signUpContainer">
            <input v-on:keyup.enter="signUpUser" v-model="formValues.username" type="text" placeholder="username"/>
            <input v-on:keyup.enter="signUpUser" v-model="formValues.email" type="text" placeholder="email"/>
            <input v-on:keyup.enter="signUpUser" v-model="formValues.password" type="password" placeholder="password"/>
            <v-btn @click="signUpUser()" style="background:white;margin-top:20px;font-family: 'Roboto', sans-serif;padding:0px">Sign Up</v-btn>
        <em v-if="feedback">{{feedback}}</em>
        </div>
    </div>
</template>

<script>
import randomFactsViewer from './../../codeModules/randomFact';
import {auth} from './../../../firestore.js';
import {db} from './../../../firestore.js';
export default{
data:function(){
    return {
        feedback:null,
        formValues:{
            email:null,
            password:null,
            username:null
        }
    }
},components:{
    randomFactsViewer,
},methods:{
    signUpUser(){

        if(this.formValues.email && this.formValues.password && this.formValues.username){
            //attempting to sign you up

            //slugify username

            

            //check if username is unique
            
            //sign email with password

        }else{
            this.feedback="Please enter all fields to sign up";
        }

    //     //method will call google auth and sign up a user
    //    auth.createUserWithEmailAndPassword(this.formValues.email,this.formValues.password).catch(function(err){
    //        var errorCode= err.code;
    //        var errorMessage= err.message;
    //        alert(errorMessage);
    //    });
    }
}
}
</script>