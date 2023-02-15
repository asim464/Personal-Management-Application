<template>
  <div>
    <b-modal
      id="propAgentEditModal"
      ref="propAgentEditModal"
      title="Edit Agent Assigned"
      modal-class="modal-right"
    >
      <b-form>
        <b-form-group label="Agents">
          <b-form-select
            class="pt-2"
            v-model="item.agentId"
            :options="agentsList"
            :rows="2"
            :max-rows="2"
          >
            <template #first>
              <b-form-select-option value="null" default disabled
                >-- Please select an option --</b-form-select-option
              >
            </template>
          </b-form-select>
        </b-form-group>
      </b-form>

      <template slot="modal-footer">
        <b-button variant="outline-secondary" @click="hideModal('propAgentEditModal')"
          >Cancel</b-button
        >
        <b-button variant="primary" @click="updatePropertyAgent()" class="mr-1"
          >SAVE</b-button
        >
      </template>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import { getCurrentUser } from "../../utils";
import { apiUrl } from "../../constants/config";
import { mapGetters } from "vuex";
import { UserRole } from "../../utils/auth.roles";
import { payment_types } from "../../utils/property.consts";

export default {
  name: "UpdatePropertyAgentModal",
  computed: {
    ...mapGetters(["currentUser", "agenciesList", "selectedProp"]),
  },
  props: {
    item: {
      id: 0,
      title: "",
      description: null,
      type: "",
      paymentType: "",
      price: null,
      agentAssigned: null,
      createdBy: "",
      status: null,
      createdDate: "",
      updateAt: "",
      userId: 0,
      ownerId: null,
      agentId: null,
      agencyId: 0,
      agent: {
        id: 0,
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        userName: "",
        roles: "",
        description: "",
        status: "",
        ImageUrl: null,
        IBAN: null,
        agencyId: 0,
      },
      owner: null,
      user: {
        id: 0,
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        userName: "",
        roles: "",
        description: "",
        status: "",
        ImageUrl: null,
        IBAN: null,
        agencyId: 0,
      },
      Address: null,
      agency: {
        id: 0,
        name: "",
      },
      image: [
        {
          id: 0,
          url: "",
          isMain: false,
          propertyId: 0,
        },
      ],
      mainFeature: {
        id: 0,
        Rooms: 0,
        LeavingSpace: 0,
        Street: "",
        ZipCodeOrCity: "",
        Availibility: "",
        createdDate: "",
        updateAt: "",
        propertyId: 0,
      },
      furnishingFeature: {
        id: 0,
        wheelChairAcess: false,
        petsAllowed: false,
        balcony: false,
        parkingPlace: false,
        Fireplace: false,
        View: false,
        minergieConstruction: false,
        newBuilding: false,
        childFriendly: false,
        smokingProhibited: false,
        garage: false,
        elevator: false,
        privateWashingMachine: false,
        quiteNeighbpurhood: false,
        minergieCertified: false,
        oldBuilding: false,
        createdDate: "",
        updateAt: "",
        propertyId: 0,
      },
      propertyDetail: {
        id: 0,
        Floors: 0,
        numberOfFloors: 0,
        lotDetailSizeInM2: 0,
        roomsHeight: 0,
        yearBuilt: 0,
        floorSpaceM2: 0,
        volumeInM3: 0,
        lastRenovation: 0,
        createdDate: "",
        updateAt: "",
        propertyId: 0,
      },
    },
  },
  data() {
    return {
      UserRole,
      payment_types,
      agentsList: [],
      config: {},
    };
  },
  async mounted() {
    var user = getCurrentUser();
    this.item.agentId = this.selectedProp.agentId;
    var tmpList;
    var ls= [];
    this.config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    await axios
      .get(apiUrl + "users/findAllAgents", this.config)
      .then(async (res) => {
        if (res.status == 200) {
          tmpList = res.data;
          console.log(tmpList);
          await tmpList.forEach((el) => {
            if (el.agencyId == this.item.agencyId) {
              let element = {
                value: el.id,
                text: el.firstName + " " + el.lastName,
              };
              console.log(element);
              ls.push({...element});
            }
          });
          this.agentsList = {...ls};
          console.log(ls)

          this.$notify("Success", "Fetched company agents.", res.status, {
            type: "success",
            duration: 5000,
            permanent: false,
          });
          
        }
        else if (res.status == 401) {
          this.$notify("Error", "Company agents unavailable.", err, {
            type: "error",
            duration: 5000,
            permanent: false,
          });
        }
      })
      .catch((err) => {
        this.$notify("Error", "Network error occured", err, {
          type: "error",
          duration: 5000,
          permanent: false,
        });
        console.log(err);
      });
  },
  methods: {
    updatePropertyAgent() {
      axios
        .patch(
          apiUrl + "property/updateAgent/" + this.item.id + "/" + this.item.agentId,
          this.config
        )
        .then((res) => {
          if (res.status == 200) {
            this.$notify(
              "Success",
              "Agent assigned to property succesfully",
              res.status,
              {
                type: "success",
                duration: 5000,
                permanent: false,
              }
            );
            this.hideModal("propAgentEditModal");
          }
          else if (res.status == 401) {
            this.$notify("Error", "Agent could not be assigned.", err, {
              type: "error",
              duration: 5000,
              permanent: false,
            });
          }
        })
        .catch((err) => {
          this.$notify("Error", "Network error occured", err, {
            type: "error",
            duration: 5000,
            permanent: false,
          });
          console.log(err);
        });
    },
    hideModal(refname) {
      this.$refs[refname].hide();
    },
  },
};
</script>
