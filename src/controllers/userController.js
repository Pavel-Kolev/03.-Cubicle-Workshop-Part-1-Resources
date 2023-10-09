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
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const token = await userReg.login(username, password);
  console.log(username,password)
  res.cookie("auth", token, { httpOnly: true });

  res.redirect("/");
});
router.get('/logout',(req,res)=>{
  res.clearCookie("auth")
res.redirect('/')
})
module.exports = router;
