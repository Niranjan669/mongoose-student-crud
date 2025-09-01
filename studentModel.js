const mongoose = require("mongoose");

// Schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  grade: String,
  email: String
});

// Model
const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
