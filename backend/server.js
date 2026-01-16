const express = require('express')
const app = express()

const tasks = [
  { id: 1, title: "Task One", completed: false },
  { id: 2, title: "Task Two", completed: true }
]

app.get('/api/tasks', (req, res) => {
  res.json(tasks)
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
