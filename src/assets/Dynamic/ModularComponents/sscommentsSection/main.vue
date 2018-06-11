

<style scoped>

.commentsection_container{
     min-height:400px;
    margin-top:40px;
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
    left:30px
}
.commentsItemContainer{
     min-height:500px;
     margin-top:50px;
     margin-left:110px;
}
</style>


<template>
<div class="commentsection_container">
    <div class="commentsSectionResults">
        <div class="amountOfComments">
            771 Comments
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
            v-on:keyup="anaylyseTextInputted"
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
        <v-btn @click="addComment()" v-if="state.isCommentButtonDisabled==false" style="padding:0px;background:#AE2828;color:white;font-family: 'Roboto', sans-serif;" >Comment</v-btn>
    </div>

    <div class="commentsItemContainer">
        <commentItem v-for="n in commentBoard[0]['result']" :dataComingIn="n" ></commentItem>
    </div>
     
     
 </div>
</template>

<script>
import commentItem from './commentItem.vue';

 
export default{
    data:function(){
        return {
            commentText:'',
            state:{
                isCommentClicked:false,
                isCommentButtonDisabled:true
            },
            commentsSectionIdentifer:{
                //unique identifer needed to grab the correct board
                uniqueIdentifer:'trump'
            },
            commentBoard:[]
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
            $.post("http://localhost:8081/comments/addComment/sff",
            {
                commentMsg:"trump is  a prick ",
                commentBy:"Sajjid",
                commentProfilePic:"http://images.8tracks.com/cover/i/001/420/987/92895.original-9702.jpg?rect=80,0,319,319&q=98&fm=jpg&fit=max&w=320&h=320",
                uniqueIdentifier:"trump2",
                threadTitle:"trump owned"
            },
            function(data, status){
                console.log(data);
            });
        },
        grabComments(){
            //grab all comments in the unique identifier thread
            var home=this;
        $.get("http://localhost:8081/comments/comments/"+this.commentsSectionIdentifer.uniqueIdentifer+"/new/chris", function(data, status){
                home.commentBoard.push(data);
                console.log(data);
        });
        
        }
    },components:{
        commentItem:commentItem
    },mounted(){
        //retrieve all board comments from the unique identifer
        this.grabComments();
        //retrieve all comments
         
    }
}

</script>