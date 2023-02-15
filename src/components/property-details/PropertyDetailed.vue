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
            <i class="iconsminds-information"></i>Details
          </h3>
        </b-colxx>
        <b-colxx class="d-flex justify-content-end" xxs="3">
          <b-button
            :class="{ blink_btn: isHovering }"
            style="height: max-content; margin-top: 5%"
            variant="outline-success"
            v-b-modal.propertyDetailsModal
          >
            <i class="iconsminds-pen"></i>Edit</b-button
          >
          <edit-det-modal
            :item="
              property.propertyDetail == null ? prObj : property.propertyDetail
            "
          />
        </b-colxx>
      </b-row>
    </template>
    <template v-if="property.propertyDetail == null">
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
          <b-col class="rowsLbl" cols="6">Floors:</b-col>
          <b-col
            ><p class="rowsVal">
              {{ property.propertyDetail.Floors }}
            </p></b-col
          >
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="6">Number Of Floors:</b-col>
          <b-col class="rowsVal"
            ><p class="rowsVal">
              {{ property.propertyDetail.numberOfFloors }}
            </p></b-col
          >
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="6">Lot Size in (&#13217;):</b-col>
          <b-col class="rowsVal"
            ><p class="rowsVal">
              {{ property.propertyDetail.lotDetailSizeInM2 }}
            </p></b-col
          >
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="6">Room Height:</b-col>
          <b-col
            ><p class="rowsVal">
              {{ property.propertyDetail.roomsHeight }}
            </p></b-col
          >
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="6">Year Built:</b-col>
          <b-col
            ><p class="rowsVal">
              {{ property.propertyDetail.yearBuilt }}
            </p></b-col
          >
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="6">Floor Space (&#13217;):</b-col>
          <b-col
            ><p class="rowsVal">
              {{ property.propertyDetail.floorSpaceM2 }}
            </p></b-col
          >
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="6">Volume in (&#x33A5;):</b-col>
          <b-col
            ><p class="rowsVal">
              {{ property.propertyDetail.volumeInM3 }}
            </p></b-col
          >
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="6">Last Renovation:</b-col>
          <b-col
            ><p class="rowsVal">
              {{ property.propertyDetail.lastRenovation }}
            </p></b-col
          >
        </b-row>
      </b-card-text>
    </template>
  </b-card>
</template>

<script>
import { mapGetters } from "vuex";
import UpdatePropertyDetailsModal from "../Form/UpdatePropertyDetailsModal.vue";

export default {
  name: "PropertyDetailed",
  computed: {
    ...mapGetters(["selectedProp"])
  },
  mounted() {
    this.prObj.propertyId = this.selectedProp.id;
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
  components: {
    "edit-det-modal": UpdatePropertyDetailsModal,
  },
  data() {
    return {
      isHovering: false,

      // property component object decleration in case the object is empty
      prObj: {
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
