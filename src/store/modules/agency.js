import { setCurrentUser, getCurrentUser } from "../../utils";

export default {
  state: {
    agenciesList: [],
    processing: false,
  },
  getters: {
    agenciesList: (state) => state.agenciesList,
    processing: (state) => state.processing,
  },
  mutations: {
    createAgency(state, payload) {
      state.agenciesList = payload;
      state.processing = false;
    },
    deleteAgency(state, payload) {
      state.agenciesList = state.agenciesList.splice(payload, 1);
      state.processing = false;
    },
    setProcessing(state, payload) {
      state.processing = payload;
    },
    editAgency(state, payload) {
      state.currentUser = null;
      state.processing = false;
    },
    setResetPasswordSuccess(state) {
      state.loginError = null;
      state.currentUser = null;
      state.processing = false;
      state.resetPasswordSuccess = true;
    },
    clearError(state) {
      state.loginError = null;
    },
  },
  actions: {
     login({ commit }, payload) {

        commit("clearError");
        commit("setProcessing", true);
        setCurrentUser(payload);
        commit("setUser", payload);
      
    },
    forgotPassword({ commit }, payload) {
      commit("clearError");
      commit("setProcessing", true);
      // firebase
      //   .auth()
      //   .sendPasswordResetEmail(payload.email)
      //   .then(
      (user) => {
        commit("clearError");
        commit("setForgotMailSuccess");
      };
      // err => {
      //   commit('setError', err.message)
      //   setTimeout(() => {
      //     commit('clearError')
      //   }, 3000)
      // }
      // )
    },
    resetPassword({ commit }, payload) {
      commit("clearError");
      commit("setProcessing", true);
      // firebase
      //   .auth()
      //   .confirmPasswordReset(payload.resetPasswordCode, payload.newPassword)
      //   .then(
      (user) => {
        commit("clearError");
        commit("setResetPasswordSuccess");
      };
      //   err => {
      //     commit('setError', err.message)
      //     setTimeout(() => {
      //       commit('clearError')
      //     }, 3000)
      //   }
      // )
    },

    signOut({ commit }) {
      setCurrentUser(null);
      commit("setLogout");
    },
  },
};
