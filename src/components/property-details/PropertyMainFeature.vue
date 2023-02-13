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
            :class="{ blink_btn: isHovering }"
            style="height: 71%; margin-top: 5%"
            variant="outline-success"
            v-b-modal.mainFeaturesModal
          >
            <i class="iconsminds-pen"></i>Edit</b-button
          >
          <edit-mFet-modal
            :item="property.mainFeature == null ? prObj : property.mainFeature"
          />
        </b-colxx>
      </b-row>
    </template>
    <template v-if="property.mainFeature == null">
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
          <b-col class="rowsLbl" cols="6">Rooms:</b-col>
          <b-col
            ><p class="rowsVal">
              {{ property.mainFeature.Rooms }}
            </p></b-col
          >
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="6">Living Space:</b-col>
          <b-col
            ><p class="rowsVal">
              {{ property.mainFeature.LeavingSpace }} &#13217;
            </p></b-col
          >
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="6">Street & Nr:</b-col>
          <b-col
            ><p class="rowsVal">
              {{ property.mainFeature.Street }}
            </p></b-col
          >
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="6">Zip Code & City:</b-col>
          <b-col
            ><p class="rowsVal">
              {{ property.mainFeature.ZipCodeOrCity }}
            </p></b-col
          >
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="6">Available:</b-col>
          <b-col
            ><p class="rowsVal">
              {{ property.mainFeature.Availibility }}
            </p></b-col
          >
        </b-row>
      </b-card-text>
    </template>
  </b-card>
</template>

<script>
import UpdatePropertyMainFeaturesModal from "../Form/UpdatePropertyMainFeaturesModal.vue";

export default {
  name: "PropertyMainFeature",
  components: {
    "edit-mFet-modal": UpdatePropertyMainFeaturesModal,
  },
  props: {
    property: Object,
  },
  data() {
    return {
      isHovering: false,

      // property component object decleration in case the object is empty
      prObj: {
        Rooms: 0,
        LeavingSpace: 0,
        Street: "",
        ZipCodeOrCity: "",
        Availibility: "",
        propertyId: this.property.id,
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
