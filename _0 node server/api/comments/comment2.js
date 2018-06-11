const express = require('express');
const router= express.Router();
var mysql = require('mysql');
//require mysql module
var SqlString = require('sqlstring');

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


  router.get("/addcomment",(req,res,next)=>{
    
    let dataToAdd= {
        commentMsg:'i am an example comment',
        commentedBy:'exampleperson',
        likes:0,
        dislikes:0,
        commenedByProfileImg:'exampleimg',
        uniqueIdentifer:"tru'mp"
    }

    let sql='INSERT INTO comments SET ?';

    con.query(sql,dataToAdd,(err,result)=>{
        console.log(result);
    })


      res.status(200).json({
          msg:'adding comment'
      });
  })


router.get("/selectComment/:uniqueIdentifier/:commentID",(req,res,next)=>{
    const uid= req.params.uniqueIdentifier;
    const cid= req.params.commentID;

    let sql= "SELECT * FROM comments WHERE uniqueIdentifer= ? AND commentId= ?";
    con.query(sql,[uid,cid],(err,result)=>{
        res.status(200).json({
            result,
            err,
        });
    })

})

router.use("/",function(req,res,next){
    res.status(200).json({
        message:"i am the comment2"
    });
});


module.exports= router;