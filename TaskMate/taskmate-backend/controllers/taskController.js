const Task = require("../models/Task");

const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.status(200).json(tasks);
};

const createTask = async (req, res) => {
  const { title } = req.body;
  const task = await Task.create({
    title,
    user: req.user.id,
  });
  res.status(201).json(task);
};

const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (task && task.user.toString() === req.user._id.toString()) {
    await task.deleteOne();
    res.status(200).json({ message: "Task deleted" });
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};

module.exports = {
  getTasks,
  createTask,
  deleteTask,
};
