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

app.get("/new", (req, res) => {
    res.render("new")
})


app.get("/ano", (req, res) => {
    res.render("another")
})

app.post("/add",(req, res) => {
  const toDo = req.body;
  todos.push(toDo)
  console.log(todos);
  res.redirect('/')
})


app.post("/delete", (req, res) => {
    const indexToDelete = parseInt(req.body.index);
    todos.splice(indexToDelete, 1);
    res.redirect("/");
});


app.post("/edit", (req, res) => {
    const index = parseInt(req.body.index);
    const newTitle = req.body.newTitle;
    const newDescription = req.body.newDescription;


    todos[index] = {
        title: newTitle,
        description: newDescription
    };

    res.redirect("/");
});

