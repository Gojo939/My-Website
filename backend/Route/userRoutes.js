const express = require("express");
const { createUser, getUsers, updateUser, deleteUser, loginUser, getUserById, deleteUserById,} = require("../controller/userController");
const { authenticateToken, isAdmin } = require("../middleware/authenticate");
const router = express.Router();

router.post("/create", createUser);
router.get("/all-users", authenticateToken, isAdmin, getUsers);
router.put("/update/:id", authenticateToken, updateUser);
router.get("/:id", authenticateToken, getUserById);
router.delete("/delete-user", authenticateToken, isAdmin, deleteUser);
router.delete("/:id", authenticateToken, deleteUserById);
router.post("/login", loginUser);

module.exports = router;