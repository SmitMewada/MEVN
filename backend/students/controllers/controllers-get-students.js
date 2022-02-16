const Student = require("../models/models-student");
const catchAsyncErrors = require("../../utils/errors/middlewares/middlewares-catch-async-errors")


module.exports.getStudents = catchAsyncErrors(async (req, res, next) => {
  const students = await Student.find({}).populate("country");

  res.send({
    success: true,
    students,
  });
});
