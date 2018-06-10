const express = require('express');
const router= express.Router();
var mysql = require('mysql');
//require mysql module

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "socialstation"
  });
//connect to database

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to social station database");
  });




//route used to grab all boards accross the whole website
router.get('/allBoards',(req,res,next)=>{
    //returns all boards
    con.query("select * from commentsboard",(err,results)=>{
        res.status(200).json({
            result:results
        });
    });
});

//grab comment by its unique identifer
router.get('/comments/:uniqueIdentifer',(req,res,next)=>{
    const uniqueIdentifer= req.params.uniqueIdentifer;
    //returns all boards
    con.query("select * from comments WHERE uniqueIdentifer='"+uniqueIdentifer+"'",(err,results)=>{
        res.status(200).json({
            result:results
            });
    });
});

module.exports= router;