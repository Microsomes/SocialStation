<style scoped>

.betterSignUpContainer{
    position: absolute;
    top:0px;
    left:0px;
    background:red;
    width:100%;
     z-index: 100;
     min-height:1000px;
  }
.sectionone{
     min-height:1000px;
     background-color: black;

 }
 .sectionOneTopBar{
     border:1px solid black;
     height:80px;
 }
 .brand{
     border:1px solid black;
     display:flex;
     align-items: center;
 }
.brand img{
    height:100px;
}
.brandText{
    font-family: 'Anton', sans-serif;
    position: relative;
    top:-7px;
    left:-5px;
    font-size: 20px;
    color:white;
}
.topContent{
    color:white;
  font-family: 'Roboto', sans-serif;
     height:300px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
    padding:200px;
    text-align: center;

}
.signupformContainer{
    background:white;
    height:300px;
      display: flex;
     
    flex-flow: column;
}
.signupform{
   
}
.usernameEntry{
     min-height:30px;
     height:150px;
     display: flex;
     align-items: center;
     justify-content: center;
     text-align: center;
}
.usernameEntry input[type="text"], input[type="password"]{
     border-radius: 20px;
    padding: 10px;
    color:black;
    outline:none;
}

.titleSignUp{
    height:150px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-family: 'Roboto', sans-serif;
    text-align: center;
     font-weight: bold;

}
.alreadyGotAccount{
    text-align: center;
    padding:4px;
    font-family: 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    right:25px;
}

 
</style>

<template>

<div class="betterSignUpContainer">
    <div class="sectionone">
        <div class="sectionOneTopBar">
            <div class="brand">
                <div class="logo">
                    <img src="https://firebasestorage.googleapis.com/v0/b/social-station-69cfc.appspot.com/o/web%2Fimages%2FlogoOfficial.png?alt=media&token=79dadc52-28fd-417d-aae1-61c251934ad5"/>
                </div>
                <div class="brandText">Social Station</div>
            </div>
        </div>
        <div class="topContent">
        We live in dark times, every website we go on is spying on us. This is not a conspiracy, Google Facebook Twitter are all tracking your every step. It's time to end this. I am doing my part to help by creating an open source modular social media platform called SocialStation.
         </div>
              
         <div class="signupformContainer">
             <div class="titleSignUp">
                 <div style="position:relative;left:-30px;">Sign up now</div>
             </div>
             <div class="usernameEntry">
                 <input type="text" placeholder="username"/>
                 <input type="text" placeholder="email"/>
                 <input type="password" placeholder="password"/>
                 <v-btn style="padding:0px;">Signup</v-btn>
              </div>
              <div class="alreadyGotAccount">
                  Already got an account click <a @click="state.alreadyGotAccount=true" href="javascript:void(0)">&nbsp;here&nbsp;</a> to sign in
              </div>
         </div><!-- end of sign up form container-->
         

         <div v-if="state.alreadyGotAccount" class="signupformContainer">
             <div class="titleSignUp">
                 <div style="position:relative;left:-30px;">Already got an account</div>
             </div>
             <div class="usernameEntry">
                  <input type="text" placeholder="email"/>
                 <input type="password" placeholder="password"/>
                 <v-btn style="padding:0px;">Login</v-btn>
              </div>
         </div><!-- end of sign up form container-->


         
         </div>
         s
     s
 </div>

</template>

<script>

export default{
    data:function(){
        return {
            state:{
                alreadyGotAccount:false
            }
        }
    }
}

</script>