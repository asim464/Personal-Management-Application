<template>
  <b-card id="custom-row-card" header-text-variant="dark">
    <template #header>
      <b-row class="d-flex">
        <b-col class="d-flex justify-content-start" xxs="9">
          <h3
            style="font-family: 'Nunito', sans-serif;font-weight: 400;font-size: 18px;padding-top: 1rem;"
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
            <i class="iconsminds-pen"></i>Edit</b-button
          >
          <edit-cost-modal :item="costItem" @updateData="updateData" />
        </b-col>
      </b-row>
    </template>
    <template v-if="!costItem.price">
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
          <b-col class="rowsLbl" cols="6">Type:</b-col>
          <b-col
            ><p class="rowsVal">{{ costItem.paymentType }}</p></b-col
          >
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="6">Price:</b-col>
          <b-col>
            <p class="rowsVal">CHF {{ costItem.price }}</p>
          </b-col>
        </b-row>
      </b-card-text>
    </template>
  </b-card>
</template>

<script>
import UpdatePropertyCostModal from "../Form/UpdatePropertyCostModal.vue";

export default {
  name: "PropertyCost",
  props: {
    property: Object,
  },

  components: {
    "edit-cost-modal": UpdatePropertyCostModal,
  },
  data() {
    return {
      isHovering: false,
      costItem: {
        propertyId: 0,
        price: null,
        paymentType: "",
      },
    };
  },
  watch: {
    property(value) {
      this.costItem.price = value.price;
      this.costItem.paymentType = value.paymentType;
      this.costItem.propertyId = value.id;
    },
  },
  methods: {
    async updateData() {
      this.$emit("fetchProperty");
    }
  },
};
</script>

<style></style>
