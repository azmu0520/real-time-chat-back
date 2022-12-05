const Task = require('../models/tasks');
const { createCustomError } = require('../errors/custom-error');
const asyncWrapper = require('../middlewares/async');

const getAllTasks = asyncWrapper(async (req, res) => {
  const task = await Task.find({});
  res.status(200).json({ task });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});
const getTask = asyncWrapper(async (req, res, next) => {
  const { id: TaskId } = req.params;
  const task = await Task.findOne({ _id: TaskId });
  if (!task) {
    return next(createCustomError(`No task found with id: ${TaskId}`, 404));
  }
  res.status(200).json(task);
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: TaskId } = req.params;
  const task = await Task.findOneAndUpdate({ _id: TaskId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`No task found with id: ${TaskId}`, 404));
  }
  res.status(200).json(task);
  res.send('update Task');
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: TaskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: TaskId });
  if (!task) {
    return next(createCustomError(`No task found with id: ${TaskId}`, 404));
  }
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
