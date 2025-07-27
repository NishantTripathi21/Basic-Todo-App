const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/todoAppDB");
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todoDB = mongoose.model("todos",todoSchema);

module.exports={
    todoDB
}