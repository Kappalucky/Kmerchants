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

			state.basicFormCompleted = false;
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
	},
	getters: {
		identityFormCompleted: state => state.identityFormCompleted,
		miscellaneousFormCompleted: state => state.miscellaneousFormCompleted,
		addressFormCompleted: state => state.addressFormCompleted,
		error: state => state.error,
		userComplete: state => {
			if (
				state.identityFormCompleted == true &&
				state.addressFormCompleted == true &&
				state.miscellaneousFormCompleted == true
			) {
				return true;
			} else {
				return false;
			}
		},
	},
	modules: {},
});
