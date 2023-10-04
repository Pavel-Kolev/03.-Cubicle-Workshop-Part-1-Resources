const router = require("express").Router();

const accService = require("../services/accessoryService");

router.get("/create", (req, res) => {
  res.render("accesory/create");
});
router.post("/create", async (req, res) => {
  const { name, description, imageUrl } = req.body;

  await accService.create({ name, description, imageUrl });
  res.redirect("/");
});

module.exports = router;
