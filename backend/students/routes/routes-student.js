const { createStudent } = require("../controllers/controllers-create-student");
const { deleteStudent } = require("../controllers/controllers-delete-student");
const { filterStudents } = require("../controllers/controllers-filter-student");
const { getOneStudent } = require("../controllers/controllers-get-one-student");
const { getStudents } = require("../controllers/controllers-get-students");
const { updateStudent } = require("../controllers/controllers-update-student");

const router = require("express").Router();

router.route("/filter").get(filterStudents)
router.route("/").get(getStudents);
router.route("/:id").get(getOneStudent);
router.route("/").post(createStudent);
router.route("/:id").put(updateStudent)
router.route("/:id").delete(deleteStudent);

module.exports = router