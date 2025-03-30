const express = require("express")
const tasksController = require("../src/controllers/tasksController")
const taskMiddleware = require("../src/middlewares/taskMiddleware")

const router = express.Router()


router.get("/tasks", tasksController.getAll)
router.post("/tasks", taskMiddleware.validateFieldTitle, tasksController.createTask)
router.delete("/tasks/:id", tasksController.deleteTask)
router.put("/tasks/:id", taskMiddleware.validateFieldTitle, taskMiddleware.validateFieldStatus, tasksController.updateTask)

module.exports = router

