<!--
@author Muhammed T Javed
@date 03/06/2018
-m will show the main user profile page
-->

<style scoped>

.profileContainer{
     border:1px solid grey;
     min-height: 500px;
     border-radius: 5px;
}
.profileTop{
    min-height:200px;
    background: #D35B5B;
    display: flex;
    align-items: center;
    color:white;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-family: 'Roboto', sans-serif;

}
.profileImagecircleContainer{
     position: relative;
     height: 350px;
    width:350px;
    border-radius: 50%;
     display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    background: black;
    color:white;
    top:-50px;
        box-shadow: 5px 5px 5px #D35B5B;
}

.center{
    display: flex;
    align-items: center;
    justify-content: center;
        background:#D35B5B;

    
}
.detailsContainer{
    min-height: 500px;
}

.detailsNav{
    display: flex;
    justify-content: space-around;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    background:#D35B5B;
    padding:20px;
    color:white;
    position: relative;
    top:-40px;
}
.detailsNavItem{
    transition: all .2s;
}
.detailsNavItem:hover{
    cursor:pointer;
    color:black;
}
.profileContentContainer{
    min-height:1000px;
}
.active{
    background:black;
    padding: 10px;
    border-radius: 5px;
    transition: all .4s;
}
.active:hover{
    background: white;
}
 
</style>

<template>
<div class="profileContainer">

<div class="profileTop">
    {{this.$store.state.authRelated.loginDetails.email}}
    
</div>
<div class="center">
    <div class="profileImagecircleContainer">
        <img height="100%" width="100%" style="border-radius:50%" src="https://images.pexels.com/photos/490411/pexels-photo-490411.jpeg?auto=compress&cs=tinysrgb&h=350"/>
    </div>
</div>
<!-- container for profile image ends here-->

<div class="detailsContainer">
    <div class="detailsNav">
        <div v-bind:class="{active:profileNavState.isBreifSelected}" @click="goToNavLink('breif')" class="detailsNavItem">Brief info</div>
        <div v-bind:class="{active:profileNavState.isEductationSelected}" @click="goToNavLink('education')" class="detailsNavItem">Education</div>
        <div v-bind:class="{active:profileNavState.isInterestsSelected}" @click="goToNavLink('interests')" class="detailsNavItem">Interests</div>
        <div v-bind:class="{active:profileNavState.isFriendsSelected}" @click="goToNavLink('friends')" class="detailsNavItem">Friends</div>
        <div v-bind:class="{active:profileNavState.isFolloweresSelected}"@click="goToNavLink('followers')" class="detailsNavItem">Followers</div>
    </div>
    <div class="profileContentContainer">
        <component :is="profileCurrentContent" ></component>
    </div>
</div>

  
</div>

</template>

<script>

import breifInfo from './components/breifinfo';
import education from './components/education';
import followers from './components/followers';
import friends from './components/friends';
import interests from './components/interests';
//importing profile components above

export default{
    data:function(){
        return {
            profileNavState:{
                //im sure their is a better way of doing this but whatever for now its fine
                isBreifSelected:true,
                isEductationSelected:false,
                isInterestsSelected:false,
                isFriendsSelected:false,
                isFolloweresSelected:false
            },
            profileCurrentContent:'breifInfo'
        }
    },components:{
        breifInfo,
        education,
        followers,
        friends,
        interests
    },methods:{
        resetProfileNavState(){
            //method will reset profileNavState to false
            let ref= this.profileNavState;
            ref.isBreifSelected=false;
            ref.isEductationSelected=false;
            ref.isInterestsSelected=false;
            ref.isFriendsSelected=false;
            ref.isFolloweresSelected=false;
        },goToNavLink(to){
            let ref= this.profileNavState;
            //method will be called switch between profile components
            var home=this;
            this.resetProfileNavState();
            //reset all positions

            switch(to){
                case "breif":
                 ref.isBreifSelected=true;
                 home.profileCurrentContent="breifInfo";
                break;
                case "education":
                ref.isEductationSelected=true;
                home.profileCurrentContent="education";
                break;
                case "interests":
                ref.isInterestsSelected=true;
                home.profileCurrentContent="interests";
                break;
                case "friends":
                ref.isFriendsSelected=true;
                home.profileCurrentContent="friends";
                break;
                case "followers":
                ref.isFolloweresSelected=true;
                home.profileCurrentContent="followers";
                break;
            }
        }
    }
}

</script>



