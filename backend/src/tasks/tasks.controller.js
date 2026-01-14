const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const createTaskProvider = require("./providers/createTask.provider.js");
const getTasksProvider = require("./providers/getTask.provider.js");
const updateTaskProvider = require("./providers/updateTask.provider.js");
const deleteTaskProvider = require("./providers/deleteTask.provider.js");

async function handleGetTask(req, res) {
 return await getTasksProvider(req, res);
}

async function handlePostTask(req, res) {
  return await createTaskProvider(req, res);
}

async function handlePatchTask(req, res) {
  return await updateTaskProvider(req, res);
 
}

async function handleDeleteTask(req, res) {
   return await deleteTaskProvider(req, res);
}

module.exports = {
    handleGetTask,
    handlePostTask,
    handlePatchTask,
    handleDeleteTask,
};