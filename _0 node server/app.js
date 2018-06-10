const express = require('express');
const app = express();
const product= require("./api/products/products");
const messages = require("./api/messages/messages");
const comments = require("./api/comments/comments");
const sqldirectflow = require("./api/sqlDirectFlow/sqldirectflow");
const morgan= require('morgan');
const bodyParser= require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(bodyParser.json());

app.use("/products",product);
app.use("/messages",messages);
app.use("/comments",comments)
 
app.use((req,res,next)=>{
    const error= new Error("not found");
    error.status(404);
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(500);
    res.json({
        messages:error.message
    });
});



module.exports= app;