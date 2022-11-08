import axios from "axios";
import { apiUrl } from "../../constants/config";
import { getCurrentUser } from "../../utils";
const state = {
  agenciesList: [],
  processingAgency: false,
};

const getters = {
  agenciesList: (state) => state.agenciesList,
  processingAgency: (state) => state.processingAgency,
};

const mutations = {
  setAllAgency(state, payload) {
    state.agenciesList = payload;
    state.processingAgency = false;
  },
  createAgency(state, payload) {
    state.agenciesList = payload;
    state.processingAgency = false;
  },
  deleteAgency(state, payload) {
    state.agenciesList = state.agenciesList.splice(payload, 1);
    state.processingAgency = false;
  },
  setProcessingAgency(state, payload) {
    state.processingAgency = payload;
  },
};

const actions = {
  async setAgencies({ commit }) {
    commit("setProcessingAgency", true);
    let user = getCurrentUser();

    var config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    var res = await axios.get(apiUrl + "agency/findallAgencies", config);

    if (res.status == 200) {
      commit("setProcessingAgency", true);
      commit("setAllAgency", res.data);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
