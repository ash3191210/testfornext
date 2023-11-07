const express = require('express')
const bodyparser=require('body-parser')
const {PORT}=require('./config.js')

const app=express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    const data={
        "name":"aniket sharma",
        "roll":"2106226",
        "from":"burdwaan"
    }
    res.json(data)
})



app.listen(PORT,()=>{
    console.log('server is  running on port 3000')
    console.log('http://localhost:3000')
})