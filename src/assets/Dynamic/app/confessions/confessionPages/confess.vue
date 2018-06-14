
<!--
@author Muhammed T Javed
@date 13/06/2018
-- grab confession by slug
-->
<style scoped>
.confessContainer{
    justify-content: center;
    display: flex;
}
</style>

<template>
<div class="confessContainer">
      <em v-if="feedback">{{feedback}}</em>
     <confessItem :data="confessions[0]"></confessItem>
</div>
</template>

<script>

import {db} from './../../../../firestore.js';
import confessItem from './../comps/confessionitem.vue';

export default{
    data:function(){
        return {
            feedback:"loading post",
            confessions:[
                 
            ]
        }
    },created(){

        window.scrollTo(0,200);

        var home=this;
        //grab confession item by slug
        var confessRef= db.collection("confessions").where("slug","==",this.$route.params.slug);
        confessRef.get().then(doc=>{
            
            if(doc.empty){
                this.feedback="Invalid ID. This perma link is incorrect";
            }else{
                home.feedback=null;
                doc.forEach(confess=>{
                    var currentData=  confess.data();
                    
                    home.confessions.push({
                    confessionsTags:currentData.confessionTags,
                    confessionText:currentData.confessionText,
                    confessionTimestamp:currentData.confessionTimestamp,
                    confessionBy:currentData.confessionby,
                    id:confess.id,
                    slug:currentData.slug
                })
                })
            }
        }).catch(err=>{
            this.feedback="Error please try again.";
            console.log(err);
        })

    },components:{
        confessItem,
    }
}
</script>