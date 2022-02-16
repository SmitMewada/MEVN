import axios from "axios";
const state = [];

export default {
  state,
  actions: {
    async fetchCountries({ commit }) {
      try {
        const countries = await axios.get(
          "http://localhost:4000/api/v1/countries"
        );
        commit("categoryMutation", countries.data);
      } catch (err) {
        console.log(err.message);
      }
    },
  },
  mutations: {
    categoryMutation(state, countries) {
      state.countries = countries.countries;
    },
  },
  getters: {
    getCountries(state) {
      return state.countries;
    },
  },
};
