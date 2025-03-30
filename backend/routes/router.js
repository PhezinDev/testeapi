const express = require("express")
const tasksController = require("../src/controllers/tasksController")

const router = express.Router()

router.get("/tasks", tasksController.getAll)

module.exports = router

