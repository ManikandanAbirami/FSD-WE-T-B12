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
  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  } else {
    await task.remove();
    res.status(200).json({ id: req.params.id });
  }
};

module.exports = {
  getTasks,
  createTask,
  deleteTask,
};
