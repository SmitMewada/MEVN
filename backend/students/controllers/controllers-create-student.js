const Student = require("../models/models-student");
const catchAsyncErrors = require("../../utils/errors/middlewares/middlewares-catch-async-errors")

exports.createStudent = catchAsyncErrors(async (req, res, next) => {
  await Student.create(req.body.student);
  res.send({
    success: true,
  });
});
