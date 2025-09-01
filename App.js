const mongoose = require("mongoose");
const Student = require("./studentModel");

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/studentdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error(" Connection Error:", err));

// INSERT
const insertStudent = async () => {
  const student = new Student({
    name: "Niranjan",
    age: 22,
    grade: "A",
    email: "niranjan@example.com"
  });
  await student.save();
  console.log(" Student Inserted:", student);
};

// READ
const readStudents = async () => {
  const students = await Student.find();
  console.log(" All Students:", students);
};

// UPDATE
const updateStudent = async (id) => {
  const updated = await Student.findByIdAndUpdate(
    id,
    { grade: "B+" },
    { new: true }
  );
  console.log(" Updated Student:", updated);
};

// DELETE
const deleteStudent = async (id) => {
  const deleted = await Student.findByIdAndDelete(id);
  console.log(" Deleted Student:", deleted);
};

const run = async () => {
  await insertStudent();
  await readStudents();
  // await updateStudent(" ");
  // await deleteStudent(" ");
};

run();
