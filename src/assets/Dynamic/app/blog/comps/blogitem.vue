<!--

@author Muhammed T Javed
@date 14/06/2018
--blog item like steemits look


-->


<style scoped>

.blogItemContainer{
    border:1px solid grey;
    width:350px;
    min-height:300px;
    padding: 2px;
    font-family: 'Roboto', sans-serif;
    border-radius: 5px;

}

.blogItemDetails{
    height:50px;
    display: flex;
}
.image{
    width:100px;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
 }

.textDetails{
    width:300px;
    font-family: 'Roboto', sans-serif;
    padding: 5px;
}
.by{
    font-weight: bold;
    cursor: pointer;
}
.by:hover{
    text-decoration: underline;
    color:blue;
}
.did{
    color:grey;
    font-size: 12px;
    position: relative;
    top:-5px;
    left:2px;
}
.when{
    width:100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color:grey;
}
.imagePreview{
    height:200px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.blogTitle{
    height:50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>


<template>

<div class="blogItemContainer">
    <div class="blogItemDetails">
        <div class="image">
            image
        </div>
        <div class="textDetails">
            <div class="by">Microsomes</div>
            <div class="did">Posted a Blog</div>
        </div>
        <div class="when">5 hours ago</div>
    </div>
    <div class="imagePreview">
        image preview
    </div>
    <div class="blogTitle">
        blog title
    </div>
    <v-btn style="padding:0px;font-family: 'Roboto', sans-serif;">Read</v-btn>
</div>


</template>


<script>

export default{
    data:function(){
        return {

        }
    }
}

</script>