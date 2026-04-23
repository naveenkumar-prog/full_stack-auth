const Task = require("../models/Task");

exports.createTask = async (req, res) => {

try {

const { title, description } = req.body;

if (!title) {
  return res.status(400).json({
    message: "Title is required"
  });
}

const task = await Task.create({
  title,
  description,
  userId: req.user.id
});

res.status(201).json(task);

} catch (error) {
res.status(500).json(error.message);
}

};


// Get All Tasks
exports.getTasks = async (req, res) => {

try {

const tasks = await Task.find({
userId: req.user.id
});

res.json(tasks);

} catch (error) {
res.status(500).json(error.message);
}

};


// Update Task
exports.updateTask = async (req, res) => {

try {

const task = await Task.findByIdAndUpdate(
req.params.id,
req.body,
{ new: true }
);

res.json(task);

} catch (error) {
res.status(500).json(error.message);
}

};


// Delete Task
exports.deleteTask = async (req, res) => {

try {

await Task.findByIdAndDelete(req.params.id);

res.json({
message: "Task deleted"
});

} catch (error) {
res.status(500).json(error.message);
}

};