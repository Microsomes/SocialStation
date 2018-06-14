<!--
@authr Muhammed T Javed
@date 14/06/2018
-->
<style scoped>
    .permaContainer{
        display: flex;
        justify-content: center;
    }
</style>

<template>

<div class="permaContainer">
    <em v-if="feedback">{{feedback}}</em>
    <blogitem :data="blog[0]"></blogitem>

  </div>

</template>

<script>

import {db} from './../../../../firestore.js';
import blogitem from './../comps/blogItemExpanded';

export default{
    data:function(){
        return {
            feedback:null,
            blog:[

            ]
        }
    },created(){
        this.grabBlogBySlug(this.$route.params.slug);
    },methods:{
        grabBlogBySlug(slug){
            //method will grab blog post by slug
            var home=this;

        db.collection("blogs").where("slug","==",slug).get().then(item=>{

            if(item.empty){
                this.feedback="Invalid link";
            }else{
                item.forEach(it=>{
                    console.log(it.data());
                    let itam= it.data();
                    itam.id= it.id;
                     home.blog.push({
                        itam,
                    });

                })
            }

        }).catch(err=>{
            this.feedback="Error please try again.";
        })


        }
    },components:{
        blogitem,
    }
}

</script>