// imports
import types from "./types.js"

const express = require("express")
const app = express();
const port = 3000;

app.use(express.json())

app.get('/todos', (req, res) => {
    res.send("Hello From Todo")
})

app.post('/todo', (req, res) => {

})

app.put('/completed', (req, res) => {

})

app.listen(port, ()=>{
    console.log(`Listen started on ${port}`);
});