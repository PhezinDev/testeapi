const conn = require("./conn.js")

const getAll = async () => {
    const tasks =  await conn.execute("SELECT * FROM tasks")
    return tasks[0]
}

const createTask = async (task) => {
    const { title } = task
    const dateUTC = new Date(Date.now()).toUTCString()
    const query = "INSERT INTO tasks(title, status, create_at) VALUES (?, ?, ?)"
    const [createdTask] = await conn.execute(query, [title, 'pendente', dateUTC])
    return {insertId: createdTask.insertId}
}

const deleteTask = async (id) => {
    const removedTask = await conn.execute("DELETE FROM tasks WHERE id = ?", [id])
    return removedTask
}

const updateTask = async (id, task) => {
    const { title, status } = task
    const query = "UPDATE tasks SET title = ?, status = ? WHERE id = ?"
    const updatedTask = await conn.execute(query, [title, status, id])
    return updatedTask
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
}