<!--
@author Muhammed T Javed
@date 13/06/2018
--viewing all confessions
-->
<!--
@author Muhammed T Javed
@date 13/06/2018
-- dashboard here displays all the confessions added
-->

<style scoped>
.dashboard{
    margin:10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

}
.confessionItem{
    min-height:300px;
    width:300px;
    border:1px solid gray;
}
.confessionText{
    min-height:200px;
    font-size:15px;
    font-family: 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    word-wrap:  break-word;
}
.metaItem{
    display: flex;
    align-items: center;
    padding: 10px;
}
.metaText{
    position: relative;
    font-family: 'Roboto', sans-serif;
    top:-1px;
    left:10px;
}
.comment{
    position: relative;
    top:-1px;
}
.tagContainer{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.tag{
     min-width:50px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: orange;
    margin:3px;
    border-radius: 10px;
}
</style>

<template>
<div class="dashboard">
    <confessionItem v-for="n in confessions" :data="n"></confessionItem>
</div>
</template>

<script>
import confessionItem from './../comps/confessionitem';
import {db} from './../../../../firestore.js';

export default{
    data:function(){
        return {
            confessions:[
                 
            ]
        }
    },components:{
        confessionItem,
    },created(){
        var confessionsRef= db.collection("confessions");
        //confession refernece
        var home=this;

        confessionsRef.get().then(confession=>{
            confession.forEach(conf=>{
                var currentData= conf.data();
                 

                home.confessions.push({
                    confessionsTags:currentData.confessionTags,
                    confessionText:currentData.confessionText,
                    confessionTimestamp:currentData.confessionTimestamp,
                    confessionBy:currentData.confessionby,
                    id:conf.id
                })

            })
        })
    }
}

</script>