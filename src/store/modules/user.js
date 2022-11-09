import { setCurrentUser } from "../../utils";
import createPersistedState from "vuex-persistedstate";

export default {
  plugins: [createPersistedState()],
  state: {
    isAuthGuardActive: false,
    currentUser: {},
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
    clearError(state) {
      state.loginError = null;
    },
  },
  actions: {
     login({ commit }, payload) {

        commit("clearError");
        commit("setProcessing", true);
        setCurrentUser(payload);
        commit("setProcessing", false);
        commit("setUser", payload);
    },
    signOut({ commit }) {
      setCurrentUser(null);
      commit("setLogout");
    },
  },
};
