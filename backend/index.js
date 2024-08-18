// imports
const { safeParse } = require("zod");

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

app.get('/todos', (req, res) => {
    res.send("Hello From Todo")
})

app.post('/todo', middlewares, (req, res) => {

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

    res.status(200).send({
        msg: "TODO Added successfully!"
    })
    return;
})

app.put('/completed', (req, res) => {

    const parsedPayload = createTodo.safeParse(req.body);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg : "You sent the wrong inputs"
        })
        return;
    }

    res.status(200).send({
        msg: "TODO Added successfully!"
    })
    return;
})

app.listen(port, ()=>{
    console.log(`Listen started on ${port}`);
});