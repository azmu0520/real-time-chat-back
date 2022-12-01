const Task = require('../models/tasks');
const getAllTasks = async (req, res) => {
  try {
    const task = await Task.find({});
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error });
  }
};
const getTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });
    if (!task) {
      return res
        .status(404)
        .json({ msg: `User Not Found With The Id: ${req.params.id}` });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updateTask = (req, res) => {
  res.send('update Task');
};

const deleteTask = (req, res) => {
  res.send('update Task');
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
