const router= require("express").Router();

const userController=require('./controllers/userController')
const accesorieController=require("./controllers/accesoryController")
const homeController=require("./controllers/homeController")
const cubeController=require("./controllers/cubeController")
router.use(homeController)
router.use("/users",userController)
router.use("/cubes",cubeController)
router.use("/accessories",accesorieController)
router.get("*",(req,res)=>{
res.redirect("/404")

return
})


module.exports=router