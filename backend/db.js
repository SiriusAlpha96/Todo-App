const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://mshreya63068:24yG8bZEyUFU1zVD@cluster0.wuwlvhn.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports ={
     todo
}