const mongoose=require('mongoose')

const  userschema=new mongoose.Schema({
    username:String,
    password:String,
    hobby:String
})

const User = mongoose.model('User',userschema)

module.exports=User