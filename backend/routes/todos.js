const router = require('express').Router()
let Todo = require('../models/todos.model')

router.route('/').get((req, res) => {
    Todo.find()
        .then(todos => res.json(todos))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const name = req.body.name
    const important = req.body.important
    const done = req.body.done

    const newTodo = new Todo({name, important, done})

    newTodo.save()
        .then(() => res.json('Todo added!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
    Todo.findById(req.params.id)
        .then(todo => res.json(todo))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
    Todo.findByIdAndDelete(req.params.id)
        .then(() => res.json('Todo deleted!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
    Todo.findByIdAndUpdate(req.params.id, {
        important: req.body.important,
        done: req.body.done
    })
        .then(() => res.json('Todo updated!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router
