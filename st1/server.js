const express = require("express");
const app = express();
// const students = require('./Students')
app.use(express.json());

const students = [
  {
    name: "ist hdc",
    rollNO: "1",
  },

  {
    name: "2nd hdc",
    rollNO: "2",
  },
];

// root page
app.get("/", (req, res) => {
  console.log("hello its working ");
  // console.log(req);
  res.send("hello this user");
});
// register code
app.post("/register", (req, res) => {
  const student = req.body;
  // console.log("here");
  if (!student.name || !student.rollNO) {
    res.send("student name and roll no is required");
    return;
  }
  students.push(student);

  if (student.rollNO.length < 0) {
    res.send("please enter a valid roll number");
    return;
  }
  res.send("registration successful");
});

// login code
app.get("/login", (req, res) => {
  const loginData = req.body;
  const account = students.find((s) => s.name == loginData.name);
  if (!account) {
    res.send("please enter a valid student name");
    return;
  }

  console.log(account);
  console.log(loginData);

  // if account found
  if (account.rollNO != loginData.rollNo) {
    res.send("please enter a correct roll no ");
    return;
  }

  res.send("login successful");
});
// display all students
app.get("/students", (req, res) => {
  res.send(students);
});

// getting students by roll no
app.get("/students/:rollNO", (req, res) => {
  // res.send(req.params.rollNo); sending just number

  const found = students.some(student => student.rollNO === req.params.rollNO);

  if(found)
  {
     res.json(students.filter((student) => student.rollNO === req.params.rollNO));
  }
  else{
    res.status(400).json({msg: `no student with the roll number`});
  }

 
});
// updating students by roll no
app.put("/students/:rollNO", (req, res) => {
    // res.send(req.params.rollNo); sending just number
  
    const found = students.some(student => student.rollNO === req.params.rollNO);
  
    if(found)
    {
       const updateStudent = req.body;
       students.forEach(student => {
        if(student.rollNO === req.params.rollNO)
        {
            student.name = updateStudent.name ? updateStudent.name : student.name;
            student.rollNO = updateStudent.rollNO ? updateStudent.rollNO : student.rollNO;

            res.json({msg : 'student updated', student});
        }
       })

    }
    else{
      res.status(400).json({msg: `no student with the roll number`});
    }
  
   
  });

  // deleting a member 

  // getting students by roll no
app.delete("/students/:rollNO", (req, res) => {
    // res.send(req.params.rollNo); sending just number
  
    const found = students.some(student => student.rollNO === req.params.rollNO);
  
    if(found)
    {
       res.json({msg:"student deleted", students: students.filter((student) => student.rollNO !== req.params.rollNO)});
    }
    else{
      res.status(400).json({msg: `no student with the roll number`});
    }
  
   
  });
// local server port
app.listen(5000, () => {
  console.log("Server started at port 5000");
});
