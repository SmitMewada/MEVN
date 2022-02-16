const express = require("express");
const app = express();
const studentRoutes = require("./students/routes/routes-student");
const countryRoutes = require("./countries/routes/routes-countries")
const errorMiddleware = require("./utils/errors/middlewares/middlewares-error");
const cors = require("cors")

app.use(cors())
app.use(express.json());
app.use("/api/v1/students", studentRoutes);
app.use("/api/v1/countries", countryRoutes)

app.use(errorMiddleware);

module.exports = app;
