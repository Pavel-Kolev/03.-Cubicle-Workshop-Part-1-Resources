const router = require("express").Router();
const userReg = require("../services/userService");
router.get("/register", (req, res) => {
  res.render("user/register");
});
router.post("/register", async (req, res) => {

  const { username, password, repeatPassword } = req.body;

  await userReg.register({ username, password, repeatPassword });

  res.redirect("/users/login");
});

router.get("/login", (req, res) => {
  res.render("user/login");
});

module.exports = router;
