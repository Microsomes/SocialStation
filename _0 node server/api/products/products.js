const express = require('express');
const router= express.Router();

router.get("/",(req,res,next)=>{
    //handle products route here
    res.status(200).json({
        message:"I am the products api"
    });
});

module.exports= router;