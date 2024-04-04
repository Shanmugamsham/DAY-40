const express=require("express")
const app=express()
const router=require("./router")
const mongoose=require("mongoose")
const cors=require("cors")
require('dotenv').config()
app.use(cors())
const mongdb=async()=>{
    await mongoose.connect(process.env.MONGDB).then(()=>console.log("success")).catch(()=>console.log("fails"))
}
mongdb()

app.use(express.json())
app.use(router)
app.listen(process.env.PORT,process.env.HOST,()=>{
    console.log("http://localhost:3020");
})