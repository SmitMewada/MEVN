const Student = require("../models/models-student");
const catchAsyncErrors = require("../../utils/errors/middlewares/middlewares-catch-async-errors")


module.exports.filterStudents = catchAsyncErrors(async (req, res, next) => {
  const searchValue = req.query.name;
  const student = await Student.find({ name: { $regex: "^" + searchValue } });

  res.send({
    success: true,
    student,
  });
});
