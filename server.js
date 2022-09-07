const express=require('express');


const app=express();
const validate=require('./middlewares/validate-number');
const ERROR=require('./error-handlers/500');
const cors=require('cors');

app.use(cors());
// app.use(validate);
require('dotenv').config();


app.get('/',(req,res)=>{
    res.status(200).send('Liveing server');
});

app.get('/square',validate,(req,res)=>{
    const num=req.query.num;
    res.status(200).json({"num":Math.pow(num,2)});
})


function start(PORT){
    app.listen(PORT, ()=>{
        console.log(`Living on PORT= ${PORT}`);
    })
};
app.use(ERROR)


module.exports={
    start:start,
    app:app
}