const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded());
const users = []; // new user database

app.post("/register", (req, res) => {
  //create new account

  const user = req.body;

  if (!user.password || !user.username) {
    res.send("username and pass is required");
    return;
  }
  if (user.password.length < 4) {
    res.send("pass lenght must be >= 4");
    return;
  }
  users.push(user);
  console.log(user);
  //....

  res.send("registration successful");
});

app.post("/login", (req, res) => {
  const loginData = req.body;
  const account = users.find((u) => u.username == loginData.username);

  if (!account) {
    res.send("no such account");
    return;
  }

  // account found
  if (account.password != loginData.password) {
    res.send("incorrect password");
    return;
  }
  res.send("login successful");
});

app.get("/accounts", (req, res) => {
  // /accounts?n=1&sort=true

  const n = req.query.n;
  const sort = req.query.sort;
  let usernames = users.map((user) => user.username);
  if (n) {
    usernames = usernames.slice(0, n);
  }
  if (sort) {
    usernames.sort();
  }
  res.send(usernames);
  console.log(n, sort);
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/register.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});
app.listen(3000, () => {
  console.log("http://localhost:3000");
});

// /accounts?n=10
