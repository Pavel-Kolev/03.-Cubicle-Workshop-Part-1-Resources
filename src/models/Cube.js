const mongoose=require("mongoose")

const cubeSchema=new mongoose.Schema({
    name:String,
    description:String,
    imageUrl:String,
    difficultyLevel:Number,


    accessories:[{
        type:mongoose.Types.ObjectId,
        ref:"Accessory" // name of model
    }]
})


const Cube =mongoose.model("cube",cubeSchema)
module.exports=Cube