const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name!"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  phone: {
    type: String,
    required: [true, "Please enter your email"],
    length: [10, "Phone must be 10 digits!"],
  },
  college: {
    type: String,
    required: [true, "Please enter your college"],
  },
  course: {
    type: String,
    required: [true, "Please enter your course"],
  },
  isPublished: {
    type: Boolean,
    default: false,
  },
  joiningDate: {
    type: String,
    required: true,
  },
  country: {
    type: mongoose.Schema.ObjectId,
    ref: "Country",
    required: true
  },
});

module.exports = mongoose.model("Student", studentSchema);
