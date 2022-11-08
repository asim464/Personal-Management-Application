import axios from "axios";
import { apiUrl } from "../../constants/config";
import { getCurrentUser } from "../../utils";
const state = {
  agentsList: [],
  processingAgent: false,
};

const getters = {
  agentsList: (state) => state.agentsList,
  processingAgent: (state) => state.processingAgent,
};

const mutations = {
  setAllAgents(state, payload) {
    state.agentsList = payload;
    state.processingAgent = false;
  },
  createAgent(state, payload) {
    state.agentsList = payload;
    state.processingAgent = false;
  },
  deleteAgent(state, payload) {
    state.agentsList = state.agentsList.splice(payload, 1);
    state.processingAgent = false;
  },
  setProcessingAgent(state, payload) {
    state.processingAgent = payload;
  },
};

const actions = {
  async setAgents({ commit }) {
    commit("setProcessingAgent", true);
    let user = getCurrentUser();

    var config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    var res = await axios.get(apiUrl + "users/findallUsers", config);

    if (res.status == 200) {
      commit("setProcessingAgent", true);
      commit("setAllAgents", res.data);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
