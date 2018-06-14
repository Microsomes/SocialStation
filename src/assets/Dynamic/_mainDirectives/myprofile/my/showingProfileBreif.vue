<!--
@author Muhammed T Javed
@date 14/06/2018
 page for showing someones elses profile picture
-->

<template>
<div>
    <em v-if="feedback">{{feedback}}</em>
    {{userDetails}}
 </div>
</template>


<script>

import {db} from './../../../../firestore.js';
//

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
                    console.log(udata);
                    this.userDetails.push({
                        udata,
                    });
                })

            }
        })
    }
}

</script>