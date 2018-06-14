<!--
@author Muhammed T Javed
@date 14/06/2018
- pinned item 
-->

<style scoped>
* {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
.infoContainer{
    width: 300px;
    min-height: 500px;
    border-radius: 5px;
    margin: 10px;
}
.profileName{
font-family: 'Roboto', sans-serif;
text-align: center;
font-size: 20px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
text-transform:capitalize;
}
.bio{
    padding: 10px;
    font-family: 'Roboto', sans-serif;
}
.inconableInfoItem i{
    color:black;
}
.inconableInfoItem{
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    color:grey;
    letter-spacing: 1.5px;
    padding: 10px;
    padding-left:5px; 
}
.inconableInfoItem .text{
    margin-left: 20px;
}
.inconableInfoItem .text a{
    color:grey;
}
.photosAndImagesContainer{
    min-height: 300px;
    padding: 10px;
}
.photoItem{
    height: 90px;
    width: 90px;
    margin: 10px;
    transition: all .5s;
}
.photoItem:hover{
    cursor: pointer;
    background: #D35B5B;
    transform: scale(2.5);
    border:5px solid #D35B5B;
 }
.photosContainer{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.leftSide{
    display: flex;
}
.memoralWallContainer{
    width: 600px;
    margin: 12px;
    border-radius: 5px;
}
.memoraiTitle{
    color:grey;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    margin: 10px;
}
.memorialSubline{
    padding: 10px;
    color:grey;
    font-family: 'Roboto', sans-serif;
    position: relative;
    top:-10px;
    left: 10px;
    text-transform: capitalize;
}
.typeSomething{
    height: 100px;
    width: 100%;
    padding: 10px;
}
.typeSomething input[type="text"]{
    width: 100%;
    height: 10%;
    padding: 10px;
    outline:none;
    border:1px solid grey;
    transition: all .5s;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
        box-shadow: 5px 10px #D35B5B;

}
.typeSomething input[type="text"]:focus{
    height: 100%;
}
.leftSideColumnContainerThird{
    width: 250px;
}
.profileCompletion{
    border-radius: 5px;
    min-height: 250px;
     border-radius: 1px;
    margin-bottom: 10px;
    margin-top: 0px;
     
}
.profileCompletion .title{
    color:grey;
    padding: 10px;
    font-family: 'Roboto', sans-serif;
}
.progressionCircle{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85%;
    font-family: 'Roboto', sans-serif;

}
.profileCompletionTips{
        font-family: 'Roboto', sans-serif;
}
.profileCompletionTips{
    padding: 10px;
    min-height: 100px;
    color:grey;
    
}
.profiletext{
    font-family: 'Roboto', sans-serif;
    margin-left: 10px;
    color:grey;
    font-weight: bold;
}
.piggedReads{
    min-height: 200px;
     border-radius: 1px;
    margin-bottom: 10px;
    margin-top: 5px;
    padding:10px;
 }
.explanation{
    color:grey;
    font-family: 'Roboto', sans-serif;
    padding: 10px;
}

.editProfileContainer{
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    width: 90%;
}
.editProfileButton{
    background:#D35B5B;
    width: 80%;
    border-radius: 30px;
    padding: 10px;
    margin:10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    text-align: center;
}
.editProfileButton:hover{
    cursor:pointer;
}

.pinnedItem{
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .2s;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
}
.pinnedIcon{
    width: 50px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.pinnedIcon i{
    font-size: 50px;
    color:#D35B5B;
}
.pinnedTextContainer{
    width:200px;
    padding: 2px;
}
.pinnedTextContainer .pinnedText{
    color:grey;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    font-weight: bold;
}
.pinnedPinnedBy{
    color:grey;
    position: relative;
    left: 5px;
}

.pinnedItem:hover{
    cursor: pointer;
    background: lightcyan;
    padding: 10px;
     
}
.likedPeopleOverview{
    border-radius: 1px;
     margin-top: 0px;
    padding:10px;

}
.updateProfileContainer{
    width: 100%;
}
.memorialItemsContainer{
    border:1px solid lightcyan;
    min-height: 3000px;
    border-radius: 5px;
}

.memorialItem{
    border:1px solid lightcyan;
    min-height:100px;
    border-radius: 5px;
    display: flex;
           transition: all .2s;

}
.memorialLeftIcon{
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
}
.memorialLeftIcon i{
    font-size: 50px;
    color:#D35B5B;
    transition: all .2s;
}
.memorialLeftIcon i:hover{
    cursor:pointer;
    color:black;
}
.memorailRightInfo{
    min-width: 100px;
    border-radius: 5px;
    min-height: 200px;

}
.memorialItem:hover{
       cursor:pointer;
       background:lightyellow;
       padding: 10px;
   }
@media only screen and (max-width:800px){
    .leftSide{
        flex-flow: column;
        justify-content: center;
        align-items: center;
        
    }
    .memoralWallContainer{
        width: 90%;
    }
    .infoContainer{
        width:90%;
    }
    .leftSideColumnContainerThird{
        width:90%;
    }
   .memorialItem{
       display: flex;
       flex-flow: column;
       align-items: center;
       justify-content: center;
       width: 100%;
       min-height: 300px;
   }
    
   
   .memorialItemsContainer{
       width: 100%;
       min-height: 300px;
    }
   
    
}
</style>



<template>

 <div @click="goToLink"  class="pinnedItem"><!-- pinned items starts here-->
                    <div class="pinnedIcon">
                        
                          <i class="material-icons">book</i>
                    </div>
                    <div class="pinnedTextContainer">
                        <div class="pinnedText">{{data.data.title}}</div>
                        <div class="pinnedPinnedBy">{{timeAgo}}</div>
                         </div>
</div><!-- pinned ends here-->

</template>

<script>

export default{
    data:function(){
        return {

        }
    },props:["data"],
    computed:{
        timeAgo(){
             return this.$moment(this.data.data.timestamp).fromNow();
        }
    },methods:{
        goToLink(){
            var linkToGo=this.data.data.link;
                window.open("http://"+linkToGo, '_blank');

        }
    }
}

</script>