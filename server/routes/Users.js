const express = require("express");
const router = express.Router();
const Users = require("../models/Users");
const bcrypt = require("bcrypt");

router.post("/auth", async (req, res) => {
  const { name, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  await Users.create({
    name: name,
    email: email,
    password: hash,
  });
  res.json("SUCCESS");
});

console.log(Users.create);

// router.post("/login", async (req, res) => {
//   const { username, password } = req.body;

//   const user = await Users.findOne({ where: { username: username } });

//   if (!user) res.json({ error: "User Doesn't Exist" });

//   bcrypt.compare(password, user.password).then((match) => {
//     if (!match) res.json({ error: "Wrong Username and Password Combination" });

//     res.json("YOU LOGGED IN!!");
//   });
// });

router.get("/auth", (req, res) => {
  res.json(req.user);
});

module.exports = router;
