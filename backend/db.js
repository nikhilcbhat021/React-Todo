/**
 * Uses MongoDB with Mongoose library
 * This file defines and exports the schema for all the collections needed for the todo - application
 */

// import mongoose.
// connect local to mongoose cluster.
// define Schema.

const mongoose  = require("mongoose");

mongoose.connect("mongodb+srv://nikhilbhat021:BEF7AmHdhnnYlpJF@cluster0.wdn5th3.mongodb.net/");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todos = mongoose.model('Todos' , todoSchema);

module.export = {
    todos
}

// todoTable.add({title: "Default Todo" , description: "This is a default todo.. You can't do anything about it."})