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
            class="mt-2"
            style="height: min-content"
            variant="outline-success"
            v-b-modal.mainFeaturesModal
          >
            <i class="iconsminds-pen"></i>Edit</b-button
          >
        </b-col>
      </b-row>
    </template>
    <b-card-text>
      <b-row class="ml-2">
        <b-col class="rowsLbl" cols="3">Wheelchair access:</b-col>
        <b-col
          v-if="property.length == 0 || property.furnishingFeature == 0"
          cols="6"
          ><p class="rowsVal">N/A</p></b-col
        >
        <b-col v-else
          ><p class="rowsVal">
            {{ property.furnishingFeature }}
          </p></b-col
        >
      </b-row>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "PropertyFeatureDetails",
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
