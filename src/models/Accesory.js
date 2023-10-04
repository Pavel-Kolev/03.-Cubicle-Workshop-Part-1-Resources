const mongoose=require("mongoose")

const accSchema=new mongoose.Schema({
    name:String,
    description:String,
    imageUrl:String,
    
})


const acc =mongoose.model("acc",accSchema)
module.exports=acc