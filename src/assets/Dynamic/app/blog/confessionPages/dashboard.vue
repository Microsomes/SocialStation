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
<div>
        <em v-if="feedback">{{feedback}}</em>

<div class="dashboard">
     <blogitem :data="n" v-for="n in blogs"></blogitem>
  </div>
</div>
</template>

<script>
import confessionItem from './../comps/confessionitem';
import {db} from './../../../../firestore.js';

import blogitem from './../comps/blogitem';
//blog item
export default{
    data:function(){
        return {
            feedback:null,
            blogs:[

            ]
        }
    },components:{
        confessionItem,
        blogitem
    },created(){
        this.grabAll();
    },methods:{
        grabAll(){
            var home=this;
            //grabs all blogs within the blogs collection
            db.collection("blogs").get().then(blogs=>{
                console.log(blogs);
                if(blogs.empty){
                    this.feedback="Their are no blogs, create one if you like";
                }else{
                    this.feedback="Parsing blogs now...";

                    blogs.forEach(doc=>{
                        console.log(doc.data());
                        let itam= doc.data();
                        itam.id= doc.id;
                        let blogContent= doc.data().blogContents;
                        home.blogs.push({
                            itam,
                        })
                    })
                    
                }
            }).catch(err=>{
                this.feedback="Error please try again.";
            })
        }
    }
}

</script>