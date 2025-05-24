const express = require("express");
const router = express.Router();
const {
  getTasks,
  createTask,
  deleteTask,
} = require("../controllers/taskController");
const { protect } = require("../middleware/auth");

// router.route("/").get(protect, getTasks).post(protect, createTask);
router.route("/").get(protect, getTasks);
router.route("/").post(protect, createTask);
router.route("/:id").delete(protect, deleteTask);

module.exports = router;
