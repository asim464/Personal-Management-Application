import { setCurrentUser } from "../../utils";
import createPersistedState from "vuex-persistedstate";
import { UserRole } from "../../utils/auth.roles";
import { apiUrl } from "../../constants/config";
import axios from "axios"

export default {
  plugins: [createPersistedState()],
  state: {
    isAuthGuardActive: false,
    currentUser: {
    },
    loginError: null,
    forgotMailSuccess: null,
    resetPasswordSuccess: null,
  },
  getters: {
    isAuthGuardActive: (state) => state.isAuthGuardActive,
    currentUser: (state) => state.currentUser,
    loginError: (state) => state.loginError,
    forgotMailSuccess: (state) => state.forgotMailSuccess,
    resetPasswordSuccess: (state) => state.resetPasswordSuccess,
  },
  mutations: {
    setUser(state, payload) {
      state.currentUser = payload;
      state.isAuthGuardActive = true;
      state.loginError = null;
    },
    setLogout(state) {
      state.currentUser = null;
      state.isAuthGuardActive = false;
      state.loginError = null;
    },
    setError(state, payload) {
      state.loginError = payload;
      state.currentUser = null;
    },
    clearError(state) {
      state.loginError = null;
    },
  },
  actions: {
    async login({ commit }, payload) {
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
      commit("setUser", payload);
    },
    signOut({ commit }) {
      setCurrentUser({
        title: "None",
        roles: "None"
      });
      commit("setLogout");
    },
  },
};
