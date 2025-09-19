const zod = require("zod");

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
});

//the ID is a string
const updateTodo = zod.object({
    id: zod.string()
});

module.exports = {
    createTodo,
    updateTodo
};