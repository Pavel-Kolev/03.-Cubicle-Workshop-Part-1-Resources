const mongoose =require('mongoose')
const userSchema =new mongoose.SchemaTypeOptions({
    username:String,
    password:String,
})


const User=mongoose.model('User',userSchema)
module.exports=User