const router =require("express").Router()

router.get("/create",(req,res)=>{
    res.render("accesories/create")
})


module.exports =router;