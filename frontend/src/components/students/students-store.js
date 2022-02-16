import axios from "axios";

const GET_STUDENTS_SUCCESS = "GET_STUDENTS_SUCCESS";
const GET_STUDENTS_FAIL = "GET_STUDENTS_FAIL";
const GET_STUDENTS_REQUEST = "GET_STUDENTS_REQUEST";

const CREATE_STUDENT_REQUEST = "CREATE_STUDENT_REQUEST";
const CREATE_STUDENT_SUCCESS = "CREATE_STUDENT_SUCCESS";
const CREATE_STUDENT_FAIL = "REATE_STUDENT_FAIL";

const GET_STUDENT_REQUEST = "GET_STUDENT_REQUEST";
const GET_STUDENT_SUCCESS = "GET_STUDENT_SUCCESS";
const GET_STUDENT_FAIL = "GET_STUDENT_FAIL";

const DELETE_STUDENT_REQUEST = "DELETE_STUDENT_REQUEST";
const DELETE_STUDENT_SUCCESS = "DELETE_STUDENT_SUCCESS";
const DELETE_STUDENT_FAIL = "DELETE_STUDENT_FAIL";

const UPDATE_STUDENT_REQUEST = "UPDATE_STUDENT_REQUEST";
const UPDATE_STUDENT_SUCCESS = "UPDATE_STUDENT_SUCCESS";
const UPDATE_STUDENT_FAIL = "UPDATE_STUDENT_FAIL";

const state = {
  students: [],
  loading: false,
  errors: {
    name: [],
    email: [],
    course: [],
    phone: [],
    isPublished: [],
    college: [],
    joiningDate: [],
    country: [],
  },
  student: {
    name: "",
    email: "",
    course: "",
    phone: "",
    isPublished: "no",
    college: "",
    joiningDate: "",
    country: "",
  },
};

export default {
  state,
  getters: {
    allStudentsGetter(state) {
      return state.students;
    },
    trimDate(state) {
      console.log(state.students);
    },
  },
  mutations: {
    updateStudentMutation(state, action) {
      switch (action.type) {
        case UPDATE_STUDENT_REQUEST:
          state.loading = true;
          break;

        case UPDATE_STUDENT_SUCCESS:
          state.loading = false;
          break;

        case UPDATE_STUDENT_FAIL:
          state.loading = false;
          break;
      }
    },
    deleteStudentMutation(state, action) {
      switch (action.type) {
        case DELETE_STUDENT_REQUEST:
          state.loading = true;
          break;

        case DELETE_STUDENT_SUCCESS:
          state.loading = false;
          break;

        case DELETE_STUDENT_FAIL:
          state.loading = false;
          break;
      }
    },
    clearFieldsMutation(state, fields) {
      fields.forEach((fieldName) => {
        state.student[fieldName] = "";
      });
    },

    getOneStudentMutation(state, action) {
      switch (action.type) {
        case GET_STUDENT_REQUEST:
          state.loading = true;
          break;

        case GET_STUDENT_SUCCESS:
          state.loading = false;
          state.student.name = action.payload.name;
          state.student.email = action.payload.email;
          state.student.course = action.payload.course;
          state.student.college = action.payload.college;
          state.student.isPublished = action.payload.isPublished;
          state.student.country = action.payload.country;
          state.student.joiningDate = action.payload.joiningDate;
          state.student.phone = action.payload.phone;

          state.student = action.payload;
          break;

        case GET_STUDENT_FAIL:
          loading = false;
          state.error = action.payload;
      }
    },
    createStudentMutation(state, action) {
      switch (action.type) {
        case CREATE_STUDENT_REQUEST:
          state.loading = true;
          break;

        case CREATE_STUDENT_SUCCESS:
          state.loading = false;
          break;

        case CREATE_STUDENT_FAIL:
          state.loading = false;
          break;
      }
    },
    studentsMutation(state, action) {
      switch (action.type) {
        case GET_STUDENTS_REQUEST:
          state.loading = true;
          break;

        case GET_STUDENTS_SUCCESS:
          state.loading = false;
          state.students = action.payload;
          break;

        case GET_STUDENTS_FAIL:
          state.loading = false;
          state.error = action.payload;
          break;
      }
    },
  },

  actions: {
    async filterStudents({ commit }, value) {
      try {
        commit("studentsMutation", {
          type: GET_STUDENTS_REQUEST,
        });
        const { data } = await axios.get(
          `http://localhost:4000/api/v1/students/filter/?name=${value}`
        );

        commit("studentsMutation", {
          type: GET_STUDENTS_SUCCESS,
          payload: data.student,
        });
      } catch (err) {
        commit("studentsMutation", {
          type: GET_STUDENTS_SUCCESS,
          payload: err.message,
        });
      }
    },
    async getAllStudents({ commit }) {
      try {
        commit("studentsMutation", {
          type: GET_STUDENTS_REQUEST,
        });

        const students = await axios.get(
          "http://localhost:4000/api/v1/students"
        );

        commit("studentsMutation", {
          type: GET_STUDENTS_SUCCESS,
          payload: students.data.students,
        });
      } catch (err) {
        commit("studentsMutation", {
          type: GET_STUDENTS_FAIL,
          payload: err.message,
        });
      }
    },
    async updateStudent({ commit }, { student, id }) {
      try {
        commit("updateStudentMutation", {
          type: UPDATE_STUDENT_REQUEST,
        });

        const { data } = await axios.put(
          `http://localhost:4000/api/v1/students/${id}`,
          {
            student,
          }
        );

        commit("updateStudentMutation", {
          type: UPDATE_STUDENT_SUCCESS,
        });
      } catch (err) {
        commit("updateStudentMutation", {
          type: UPDATE_STUDENT_FAIL,
        });
      }
    },
    clearFields({ commit }, fields) {
      commit("clearFieldsMutation", fields);
    },
    async deleteStudent({ commit }, id) {
      try {
        commit("deleteStudentMutation", {
          type: DELETE_STUDENT_REQUEST,
        });
        const data = await axios.delete(
          `http://localhost:4000/api/v1/students/${id}`
        );

        commit("deleteStudentMutation", {
          type: DELETE_STUDENT_SUCCESS,
        });
      } catch (err) {
        commit("deleteStudentMutation", {
          type: DELETE_STUDENT_FAIL,
        });
      }
    },
    async getOneStudent({ commit }, id) {
      try {
        commit("getOneStudentMutation", {
          type: GET_STUDENT_REQUEST,
        });

        const { data } = await axios.get(
          `http://localhost:4000/api/v1/students/${id}`
        );
        commit("getOneStudentMutation", {
          type: GET_STUDENT_SUCCESS,
          payload: data.student,
        });
      } catch (err) {
        commit("getOneStudentMutation", {
          type: GET_STUDENT_FAIL,
          payload: err.message,
        });
      }
    },
    async createStudent({ commit }, student) {
      try {
        commit("createStudentMutation", {
          type: CREATE_STUDENT_REQUEST,
        });

        const { success } = await axios.post(
          "http://localhost:4000/api/v1/students",
          {
            student,
          }
        );

        commit("createStudentMutation", {
          type: CREATE_STUDENT_SUCCESS,
        });

        return true;
      } catch (err) {
        commit("createStudentMutation", {
          type: CREATE_STUDENT_FAIL,
        });
        alert(err.message);
      }
    },
  },
};
