import { mapActions, mapGetters } from "vuex";
import Loader from "../layouts/layouts-loader.vue";

function deleteHandler(id) {
  this.deleteStudent(id);
  this.$router.go();
}

function searchHandler(e) {
  this.filterStudents(e.target.value);
}

export default {
  name: "ViewStudents",
  components: {
    Loader,
  },
  methods: {
    ...mapActions(["getAllStudents", "deleteStudent", "filterStudents"]),
    deleteHandler,
    searchHandler,
  },
  created() {
    this.getAllStudents();
  },
  computed: mapGetters(["allStudentsGetter"]),
};
