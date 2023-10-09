const path= require("path")
const express=require("express")
const cookieParse= require("cookie-parser")
const {auth}=require('../middlewares/authmiddleware')

const expressConfig=(app)=>{
    const staticFiles=express.static(path.resolve(__dirname,"../public"))
    app.use(staticFiles)
    app.use(express.urlencoded({extended:false}))
    app.use(cookieParse())
    app.use(auth)
}
module.exports=expressConfig