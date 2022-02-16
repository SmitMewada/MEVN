const Student = require("../models/models-student");
const catchAsyncErrors = require("../../utils/errors/middlewares/middlewares-catch-async-errors")


module.exports.deleteStudent = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;
  await Student.findByIdAndDelete(id);

  res.send({
    success: true,
  });
});
