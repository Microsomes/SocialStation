const express = require('express');
const router= express.Router();
var mysql = require('mysql');
//require mysql module


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

//grab comment by its unique identifer
router.get('/comments/:uniqueIdentifer/:sort/:requestByWhom',(req,res,next)=>{
    const uniqueIdentifer= req.params.uniqueIdentifer;
    const sortby= req.params.sort;
    const requestByWhom= req.params.requestByWhom;
    //need to know the signed in user that is requesing the comments so we can check if the user has liked the comment before
    //find out if this user has liked the comment before
    if(sortby=="old"){
        //return oldest records first
        //returns all boards
    con.query("select * from comments WHERE uniqueIdentifer='"+uniqueIdentifer+"' ORDER BY commentId ASC",(err,results)=>{
        res.status(200).json({
            result:results,
            err:err
            });
    });
    }else if(sortby=="new"){
        //return newest records first 
            con.query("select * from comments WHERE uniqueIdentifer='"+uniqueIdentifer+"' ORDER BY commentId DESC",(err,results)=>{
            
                res.status(200).json({
                    result:results,
                    err:err
                    });
 
            });//end of query
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

    var isThreadInExistence= "SELECT uniqueCommentIdentifier FROM "+boardCommentsName+" WHERE uniqueCommentIdentifier='"+commentDatas.uniqueIdentifer+"'";

    con.query(isThreadInExistence,(err,result)=>{
        if(result.length==0){
            //thred does not exist
            //create one now
            console.log("thread does not exist");

            //creating board preparing sql
            var createThreadSQL= "INSERT INTO "+boardCommentsName+" (totalComments,commentsThreadTitle,uniqueCommentIdentifier) VALUES (1,'"+commentDatas.commentThreadTitle+"','"+commentDatas.uniqueIdentifer+"')";

            con.query(createThreadSQL,(err,result)=>{

                

            })

        }else{
            //thread exists
            //do not create one it does not exist
            console.log("thread does  exist hmm oh");

            //instread update that thread and add 1 to the comments
            var incrementSQLBy1= "UPDATE "+boardCommentsName+" SET totalComments= totalComments + 1 WHERE uniqueCommentIdentifier= '"+commentDatas.uniqueIdentifer+"'";

            con.query(incrementSQLBy1,(err,result)=>{
                console.log({
                    err:err,
                    result,
                })
            });

        }
    })

    
    var prepareInsertSQL="INSERT INTO "+commentsTableName+" (commentMsg,commentedBy,likes,dislikes,commenedByProfileImg,uniqueIdentifer) VALUES ('"+commentDatas.commentMsg+"','"+commentDatas.commentBy+"',0,0,'"+commentDatas.commentByProfileImg+"','"+commentDatas.uniqueIdentifer+"')";

    con.query(prepareInsertSQL,(err,result)=>{
        commentData.res.status(200).json({
            msg:'creating comment now',
            result,
        })
    })
    
     

}

module.exports= router;