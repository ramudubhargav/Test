const express =require('express');


const router =express.Router();

router.get('/:pid',(req,res,next)=>{
    const value=req.params;
    res.json({value});
})

module.exports=router;