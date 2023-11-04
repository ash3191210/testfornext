const express=require('express')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const User = require('./models.js')


const app=express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))


const url="mongodb://127.0.0.1/myexp"
async function  createfirst(){
   try{
     const conn=await mongoose.connect(url)
     console.log("connection succesful..")

   } catch(er){
     console.log("something wrong...")
     console.log(er)
   }
}

createfirst()
app.post('/data' ,async(req,res)=>{
   const user=new User({
     username:req.body.username,
     password:req.body.password
   })
   try{
    const resu=await user.save();
    console.log("inserted")
   } 
   catch(er){
     console.log("error in insertion")
     console.log(er)
   }
   res.json({
     "success":"true",
     "message":"yes!!!"
   })
})
app.listen(3000,()=>{
     console.log('http://localhost:3000')
})