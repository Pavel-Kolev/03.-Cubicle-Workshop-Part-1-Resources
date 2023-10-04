const router = require("express").Router()
const cubeService = require("../services/cubeService")
const accessoryService=require('../services/accessoryService')
router.get('/create', (req, res) => {

   res.render("cube/create")
})
router.post("/create", async (req, res) => {
   const { name, description, imageUrl, difficultyLevel } = req.body

   await cubeService.create({ name, description, imageUrl, difficultyLevel: Number(difficultyLevel) })
   res.redirect("/")
})
router.get('/:cubeId/details', async (req, res) => {
   const { cubeId } = req.params;
   const cube = await cubeService.getSingleCube(cubeId).lean()
   if (!cube) {
      res.redirect("404")
      return
   }
   res.render('cube/details', { cube })


})

router.get('/:cubeId/attach-accessory', async (req, res) => {
   const { cubeId } = req.params
   const cube = await cubeService.getSingleCube(cubeId).lean()
   
   const accesory =await accessoryService.getAll().lean()
   console.log(accesory)
   const hasAccessories= accesory.length>0
   res.render("accesory/attach", { cube,accesory })
})
module.exports = router