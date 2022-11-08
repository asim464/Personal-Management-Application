import user from "./user";
import axios from "axios";
import { apiUrl } from "../../constants/config";
const state = {
  agenciesList: [],
  // processing: false,
};

const getters = {
  agenciesList: (state) => state.agenciesList,
  // processing: (state) => state.processing,
};

const mutations = {
  setAllAgency(state, payload) {
    state.agenciesList = payload;
    // state.processing = false;
  },
  createAgency(state, payload) {
    state.agenciesList = payload;
    // state.processing = false;
  },
  deleteAgency(state, payload) {
    state.agenciesList = state.agenciesList.splice(payload, 1);
    // state.processing = false;
  },
};

const actions = {
  async setAgencies({ commit }) {
    let token = user.state.currentUser.token;
    var config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    var res = await axios.get(apiUrl + "agency/findallAgencies", config);

    if (res.status == 200) {
    commit("setAllAgency",res.data);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
