const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TodoSchema = new Schema({
    name: String,
    important: Boolean,
    done: Boolean
})

const Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo
