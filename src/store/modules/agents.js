import axios from "axios";
import { apiUrl } from "../../constants/config";
import { getCurrentUser } from "../../utils";
import { UserRole } from "../../utils/auth.roles";
const state = {
  agentsList: [],
  processingAgent: false,
  responseAG: {},
};

const getters = {
  agentsList: (state) => state.agentsList,
  processingAgent: (state) => state.processingAgent,
  responseAG: (state) => state.responseAG,
};

const mutations = {
  setAllAgents(state, payload) {
    state.agentsList = payload;
    state.processingAgent = false;
  },
  createAgent(state, payload) {
    state.agentsList = [...state.agentsList, payload];
    state.processingAgent = false;
  },
  deleteAgent(state, payload) {
    state.agentsList = state.agentsList.splice(payload, 1);
    state.processingAgent = false;
  },
  updateAgent(state, payload) {
    state.agentsList[payload.index] = {
      email: payload.data.email,
      firstName: payload.data.firstName,
      lastName: payload.data.lastName,
      userName: payload.data.userName,
      description: payload.data.description,
      status: payload.data.status,
      roles: payload.data.roles,
    };
    state.processingAgent = false;
  },
  setProcessingAgent(state, payload) {
    state.processingAgent = payload;
  },
  setResponseAG(state, payload) {
    state.responseAG = payload;
    console.log(state.responseAG);
    state.processingAgent = false;
  }
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
    await axios.get(apiUrl + "users/findallUsers", config).then((res) => {
      if (res.status == 200) {
        if (user.role == UserRole.SuperAdmin) {
          commit("setAllAgents", res.data);
        } else if (user.role == UserRole.Admin) {
          let ls = [];
          res.data.forEach((element) => {
            if (element.agencyId == user.agencyId) {
              ls.push(element);
            }
          });
          commit("setAllAgents", ls);
        }
      }
    });
  },
  async createAgent({ commit }, payload) {
    commit("setProcessingAgent", true);
    let user = getCurrentUser();

    var config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    await axios
      .post(apiUrl + 'users/signup/'+payload.agencyID, payload.user, config)
      .then((res) => {
        if (res.status == 201) {
          commit("setProcessingAgent", false);
          commit("createAgent", payload.user);
          commit("setResponseAG", res);
        } else {
          commit("setResponseAG", res);
        }
      })
      .catch((err) => {
        console.log(err);
        commit("setResponseAG", err);
      });
  },
  async deleteAgent({ commit }, payload) {
    commit("setProcessingAgent", true);
    let user = getCurrentUser();

    var config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    await axios
      .delete(apiUrl + "users/deleteUser/" + payload.data.id, config)
      .then((res) => {
        if (res.status == 200) {
          commit("setProcessingAgent", false);
          commit("deleteAgent", payload.index);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  async updateAgent({ commit }, payload) {
    commit("setProcessingAgent", true);
    let user = getCurrentUser();
    let id = payload.userId;
    var config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    await axios
      .patch(apiUrl + "users/updateUser/" + id, payload.data, config)
      .then((res) => {
        if (res.status == 200) {
          commit("setProcessingAgent", false);
          commit("updateAgent", payload);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
