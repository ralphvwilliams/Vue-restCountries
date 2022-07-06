import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    countries: [],
    singleCountry: {},
  },
  getters: {
    getCountries: (state) => state.countries,
    getCountry: (state) => state.singleCountry,
  },
  mutations: {
    SET_COUNTRIES(state, payload) {
      state.countries = payload;
    },
    SET_SINGLE_COUNTRY(state, payload) {
      state.singleCountry = payload;
    },
  },
  actions: {
    async getAllCountries({ commit }) {
      const res = await axios.get('https://restcountries.com/v3.1/all');
      commit('SET_COUNTRIES', res.data);
      return res;
    },
    async getSingleCountry({ commit }, countryName) {
      const res = await axios.get(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      commit('SET_SINGLE_COUNTRY', res.data);
      return res;
    },
  },
  modules: {},
});
