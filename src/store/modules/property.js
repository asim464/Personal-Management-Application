import axios from "axios";
import { apiUrl } from "../../constants/config";
import { getCurrentUser } from "../../utils";
const state = {
  propertiesList: [],
  paginatedList: {
    properties: [],
    currentPage: 1,
  },
  // selectedProp: {
  //   id: 0,
  //   title: "",
  //   description: null,
  //   type: "",
  //   paymentType: "",
  //   price: null,
  //   agentAssigned: null,
  //   createdBy: "",
  //   status: null,
  //   createdDate: "",
  //   updateAt: "",
  //   userId: 0,
  //   ownerId: null,
  //   agentId: null,
  //   agencyId: 0,
  //   agent: {
  //     id: 0,
  //     email: "",
  //     password: "",
  //     firstName: "",
  //     lastName: "",
  //     userName: "",
  //     roles: "",
  //     description: "",
  //     status: "",
  //     ImageUrl: null,
  //     IBAN: null,
  //     agencyId: 0,
  //   },
  //   owner: {
  //     id: 0,
  //     email: "",
  //     password: "",
  //     firstName: "",
  //     lastName: "",
  //     userName: "",
  //     roles: "",
  //     description: "",
  //     status: "",
  //     ImageUrl: null,
  //     IBAN: null,
  //     agencyId: 0,
  //   },
  //   user: {
  //     id: 0,
  //     email: "",
  //     password: "",
  //     firstName: "",
  //     lastName: "",
  //     userName: "",
  //     roles: "",
  //     description: "",
  //     status: "",
  //     ImageUrl: null,
  //     IBAN: null,
  //     agencyId: 0,
  //   },
  //   Address: null,
  //   agency: {
  //     id: 0,
  //     name: "",
  //   },
  //   image: [
  //     {
  //       id: 0,
  //       url: "",
  //       isMain: false,
  //       propertyId: 0,
  //     },
  //   ],
  //   mainFeature: {
  //     id: 0,
  //     Rooms: 0,
  //     LeavingSpace: 0,
  //     Street: "",
  //     ZipCodeOrCity: "",
  //     Availibility: "",
  //     createdDate: "",
  //     updateAt: "",
  //     propertyId: 0,
  //   },
  //   furnishingFeature: {
  //     id: 0,
  //     wheelChairAcess: false,
  //     petsAllowed: false,
  //     balcony: false,
  //     parkingPlace: false,
  //     Fireplace: false,
  //     View: false,
  //     minergieConstruction: false,
  //     newBuilding: false,
  //     childFriendly: false,
  //     smokingProhibited: false,
  //     garage: false,
  //     elevator: false,
  //     privateWashingMachine: false,
  //     quiteNeighbpurhood: false,
  //     minergieCertified: false,
  //     oldBuilding: false,
  //     createdDate: "",
  //     updateAt: "",
  //     propertyId: 0,
  //   },
  //   propertyDetail: {
  //     id: 0,
  //     Floors: 0,
  //     numberOfFloors: 0,
  //     lotDetailSizeInM2: 0,
  //     roomsHeight: 0,
  //     yearBuilt: 0,
  //     floorSpaceM2: 0,
  //     volumeInM3: 0,
  //     lastRenovation: 0,
  //     createdDate: "",
  //     updateAt: "",
  //     propertyId: 0,
  //   },
  // },
};

const getters = {
  propertiesList: (state) => state.propertiesList,
  paginatedList: (state) => state.paginatedList,
  // selectedProp: (state) => state.selectedProp,
};

const mutations = {
  setAllProperty(state, payload) {
    state.propertiesList = payload;
  },
  setPaginatedList(state, payload) {
    state.paginatedList = payload
  },
  // setSelectedProp(state, payload) {
  //   state.selectedProp = payload;
  // },
  findProperty(state, payload) {
    state.propertiesList.forEach((element) => {
      if (element.id == payload) {
        return element;
      }
    });
  },
  // editMFetSelProp(state, payload) {
  //   state.selectedProp.mainFeatures = payload;
  // },
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
  async setProperties({ commit }, { payload }) {
    commit("setAllProperty", payload);
  },
  onPaginationChange({ commit }, payload) {
    commit("setPaginatedList", payload);
  },
  // setSelectedProp({ commit }, payload) {
  //   commit("setSelectedProp", payload);
  // },
  findProperty({ commit }, payload) {
    let det = commit("findProperty", payload);
    return det;
  },
  async editPropertyById({ commit }, { pk, payload, config }) {
    const res = await axios.patch(apiUrl + "property/" + pk, payload, config);
    return res;
  },
  async deletePropertyById({ commit }, { pk, config }) {
    if (pk.length === 1) {
      const res = await axios.delete(apiUrl + "property/" + pk[0], config);

      return res;
    } else if (pk.length > 1 && pk.length <= 10) {
      const res = []
      pk.forEach(async (item) => {
        tmp = await axios.delete(apiUrl + "property/" + item, config);
        res.push({ ...tmp });
      })

      return res;
    }
  },
  async getPropertyById({ commit }, { pk, config }) {
    const res = await axios.get(apiUrl + "property/" + pk, config);
    return res;
  },
  async updatePropertyMainFeature({ commit }, { pk, payload, config }) {
    const res = await axios.post(
      apiUrl + "property/createMainFeature/" + pk,
      payload,
      config
    );
    return res;
  },
  async updatePropertyDetails({ commit }, { pk, payload, config }) {
    const res = await axios.patch(apiUrl + "details/" + pk, payload, config);
    return res;
  },
  async updatePropertyCost({ commit }, { pk, payload, config }) {
    const res = await axios.patch(
      apiUrl + "property/updateCost/" + pk,
      payload,
      config
    );
    return res;
  },
  async updatePropertyAgent({ commit }, { pk, ps, config }) {
    const res = await axios.patch(
      apiUrl + "property/updateAgent/" + pk + "/" + ps,
      {},
      config
    );
    return res;
  },
  async updatePropertyExistingOwner({ commit }, { pk, pc, payload, config }) {
    const res = await axios.patch(
      apiUrl + "property/addExistingOwner/" + pk + "/" + pc,
      payload,
      config
    );
    return res;
  },
  async updatePropertyNewOwner({ commit }, { pk, payload, config }) {
    const res = await axios.patch(
      apiUrl + "property/addNewOwner/" + pk,
      payload,
      config
    );
    return res;
  },
  async updatePropertyFeatureNFurnishing(
    { commit },
    { pk, payload, config }
  ) {
    const res = await axios.post(
      apiUrl + "property/createFurnishingFeature/" + pk,
      payload,
      config
    );
    return res;
  },
  async updatePropertyDescription({ commit }, { pk, payload, config }) {
    const res = await axios.patch(
      apiUrl + "property/updateDescription/" + pk,
      payload,
      config
    );
    return res;
  },
  async createMainImage({ commit }, { pk, payload, config }) {
    config.headers["Content-Type"] = "multipart/form-data";
    const res = await axios.post(
      apiUrl + "images/updateMainImage/" + pk,
      payload,
      config
    );
    return res;
  },
  async createPropertyImages({ commit }, { pk, payload, config }) {
    config.headers["Content-Type"] = "multipart/form-data";
    const res = await axios.post(
      apiUrl + "images/uploadMultiplePropertyFiles/" + pk,
      payload,
      config
    );
    return res;
  },
  async deletePropertyImage({ commit }, { pk, payload, config }) {
    const res = await axios.delete(
      apiUrl + "images/deleteByImageId/" + pk,
      config
    );
    return res;
  },
  async updatePublicationStatus({ commit }, { pk, ps, config }) {
    const res = await axios.patch(apiUrl + "property/updatePublicationStatus/" + pk + "/" + ps, {}, config);
    return res;
  }
  // async updateMFetProp({ commit }, payload) {
  //   let user = getCurrentUser();
  //   var config = {
  //     headers: {
  //       Authorization: `Bearer ${user.token}`,
  //     },
  //   };
  //   await axios
  //     .post(
  //       apiUrl + "property/createMainFeature/" + payload.propertyId,
  //       payload.mainFeatures,
  //       config
  //     )
  //     .then((res) => {
  //       if (res.status == 200 || res.status == 201) {
  //         commit("editMFetSelProp", data);
  //         return [
  //           "Success",
  //           "Main features updated successfully",
  //           res.status,
  //           {
  //             type: "success",
  //             permanent: false,
  //             duration: 5000,
  //           },
  //         ];

  //       } else {
  //         return [
  //           "Error",
  //           "Main features could not be updated",
  //           res.status,
  //           {
  //             type: "error",
  //             permanent: false,
  //             duration: 5000,
  //           },
  //         ];
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err.response.data);
  //     })
  // },
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
