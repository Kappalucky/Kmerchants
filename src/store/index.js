import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userProfile: {
      fullName: '',
      email: '',
      birthDate: '',
      phone: '',
      miscellaneous: {
        ssn: '',
        creditScore: '',
      },
      address: {
        street: '',
        city: '',
        state: '',
        zip: '',
      },
    },
    company: {},
    companies: [],
    identityFormCompleted: false,
    miscellaneousFormCompleted: false,
    addressFormCompleted: false,
    error: '',
  },
  mutations: {
    SET_USER_ADDRESS(state, payload) {
      state.userProfile.address.city = payload.city;
      state.userProfile.address.state = payload.state;
      state.userProfile.address.street = payload.street;
      state.userProfile.address.zip = payload.zip;
      state.addressFormCompleted = true;
    },
    SET_USER_IDENTITY(state, payload) {
      state.userProfile.fullName = payload.fullName;
      state.userProfile.email = payload.email;
      state.userProfile.birthDate = payload.birthDate;
      state.userProfile.phone = payload.phone;
      state.identityFormCompleted = true;
    },
    SET_USER_MISCELLANEOUS(state, payload) {
      state.userProfile.miscellaneous.ssn = payload.ssn;
      state.userProfile.miscellaneous.creditScore = payload.creditScore;
      state.miscellaneousFormCompleted = true;
    },
    SET_COMPANY(state, payload) {
      state.company = payload;
    },
    SET_COMPANIES(state, payload) {
      state.companies = payload;
    },
    NEW_COMPANY(state, payload) {
      state.companies.push(payload);
    },
    UPDATE_COMPANY(state, payload) {
      state.companies[payload.id] = payload;
    },
    DELETE_COMPANY(state, id) {
      state.companies.splice(id, 1);
    },
    SET_ERROR(state, payload) {
      state.error = payload;
    },
    LOGOUT(state) {
      state.userProfile = {
        fullName: '',
        email: '',
        birthDate: '',
        phone: '',
        miscellaneous: {
          ssn: '',
          creditScore: '',
        },
        address: {
          street: '',
          city: '',
          state: '',
          zip: '',
        },
      };

      state.company = {};
      state.companies = [];
      state.identityFormCompleted = false;
      state.financesFormCompleted = false;
      state.addressFormCompleted = false;
    },
  },
  actions: {
    setUserIdentity({ commit }, params) {
      return new Promise((resolve, reject) => {
        commit('SET_USER_IDENTITY', params);
        resolve();
        reject(Error('Identity could not be set'));
      });
    },
    setUserAddress({ commit }, params) {
      return new Promise((resolve, reject) => {
        commit('SET_USER_ADDRESS', params);
        resolve();
        reject(Error('Address could not be set'));
      });
    },
    setUserMiscellaneous({ commit }, params) {
      return new Promise((resolve, reject) => {
        commit('SET_USER_MISCELLANEOUS', params);
        resolve();
        reject(Error('Miscellaneous could not be set'));
      });
    },
    getCompany({ state, commit }, id) {
      const company = state.companies[id];
      commit('SET_COMPANY', company);
    },
    newCompany({ state, commit }, params) {
      return new Promise((resolve, reject) => {
        const newObject = params;
        commit('NEW_COMPANY', newObject);
        resolve();
        reject(Error('Company could not be set'));
      });
    },
    updateCompany({ state, commit }, params) {
      return new Promise((resolve, reject) => {
        commit('UPDATE_COMPANY', params);
        commit('SET_COMPANY', {});
        resolve();
        reject(Error('Company could not be updated'));
      });
    },
    deleteCompany({ commit }, id) {
      return new Promise((resolve, reject) => {
        commit('DELETE_COMPANY', id);
        commit('SET_COMPANY', {});
        resolve();
        reject(Error('Company could not be deleted'));
      });
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit('LOGOUT');
        resolve();
        reject(Error('Error logging out'));
      });
    },
  },
  getters: {
    identityFormCompleted: (state) => state.identityFormCompleted,
    miscellaneousFormCompleted: (state) => state.miscellaneousFormCompleted,
    addressFormCompleted: (state) => state.addressFormCompleted,
    error: (state) => state.error,
    userInitial: (state) => {
      if (state.userProfile.fullName) {
        return state.userProfile.fullName[0];
      }
    },
    userComplete: (state) => {
      if (
        state.identityFormCompleted == true &&
        state.addressFormCompleted == true &&
        state.miscellaneousFormCompleted == true
      ) {
        return true;
      }
      return false;
    },
  },
  modules: {},
});
