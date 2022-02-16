const { getCountries } = require("../controllers/controllers-get-countries");

const router = require("express").Router();

router.get("/", getCountries)

module.exports = router