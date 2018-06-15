<!--
@author Muhammed T Javed
@date 14/06/2018
 page for showing someones elses profile picture
-->

<template>
<div>
    <em v-if="feedback">{{feedback}}</em>
     <showProfileTemplate :userDetails="userDetails" :routeusername="this.$route.params.username"></showProfileTemplate>
  </div>
</template>


<script>

import {db} from './../../../../firestore.js';
//import db sdk needed to load profile info
import showProfileTemplate from './showingProfileTemplate';

export default{
    data:function(){
        return {
            userDetails:[],
            feedback:null
        }
    },created(){
        //call database to grab param username details
        this.feedback="attempting to load profile details of "+this.$route.params.username;

        var userref= db.collection("users").where("username","==",this.$route.params.username);

        userref.get().then(usr=>{
            if(usr.empty){
                this.feedback="user not found";
            }else{
                this.feedback="parsing details now";

                usr.forEach(u=>{
                    var udata= u.data();
                    var opti= udata.optionalAdditionalData;
                    console.log(udata);

                    const bio= opti.bio;
                    const birthday= opti.birthday;
                    const country= opti.country;
                    const fullname= opti.fullname;
                    const profileImage= opti.profileImage;
                    const website= opti.website;
                    const joinedDay= udata.joinedDay;

                    console.log("----------");
                      this.userDetails.push({
                        username:udata.username,
                        bio,
                        birthday,
                        country,
                        fullname,
                        profileImage,
                        website,
                        joinedDay
                        
                    });
                    this.feedback=null;
                })

            }
        })
    },updated(){
         
    },components:{
        showProfileTemplate,
    }
}

</script>