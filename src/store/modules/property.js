import axios from "axios";
import { apiUrl } from "../../constants/config";
import { getCurrentUser } from "../../utils";
const state = {
  propertiesList: [],
};

const getters = {
  propertiesList: (state) => state.propertiesList,
};

const mutations = {
  setAllProperty(state, payload) {
    state.propertiesList = payload;
  },
  findProperty(state, payload) {
    state.propertiesList.forEach((element) => {
      if (element.id == payload) {
        return element;
      }
    });
  },
  //   createProperty(state, payload) {
  //     state.propertiesList = [...state.propertiesList, payload]
  //   },
  //   deleteProperty(state, payload) {
  //     state.propertiesList = state.propertiesList.splice(payload, 1);
  //   },
  //   updateProperty(state, payload) {
  //     state.propertiesList[payload.index] = payload.data;
  //   },
};

const actions = {
  setProperties({ commit }, payload) {
    commit("setAllProperty", payload);
  },
  findProperty({ commit }, payload) {
    let det = commit("findProperty", payload);
    return det;
  },
  //   async createProperty({commit},payload) {
  //     commit("setProcessingProperty", true);
  //     let user = getCurrentUser();
  //     let name = payload.propertyName
  //     let pst = Number(payload.postal_code);

  //     payload.postal_code= pst

  //     var config = {
  //       headers: {
  //         Authorization: `Bearer ${user.token}`,
  //       },
  //     };
  //     await axios
  //       .post(apiUrl + "property/create/"+name,payload,config)
  //       .then((res) => {
  //         if (res.status == 200) {
  //           commit("setProcessingProperty", false);
  //           commit("createProperty", payload)
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   },
  //   async deleteProperty({commit}, payload) {
  //     commit("setProcessingProperty", true);
  //     let user = getCurrentUser();
  //     let id = payload.data.id;
  //     var config = {
  //       headers: {
  //         Authorization: `Bearer ${user.token}`,
  //       },
  //     };
  //     await axios
  //       .delete(apiUrl + "property/"+id,config)
  //       .then((res) => {
  //         if (res.status == 200) {
  //           commit("setProcessingProperty", false);
  //           commit("deleteProperty", payload.index);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   },
  //   async updateProperty({commit}, payload) {
  //     commit("setProcessingProperty", true);back
  //     let user = getCurrentUser();
  //     let id = payload.agencyID;
  //     var config = {
  //       headers: {
  //         Authorization: `Bearer ${user.token}`,
  //       },
  //     };
  //     await axios
  //       .patch(apiUrl + "property/updateProperty/"+id, payload.data, config)
  //       .then((res) => {
  //         if (res.status == 200) {
  //           commit("setProcessingProperty", false);
  //           commit("updateProperty", payload);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
};

export default {
  state,
  getters,
  mutations,
  actions,
};
