const express = require('express');
const todos = require('./toDo.json');
const fs  = require('fs');
const app = express();

app.use(express.json());
app.get('/todos',(req,res)=>{

    res.send(todos);
})
app.get('/',(req,res) => {
    res.sendFile(__dirname+'/public/index.html');
})
app.post('/todos',(req,res)=>{
    const newTodoData = req.body;
    todos.push(newTodoData);
    fs.writeFileSync('./toDo.json',JSON.stringify(todos));
    res.send("todo added successfully");
})

console.log(todos);

app.listen(8000,()=>console.log("http://localhost:8000"));