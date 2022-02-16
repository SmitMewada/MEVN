const moongoose = require("mongoose");

const countrySchema = new moongoose.Schema({
    country: {
        type: String
    }
})

module.exports = moongoose.model("Country", countrySchema)