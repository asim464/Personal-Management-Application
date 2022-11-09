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
    state.agenciesList = [...state.agenciesList, payload]
    state.processingAgency = false;
  },
  deleteAgency(state, payload) {
    state.agenciesList = state.agenciesList.splice(payload, 1);
    state.processingAgency = false;
  },
  updateAgency(state, payload) {
    state.agenciesList[payload.index].Address = payload.data;
    state.processingAgency = false;
  },
  setProcessingAgency(state, payload) {
    state.processingAgency = payload;
  }
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
    await axios
      .get(apiUrl + "agency/findallAgencies", config)
      .then((res) => {
        if (res.status == 200) {
          commit("setAllAgency", res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  async createAgency({commit},payload) {
    commit("setProcessingAgency", true);
    let user = getCurrentUser();
    let name = payload.agencyName
    let pst = Number(payload.postal_code);

    payload.postal_code= pst

    var config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    await axios
      .post(apiUrl + "agency/create/"+name,payload,config)
      .then((res) => {
        if (res.status == 200) {
          commit("setProcessingAgency", false);
          commit("createAgency", payload)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  async deleteAgency({commit}, payload) {
    commit("setProcessingAgency", true);
    let user = getCurrentUser();
    let id = payload.data.id;
    var config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    await axios
      .delete(apiUrl + "agency/"+id,config)
      .then((res) => {
        if (res.status == 200) {
          commit("setProcessingAgency", false);
          commit("deleteAgency", payload.index);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  async updateAgency({commit}, payload) {
    commit("setProcessingAgency", true);
    let user = getCurrentUser();
    let id = payload.agencyID;
    var config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    await axios
      .patch(apiUrl + "agency/updateAgency/"+id, payload.data, config)
      .then((res) => {
        if (res.status == 200) {
          commit("setProcessingAgency", false);
          commit("updateAgency", payload);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};
