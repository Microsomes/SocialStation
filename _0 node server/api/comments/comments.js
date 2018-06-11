const express = require('express');
const router= express.Router();
var mysql = require('mysql');
//require mysql module
var SqlString = require('sqlstring');


const commentsTableName= "comments";
//stores the comments table name
const boardCommentsName= "commentsboard";
//store the board comments name
const SSlikedTable= "liketable";

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "socialstation"
  });
//connect to database

con.connect(function(err) {
    if(err){
        //send me a text message letting me know the server is not connected
        
    }
     console.log("Connected to social station database");
  });




//route used to grab all boards accross the whole website
router.get('/allBoards/:sort',(req,res,next)=>{
    //returns all boards
    const sort= req.params.sort;

    if(sort=="new"){
        //give newly created boards here
        con.query("select * from commentsboard ORDER BY commentsBoardID DESC",(err,results)=>{
            res.status(200).json({
                result:results
            });
        });
    }else if(sort=="old"){
        //give older created boards here
         con.query("select * from commentsboard ORDER BY commentsBoardID ASC",(err,results)=>{
            res.status(200).json({
                result:results
            });
        });
    }else{
        res.status(200).json({
            err:'/new or /old required /new returns newest boards first and /old returns the oldest boards first'
        });
    }

    
});

//grab comments by its unique identifer
router.get('/comments/:uniqueIdentifer/:sort/:requestByWhom',(req,res,next)=>{
    const uniqueIdentifer= req.params.uniqueIdentifer;
    const sortby= req.params.sort;
    const requestByWhom= req.params.requestByWhom;
    //need to know the signed in user that is requesing the comments so we can check if the user has liked the comment before
    //find out if this user has liked the comment before

    
   

    if(sortby=="old"){
        //return oldest records first
        //returns all boards

        let oldsql="SELECT * FROM comments where uniqueIdentifer= ? ORDER by commentId ASC";
        let totsSQL="SELECT * FROM commentsboard WHERE uniqueCommentIdentifier= ?";


        con.query(oldsql,uniqueIdentifer,(err,result)=>{
            
            con.query(totsSQL,uniqueIdentifer,(terr,tresult)=>{
                res.status(200).json({
                    result,
                    tresult,
                    err,
                    terr
                });
            })
            
        })//end of query

    }else if(sortby=="new"){
        
        let oldsql="SELECT * FROM comments where uniqueIdentifer= ? ORDER by commentId DESC";
        let totsSQL="SELECT * FROM commentsboard WHERE uniqueCommentIdentifier= ?";


        con.query(oldsql,uniqueIdentifer,(err,result)=>{
            
            con.query(totsSQL,uniqueIdentifer,(terr,tresult)=>{
                res.status(200).json({
                    result,
                    tresult,
                    err,
                    terr
                });
            })
            
        })//end of query
    }else{
        res.status(200).json({
            err:'/new or /old required /new returns newest comments first and /old returns the oldest comments first'
        })
    }
     
});

//route handles adding a comment
router.post('/addComment/:commentData',(req,res,next)=>{
    const commentMsg= req.body.commentMsg;
    const commentBy= req.body.commentBy;
    const commentByProfileImg= req.body.commentProfilePic;
    const uniqueIdentifer= req.body.uniqueIdentifier;
    const threadTitle= req.body.threadTitle;

    //calls method that handles creating a comment
    createComment({
        commentMsg,
        commentBy,
        commentByProfileImg,
        uniqueIdentifer,
        threadTitle,
        res:res
    });

});


 

function createComment(commentData){
    //checks if a thread is already created if not creates one
   
    //sends message back to client when the comment has been created
     let commentDatas={
        commentMsg:commentData.commentMsg,
        commentBy:commentData.commentBy,
        commentByProfileImg:commentData.commentByProfileImg,
        commentThreadTitle:commentData.threadTitle,
        like:0,
        dislike:0,
        uniqueIdentifer:commentData.uniqueIdentifer
    }
    //commentdatas stored all the data needed to create a comment
    console.log("comments data below");
    console.log(commentDatas);




    //check if a board is for the unique identifer is created if not create one

    var isThreadInExistence= "SELECT uniqueCommentIdentifier FROM "+boardCommentsName+" WHERE uniqueCommentIdentifier= ?";

    con.query(isThreadInExistence,commentDatas.uniqueIdentifer,(err,result)=>{
        if(result.length==0){
            //thred does not exist
            //create one now
            console.log("thread does not exist");

            let toAdd={
                totalComments:1,
                commentsThreadTitle:commentDatas.commentThreadTitle,
                uniqueCommentIdentifier:commentDatas.uniqueIdentifer
            }
            //creating board preparing sql
            var createThreadSQL= "INSERT INTO "+boardCommentsName+" SET ?";

            con.query(createThreadSQL,toAdd,(err,result)=>{
                console.log(result);
            })

        }else{
            //thread exists
            //do not create one it does not exist
            console.log("thread does  exist hmm oh");

            //instread update that thread and add 1 to the comments
            var incrementSQLBy1= "UPDATE "+boardCommentsName+" SET totalComments= totalComments + 1 WHERE uniqueCommentIdentifier= ?";

            con.query(incrementSQLBy1,commentDatas.uniqueIdentifer,(err,result)=>{
                console.log({
                    err:err,
                    result,
                })
            });

        }
    })

    var toAddComment={
        commentMsg:commentDatas.commentMsg,
        commentedBy:commentDatas.commentBy,
        likes:0,
        dislikes:0,
        commenedByProfileImg:commentDatas.commentByProfileImg,
        uniqueIdentifer:commentDatas.uniqueIdentifer
    }
    
    var prepareInsertSQL="INSERT INTO "+commentsTableName+" SET ?";

    con.query(prepareInsertSQL,toAddComment,(err,result)=>{
        commentData.res.status(200).json({
            msg:'creating comment now',
            result,
        })
    })
    
     

}

module.exports= router;