'use strict';

const ERROR=(err, req,res, next)=>{
   
        res.status(500).send({
            code:500,
            message:`Error ${err}`
        })
    }
   


module.exports=ERROR;