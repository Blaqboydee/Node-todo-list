const express = require('express');
const app = express();
const ejs = require("ejs")

let todos = [];

app.set("view engine", "ejs")
app.use(express.urlencoded())

const port = 8000
app.listen(port, () => {
console.log(`Server is running on port ${port}`);

})


app.get("/", (req, res) => {
    res.render("index", {todos})
})


app.post("/add",(req, res) => {
  const toDo = req.body.todo;
  todos.push(toDo)
  console.log(todos);
  res.redirect('/')
})

app.post("/delete", (req, res) => {
    const indexToDelete = parseInt(req.body.index)
    todos.splice(indexToDelete, 1)
    res.redirect("/")
})


app.post("/edit", (req, res) => {
    const index = parseInt(req.body.index)
    const newValue = req.body.newValue
    todos[index] = newValue
    res.redirect("/")
})

