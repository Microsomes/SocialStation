
<!--
@author Muhammed T Javed
@date 10/06/2018
-todo reply section soon
-->

<style scoped>

*{
    transition: all .3s;
}

.comment_container{
    min-width:100px;
    min-height:100px;
    display: flex;

}
.comment_left{
    width:100px;
}
.commentProfilePic{
     width:100%;
    height:100%;
    display:flex;
    align-items: flex-start;
    justify-content: center;
    
}
.profilePic{
    height:50px;
    width:50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top:5px;
 }
.comment_right{
    width:450px;
    font-family: 'Roboto', sans-serif;

}
.comment_right_top{
    display: flex;
}
.commenters_name{
    color:#717171;
    font-weight: bold;
    padding: 2px;
}
.commentCreatedAgo{
    color:lightgray;
    position: relative;
     color:#C6C6C6;
    font-weight: bold;
    left:0px;
        padding: 2px;
        font-family: 'Roboto', sans-serif;

}
.commentText{
    min-height:40px;
    font-family: 'Roboto', sans-serif;

}
.commenters_name:hover{
    cursor:pointer;
    color:blue;
}
.commentLikeReplyContainer{
    display: flex;
}
.likeDislikeContainer{
    width:150px;
    display: flex;
    align-items: center;
    height: 100%;
 }
.like{
    position: relative;
    top:4px;
    left:10px;
}
.dislike{
    position: relative;
    top:4px;
    left:30px;
}
.like i{
    color:grey;
    font-size: 20px;
    visibility: hidden;
}
.dislike i{
    color:grey;
    font-size: 20px;
        visibility: hidden;


}
.like i:hover{
    color:#414141;
    cursor:pointer;
}
.dislike i:hover{
    color:#414141;
    cursor:pointer;
}
.reply{
    color:#BBBBBB;
    position: relative;
    left:-38px;
    top:4.5px;
    text-transform: capitalize;
    font-weight: bold;
    letter-spacing: 1px;
    transition: all .2s;
    display:none;
}
.reply:hover{
    cursor: pointer;
        color:#414141;
}

.active i{
    color:#414141;
}
 .profilePic img:hover{
     transform: scale(3);
     cursor: pointer;
 }

  @media only screen and (max-width:860px){
    .comment_container{
        width:100%;
        overflow: hidden;

    }
  }
</style>


<template>
<div class="comment_container">
    
    <div class="comment_left">
        <div class="commentProfilePic">
            <div class="profilePic">
                <img width="100%;" height="100%" style="border-radius:50%;" v-bind:src="dataComing.commenedByProfileImg" />
            </div>
        </div>
    </div>
    <div class="comment_right">
        <div class="comment_right_top">
            <div @click="gotoProfile" class="commenters_name">
                {{dataComing.commentedBy}}
            </div>
            <div class="commentCreatedAgo">
                {{timeAgo}}
            </div>
        </div>
        <div class="commentText">
            {{dataComing.commentMsg}}
        </div>
        <div class="commentLikeReplyContainer">
            <div class="likeDislikeContainer">
                <div v-bind:class="{active:commentItemData.isLiked}" class="like">
                      <!-- <i   class="material-icons">thumb_up</i> <em style="color:grey;position:relative;top:-5px;">{{commentItemData.likes}}</em> -->
                </div>
                <div v-bind:class="{active:commentItemData.isDisliked}" class="dislike">
                      <i class="material-icons">thumb_down</i>
                       <!-- <em style="color:grey;position:relative;top:-5px;">{{commentItemData.dislikes}}</em> -->

                </div>
            </div>
            <div class="reply">
                REPLY
            </div>
        </div>
    </div>
 </div><!-- end of comment container-->
</template>


<script>


export default{
    data:function(){
        return {
            timeAgo:'a few secs',
            commentItemData:{
                likes:0,
                dislikes:0,
                isLiked:false,
                isDisliked:false
            }
        }
    },props:['dataComingIn'],
    mounted(){
            this.timeAgo= this.$moment(this.dataComing.timestamp).utc().fromNow();
 
    },updated(){
         this.timeAgo= this.$moment(this.dataComing.timestamp).utc().fromNow();
    },computed:{
        dataComing(){
            return this.dataComingIn
        }
    },methods:{
        gotoProfile(){
            this.$router.push("/p/"+this.dataComingIn.commentedBy);
        }
    }
}

</script>