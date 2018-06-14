

<style scoped>

.commentsection_container{
     min-height:200px;
   }
.commentsSectionResults{
    display: flex;
    padding: 10px;
    align-items: center;
}
.amountOfComments{
    height: 100%;
    width:200px;
    color:grey;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 18px;
}
.sortBy{
    display: flex;
    width:100px;
    justify-content: center;
    align-items: center;
    position: relative;
    top:2px;
}
.sortText{
    color:red;
    position: relative;
    top:-3px;
    left:2px;
}
.sortIcon{
    position: relative;
    left:-5px;

}
.sortIcon i{
    font-size: 20px;
}
.enterACommentContainer{
     display: flex;
    align-items: center;
    position: relative;
    }
.userProfilePic{
    width:50px;
    height:50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    background-color: #AE2828;
    color:white;

}

.userProfilePICContainer{
    height: 100%;
    width:200px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
     position: relative;
    left: -20px;
    top:20px;    
}
.commentEnterInputContainer{
     width:600px;
 }
.commentInput{
    color:grey;
    border-bottom:1px solid #EEEEEE;
    height:50px;
}
.commentsCancelOrSubmitButtons{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
 }
.commentsItemContainer{
     min-height:10px;
     margin-top:50px;
  }


  @media only screen and (max-width:1060px){
      .commentsection_container{
         width:100%;
      }
      .enterACommentContainer{
          right:0px;
       }

      .commentsItemContainer{
      }
  }
</style>


<template>
<div class="commentsection_container">
    <div class="commentsSectionResults">
        <div class="amountOfComments">
            Comments {{totalComments}}
         </div>
        <div class="sortBy">
            <div class="sortIcon">  <i class="material-icons">sort</i></div>
            <div class="sortText">
                <b-dropdown variant="danger" class="dropdownButton" style="padding:0px;margin:0px;font-family: 'Roboto', sans-serif;"  text="Sort" >
                <b-dropdown-item>Recent Comments</b-dropdown-item>
                <b-dropdown-item>Oldest Comments</b-dropdown-item>
            
  </b-dropdown>

            </div>
        </div>
    </div><!-- end of comment section results-->
    <div class="enterACommentContainer">

        <div class="userProfilePICContainer">
        <div class="userProfilePic">P</div>
        </div>

        <div class="commentEnterInputContainer">
            <v-text-field
            
            @click="state.isCommentClicked=true"
            v-on:keyup="anaylyseTextInputted()"
             class="commentInput"
            style="width:100%;"
      v-model="commentText"
        label="Comment"
       
    ></v-text-field>
        </div>
        
    </div>
    <div v-if="state.isCommentClicked" class="commentsCancelOrSubmitButtons">
        <v-btn @click="state.isCommentClicked=false;commentText='';anaylyseTextInputted()" style="padding:0px;font-family: 'Roboto', sans-serif;">Cancel</v-btn>
        <v-btn v-if="state.isCommentButtonDisabled==true" style="padding:0px;background:#AE2828;color:white;font-family: 'Roboto', sans-serif;" disabled>Comment</v-btn>
        <v-btn @click="addCommentFirebase()" v-if="state.isCommentButtonDisabled==false" style="padding:0px;background:#AE2828;color:white;font-family: 'Roboto', sans-serif;" >Comment</v-btn>
    </div>

    <div class="commentsItemContainer">
        <commentItem v-for="(n,index) in commentBoard" :dataComingIn="n" :key="index" ></commentItem>
    </div>
     
      
 </div>
</template>

<script>
import commentItem from './commentItem.vue';

import {db} from './../../../firestore.js';
//import database sdk

//comment layout

 
export default{
    data:function(){
        return {
            commentsRef:null,
            commentText:'',
            totalComments:0,
            state:{
                isCommentClicked:false,
                isCommentButtonDisabled:true
            },
            commentsSectionIdentifer:{
                //unique identifer needed to grab the correct board
                uniqueIdentifer:'comment-bb2'
            },
            commentBoard:[
                {
                    commentMsg:'my name is jeff',
                    commentedBy:'microsomes',
                    commenedByProfileImg:'image',
                    timestamp:'today'
                }
            ]
        }
    },computed:{
        boardData(){
            return this.commentBoard[0]['result'];
        }
    },methods:{
        anaylyseTextInputted(){
            var home=this;
            //check if comment text is greater then 1
            if(home.commentText.length>=1){
                home.state.isCommentButtonDisabled=false;
            }else{
                home.state.isCommentButtonDisabled=true;
            }
        },
        addComment(){
             const username=this.$store.state.authRelated.loginDetails.profileMeta.username;
            var home=this;

            $.post("http://188.166.158.15/comments/addComment/sff",
            {
                commentMsg:this.commentText,
                commentBy:username,
                commentProfilePic:"http://images.8tracks.com/cover/i/001/420/987/92895.original-9702.jpg?rect=80,0,319,319&q=98&fm=jpg&fit=max&w=320&h=320",
                uniqueIdentifier:this.commentsSectionIdentifer.uniqueIdentifer,
                threadTitle:"trump owned"
            },
            function(data, status){
                console.log(data);
                // home.reloadComments();
                 home.state.isCommentClicked=false;
                 home.commentText="";
                //empty comment text here
                home.reloadComments();

 
            });
        },
        addCommentFirebase(){
            const username=this.$store.state.authRelated.loginDetails.profileMeta.username;
            //add comment is same to add comment but with firebase
            console.log("grabbing comment");
            //grab all comments in the unique identifier thread
            var home=this;

            var commentsRef= db.collection("commentingSystem");

            commentsRef.where("slug","==",home.commentsSectionIdentifer.uniqueIdentifer).get().then(u=>{
                if(u.empty){
                    //no thread  create a thead
                    commentsRef.add({
                        amountOfComments:"yes",
                        dateCreated:this.$moment().format(),
                        slug:home.commentsSectionIdentifer.uniqueIdentifer
                    }).then(sta=>{
                        console.log("thread created");
                        home.commentText="";
                        //empty comment text
                    }).catch(err=>{
                        console.log("thread cannot be created");
                    })
                    
                }else{
                    console.log("thrad already exsits");

                    u.forEach(thrad=>{
                        
                        var theadCommentRef= thrad.ref.collection("comments");
                        theadCommentRef.add({
                            commentMsg:home.commentText,
                            timestamp:this.$moment().format(),
                            userCreated:username,
                            waves:0
                        }).then(sta=>{
                            console.log("comment added");
                            home.commentText="";
                            //empty comment text
                            //referese and request an update of the comments
                            //this.grabCommentsFirebase();

                        }).catch(err=>{
                            console.log("comment not added error occured");
                        })
                    })

                }
            })

            

        
        },
        grabCommentsFirebase(){
            var home=this;
            //this method will do exactly what grab comments does but uses firebase as its backend
            this.commentsRef = db.collection("commentingSystem");

            this.commentsRef.where("slug","==",home.commentsSectionIdentifer.uniqueIdentifer).get().then(u=>{
                if(u.empty){
                    //no thrad or comments exist no big problem
                    home.totalComments="None";
                }else{
                    u.forEach(element => {
                        //since a thred exists lets try and extract its comments data
                        let amountOfComments= element.data().amountOfComments;
                        let timestamp= element.data().dateCreated;
                        let slug= element.data().slug;
                        home.totalComments= amountOfComments;
                        //set total ammount of comments

                        element.ref.collection("comments").get().then(comment=>{
                            comment.forEach(commdoc=>{                               
                                let commentMsg= commdoc.data().commentMsg;
                                let timestamp= commdoc.data().timestamp;
                                let userCreated=commdoc.data().userCreated;
                                let waves=commdoc.data().waves;
                            })
                        }).catch(err=>{
                         });




                     });
                }
            }).catch(err=>{
                console.log(err);
            })





        },
        reloadComments(){
            //method used to reload comments
                        console.log("erased");

            this.commentBoard=[];
              this.grabComments();
            // this.grabComments();
         }
    },components:{
        commentItem:commentItem
    },mounted(){
        //retrieve all board comments from the unique identifer
        this.grabCommentsFirebase();
        //retrieve all comments


           
    },props:["uid"]
}

</script>