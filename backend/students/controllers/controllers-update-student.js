const Student = require("../models/models-student");
const catchAsyncErrors = require("../../utils/errors/middlewares/middlewares-catch-async-errors")


exports.updateStudent = catchAsyncErrors(async (req, res, next) => {
  const studID = req.params.id;
  const {
    name,
    email,
    phone,
    course,
    joiningDate,
    college,
    isPublished,
    country,
  } = req.body.student;

  const newStudentData = {
    name,
    email,
    phone,
    course,
    college,
    joiningDate,
    isPublished,
    country,
  };

  const student = await Student.findByIdAndUpdate(studID, newStudentData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.send({
    success: true,
    student
  });
})
