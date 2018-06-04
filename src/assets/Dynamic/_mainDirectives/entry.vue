<!--
@author Muhammed T Javed
@date 02/06/2018
sign in page
-->


<style scoped>

.active{
    background: black;
    border-radius: 5px;
 }

.signContainer{
    position: fixed;
    background: #CD4545;
    top:0px;
    width: 100%;
    left: 0px;
    height: 100%;
    z-index: 100;
    display: flex;
}
.loginImageContainer{
    width:80%;
    background: white;
    height: 100%;
}
.loginFormContaier{
    background: #CD4545;
    left: 0px;
    position: relative;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.loginInnerCont{
    height: 500px;
    width: 80%;
    border:1px solid white;
    border-radius: 5px;
}
.loginSignOutButtons{
    display: flex;
    height: 50px;
}

.halves:hover{
    cursor:pointer;
    color:black;
    background: white;
}
.halves{
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    color:white;
    font-size: 20px;
    transition: all .5s;
 }
 .mainLoginContent{
     height: 440px;
 }
 .promoText{
     position: absolute;
     background: #CD4545;
     padding: 10px;
     border-radius: 5px;
     margin: 10px;
     font-size: 25px;
     font-family: 'Roboto', sans-serif;

 }
 @media only screen and (max-width: 800px) {
   
    
   .loginImageContainer{
       display:none;
   }
   .loginFormContaier{
       width: 100%;
   }
   
}
</style>

<template>

<div class="signContainer">
    
    <div class="loginImageContainer">
        <vue-typer :repeat='0' class="promoText" :text="promoText"></vue-typer>

        <img style="height:100%;width:100%" src="https://firebasestorage.googleapis.com/v0/b/social-station-69cfc.appspot.com/o/web%2Fimages%2FmainImageforsocialstation.jpg?alt=media&token=b228c304-ae20-4f66-9460-1dafbef939be"/>
      </div>
    <div class="loginFormContaier">
        <div class="loginInnerCont">
            
            <div class="loginSignOutButtons">
                <div v-bind:class="{active:localState.loginButtonActive}" @click="goToLogin()" class="login halves ">Login</div>
                <div v-bind:class="{active:localState.signupButtonActive}" @click="goToSignup()" class="logup halves">Signup</div>
            </div><!-- end of login signout buttons-->

            <div   class="mainLoginContent">
                <component v-bind:is="localState.currentActiveComp"></component>
            </div>

        </div>
    </div>
</div>

</template>
 
<script>
import loginForm from './entryComponents/loginForm';
import signUpForm from './entryComponents/signUpForm';
import randomImage from './entryComponents/randomImage';

export default{
    data:function(){
        return {
            promoText:'Social Station is a modular open source social media platform.',
            localState:{
                currentActiveComp:'loginForm',
                loginButtonActive:true,
                signupButtonActive:false
            }
        }
    }
    ,components:{
        loginForm,
        signUpForm,
        randomImage
    },methods:{
        goToLogin(){
            //method changes active component to the login form
            this.localState.currentActiveComp="loginForm";
            this.localState.loginButtonActive=true;
            this.localState.signupButtonActive=false;
        },
        goToSignup(){
            //method changes active component to the signup form
            this.localState.currentActiveComp="signUpForm";
            this.localState.loginButtonActive=false;
            this.localState.signupButtonActive=true;
        }
    },created(){
      }
}
</script>