import { setCurrentUser } from "../../utils";
import createPersistedState from "vuex-persistedstate";
import { UserRole } from "../../utils/auth.roles";
import { apiUrl } from "../../constants/config";
import axios from "axios"

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
    async login({ commit }, payload) {
      commit("clearError");
      commit("setProcessing", true);
      if (payload != null) {
        if (payload.role == UserRole.Admin) {
          var config = {
            headers: {
              Authorization: `Bearer ${payload.token}`,
            },
          };
          await axios
            .get(apiUrl + "users/findUser/" + payload.id, config)
            .then(async (res) => {
              Object.assign(payload, {agencyID: res.data.agencyId})
              await axios
                .get(apiUrl + "agency/findAgency/" + payload.agencyID, config)
                .then((res) => {
                  Object.assign(payload, {agencyName: res.data.name})
                });
            });
        }
      }
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
