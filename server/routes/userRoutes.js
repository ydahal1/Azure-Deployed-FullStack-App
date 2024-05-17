const express = require("express");
const userController = require("../controllers/userController");
const { createUserValidator, getUserValidator } = require("../middlewares/validators/userValidator");

const router = express.Router();


router.post("/",  userController.createUser);
router.get("/", userController.getUsers);
router.get("/:id", userController.getUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
