const mongoose=require("mongoose")


const userpage=new mongoose.Schema({
    email:{ type: String, required: true, unique: true },
    password:{type: String, require: true, unique: true}
})

const usermoderl=mongoose.model("userpage",userpage)


module.exports=usermoderl