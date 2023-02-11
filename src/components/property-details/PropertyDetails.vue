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
            class="mt-2"
            style="height: 71%"
            variant="outline-success"
            v-b-modal.detailsModal
          >
            <i class="iconsminds-pen"></i>Edit</b-button
          >
        </b-colxx>
      </b-row>
    </template>
    <b-card-text>
      <b-row class="ml-2">
        <b-col class="rowsLbl" cols="6">Floors:</b-col>
        <b-col
          v-if="
            property.length == 0 ||
            property.propertyDetail.length == 0 ||
            property.propertyDetail.Floors == 0
          "
          cols="6"
          ><p class="rowsVal">N/A</p></b-col
        >
        <b-col v-else
          ><p class="rowsVal">
            {{ property.propertyDetail.Floors }}
          </p></b-col
        >
      </b-row>
      <b-row class="ml-2">
        <b-col class="rowsLbl" cols="6">Number Of Floors:</b-col>
        <b-col
          v-if="
            property.length == 0 ||
            property.propertyDetail.length == 0 ||
            property.propertyDetail.numberOfFloors == 0
          "
          cols="6"
          ><p class="rowsVal">N/A</p></b-col
        >
        <b-col class="rowsVal" v-else
          ><p class="rowsVal">
            {{ property.propertyDetail.numberOfFloors }}
          </p></b-col
        >
      </b-row>
      <b-row class="ml-2">
        <b-col class="rowsLbl" cols="6">Lot Size in (&#13217;):</b-col>
        <b-col
          v-if="
            property.length == 0 ||
            property.propertyDetail.length == 0 ||
            property.propertyDetail.lotDetailSizeInM2 == 0
          "
          cols="6"
          ><p class="rowsVal">N/A</p></b-col
        >
        <b-col class="rowsVal" v-else
          ><p class="rowsVal">
            {{ property.propertyDetail.lotDetailSizeInM2 }}
          </p></b-col
        >
      </b-row>
      <b-row class="ml-2">
        <b-col class="rowsLbl" cols="6">Room Height:</b-col>
        <b-col
          v-if="
            property.length == 0 ||
            property.propertyDetail.roomsHeight == 0 ||
            property.propertyDetail.length == 0
          "
          cols="6"
          ><p class="rowsVal">N/A</p></b-col
        >
        <b-col v-else
          ><p class="rowsVal">
            {{ property.propertyDetail.roomsHeight }}
          </p></b-col
        >
      </b-row>
      <b-row class="ml-2">
        <b-col class="rowsLbl" cols="6">Year Built:</b-col>
        <b-col
          v-if="
            property.length == 0 ||
            property.propertyDetail.length == 0 ||
            property.propertyDetail.yearBuilt == 0
          "
          cols="6"
          ><p class="rowsVal">N/A</p></b-col
        >
        <b-col v-else
          ><p class="rowsVal">
            {{ property.propertyDetail.yearBuilt }}
          </p></b-col
        >
      </b-row>
      <b-row class="ml-2">
        <b-col class="rowsLbl" cols="6">Floor Space (&#13217;):</b-col>
        <b-col
          v-if="
            property.length == 0 ||
            property.propertyDetail.length == 0 ||
            property.propertyDetail.floorSpaceM2 == 0
          "
          cols="6"
          ><p class="rowsVal">N/A</p></b-col
        >
        <b-col v-else
          ><p class="rowsVal">
            {{ property.propertyDetail.floorSpaceM2 }}
          </p></b-col
        >
      </b-row>
      <b-row class="ml-2">
        <b-col class="rowsLbl" cols="6">Volume in (&#x33A5;):</b-col>
        <b-col
          v-if="
            property.length == 0 ||
            property.propertyDetail.length == 0 ||
            property.propertyDetail.volumeInM3 == 0
          "
          cols="6"
          ><p class="rowsVal">N/A</p></b-col
        >
        <b-col v-else
          ><p class="rowsVal">
            {{ property.propertyDetail.volumeInM3 }}
          </p></b-col
        >
      </b-row>
      <b-row class="ml-2">
        <b-col class="rowsLbl" cols="6">Last Renovation:</b-col>
        <b-col
          v-if="
            property.length == 0 ||
            property.propertyDetail.length == 0 ||
            property.propertyDetail.lastRenovation == 0
          "
          cols="6"
          ><p class="rowsVal">N/A</p></b-col
        >
        <b-col v-else
          ><p class="rowsVal">
            {{ property.propertyDetail.lastRenovation }}
          </p></b-col
        >
      </b-row>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "PropertyDetails",
  props: {
    property: Object,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style>
</style>
