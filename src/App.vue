<!--

 @author Daking123
  @date- 15/05/2018

  Comments-
  This is the home page, this will be fun

-->

<script>
import memberInfoBar from './assets/Dynamic/ModularComponents/memberInfoBar';
//importing members info bar to display the current signed in user

import {auth} from './assets/firestore.js';
//importing auth needed to listen to on auth change events triggered by firebase

 export default {
  data:function(){
    return {

      isReventModuleWindowOpen:false
 
    }
  },computed:{
    stateStoreC:function(){
      return this.$store.state.count
    }
  },methods:{
    toggleModuleWindow(){
      //toggle the recent module window 
      //this.isReventModuleWindowOpen!=this.isReventModuleWindowOpen;

      this.isReventModuleWindowOpen= !this.isReventModuleWindowOpen;
    },
    scrollToTop(){
      //method used to scroll the user to the top
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  },components:{
    memberInfoBar,
  },created(){
    var home=this;

    //if user is logged in redirect to dashboard
    if(home.$store.state.authRelated.isLoggedIn){
      //user is locally logged in
      home.$router.push("/dashboard");
    }

    //listen to onchangeauth event 
    auth.onAuthStateChanged(function(user){
      if(user){
        //user is logged in
        var email= user.email;
        var uid= user.uid;
        console.log(uid);
        home.$store.state.authRelated.isLoggedIn=true;
        //tell local web app that we are logged in
         home.$store.state.authRelated.loginDetails.uid=uid;
         home.$store.state.authRelated.loginDetails.email=email;

        home.$router.push("/dashboard");

        
      }else{
        //user signed out
        console.log("user is signed out");
        home.$router.push("/");
        home.$store.state.authRelated.isLoggedIn=false;
        //not logged in

      }
    });
  }
}
</script>

<!--PROGRAMMING LOGIC ABOVE-->

<template>
  <div class="main_container">
    <div class="developmentStatus">
      Development build 0.3 Alpha- The hungry rabbit build
    </div>
     <!-- <div class="advertisementleft">
     <p>Social station is a open source modular social media platform. If you want to participate by creating a module or understand the code please visit github by clicing <a target="_blank" href="https://github.com/Microsomes/SocialStation">here</a> Some rules:<router-link to="/rules">here</router-link></p>
    </div>end of advertisementleft -->
    <div class="topBar">
      <router-link to="/dashboard"> 
      <div class="logo">
        <img  src="https://firebasestorage.googleapis.com/v0/b/social-station-69cfc.appspot.com/o/web%2Fimages%2FlogoOfficial.png?alt=media&token=79dadc52-28fd-417d-aae1-61c251934ad5"/>
       
      </div><!-- end of logo-->
      </router-link>
      <div class="logoText">
        <router-link style="color:black;text-decoration:none;font-size:14px;" to="/create/fact"> Create Fact:</router-link> &nbsp;<randomFact></randomFact>
      </div>
      <div class="goToFeedButton">
      <router-link style="text-decoration:none;" to="/codeModule/feed">
        <v-btn style="background:#C62C2C;color:white;font-family: 'Roboto', sans-serif;text-decoration:none">Go to FEED</v-btn>
     </router-link> 
      </div>
      <div class="moduleSeacher">
        <input type="text" placeholder="search module to interact with. People vids polls etc..."/>
      </div>
      
    </div><!-- end of the top bar-->
    <animLiner></animLiner>
    
    <div class="membersBar"><!-- start of members bar-->
      <memberInfoBar></memberInfoBar>
    </div><!-- end of members bar-->

<div class="main_routing_content">
  <router-view></router-view>
</div>

<!-- start of the recent module container-->
<!-- <div v-bind:class="{recentModulesOpen:isReventModuleWindowOpen}" class="recentModules">
    <div v-on:click="toggleModuleWindow"  class="closer">
        <i v-bind:class="{arrowCloser_close:isReventModuleWindowOpen}"  class="material-icons arrowCloser">arrow_drop_down</i>

    </div>
    <div class="recentModulesText">
      <p>Recently used modules</p>
    </div>
    <div class="recentModuleContainer">
      <div class="recentModuleItem">
        <div class="recentModuleItemcloser">
            <i class="material-icons">close</i>
        </div>
      </div>
    </div>
</div> -->
<!-- end of the recent module container -->

<!-- start of chat container-->
<!-- <div class="chatContainer">
  <div class="dot">
      <i class="material-icons">data_usage</i>
  </div>
  <div class="messagingText">
    Messaging
  </div>
  <div class="compose">
      <i class="material-icons">mode_edit</i>
  </div>
</div> -->
<!-- end of chat container-->


<!-- <div @click="scrollToTop()" class="scrollUpButton">
    <i @click="scrollToTop()" class="material-icons">expand_less</i>
</div> -->
 
  </div>
</template>

<!--StylesBelow-->

<style scoped>
.membersBar{
  height: 50px;
  border:1px solid #D3D3D3;
  border-radius: 5px;
  margin: 10px;
}

.scrollUpButton i{
  color:white;
  
}

.scrollUpButton{
  position: fixed;
  background: #CD4545;
  bottom:300px;
  right: 75px;
  height: 40px;
  width: 40px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  transition: all .2s;
}
.scrollUpButton:hover{
  transform: scale(3);
}
.scrollUpButton:active{
  background: white;
}


.chatContainer{
  position: fixed;
  background: #C62D2D;
  bottom: 0px;
  right: 50px;
  width:200px;
  height: 40px;
  display: flex;
  cursor: pointer;
  border:1px solid grey;
  border-radius: 4px;
}
.chatContainer .compose{
  position: relative;
  left: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.chatContainer .compose i{
  color:lightcyan;
  font-size: 20px;
}
.chatContainer .dot{
  width:30px;
  height: 100%;
   display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top:0.9px;
  left: 5px;
 }

 .chatContainer .dot i{
   color:lightcyan;
 }
.chatContainer .messagingText{
  width:100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color:lightcyan;
  font-size: 17px;
  font-family: 'Roboto', sans-serif;
}

.recentModuleItemcloser{
  border:1px solid black;
  width:30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  top:-10px;
  left:89%;
  background: grey;
  color:white;
  font-family: 'Roboto', sans-serif;


}
.recentModuleItem{
  border:1px solid black;
  width:200px;
  height: 150px;
  position: relative;
}
.recentModuleContainer{
  border:1px solid black;
  height: 188px;
  display: flex;
  align-items: center;
  padding: 5px;
}
.recentModulesText{
  font-family: 'Roboto', sans-serif;
  color:white;
  font-size: 18px;
  padding-left:10px;

}
.recentModules{
  position: fixed;
  background: #C62D2D;
  z-index: 10;
  top:98%;
  width: 100%;
  left: 0px;
  height: 0px;
  box-shadow: 5px -10px lightgoldenrodyellow;
  transition: all 1s;
}
.recentModulesOpen{
  left: 0px;
  height: 250px;
  top:60.6%;
}

.closer{
  width:60px;
  background: #C62D2D;
  border-radius: 5px;
  position: relative;
  left: 50%;
  top:-6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .3s;
}

.arrowCloser{
  color:white;
  transform: rotate(180deg); 
  transition: all .5s;
}

.arrowCloser_close{
  color:white;
    transform: rotate(0deg); 
}



.closer:hover{
  cursor: pointer;
}
.closer:active{
  transform: scale(1.2);
}


.advertisementleft{
  position: fixed;
  left:10px;
  top:10px;
   width:170px;
  height:600px;
  display: flex;
  justify-content: center;
  padding-left:5px;
                font-family: 'Indie Flower', cursive;
 font-size: 25px;

 
}
 
 @media only screen and (max-width: 1200px) {
    .advertisementleft{
      display: none;
    }
}
.main_routing_content{
   min-height:1000px;
  border-radius: 5px;
}
.moduleSeacher{
   width:300px;
   position: relative;
   top:22px;
  margin: 10px;
  display: none;
}
 .moduleSeacher input[type="text"]{
    width:100%;
   height: 100%;
   border:none;
   outline:none;
   color:grey;
   
 }
.logoText{
  width:900px;
  display: flex;
  align-items: center;
  font-size:20px;
  font-family: 'Roboto', sans-serif;
  color:grey;
 }
.topBar{
  height:50px;
  display: flex;
}

.logo{
  width:100px;
  height:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top:5px;
  transform: rotate(20deg);
}
.logo img{
  --logoAspectRatio: 70px; 
  width:var(--logoAspectRatio);
  height:var(--logoAspectRatio);
  cursor: pointer;
}
.logo img:hover{
  transform: scale(1.2);
}
 
.main_container{
  background: white;
  margin:0px;
  width:90%;
   margin:auto;
  height:100%;
}
      /*responsive code here if screen smaller then 900px*/
    @media only screen and (max-width: 900px) {
      .logoText{
        display:none;
      }
      .topBar{
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .logo{
        position: relative;
        left: -40px;
      }
    }
</style>


 