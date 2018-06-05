const express = require('express');
const app = express();
const product= require("./api/products/products");
const messages = require("./api/messages/messages");
const morgan= require('morgan');

app.use(morgan('dev'));

app.use("/products",product);
app.use("/messages",messages);

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