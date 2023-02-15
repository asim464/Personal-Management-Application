<template>
  <div>
    <b-modal
      id="propCostEditModal"
      ref="propCostEditModal"
      title="Edit Cost"
      modal-class="modal-right"
    >
      <b-form>
        <b-form-group label="Payment type">
          <b-form-select
            class="pt-2"
            :options="payment_types"
            v-model="item.paymentType"
            :rows="2"
            :max-rows="2"
          />
        </b-form-group>
        <b-form-group label="Cost:">
          <b-input-group>
            <template #append>
              <b-input-group-text>CHF</b-input-group-text>
            </template>
            <b-form-input v-model="item.price" />
          </b-input-group>
        </b-form-group>
      </b-form>

      <template slot="modal-footer">
        <b-button variant="outline-secondary" @click="hideModal('propCostEditModal')"
          >Cancel</b-button
        >
        <b-button variant="primary" @click="updatePropertyCost()" class="mr-1"
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
  name: "UpdatePropertyCostModal",
  computed: {
    ...mapGetters(["currentUser", "agenciesList"]),
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
        propertyId: 0
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
      }
    },
  },
  data() {
    return {
      UserRole,
      payment_types,
    };
  },
  created() {
    this.item.id = this.selectedProp.id;
  },
  computed: {
    ...mapGetters(["selectedProp"])
  },
  methods: {
    updatePropertyCost() {
      let cost = {
        paymentType: this.item.paymentType,
        price: Number(this.item.price),
      };
      let user = getCurrentUser();

      var config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      axios
        .patch(apiUrl + "property/updateCost/" + this.item.id, cost, config)
        .then((res) => {
          if (res.status == 200) {
            this.$notify("Success", "Property cost edited succesfully", res.status, {
              type: "success",
              duration: 5000,
              permanent: false,
            });
          }
          if (res.status == 401) {
            this.$notify("Error", "Property cost could not be edited.", err, {
              type: "error",
              duration: 5000,
              permanent: false,
            });
          }
        })
        .catch((err) => {
          this.$notify("Error", "Network Error Occured", err, {
            type: "error",
            duration: 5000,
            permanent: false,
          });
          console.log(err);
        });
      this.hideModal("propCostEditModal");
    },
    hideModal(refname) {
      this.$refs[refname].hide();
    },
  },
};
</script>
