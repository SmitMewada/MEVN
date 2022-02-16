const catchAsyncErrors = require("../../utils/errors/middlewares/middlewares-catch-async-errors")
const Country = require("../models/models-countries")

exports.getCountries = catchAsyncErrors(async(req, res, next) => {
    const countries = await Country.find({});

    res.send({
        success: true,
        countries
    })
})