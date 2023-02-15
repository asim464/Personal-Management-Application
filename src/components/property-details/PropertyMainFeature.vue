<template>
  <b-card header-text-variant="dark" class="mb-2">
    <template #header>
      <b-row class="d-flex" no-gutters>
        <b-colxx class="d-flex justify-content-start" xxs="9">
          <h3
            style="
              font-family: 'Nunito', sans-serif;
              font-weight: 400;
              font-size: 18px;
              padding-top: 1rem;
            "
          >
            <i class="iconsminds-map-marker"></i>Main Features
          </h3>
        </b-colxx>
        <b-colxx class="d-flex justify-content-end" xxs="3">
          <b-button
            :class="{ blink_btn: isHovering }"
            style="height: max-content; margin-top: 5%"
            variant="outline-success"
            v-b-modal.mainFeaturesModal
          >
            <i class="iconsminds-pen"></i>Edit</b-button
          >
          <edit-mFet-modal :item="property.mainFeature == null ? prObj : property.mainFeature"/>
        </b-colxx>
      </b-row>
    </template>
    <template v-if="property.mainFeature === null">
      <b-row class="m-1">
        <h4
          @mouseover="isHovering = true"
          @mouseout="isHovering = false"
          style="text-align: center; cursor: pointer"
        >
          <i
            class="iconsminds-information"
            style="align-items: center; display: inline-flex"
          ></i
          ><br />No data available.<br />
          Click edit button to add data.
        </h4>
      </b-row>
    </template>
    <template v-else>
      <b-card-text>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="6">Rooms:</b-col>
          <b-col
            ><p class="rowsVal">
              {{ property.mainFeature.Rooms }}
            </p></b-col
          >
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="6">Living Space:</b-col>
          <b-col
            ><p class="rowsVal">
              {{ property.mainFeature.LeavingSpace }} &#13217;
            </p></b-col
          >
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="6">Street & Nr:</b-col>
          <b-col
            ><p class="rowsVal">
              {{ property.mainFeature.Street }}
            </p></b-col
          >
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="6">Zip Code & City:</b-col>
          <b-col
            ><p class="rowsVal">
              {{ property.mainFeature.ZipCodeOrCity }}
            </p></b-col
          >
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="6">Available:</b-col>
          <b-col
            ><p class="rowsVal">
              {{ property.mainFeature.Availibility }}
            </p></b-col
          >
        </b-row>
      </b-card-text>
    </template>
  </b-card>
</template>

<script>
import { mapGetters } from "vuex";
import UpdatePropertyMainFeaturesModal from "../Form/UpdatePropertyMainFeaturesModal.vue";

export default {
  name: "PropertyMainFeature",
  components: {
    "edit-mFet-modal": UpdatePropertyMainFeaturesModal,
  },
  mounted() {
    this.prObj.propertyId = this.property.id;
  },
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
  // computed: {
  //   ...mapGetters(["selectedProp"])
  // },
  data() {
    return {
      isHovering: false,
      // property component object decleration in case the object is empty
      prObj: {
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
    };
  },
};
</script>

<style>
@keyframes glowing {
  0% {
    background-color: white;
    box-shadow: 0 0 3px white;
  }
  100% {
    background-color: green;
    box-shadow: 0 0 3px green;
  }
}
.blink_btn {
  animation: glowing 800ms infinite;
}
</style>
