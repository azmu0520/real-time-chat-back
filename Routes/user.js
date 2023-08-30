const express = require("express");
const {
  registerUser,
  loginUser,
  findUser,
  getUsers,
} = require("../controllers/user");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/:userId", findUser);
router.get("/", getUsers);

module.exports = router;
