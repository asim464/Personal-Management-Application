import axios from "axios";
import { apiUrl } from "../../constants/config";

const state = {
  publicationsList: [],
};

const getters = {
  publicationsList: (state) => state.publicationsList,
};

const mutations = {
  setPublicationsList(state, payload) {
    state.publicationsList = payload;
  },
  //   setPublishItem(state, payload) {
  //     state.publicationsList[payload.id].ft = ;
  //   },
};

const actions = {
  async getPublishing({ commit }, { config }) {
    const res = await axios.get(apiUrl + "publishings", config);
    return res;
  },
  setPublishList({ commit }, payload) {
    commit("setPublicationsList", payload);
  },
  async publishAll({ commit }, { pk, config }) {
    const res = await axios.post(
      apiUrl + "property/createIdx/" + pk,
      {},
      config
    );
    return res;
  },
  async createPublishing({ commit }, { pk, payload, config }) {
    const res = await axios.post(
      apiUrl + "publishings/create/" + pk,
      payload,
      config
    );
    return res;
  },
  async updatePublishing({ commit }, { pk, payload, config }) {
    const res = await axios.patch(
      apiUrl + "publishings/" + pk,
      payload,
      config
    );
    // commit("setPublishItem", payload);
    return res;
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
