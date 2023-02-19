import { setCurrentUser } from "../../utils";
import createPersistedState from "vuex-persistedstate";
import { UserRole } from "../../utils/auth.roles";
import { apiUrl } from "../../constants/config";
import axios from "axios";
import jwt_decode from "jwt-decode";

export default {
  plugins: [createPersistedState()],
  state: {
    isAuthGuardActive: false,
    currentUser: {},
    loginError: null,
    forgotMailSuccess: null,
    resetPasswordSuccess: null,
    isLogin: false,
    config: {},
  },
  getters: {
    isAuthGuardActive: (state) => state.isAuthGuardActive,
    currentUser: (state) => state.currentUser,
    loginError: (state) => state.loginError,
    forgotMailSuccess: (state) => state.forgotMailSuccess,
    resetPasswordSuccess: (state) => state.resetPasswordSuccess,
    config: (state) => state.config,
  },
  mutations: {
    setUser(state, payload) {
      state.currentUser = payload;
      state.isAuthGuardActive = true;
      state.loginError = null;
      state.config = {
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      };
    },
    setLogout(state) {
      state.currentUser = null;
      state.isAuthGuardActive = false;
      state.loginError = null;
      state.config = {};
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
    async loginAuth({ commit }, { payload }) {
      const res = await axios.post(apiUrl + "auth/login/", payload);
      let data = jwt_decode(res.data.access_token);
      let id = data.id;
      let role = null;
      let token = res.data.access_token;
      if (data.roles == "SuperAdmin") {
        role = UserRole.SuperAdmin;
      } else if (data.roles == "Admin") {
        role = UserRole.SuperAdmin;
      } else if (data.roles == "Agent") {
        role= UserRole.SuperAdmin;
      } else if (data.roles == "Customer") {
        role = UserRole.SuperAdmin;
      }
      let item = {
        id: data.id,
        role: role,
        token: token,
        ...data,
      };
      if(item.role == UserRole.Admin){
        let config = {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        };
        const res1 = await axios.get(apiUrl + "users/findUser/"+id, config);
        let agencyId = res1.data.agencyId;
        const res2 = await axios.get(apiUrl + "agency/findAgency/"+id,config);
        let agencyName = res2.data.name;
        item["agencyId"] = agencyId;
        item["agencyName"] = agencyName;
      }
      setCurrentUser(item);
      commit("setUser", item);
      return res;
    },
    // async login({ commit }, { payload, config }) {
    //   if (payload != null) {
    //     if (payload.role == UserRole.Admin) {
    //       await axios
    //         .get(apiUrl + "users/findUser/" + payload.id, getters.config)
    //         .then(async (res) => {
    //           Object.assign(payload, { agencyID: res.data.agencyId });
    //           await axios
    //             .get(
    //               apiUrl + "agency/findAgency/" + payload.agencyID,
    //               getters.config
    //             )
    //             .then((res) => {
    //               Object.assign(payload, { agencyName: res.data.name });
    //             });
    //         });
    //     }
    //   }
    //   setCurrentUser(payload);
    //   commit("setUser", payload);
    // },
    signOut({ commit }) {
      setCurrentUser({
        title: "None",
        roles: "None",
      });
      commit("setLogout");
    },
    async getPropertyById({ commit }, { pk, config }) {
      const res = await axios.get(apiUrl + "property/" + pk, config);
      return res;
    },
    async updatePropertyMainFeature({ commit }, { pk, payload, config }) {
      const res = await axios.post(
        apiUrl + "property/createMainFeature/" + pk,
        payload,
        config
      );
      return res;
    },
  },
};
