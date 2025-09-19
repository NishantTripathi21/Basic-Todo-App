// backend/index.js
const express = require("express");
const app = express();
const cors = require("cors");
const { createTodo, updateTodo } = require("./inputValidation.js");
const { Todo } = require("./db");

app.use(express.json());
app.use(cors());

// create a new todo
app.post("/todo", async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        });
        return;
    }

    await Todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    });

    res.json({
        msg: "Todo created"
    });
});


app.get("/todos", async function(req, res) {
    const todos = await Todo.find({});

    res.json({
        todos
    });
});

// Route to mark a todo as completed
app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        });
        return;
    }

    await Todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    });

    res.json({
        msg: "Todo marked as completed"
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});