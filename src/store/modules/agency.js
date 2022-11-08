import { setCurrentUser, getCurrentUser } from "../../utils";

export default {
  state: {
    agenciesList: [],
    processing: false,
  },
  getters: {
    agenciesList: (state) => state.agenciesList,
    processing: (state) => state.processing,
  },
  mutations: {
    createAgency(state, payload) {
      state.agenciesList = state.agenciesList.push(payload);
      state.processing = false;
    },
    deleteAgency(state, payload) {
      state.agenciesList = state.agenciesList.splice(payload, 1);
      state.processing = false;
    },
    setProcessing(state, payload) {
      state.processing = payload;
    },
    editAgency(state, payload) {
      state.currentUser = null;
      state.processing = false;
    }
  },
  actions: {
     
  },
};
