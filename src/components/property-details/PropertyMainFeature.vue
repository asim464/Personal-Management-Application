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
            class="mt-2"
            style="height: 71%"
            variant="outline-success"
            v-b-modal.mainFeaturesModal
          >
            <i class="iconsminds-pen"></i>Edit</b-button
          >
        </b-colxx>
      </b-row>
    </template>
    <b-card-text>
      <b-row class="ml-2">
        <b-col class="rowsLbl" cols="6">Rooms:</b-col>
        <b-col
          v-if="property.length == 0 || property.mainFeature.length == 0"
          cols="6"
          ><p class="rowsVal">N/A</p></b-col
        >
        <b-col v-else
          ><p class="rowsVal">
            {{ property.mainFeature.Rooms }}
          </p></b-col
        >
      </b-row>
      <b-row class="ml-2">
        <b-col class="rowsLbl" cols="6">Living Space:</b-col>
        <b-col
          v-if="property.length == 0 || property.mainFeature.length == 0"
          cols="6"
          ><p class="rowsVal">N/A &#13217;</p></b-col
        >
        <b-col v-else
          ><p class="rowsVal">
            {{ property.mainFeature.LeavingSpace }}
          </p></b-col
        >
      </b-row>
      <b-row class="ml-2">
        <b-col class="rowsLbl" cols="6">Street & Nr:</b-col>
        <b-col
          v-if="property.length == 0 || property.mainFeature.length == 0"
          cols="6"
          ><p class="rowsVal">N/A</p></b-col
        >
        <b-col v-else
          ><p class="rowsVal">
            {{ property.mainFeature.Street }}
          </p></b-col
        >
      </b-row>
      <b-row class="ml-2">
        <b-col class="rowsLbl" cols="6">Zip Code & City:</b-col>
        <b-col
          v-if="property.length == 0 || property.mainFeature.length == 0"
          cols="6"
          ><p class="rowsVal">N/A</p></b-col
        >
        <b-col v-else
          ><p class="rowsVal">
            {{ property.mainFeature.ZipCodeOrCity }}
          </p></b-col
        >
      </b-row>
      <b-row class="ml-2">
        <b-col class="rowsLbl" cols="6">Available:</b-col>
        <b-col
          v-if="property.length == 0 || property.mainFeature.length == 0"
          cols="6"
          ><p class="rowsVal">N/A</p></b-col
        >
        <b-col v-else
          ><p class="rowsVal">
            {{ property.mainFeature.Availibility }}
          </p></b-col
        >
      </b-row>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "PropertyMainFeature",
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