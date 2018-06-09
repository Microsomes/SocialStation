<!-- 
news item comp displays one news item
it has no network access and gets its data through slots and props and emits
-->

<style scoped>



/*css for standard_newsItem*/
.standard_newsItem{
    min-height: 600px;
    width:800px;
     padding: 10px;
    cursor: pointer;
    transition: all .2s;
    margin-top: 10px;
    position: relative;
     margin: 10px;
}
 
.top_infoBar{
    width: 100%;
    height: 45px;
    display: flex;
    position: relative;
}
.newsImage{
    width: 100%;
    height: 450px;
}
.newsTextInfo{
    width: 100%;
    min-height: 90px;
}
.newsIcon{
    width: 70px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.newsIcon i{
    color:grey;
    font-size: 30px;
    transition: all .2s;
}
.newsIcon i:hover{
    color:black;
    cursor: pointer;
}
.newsFromInfo{
    width: 300px;
    height: 100%;
}
.editOptions{
    align-items: flex-end;
    right: 0px;
    position: absolute;
    height: 100%;
    width: 20px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;    
    padding: 10px;
        font-family: 'Roboto', sans-serif;

}
.editOptions i{
    color:grey;
    position: absolute;
    top:0px;
    padding: 10px;
    transition: all .2s;
}
.editOptions i:hover{
    cursor: pointer;
    color:black;
}
.nameOfPerson{
    color: #365899;
    font-size: 15px;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
}
.timeAgo{
    position: relative;
    top: 5px;
    color:grey;
}
.commentOfAdder{
    padding: 10px;
    font-family: 'Roboto', sans-serif;
}
.title{
    color:black;
    padding: 10px;
}
.description{
    color:grey;
    padding-left: 10px;
    overflow:hidden;
    min-height: 30px;
}
.title a{
    color:grey;
    transition: all .2s;
}
.title a:hover{
    color:black;
}

.newsSourceLink{
    color:grey;
    padding: 10px;
    height: 5px;
    overflow: hidden;
    visibility: hidden;
}
.editOptionsContainer{
    height: 200px;
    min-width:70px;
    position: absolute;
    top:10px;
    background: #CD4545;
    border-radius: 5px;
    z-index: 10;
    padding: 10px;
}
.editItem{
    text-align: center;
    padding: 10px;
    font-family: 'Roboto', sans-serif;
    color:white;
    transition: all .2s;
}
.editItem:hover{
    color:black;
    background: white;
}
.editItem:active{
    background: black;
    color:white;
}

.updatePost{
}

.commentsSection{
    min-height: 10px;
}

@media only screen and (max-width: 500px) {
   .standard_newsItem{
       width:100%;
       display: flex;
       align-items: center;
       justify-content: center;
       flex-flow: column;
   }
   .newsImage{
       width:60%;
       height:60%;
       display: flex;
       align-items: center;
       justify-content: center;
   }
   .newsTextInfo{
       width:100%;
       width:60%;
   }
     .newsFromInfo{
         width:100%;
     }
    
}


</style>


<template>
<div>
    <div v-if="postData.isEditable==true" class="updatePost">
        <h2 style="color:grey">Someone is editing this post...</h2>
 
          <div  class="standard_newsItem"><!-- start of newsItem-->
            <div class="top_infoBar">
                
                <div class="newsIcon">
  <i class="material-icons">thumb_up</i>

                </div>
                <div class="newsFromInfo">
                    <div class="newsAuthor">
                                            <em>your name:</em>
                        <input v-on:keyup="updateAsync"  placeholder="your name" v-model="localState.updateValues.lastEditedBy" style="border:1px solid black;" type="text"/> <div style="display:inline;color:grey;">shared a news article</div>
                    </div>
                    <div class="timeAgo">
                        today
                    </div>
                    
                </div>
                <div class="editOptions">
                    <div v-if="localState.isEditOpen" class="editOptionsContainer">
                        <div @click="editPost()" class="editItem">Edit</div>
                        <div class="editItem">Delete</div>
                    </div>
                      <i @click="openEditMenu()" class="material-icons">more_vert</i>
                </div>
            </div><!-- end of top info bar-->
            <div class="commentOfAdder">
                <em>comment:</em>
                        <input v-on:keyup="updateAsync"  placeholder="your comment" v-model="localState.updateValues.adderComment"  style="border:1px solid black;" type="text"/> 
            </div>
            <div class="newsImage">
                    <em>image link:</em>
                <input v-on:keyup="updateAsync"  placeholder="image url" v-model="localState.updateValues.image"  style="border:1px solid black;" type="text"/> 
            </div>

            <div class="newsTextInfo">
                <div class="title">
                            <em>article title:</em>
                        <input placeholder="article title"   v-model="localState.updateValues.title"   style="border:1px solid black;" type="text"/>                 </div>
                <div class="description">
             <em>description:</em>
             <input v-on:keyup="updateAsync"  placeholder="article description"  v-model="localState.updateValues.description"  style="border:1px solid black;" type="text"/> 
             <em>source:</em>
             <input v-on:keyup="updateAsync"  placeholder="source url"  v-model="localState.updateValues.url"  style="border:1px solid black;" type="text"/> 

                </div>
                <div class="newsSourceLink">
                   <a style="color:grey" target="_blank" v-bind:href="postData.url"> {{postData.url}}</a>
                </div>
                
            </div>
            <v-btn @click="cancelUpdate()" style="background:#61B865;color:white;font-family: 'Roboto', sans-serif;padding:0px" color="succedss">Update</v-btn>
            <v-btn @click="cancelUpdate()" style="background:#CD4545;color:white;font-family: 'Roboto', sans-serif;padding:0px" color="succedss">Cancel</v-btn>

        </div><!-- end of standard news item-->

    </div>
    <!------------------------------------------------------------>
          <div v-if="postData.isEditable==false"  class="standard_newsItem"><!-- start of newsItem-->
            <div class="top_infoBar">
                
                <div class="newsIcon">
  <i class="material-icons">thumb_up</i>

                </div>
                <div class="newsFromInfo">
                    <div class="newsAuthor">
                        <em class="nameOfPerson">{{postData.createdBy}}</em> <div style="display:inline;color:grey;">shared a news article</div>
                    </div>
                    <div class="timeAgo">
                        today...last edited by {{postData.lastEditedBy}}
                    </div>
                </div>
                <div class="editOptions">
                    <div v-if="localState.isEditOpen" class="editOptionsContainer">
                        <div @click="editPost()" class="editItem">Edit</div>
                        <div @click="deletePost()" class="editItem">Delete</div>
                    </div>
                      <i @click="openEditMenu()" class="material-icons">more_vert</i>
                </div>
            </div><!-- end of top info bar-->
            <div class="commentOfAdder">
                {{postData.adderComment}}
            </div>
            <div class="newsImage">
                <img width="100%" v-bind:src="postData.image" height="100%" />
            </div>

            <div class="newsTextInfo">
                <div class="title">
                   <a target="_blank" v-bind:href="postData.url" >{{postData.title}}</a>
                </div>
                <div class="description">
                    {{postData.description}}
                </div>
                <div class="newsSourceLink">
                   <a style="color:grey" target="_blank" v-bind:href="postData.url"> {{postData.url}}</a>
                </div>
                 <div class="commentsSection">
                  <div class="loadCommentsButton">
                      <v-btn v-if="state.isCommentsOpen==false"  @click="openCommentsSection()" style="padding:0px;font-family: 'Roboto', sans-serif;">Load Comments</v-btn>
                      <v-btn v-if="state.isCommentsOpen==true"  @click="closeCommentsSection()" style="padding:0px;font-family: 'Roboto', sans-serif;">Close Comments</v-btn>
                  </div>
                  <div v-if="state.isCommentsOpen" class="commentsDisqusContainer">
                       <div class="comments">
                     <vue-disqus shortname="https-socialstation-io" identifier="two" url="https://socialstation.io"></vue-disqus>
                    </div>
                  </div>
                </div>
             </div>

        </div><!-- end of standard news item-->
</div>
 
</template>


<script>
import {db} from './../../../firestore.js';
//import the firebase database instance

export default{
    data:function(){
        return {
            state:{
                isCommentsOpen:false//determines if the comments section is open
            },
            localState:{
                isEditOpen:false,
                updateValues:{
                
                adderComment:this.postData.adderComment,
                description:this.postData.description,
                image:this.postData.image,
                lastEditedBy:this.postData.createdBy,
                title:this.postData.title,
                url:this.postData.url
                }
            },
        }
    },props:["postData"],
    firestore(){
        return {
                newsp2:db.collection("NewsRelated")
        }
    },
    methods:{
        closeCommentsSection(){
            //method closes the comment section
            this.state.isCommentsOpen=false;
        },
        openCommentsSection(){
            //method will open comments section
            this.state.isCommentsOpen=true;
        },
        openEditMenu(){
            //method that opens the edit menu
            this.localState.isEditOpen=true;

            //close edit menu after 5 seconds
            var home=this;
            setTimeout(function(){ 
                home.localState.isEditOpen=false;
            }, 5000);

        },
        editPost(){
            //sends firebase update request
            let postKeythis= this.postData[".key"];

            this.$firestore.newsp2.doc(postKeythis).update({
                isEditable:true
            })

        },
        updateAsync(){
            
            
            let postKeythis= this.postData[".key"];
            this.$firestore.newsp2.doc(postKeythis).update({
                adderComment:this.localState.updateValues.adderComment,
                description:this.localState.updateValues.description,
                image:this.localState.updateValues.image,
                lastEditedBy:this.localState.updateValues.lastEditedBy,
                title:this.localState.updateValues.title,
                url:this.localState.updateValues.url,
            })
        },
        updatePost(){
            //method sends firebase update request to update post

            
            let postKeythis= this.postData[".key"];
            this.$firestore.newsp2.doc(postKeythis).update({
                adderComment:this.localState.updateValues.adderComment,
                description:this.localState.updateValues.description,
                image:this.localState.updateValues.image,
                lastEditedBy:this.localState.updateValues.lastEditedBy,
                title:this.localState.updateValues.title,
                url:this.localState.updateValues.url,
                isEditable:false
            })

        },cancelUpdate(){
            //method sends firebase a update request to cancel update
            let postKeythis= this.postData[".key"];

            this.$firestore.newsp2.doc(postKeythis).update({
                isEditable:false
            })
        },
        deletePost(){
            //method sends firebase a update request to cancel update
            let postKeythis= this.postData[".key"];

            this.$firestore.newsp2.doc(postKeythis).delete();
        }
    }
}

</script>