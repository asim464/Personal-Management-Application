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
            v-b-modal.costsModal
          >
            <i class="iconsminds-pen" ></i
            >Edit</b-button
          >
        </b-col>
      </b-row>
    </template>
    <b-card-text>
      <b-row class="ml-2">
        <b-col class="rowsLbl" cols="6">Type:</b-col>
        <b-col v-if="property.length == 0 || property.paymentType == 0" cols="6"
          ><p class="rowsVal">N/A</p></b-col
        >
        <b-col v-else
          ><p class="rowsVal">{{ property.paymentType }}</p></b-col
        >
      </b-row>
      <b-row class="ml-2">
        <b-col class="rowsLbl" cols="6">Price:</b-col>
        <b-col v-if="property.length == 0 || property.price == 0" cols="6"
          ><p class="rowsVal">N/A</p></b-col
        >
        <b-col v-else
          ><p class="rowsVal">CHF {{ property.price }}</p></b-col
        >
      </b-row>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "PropertyCost",
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
