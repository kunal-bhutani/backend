const express = require("express");
const app = express();

const users = [
  { name: "dev", age: 22 },
  { name: "nishant", age: 20 },
];

const products = [
  { name: "eraser", price: 100 },
  { name: "pen", price: 300 },
];
app.get("/users", (req, res) => {
    res.send(users);
});

app.get("/products", (req, res) => {
    res.send(products);
});

app.get('/',(req,res)=> {
  console.log(__dirname);
    res.sendFile(__dirname + "/homePage.html");
});

app.post('/users',(req,res)=>{
  res.send("new user created");
})
app.listen(8000, () => console.log("http://localhost:8000"));
