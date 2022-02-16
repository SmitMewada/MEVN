const Student = require("../models/models-student");
const catchAsyncErrors = require("../../utils/errors/middlewares/middlewares-catch-async-errors")

module.exports.getOneStudent = catchAsyncErrors(async (req, res, next) => {
  console.log(req.body);
  const studID = req.params.id;

  const student = await Student.findById(studID);

  res.send({
    success: true,
    student,
  });
});
