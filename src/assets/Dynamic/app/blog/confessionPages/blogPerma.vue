<!--
@authr Muhammed T Javed
@date 14/06/2018
-->
<style scoped>

</style>

<template>

<div>
    <h2>perma{{this.$route.params.slug}}</h2>
</div>

</template>

<script>

export default{
    data:function(){
        return {

        }
    },created(){

    },methods:{
        grabBlogBySlug(slug){
            //method will grab blog post by slug
        }
    }
}

</script>