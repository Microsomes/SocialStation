<template>
<div class="insanityContainer">
    <img style="width:100%" src="http://fc06.deviantart.net/fs71/f/2013/279/b/a/bodybuilding_motivation______1920x1080_by_xjixsaw-d6pc5w5.jpg" />
    <listOfVideos></listOfVideos>
</div>
</template>

<script>

import listOfVideos from './listOfVideos';

export default{
    data:function(){
        return {

        }
    },components:{
        listOfVideos,
    }
}
</script>

<style scoped>
.insanityContainer{
    display: flex;
     justify-content: center;
     flex-flow: column;
     margin-top:10px;
      width: 100%;
}
 
</style>