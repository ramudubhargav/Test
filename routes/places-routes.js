const express =require('express');

const router =express.Router();
const Dummy=[
    {
        id : 'p1',
        title : 'Books',
        description : "one of the book",
        location:{
            lat:'11',
            lon :'12'
        },
        address : "India",
        creator : 'ul'
    }
]
router.get('/:pid',(req,res,next)=>{
    const placeID = req.params.pid;

    res.json({placeID});
})

module.exports=router;