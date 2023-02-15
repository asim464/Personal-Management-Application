<template>
  <b-card id="custom-row-card" header-text-variant="dark">
    <template #header>
      <b-row class="d-flex">
        <b-col class="d-flex justify-content-start" xxs="9">
          <h3
            style="
              font-family: 'Nunito', sans-serif;
              font-weight: 400;
              font-size: 18px;
              padding-top: 1rem;
            "
          >
            <i class="iconsminds-pricing"></i>Costs
          </h3>
        </b-col>
        <b-col class="d-flex justify-content-end" xxs="3">
          <b-button
            class="mt-2"
            style="height: 71%"
            variant="outline-success"
            v-b-modal.propCostEditModal
          >
            <i class="iconsminds-pen" ></i
            >Edit</b-button
          >
          <edit-cost-modal :item="property" />
        </b-col>
      </b-row>
    </template>
    <template v-if="property.price === null || property.paymentType === null">
      <b-row class="m-1">
        <h4 @mouseover="isHovering = true" @mouseout="isHovering = false" style="text-align:center; cursor:pointer;">
          <i class="iconsminds-information" style="align-items:center; display:inline-flex;"></i><br />No data available.<br />
          Click edit button to add data.
        </h4>
      </b-row>
    </template>
    <template v-else>
    <b-card-text>
      <b-row class="ml-2">
        <b-col class="rowsLbl" cols="6">Type:</b-col>
        <b-col
          ><p class="rowsVal">{{ property.paymentType }}</p></b-col
        >
      </b-row>
      <b-row class="ml-2">
        <b-col class="rowsLbl" cols="6">Price:</b-col>
        <b-col>
          <p v-if="property.price != null" class="rowsVal">CHF {{ property.price }}</p>
          <p v-else class="d-flex justify-content-center w-25"> - </p>
        </b-col>
      </b-row>
    </b-card-text>
  </template>
  </b-card>
</template>

<script>
import { mapGetters } from 'vuex';
import UpdatePropertyCostModal from '../Form/UpdatePropertyCostModal.vue';

export default {
  name: "PropertyCost",
  props: {
    property: {
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
  computed: {
    ...mapGetters(["selectedProp"])
  },
  components: {
    "edit-cost-modal": UpdatePropertyCostModal,
  },
  data() {
    return {};
  },
  mounted() {
    this.property.id = this.selectedProp.id;
  },
};
</script>

<style>
</style>