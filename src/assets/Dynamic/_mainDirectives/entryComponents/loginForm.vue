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
.signUpContainer input[type="text"]{
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
            <input type="text" placeholder="email"/>
            <input type="text" placeholder="password"/>
            <v-btn style="background:white;margin-top:20px;font-family: 'Roboto', sans-serif;">Login</v-btn>
        </div>
    </div>
</template>

<script>
import randomFactsViewer from './../../codeModules/randomFact';
export default{
data:function(){
    return {

    }
},components:{
    randomFactsViewer,
}
}
</script>