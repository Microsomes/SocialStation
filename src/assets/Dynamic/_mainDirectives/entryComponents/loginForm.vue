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
.signUpContainer input[type="text"],input[type="password"]{
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
        <h1>Login</h1>
        </div>
        <div class="promo">
            <randomFactsViewer></randomFactsViewer>
        </div>
        <div class="signUpContainer">
            <input v-model="formValues.email" type="text" placeholder="email"/>
            <input v-model="formValues.password" type="password" placeholder="password"/>
            <v-btn @click="authenticateUser()" style="background:white;margin-top:20px;font-family: 'Roboto', sans-serif;">Login</v-btn>
        </div>
    </div>
</template>

<script>
import {auth} from './../../../firestore.js';
//import auth object

//these component should de decoupled but fuck it im running on a short time frame so for now it wont be
//todo decouple auth logic from this component to the parent
import randomFactsViewer from './../../codeModules/randomFact';
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
    authenticateUser(){
        //send a politly message to firebase to ask them if user account exists
        //and to nicely ask for a unique id back 
        //TODO check if username and password fields are filleds
        if(this.formValues.email!="" && this.formValues.password!=""){
            //username and password fields are filled
        
            auth.signInWithEmailAndPassword(this.formValues.email,this.formValues.password).catch(function(err){
                //handle erros here
                var errorCode= err.code;
                var errorMessage= err.message;
                if(err){
                    alert(errorMessage);
                }
            });
            console.log("logging in");

            return;
        }

        //TODO send toast to user to enter all fields
        alert("fill in all fields ");

    }
}
}
</script>