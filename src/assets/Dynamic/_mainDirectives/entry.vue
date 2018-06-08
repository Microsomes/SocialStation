<!--
@author Muhammed T Javed
@date 02/06/2018
sign in page
-->


<style scoped>

.active{
    background: black;
    border-radius: 5px;
    opacity: 0.4;
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
               background-image: url("https://images7.alphacoders.com/411/thumb-1920-411820.jpg");

}
.loginImageContainer{
    width:80%;
    background: white;
    height: 100%;
}
.loginFormContaier{
     left: 0px;
    position: relative;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: none;
    background:#CD4545;
    opacity: 0.95;
}
@media only  screen and  (max-width: 700px) {
    .loginFormContaier{
           background-image: url("https://images7.alphacoders.com/411/thumb-1920-411820.jpg");
    }

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

        <img style="height:100%;width:100%" src="https://images7.alphacoders.com/411/thumb-1920-411820.jpg"/>
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