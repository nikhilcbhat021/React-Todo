/**
 * This file has all the ZOD validation schemas.
 * To be used across the backend.
 */

const zod = require("zod");

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string(),
});

const updateTodo = zod.object({
    id: zod.string()
});



module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}
// Usage:  TodoSchema.parse({title: "First Todo", description: "This is a description about my life."})
