const express= require('express')
const app=express();
const port=80
const db=require('./config/db')
const passportJWT=require('./config/jwt-auth');
const passport=require('passport')
//middleware
app.use(express.urlencoded({ extended: false }));
app.use('/',require('./routes/index'))



//server Config
app.listen(port,function (err){
    if(err) {
        console.log('Internal Server Error', err)
    }
    console.log('server start on port:',port)
})