<template>
  <b-card
    footer-bg-variant="white"
    footer-border-variant="light"
    header-text-variant="dark"
    class="mb-2"
  >
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
            <i class="iconsminds-profile"></i>Owner
          </h3>
        </b-col>
        <b-col class="d-flex justify-content-end" xxs="3">
          <b-button class="mt-2" style="height: min-content" variant="outline-success">
            <i class="iconsminds-pen"></i>Edit</b-button
          >
        </b-col>
      </b-row>
    </template>
    <template v-if="property.owner === null">
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
          <b-col class="rowsLbl" cols="6">First Name:</b-col>
          <b-col
            ><p class="rowsVal">
              {{ property.owner.firstName }}
            </p></b-col
          >
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="6">Last Name:</b-col>
          <b-col
            ><p class="rowsVal">
              {{ property.owner.lastName }} &#13217;
            </p></b-col
          >
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="6">Email:</b-col>
          <b-col
            ><p class="rowsVal">
              {{ property.owner.email }}
            </p></b-col
          >
        </b-row>
      </b-card-text>
    </template>
    <template #footer>
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
            <i class="iconsminds-bank"></i>Bank Information
          </h3>

        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <p class="rowsVal pl-5" style=" text-decoration: underline solid gray;  ">
              {{ property.owner.IBAN == null ? N/A : property.owner.IBAN }}
            </p>
        </b-col>
      </b-row>
      <b-row>
        <!-- <b-col class="rowsLbl" xxs="4">IBAN:</b-col>
                  <b-col xxs="8">why</b-col> -->
      </b-row>
    </template>
  </b-card>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "PropertyOwner",
  // computed: {
  //   ...mapGetters(["propertiesList"])
  // },
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
      owner: {
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
    return {};
  },
  mounted() {
    // this.property=this.selectedProp
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
