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
    state.agentsList = [...state.agentsList, payload] ;
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
      commit("setProcessingAgent", false);
      commit("setAllAgents", res.data);
    }
  },
  async createAgent({ commit }, payload) {
    commit("setProcessingAgent", true);
    let user = getCurrentUser();

    var config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    var res = await axios.post(
      apiUrl + `users/signup/${payload.agencyID}`,
      payload.user,
      config
    );
    console(res.status)
    if ( res.status == 200) {
      commit("createAgent", payload.user);
      this.setAgents({commit});
      commit("setProcessingAgent", false);
    }
  },
  async deleteAgent({ commit }, payload) {
    commit("setProcessingAgent", true);
    let user = getCurrentUser();

    var config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    var res = await axios.delete(
      apiUrl + `users/deleteUser/${payload.data.id}`,
      config
    );

    if (res.status == 200) {
      commit("deleteAgent", payload.index);
      this.setAgents({commit});
      commit("setProcessingAgent", false);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
