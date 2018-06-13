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
        <div style="text-align:center;" class="promo">
            Social station is an open source modular social media platform. Learn more at <a target="_blank" style="color:white" href="https://socialstation.info">socialstation.info</a>
         </div>
        <div class="signUpContainer">
            <input v-on:keyup.enter="authenticateUser" v-model="formValues.username" type="text" placeholder="username"/>
            <input v-on:keyup.enter="authenticateUser"  v-model="formValues.password" type="password" placeholder="password"/>
            <v-btn @click="authenticateUser()" style="background:white;margin-top:20px;font-family: 'Roboto', sans-serif;padding:0px;">Login</v-btn>
            <em style="text-align:center;" v-if="feedback">{{feedback}}</em>
        </div>
    </div>
</template>

<script>
import {auth} from './../../../firestore.js';
//import auth object
import {db} from './../../../firestore.js';

//these component should de decoupled but fuck it im running on a short time frame so for now it wont be
//todo decouple auth logic from this component to the parent
import randomFactsViewer from './../../codeModules/randomFact';
export default{
data:function(){
    return {
        feedback:null,
        formValues:{
            username:'',
            password:''
        }
    }
},components:{
    randomFactsViewer,
},methods:{
    authenticateUser(){
    
        //check if username and password are first entered
        if(this.formValues.username && this.formValues.password){
            //password and username are entered
            
            this.feedback="Connecting to db";
            var ref= db.collection("users").where("username","==",this.formValues.username);
            ref.get().then(doc=>{
                if(doc.empty){
                    //username does not exist
                    this.feedback="username does not exist";
                }else{
                    //username exists
                   doc.forEach(user=>{
                    var userEmail= user.data().email;
                    //grabbed user email time to sign him/her in now
                    auth.signInWithEmailAndPassword(userEmail,this.formValues.password).then(auth=>{
                        //signed in
                        this.feedback="Success";
                        this.$router.push("/dashboard");
                    }).catch(err=>{
                        this.feedback=err.message;
                    })
                })
                }
                 
            }).catch(err=>{
                this.feedback=err;
                console.log(err);
            })


        }else{
            this.feedback="Please enter your Username and Password";
        }

        //connect to firestore and grabs users email address by password

        //sign user in with email address and password

    }
}
}
</script>