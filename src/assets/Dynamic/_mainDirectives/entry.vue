<!--
@author Muhammed T Javed
@date 02/06/2018
sign in page
-->


<style scoped>

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
</style>

<template>

<div class="signContainer">
    <div class="loginImageContainer">
        <randomImage></randomImage>
     </div>
    <div class="loginFormContaier">
        <div class="loginInnerCont">
            
            <div class="loginSignOutButtons">
                <div @click="goToLogin()" class="login halves">Login</div>
                <div @click="goToSignup()" class="logup halves">Signup</div>
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
            localState:{
                currentActiveComp:'loginForm'
            }
        }
    },components:{
        loginForm,
        signUpForm,
        randomImage
    },methods:{
        goToLogin(){
            //method changes active component to the login form
            this.localState.currentActiveComp="loginForm";
        },
        goToSignup(){
            //method changes active component to the signup form
            this.localState.currentActiveComp="signUpForm";
        }
    }
}
</script>