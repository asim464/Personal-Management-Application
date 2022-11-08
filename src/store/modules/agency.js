import axios from "axios";
import { apiUrl } from "../../constants/config";
import { getCurrentUser } from "../../utils";
const state = {
  agenciesList: [],
  processingAgency: false,
  isCreated: false,
  isupdated: false,
  // processing: false,
};

const getters = {
  agenciesList: (state) => state.agenciesList,
  isCreated: (state) => state.isCreated,
  isupdated: (state) => state.isupdated,
  // processing: (state) => state.processing,
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
    // state.processing = false;
  },
  deleteAgency(state, payload) {
    state.agenciesList = state.agenciesList.splice(payload, 1);
    state.processingAgency = false;
  },
  setProcessingAgency(state, payload) {
    state.processingAgency = payload;
  },
  createAgency(state) {
    state.isCreated = true;
  },
  stateChanged(state){
    state.isCreated = false;
    state.isupdated = false;
  }
};

const actions = {
  changedstate({commit}){
    commit("stateChanged");

  },
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
    await axios
      .get(apiUrl + "agency/findallAgencies", config)
      .then((res) => {
        if (res.status == 200) {
          commit("setAllAgency", res.data);
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  async createAgency({commit},payload) {
    let user = getCurrentUser();
    let name = payload.agencyName
    delete payload.agencyName
    let pst = Number(payload.postal_code);

    payload.postal_code= pst

    console.log(payload);
    console.log(name);
    // commit("createAgency")

    var config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
      console.log(apiUrl + "agency/create/"+name,);
    await axios
      .post(apiUrl + "agency/create/"+name,payload,config)
      .then((res) => {
        if (res.status == 201) {
          this.setAgencies();
          console.log(res.data);
          commit("createAgency")
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
