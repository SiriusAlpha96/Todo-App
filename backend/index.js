const express = require("express");
const { createTodo } = require("./type");
const app = express();

app.use(express.json());


app.post("/todo", function(req,res){
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad)
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
})

app.get("/todos", function(req,res){

})

app.post("/completed", function(req,res){
     const updatePayLoad = req.body;
     const parsedPayLoad = updateTodo.safeParse(updatePayLoad);
     if(!parsedPayLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
     }
})

app.listen(3000);