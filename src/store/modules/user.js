import { apiUrl } from "../../constants/config";
import { setCurrentUser, getCurrentUser } from "../../utils";

export default {
  state: {
    isAuthGuardActive: Boolean,
    currentUser: {
      id: Number,
      first_name: String,
      last_name: String,
      user_name: String,
      email: String,
      role: String,
      status: String,
      image_url: String,
      address: String,
    },
    loginError: null,
    processing: false,
    forgotMailSuccess: null,
    resetPasswordSuccess: null,
  },
  getters: {
    isAuthGuardActive: (state) => state.isAuthGuardActive,
    currentUser: (state) => state.currentUser,
    processing: (state) => state.processing,
    loginError: (state) => state.loginError,
    forgotMailSuccess: (state) => state.forgotMailSuccess,
    resetPasswordSuccess: (state) => state.resetPasswordSuccess,
  },
  mutations: {
    setUser(state, payload) {
      state.currentUser = payload;
      state.isAuthGuardActive = true;
      state.processing = false;
      state.loginError = null;
    },
    setLogout(state) {
      state.currentUser = null;
      state.isAuthGuardActive = false;
      state.processing = false;
      state.loginError = null;
    },
    setProcessing(state, payload) {
      state.processing = payload;
      state.loginError = null;
    },
    setError(state, payload) {
      state.loginError = payload;
      state.currentUser = null;
      state.processing = false;
    },
    setForgotMailSuccess(state) {
      state.loginError = null;
      state.currentUser = null;
      state.processing = false;
      state.forgotMailSuccess = true;
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
    async login({ commit }, payload) {
      var res = await axios.post(apiUrl + "auth/login", payload);

      if (res.status == 201) {
        commit("clearError");
        commit("setProcessing", true);
        var data = jwt_decode(res.data.access_token);
        var item = { id: data.id, ...data };
        console.log(item)
        setCurrentUser(item);
        commit("setUser", item);
        return true;
      } else {
        return false;
      }
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
