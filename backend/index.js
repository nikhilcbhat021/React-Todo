// imports
const { safeParse } = require("zod");
const { todo } = require("./db.js")
const cors = require("cors")
const { createTodo, updateTodo } =  require("./types.js");


const express = require("express")
const app = express();
const port = 3000;

// middlewares
app.use(express.json())
app.use(cors());

console.log("before all the handlers");
// const middlewares = (req, res, next)=>{
//     console.log('Inside middlewares');
//     next();
// }

app.get('/todos', async (req, res) => {
    try {
        const allTodos = await todo.find({});
        res.status(200).json({
            data: allTodos
        })
    } catch (error) {
        console.log(error);
        res.status(401).send("Something went wrong"+error);
        return;
    }

})

app.post('/todo', async (req, res) => {

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

        const ret = await todo.create({"title": req.body.title , 
            "description": req.body.description,
            "completed": false
        });
    
        console.log (ret);

        res.status(200).send({
            msg: "TODO Added successfully!",
            data: ret 
        })
    } catch(err) {

        res.status(401).send("Something went wrong\n"+err);
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
        
        const updatedTodo = await todo.findOneAndUpdate({
            _id: req.body.id
        }, {
            completed: true
        }, {
            new: true
        });

        res.status(200).json({
            data: updatedTodo
        })
    } catch (error) {

        res.status(402).send("Something went wrong" + error);
        return;
    }

})

app.listen(port, ()=>{
    console.log(`Listen started on ${port}`);
});