const mongoose = require('mongoose');

const DB_URL = "mongodb://127.0.0.1:27017/g18"

mongoose.connect(DB_URL);

// blueprint / schema

const StudentSchema = mongoose.Schema({
    name: String,
    rollno: Number,
})
// factory /model  to convert schema in document form (object form)
const Student = mongoose.model("Student",StudentSchema);

async function main ()
{
    const vipul = Student(
        {
            name: "vipul",
            rollno: 1872
        })
        await Student.deleteMany();
       await vipul.save();
       const allStudents = await Student.find();
       console.log(allStudents);
    
}
main();