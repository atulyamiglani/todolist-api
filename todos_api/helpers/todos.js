var db = require('../models');

exports.getTodos =  (req, res) => {
    db.Todo.find()
    .then( (todos)=> {
        res.json(todos);
    })
    .catch((err) => {
        res.send(err);
    })
}

exports.createTodo = (req, res) => {
    console.log("Request body: ", req.body); 
    db.Todo.create(req.body)
    .then((newTodo) => {
        res.json(newTodo);
    })
    .catch((err) => {
        res.send(err);
    })
}

exports.getTodo = (req, res) => {
    db.Todo.findById(req.params.todoId)
    .then((foundTodo) => {
        res.json(foundTodo);
    })
    .catch((err) => {
        res.send(err);
    })
}

exports.updateTodo = (req, res) => {
    res.send("UPDATE route");
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then((todo) => {
        res.json(todo);
    })
    .catch((err) => {
        res.send(err);
    })
}

exports.deleteTodo = (req, res) => {
    db.Todo.remove({_id: req.params.todoId})
    .then(() => {
        res.json({message: "deleted it"}); 
    })
    .catch((err) => {
        res.send();
    })
}

module.exports = exports;