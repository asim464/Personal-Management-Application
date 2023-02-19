<template>
  <b-card header-text-variant="dark" class="mb-2" style="height: 100%">
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
            <i class="iconsminds-information"></i>Description
          </h3>
        </b-col>
        <b-col class="d-flex justify-content-end" xxs="3">
          <b-button
            class="mt-2"
            style="height: 71%"
            variant="outline-success"
            v-b-modal.propDescModal
          >
            <i class="iconsminds-pen"></i>Edit</b-button
          >
          <edit-desc-modal :item="property" @updateData="updateData" />
        </b-col>
      </b-row>
    </template>
    <template v-if="description === null">
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
          <b-col class="rowsLbl" cols="6">Title:</b-col>
          <b-col
            ><p class="rowsVal">
              {{ title }}
            </p></b-col
          >
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="6">Description:</b-col>
          <b-col
            ><p class="rowsVal">
              {{ description }}
            </p></b-col
          >
        </b-row>
      </b-card-text>
    </template>
  </b-card>
</template>

<script>
import UpdatePropertyDescriptionModal from "../Form/UpdatePropertyDescriptionModal.vue";

export default {
  name: "PropertyDescription",
  props: {
    property: Object,
  },
  components: {
    "edit-desc-modal": UpdatePropertyDescriptionModal,
  },
  data() {
    return {
      isHovering: false,
      title: "",
      description: "",
    };
  },
  watch: {
    property(value) {
      this.description = value.description;
      this.title = value.title;
    },
  },
  methods: {
    async updateData() {
      this.$emit("fetchProperty");
    },
  },
};
</script>

<style></style>
