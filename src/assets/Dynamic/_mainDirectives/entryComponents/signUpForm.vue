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
        <h1>s'inscrire</h1>
        </div>
        <div class="promo">
  <div style="text-align:center;" class="promo">
            Social station is an open source modular social media platform
         </div>        </div>
        <div class="signUpContainer">
            <input v-on:keyup.enter="signUpUser" v-model="formValues.email" type="text" placeholder="email"/>
            <input v-on:keyup.enter="signUpUser" v-model="formValues.password" type="password" placeholder="password"/>
            <v-btn @click="signUpUser()" style="background:white;margin-top:20px;font-family: 'Roboto', sans-serif;padding:0px">Sign Up</v-btn>
        </div>
    </div>
</template>

<script>
import randomFactsViewer from './../../codeModules/randomFact';
import {auth} from './../../../firestore.js';
export default{
data:function(){
    return {
        formValues:{
            email:'',
            password:''
        }
    }
},components:{
    randomFactsViewer,
},methods:{
    signUpUser(){
        //method will call google auth and sign up a user
       auth.createUserWithEmailAndPassword(this.formValues.email,this.formValues.password).catch(function(err){
           var errorCode= err.code;
           var errorMessage= err.message;
           alert(errorMessage);
       });
    }
}
}
</script>