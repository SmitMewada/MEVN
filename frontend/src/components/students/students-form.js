import Input from "../controls/controls-input.vue";
import BinaryRadio from "../controls/controls-binary-radio";
import Dropdown from "../controls/controls-dropdown";
import { mapActions, mapGetters } from "vuex";
import {
  validateControl,
  validateForm,
  isFormValid,
} from "./students-validations";
import Loader from "../layouts/layouts-loader.vue";


function submitHandler(e) {
  e.preventDefault();
  const fields = [
    "name",
    "email",
    "course",
    "phone",
    "country",
    "joiningDate",
    "college",
  ];
  let student = this.$store.state.students.student;
  student.isPublished = student.isPublished === "yes";

  let errors = this.$store.state.students.errors;
  validateForm(student, errors, fields);
  const isValid = isFormValid(errors, fields);

  if (isValid) {
    if (this.id) {
      this.updateStudent({student: this.student, id: this.id});
      this.clearFields(fields);
      this.$router.push("/students")
    } else {
      this.createStudent(student);
      this.clearFields(fields);
    }
  }
}

export default {
  name: "Home",
  data() {
    return {
      student: this.$store.state.students.student,
      errorsState: this.$store.state.students.errors,
      id: "",
      radioData: [
        {
          label: "Yes",
          value: "yes",
        },
        {
          label: "No",
          value: "no",
        },
      ],
    };
  },
  components: {
    Input,
    BinaryRadio,
    Dropdown,
    Loader,
  },
  methods: {
    ...mapActions([
      "fetchCountries",
      "createStudent",
      "getOneStudent",
      "clearFields",
      "updateStudent",
    ]),
    submitHandler,
    validateControl,
  },
  created() {
    this.fetchCountries();
    this.id = this.$route.params.id;

    if (this.id) {
      this.getOneStudent(this.id);
    }
  },
  beforeUpdate() {},
  computed: {
    ...mapGetters(["getCountries"]),
  },
};
