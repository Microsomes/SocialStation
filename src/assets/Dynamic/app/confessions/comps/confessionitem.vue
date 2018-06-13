<!--
@author Muhammed T Javed
@date 13/06/2018
-- add confession form
-->

<style scoped>

.confessionItem{
    min-height:300px;
    width:300px;
     background: lightgoldenrodyellow;
     border-radius: 5px;
     padding: 10px;
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
    background: lightgreen;
    margin:3px;
    border-radius: 10px;
    cursor: pointer;
}
</style>

<template>
<div>
     <div class="confessionItem">
        <div class="confessionText">
            confession
        </div>
        <div class="tagContainer">
            <div class="tag">html</div>
            <div class="tag">html</div>
            <div class="tag">html</div>
            <div class="tag">html</div>
            <div class="tag">html</div>
            <div class="tag">html</div>
        </div>
        <div class="confessionMetaData">
            <div class="metaItem">
                <div class="metaIcon">  <i class="material-icons">date_range</i></div>
                <div class="metaText">Created last week</div>
            </div>
            <div class="metaItem">
                <div class="metaIcon">  <i class="material-icons">link</i></div>
                <div class="metaText comment"><a href="#">Perma Link</a></div>
             </div>
             <div class="metaItem">
                <div class="metaIcon">  <i class="material-icons">comment</i></div>
                <div class="metaText comment">1 comment</div>
             </div>
            <v-btn v-if="state.isCommentsOpen==false" @click="state.isCommentsOpen=true" style="padding:0px;">Load Comments</v-btn>
            <v-btn v-if="state.isCommentsOpen==true" @click="state.isCommentsOpen=false" style="padding:0px;">Close Comments</v-btn>
            <div v-if="state.isCommentsOpen" class="commentsContainer">
                <ssdisqus uid='confessions'></ssdisqus>
            </div>

        </div>
    </div>
</div>
</template>


<script>

export default{
    data:function(){
        return {
        state:{
            isCommentsOpen:false
        }
        }
    },props:["data"]
}

</script>