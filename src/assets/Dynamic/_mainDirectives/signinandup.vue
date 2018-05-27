<!--
@author Muhammed T Javed
@date 27/05/2018
- comments sign in and out page
-->


<style scoped>
.membersContainer{
    width:960px;
    min-height: 500px;
    border-radius: 5px;
    display: flex;
}
.membersContainer div{
     height: 500px;
    padding: 10px;
}
.membersContainer h2{
    font-family: 'Roboto', sans-serif;
}
.whySignUp{
    font-family: 'Roboto', sans-serif;
  }

.signup,.signin{
     width: 50%;
}
</style>



<template>
<div class="membersContainer">
    <div class="signin">
        <h2>Sign In</h2>
    </div>
    <div class="signup">
        <h2>Sign Up</h2>
        <div class="whySignUp">
            Creating an account allows users to use the messaging feature, contribute to feed and use members only modules. Fill in the form below to sign up.
        </div>
    </div>
</div>
</template>