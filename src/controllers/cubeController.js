const router = require("express").Router();
const cubeService = require("../services/cubeService");
const accessoryService = require("../services/accessoryService");
router.get("/create", (req, res) => {
  res.render("cube/create");
});
router.post("/create", async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;



  await cubeService.create({
    name,
    description,
    imageUrl,
    difficultyLevel: Number(difficultyLevel),
    owner:req.user,
  });
  res.redirect("/");
});
router.get("/:cubeId/details", async (req, res) => {
  const { cubeId } = req.params;
  const cube = await cubeService.getSingleCube(cubeId).lean();
  if (!cube) {
    res.redirect("404");
    return;
  }
  const accessories=cube.accessories

  const hasAccessories=accessories===undefined?false:accessories.length>0
  res.render("cube/details", { cube,accessories,hasAccessories });
});

router.get("/:cubeId/attach-accessory", async (req, res) => {
  const { cubeId } = req.params;
  const cube = await cubeService.getSingleCube(cubeId).lean();
  const accessoryIds=cube.accessories?cube.accessories.map((a)=>a._id):[];
  const accesory = await accessoryService.getWithoutOwned(accessoryIds).lean();

console.log(accessoryIds)
  const hasAccessories = accesory.length > 0;
  res.render("accesory/attach", { cube, accesory, hasAccessories });
});
router.post("/:cubeId/attach-accessory", async (req, res) => {
  const { cubeId } = req.params;
  const { accessory: accessoryId } = req.body;
  console.log(cubeId)
  console.log(accessoryId)
  await cubeService.attachAccessory(cubeId, accessoryId);

  res.redirect(`/cubes/${cubeId}/details`);
});
router.get('/:cubeId/edit',(req,res)=>
{
  res.render("cube/edit")
})
router.get('/:cubeId/delete',(req,res)=>
{
  res.render("cube/delete")
})
module.exports = router;
