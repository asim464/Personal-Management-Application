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
            style="height: min-content; margin-top: 5%"
            variant="outline-success"
            v-b-modal.propertyDetailsModal
          >
            <i class="iconsminds-pen"></i>Edit</b-button
          >
          <edit-det-modal
            :item="property.propertyDetail == null ? prObj : property.propertyDetail"
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
import UpdatePropertyDetailsModal from "../Form/UpdatePropertyDetailsModal.vue";

export default {
  name: "PropertyDetails",
  props: {
    property: Object,
  },
  components: {
    "edit-det-modal": UpdatePropertyDetailsModal,
  },
  data() {
    return {
      isHovering: false,

      // property component object decleration in case the object is empty
      prObj: {
        Floors: 0,
        numberOfFloors: 0,
        lotDetailSizeInM2: 0,
        roomsHeight: 0,
        yearBuilt: 0,
        floorSpaceM2: 0,
        volumeInM3: 0,
        lastRenovation: 0,
        propertyId: this.property.id
      },
    };
  },
  mounted() {},
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
