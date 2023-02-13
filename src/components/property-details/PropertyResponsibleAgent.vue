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
            <i class="iconsminds-project"></i>Responsible Agent
          </h3>
        </b-col>
        <b-col class="d-flex justify-content-end" xxs="3">
          <b-button
            class="mt-2"
            style="height: 71%"
            variant="outline-success"
            v-b-modal.costsModal
          >
            <i class="iconsminds-pen"></i>Edit</b-button
          >
        </b-col>
      </b-row>
    </template>
    <template v-if="property.price === null">
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
          <b-col class="rowsLbl" cols="6">Agent:</b-col>
          <b-col
            ><p class="rowsVal">{{ property.agentAssigned }}</p></b-col
          >
        </b-row>
      </b-card-text>
    </template>
  </b-card>
</template>

<script>
export default {
  name: "PropertyResponsibleAgent",
  props: {
    property: Object,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style></style>
