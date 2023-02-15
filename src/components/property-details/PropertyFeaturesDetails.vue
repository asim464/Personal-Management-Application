<template>
  <b-card header-text-variant="dark" class="mb-2">
    <template #header>
      <b-row class="d-flex" no-gutters>
        <b-col class="d-flex justify-content-start" xxs="9">
          <h3
            style="
              font-family: 'Nunito', sans-serif;
              font-weight: 400;
              font-size: 18px;
              padding-top: 1rem;
            "
          >
            <i class="iconsminds-information"></i>Features and Furnishings
          </h3>
        </b-col>
        <b-col class="d-flex justify-content-end" xxs="3">
          <b-button
            :class="{ blink_btn: isHovering }"
            style="height: min-content; margin-top: 5%"
            variant="outline-success"
            v-b-modal.propFurnishingEditModal
          >
            <i class="iconsminds-pen"></i>Edit</b-button
          >
          <edit-furnishing-modal
            :item="
              property.furnishingFeature == null ? ffObj : property.furnishingFeature
            "
          />
        </b-col>
      </b-row>
    </template>
    <template v-if="property.furnishingFeature === null">
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
          <b-col class="rowsLbl" cols="3">Wheelchair access</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  property.furnishingFeature.wheelChairAcess == true
                    ? { color: 'green', 'font-size': 'x-large', 'font-weight': '900' }
                    : { color: 'gray', 'font-size': 'x-large', 'font-weight': '900' },
                ]"
              ></i></p
          ></b-col>
          <b-col class="rowsLbl" cols="3">Pets Allowed</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  property.furnishingFeature.petsAllowed == true
                    ? { color: 'green', 'font-size': 'x-large', 'font-weight': '900' }
                    : { color: 'gray', 'font-size': 'x-large', 'font-weight': '900' },
                ]"
              ></i></p
          ></b-col>
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="3">Balcony</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  property.furnishingFeature.balcony == true
                    ? { color: 'green', 'font-size': 'x-large', 'font-weight': '900' }
                    : { color: 'gray', 'font-size': 'x-large', 'font-weight': '900' },
                ]"
              ></i></p
          ></b-col>
          <b-col class="rowsLbl" cols="3">Parking Place</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  property.furnishingFeature.parkingPlace == true
                    ? { color: 'green', 'font-size': 'x-large', 'font-weight': '900' }
                    : { color: 'gray', 'font-size': 'x-large', 'font-weight': '900' },
                ]"
              ></i></p
          ></b-col>
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="3">Fireplace</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  property.furnishingFeature.Fireplace == true
                    ? { color: 'green', 'font-size': 'x-large', 'font-weight': '900' }
                    : { color: 'gray', 'font-size': 'x-large', 'font-weight': '900' },
                ]"
              ></i></p
          ></b-col>
          <b-col class="rowsLbl" cols="3">View</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  property.furnishingFeature.View == true
                    ? { color: 'green', 'font-size': 'x-large', 'font-weight': '900' }
                    : { color: 'gray', 'font-size': 'x-large', 'font-weight': '900' },
                ]"
              ></i></p
          ></b-col>
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="3">Minergie Construction</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  property.furnishingFeature.minergieConstruction == true
                    ? { color: 'green', 'font-size': 'x-large', 'font-weight': '900' }
                    : { color: 'gray', 'font-size': 'x-large', 'font-weight': '900' },
                ]"
              ></i></p
          ></b-col>
          <b-col class="rowsLbl" cols="3">New Building</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  property.furnishingFeature.newBuilding == true
                    ? { color: 'green', 'font-size': 'x-large', 'font-weight': '900' }
                    : { color: 'gray', 'font-size': 'x-large', 'font-weight': '900' },
                ]"
              ></i></p
          ></b-col>
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="3">Child Friendly</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  property.furnishingFeature.childFriendly == true
                    ? { color: 'green', 'font-size': 'x-large', 'font-weight': '900' }
                    : { color: 'gray', 'font-size': 'x-large', 'font-weight': '900' },
                ]"
              ></i></p
          ></b-col>
          <b-col class="rowsLbl" cols="3">Smoking Prohibited</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  property.furnishingFeature.smokingProhibited == true
                    ? { color: 'green', 'font-size': 'x-large', 'font-weight': '900' }
                    : { color: 'gray', 'font-size': 'x-large', 'font-weight': '900' },
                ]"
              ></i></p
          ></b-col>
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="3">Garage</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  property.furnishingFeature.garage == true
                    ? { color: 'green', 'font-size': 'x-large', 'font-weight': '900' }
                    : { color: 'gray', 'font-size': 'x-large', 'font-weight': '900' },
                ]"
              ></i></p
          ></b-col>
          <b-col class="rowsLbl" cols="3">Elevator</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  property.furnishingFeature.elevator == true
                    ? { color: 'green', 'font-size': 'x-large', 'font-weight': '900' }
                    : { color: 'gray', 'font-size': 'x-large', 'font-weight': '900' },
                ]"
              ></i></p
          ></b-col>
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="3">Private Washing Machine</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  property.furnishingFeature.privateWashingMachine == true
                    ? { color: 'green', 'font-size': 'x-large', 'font-weight': '900' }
                    : { color: 'gray', 'font-size': 'x-large', 'font-weight': '900' },
                ]"
              ></i></p
          ></b-col>
          <b-col class="rowsLbl" cols="3">Quiet Neighbourhood</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  property.furnishingFeature.quiteNeighbpurhood == true
                    ? { color: 'green', 'font-size': 'x-large', 'font-weight': '900' }
                    : { color: 'gray', 'font-size': 'x-large', 'font-weight': '900' },
                ]"
              ></i></p
          ></b-col>
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="3">Minergie Certified</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  property.furnishingFeature.minergieCertified == true
                    ? { color: 'green', 'font-size': 'x-large', 'font-weight': '900' }
                    : { color: 'gray', 'font-size': 'x-large', 'font-weight': '900' },
                ]"
              ></i></p
          ></b-col>
          <b-col class="rowsLbl" cols="3">Old Building</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  property.furnishingFeature.oldBuilding == true
                    ? { color: 'green', 'font-size': 'x-large', 'font-weight': '900' }
                    : { color: 'gray', 'font-size': 'x-large', 'font-weight': '900' },
                ]"
              ></i></p
          ></b-col>
        </b-row>
      </b-card-text>
    </template>
  </b-card>
</template>

<script>
import { mapGetters } from "vuex";
import UpdatePropertyFeaturesNFurnishingModal from "../Form/UpdatePropertyFeaturesNFurnishingModal.vue";

export default {
  name: "PropertyFeatureDetails",
  computed: {
    ...mapGetters(["selectedProp"]),
  },
  components: {
    "edit-furnishing-modal": UpdatePropertyFeaturesNFurnishingModal,
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
      isHovering: false,
      ffObj: {
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
    };
  },
  mounted() {
    this.ffObj.propertyId = this.selectedProp.id;
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
