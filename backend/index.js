// imports
const { safeParse } = require("zod");
const {todos} = require("./db")
const { createTodo, updateTodo } =  require("./types.js");


const express = require("express")
const app = express();
const port = 3000;

// middlewares
app.use(express.json())
const middlewares = (req, res, next)=>{
    console.log('Inside middlewares');
    next();
}

app.get('/todos', async (req, res) => {
    try {
        const allTodos = await todos.find({});
        res.status(200).json({
            msg: allTodos
        })
    } catch (error) {
        res.status(401).send("Something went wrong");
        return;
    }

})

app.post('/todo', middlewares, async (req, res) => {

    /**
     * TODO: Validate Auth.
     * Validate input.
     * Save to db
    */

    const parsedPayload = createTodo.safeParse(req.body);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg : "You sent the wrong inputs"
        })
        return;
    }

    try {

        await todos.add({title: parsedPayload.title , 
            description: parsedPayload.description,
            completed: false
        });
    
        res.status(200).send({
            msg: "TODO Added successfully!"
        })
    } catch(err) {
        res.status(401).send("Something went wrong");
        return;
    }

})

app.put('/completed', async (req, res) => {

    const parsedPayload = updateTodo.safeParse(req.body);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg : "You sent the wrong inputs"
        })
        return;
    }

    try {
        
        const updatedTodo = await todos.update({
            _id: req.body.id
        }, {
            completed: true,
        });

        res.status(200).json({
            msg: updatedTodo
        })
    } catch (error) {
        res.status(401).send("Something went wrong");
        return;
    }

})

app.listen(port, ()=>{
    console.log(`Listen started on ${port}`);
});