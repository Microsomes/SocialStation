<!--

@author Muhammed T Javed
@date 14/06/2018
--blog item like steemits look


-->


<style scoped>

.blogItemContainer{
    border:1px solid lightblue;
    width:650px;
    min-height:500px;
    padding: 2px;
    font-family: 'Roboto', sans-serif;
    border-radius: 5px;
    margin: 3px;

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
    text-align: center;
    position: relative;
    left: -3px;;
     
}
.imagePreview{
    min-height:200px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.blogTitle{
    height:50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
}

.title{
    color:grey;
    padding: 10px;
}

.blogContent{
    min-height: 100px;
 }
 .commentSection{
     border-top:1px solid lightblue;
 }

  @media only screen and (max-width:500px){
       
     .blogItemContainer{
         width: 100%;
     }
  }
</style>


<template>

<div class="blogItemContainer">
    <div class="blogItemDetails">
        <div class="image">
                    <img height="70%" style="border-radius:5px;" />
         </div>
        <div class="textDetails">
            <div class="by">created</div>
            <div class="did">Posted a Blog</div>
        </div>
        <div class="when">1 hour ago</div>
    </div>
    <div class="imagePreview">
        <img height="100%" width="100%" :src="data.itam.imageurl"/>
    </div>
    <div class="blogTitle">
        title
    </div>
    <div class="blogContent">
        content
    </div>
 
 </div>


</template>


<script>

export default{
    data:function(){
        return {

        }
    },props:["data"],
    computed:{
        timeAgo(){
            return this.$moment(this.data.itam.timestamp).fromNow();
        }
    }
}

</script>