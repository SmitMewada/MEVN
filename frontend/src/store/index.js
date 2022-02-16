import { createStore } from 'vuex'
import students from "../components/students/students-store";
import countries from "../components/countries/countries-store"

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    students,
    countries
  }
})
