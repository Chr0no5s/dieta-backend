const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.get("/", (req,res)=>res.send("API funcionando!"));
router.post("/register", UserController.register);
router.post("/login", UserController.login);

module.exports = router;
