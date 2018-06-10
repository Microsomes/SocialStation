const express = require('express');
const router= express.Router();



router.use("/",function(req,res,next){
    res.status(200).json({
        message:"i am the messages api"
    });
});



module.exports = router;