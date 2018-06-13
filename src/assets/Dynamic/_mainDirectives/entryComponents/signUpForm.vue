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
        <em style="text-align:center;" v-if="feedback">{{feedback}}</em>
        </div>
    </div>
</template>

<script>
import randomFactsViewer from './../../codeModules/randomFact';
import {auth} from './../../../firestore.js';
import {db} from './../../../firestore.js';
import slugify from 'slugify';
export default{
data:function(){
    return {
        feedback:null,
        formValues:{
            email:null,
            password:null,
            username:null,
            slug:null
        }
    }
},components:{
    randomFactsViewer,
},methods:{
    signUpUser(){

        if(this.formValues.email && this.formValues.password && this.formValues.username){
            //attempting to sign you up

            //slugify username

            this.formValues.slug= slugify(this.formValues.username,{
                replacement:'-',
                remove:/[$*_+~.()'"!\-:@]/g,
                lower:true
            });
            //create a slug above
            //check if username is unique
            var ref= db.collection("users").doc(this.formValues.slug);
            ref.get().then(doc=>{
                if(doc.exists){
                    this.feedback="username already exists";
                }else{
                    this.feedback="processing";
                    //username is availble signing user up now

                    //sign up user email and password
                    auth.createUserWithEmailAndPassword(this.formValues.email,this.formValues.password).then(user=>{
                          ref.set({
                             username:this.formValues.username,
                             slug:this.formValues.slug,
                             uid:user.user.uid,
                             joinedDay:this.$moment().format()
                         }).then(status=>{
                             //the user has signed up now we may redirect the user

                            //before pushing user lets store all the relevant user details within the store
                            this.$store.state.authRelated.isLoggedIn=true;
                            //set to true since the user is signed in
                            this.$store.state.authRelated.loginDetails.profileMeta.profileCompletion=20;
                            //set profile completion to 20 since the user has just signed in
                            this.$store.state.authRelated.loginDetails.profileMeta.showNoUsernameWarning=true;
                            //show message to prompt the user to complete their profile
                            this.$store.state.authRelated.loginDetails.profileMeta.uid=user.user.uid;
                            this.$store.state.authRelated.loginDetails.profileMeta.email=user.user.email;
                            this.$store.state.authRelated.loginDetails.profileMeta.username=this.formValues.username;
                            this.$store.state.authRelated.loginDetails.profileMeta.username_slug=this.formValues.slug;
                            this.$router.push("/dashboard");
                            //push you to the dashboard

                            

                         }).then(err=>{
                             this.feedback=err;
                         })
                    }).catch(err=>{
                        this.feedback=err.message;
                    })

                    
                }
            })
            
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