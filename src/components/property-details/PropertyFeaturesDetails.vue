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
            :class="{ blink_btn: isHovering }"
            style="height: min-content; margin-top: 5%"
            variant="outline-success"
            v-b-modal.propFurnishingEditModal
          >
            <i class="iconsminds-pen"></i>Edit</b-button
          >
          <edit-furnishing-modal
            :item="furnishingFeature"
            @updateData="updateData"
          />
        </b-col>
      </b-row>
    </template>
    <template v-if="furnishingFeature === false">
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
          <b-col class="rowsLbl" cols="3">Wheelchair access</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  furnishingFeature.wheelChairAcess == true
                    ? {
                        color: 'green',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      }
                    : {
                        color: 'gray',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      },
                ]"
              ></i></p
          ></b-col>
          <b-col class="rowsLbl" cols="3">Pets Allowed</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  furnishingFeature.petsAllowed == true
                    ? {
                        color: 'green',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      }
                    : {
                        color: 'gray',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      },
                ]"
              ></i></p
          ></b-col>
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="3">Balcony</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  furnishingFeature.balcony == true
                    ? {
                        color: 'green',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      }
                    : {
                        color: 'gray',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      },
                ]"
              ></i></p
          ></b-col>
          <b-col class="rowsLbl" cols="3">Parking Place</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  furnishingFeature.parkingPlace == true
                    ? {
                        color: 'green',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      }
                    : {
                        color: 'gray',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      },
                ]"
              ></i></p
          ></b-col>
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="3">Fireplace</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  furnishingFeature.Fireplace == true
                    ? {
                        color: 'green',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      }
                    : {
                        color: 'gray',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      },
                ]"
              ></i></p
          ></b-col>
          <b-col class="rowsLbl" cols="3">View</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  furnishingFeature.View == true
                    ? {
                        color: 'green',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      }
                    : {
                        color: 'gray',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      },
                ]"
              ></i></p
          ></b-col>
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="3">Minergie Construction</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  furnishingFeature.minergieConstruction == true
                    ? {
                        color: 'green',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      }
                    : {
                        color: 'gray',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      },
                ]"
              ></i></p
          ></b-col>
          <b-col class="rowsLbl" cols="3">New Building</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  furnishingFeature.newBuilding == true
                    ? {
                        color: 'green',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      }
                    : {
                        color: 'gray',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      },
                ]"
              ></i></p
          ></b-col>
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="3">Child Friendly</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  furnishingFeature.childFriendly == true
                    ? {
                        color: 'green',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      }
                    : {
                        color: 'gray',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      },
                ]"
              ></i></p
          ></b-col>
          <b-col class="rowsLbl" cols="3">Smoking Prohibited</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  furnishingFeature.smokingProhibited == true
                    ? {
                        color: 'green',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      }
                    : {
                        color: 'gray',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      },
                ]"
              ></i></p
          ></b-col>
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="3">Garage</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  furnishingFeature.garage == true
                    ? {
                        color: 'green',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      }
                    : {
                        color: 'gray',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      },
                ]"
              ></i></p
          ></b-col>
          <b-col class="rowsLbl" cols="3">Elevator</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  furnishingFeature.elevator == true
                    ? {
                        color: 'green',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      }
                    : {
                        color: 'gray',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      },
                ]"
              ></i></p
          ></b-col>
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="3">Private Washing Machine</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  furnishingFeature.privateWashingMachine == true
                    ? {
                        color: 'green',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      }
                    : {
                        color: 'gray',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      },
                ]"
              ></i></p
          ></b-col>
          <b-col class="rowsLbl" cols="3">Quiet Neighbourhood</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  furnishingFeature.quiteNeighbpurhood == true
                    ? {
                        color: 'green',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      }
                    : {
                        color: 'gray',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      },
                ]"
              ></i></p
          ></b-col>
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="3">Minergie Certified</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  furnishingFeature.minergieCertified == true
                    ? {
                        color: 'green',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      }
                    : {
                        color: 'gray',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      },
                ]"
              ></i></p
          ></b-col>
          <b-col class="rowsLbl" cols="3">Old Building</b-col>
          <b-col
            ><p class="rowsVal">
              <i
                class="simple-icon-check"
                v-bind:style="[
                  furnishingFeature.oldBuilding == true
                    ? {
                        color: 'green',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      }
                    : {
                        color: 'gray',
                        'font-size': 'x-large',
                        'font-weight': '900',
                      },
                ]"
              ></i></p
          ></b-col>
        </b-row>
      </b-card-text>
    </template>
  </b-card>
</template>

<script>
import UpdatePropertyFeaturesNFurnishingModal from "../Form/UpdatePropertyFeaturesNFurnishingModal.vue";

export default {
  name: "PropertyFeatureDetails",
  components: {
    "edit-furnishing-modal": UpdatePropertyFeaturesNFurnishingModal,
  },
  props: {
    property: Object,
  },
  data() {
    return {
      isHovering: false,
      furnishingFeature: {},
    };
  },
  watch: {
    property(value) {
      this.furnishingFeature = value.furnishingFeature;
    },
  },
  methods: {
    async updateData(){
      this.$emit("fetchProperty");
    }
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
