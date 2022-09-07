'use strict';

const validate=(req,res,next)=>{
    if(isNaN(req.query.num)){
        next(`Error it is not a Number`);
    }
    else{
        next();
    }
}


module.exports=validate;