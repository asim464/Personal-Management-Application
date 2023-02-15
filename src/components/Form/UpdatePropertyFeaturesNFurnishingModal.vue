<template>
  <div>
    <b-modal
      id="propFurnishingEditModal"
      ref="propFurnishingEditModal"
      title="Edit Features and Furnishings"
      modal-class="modal-right"
    >
      <b-form class="av-tooltip tooltip-label-bottom">
        <b-row>
          <b-col cols="6">
            <b-form-group label="Wheelchair access">
              <b-form-select
                v-model="item.wheelChairAcess"
                :options="availList"
                :rows="2"
                :max-rows="2"
              >
                <template #first>
                  <b-form-select-option value="" default disabled
                    >-- Please select an option --</b-form-select-option
                  >
                </template>
              </b-form-select>
            </b-form-group>
            <b-form-group label="Pets Allowed">
              <b-form-select
                v-model="item.petsAllowed"
                :options="availList"
                :rows="2"
                :max-rows="2"
              >
                <template #first>
                  <b-form-select-option value="" default disabled
                    >-- Please select an option --</b-form-select-option
                  >
                </template>
              </b-form-select>
            </b-form-group>
            <b-form-group label="Balcony">
              <b-form-select
                v-model="item.balcony"
                :options="availList"
                :rows="2"
                :max-rows="2"
              >
                <template #first>
                  <b-form-select-option value="" default disabled
                    >-- Please select an option --</b-form-select-option
                  >
                </template>
              </b-form-select>
            </b-form-group>
            <b-form-group label="Parking Place">
              <b-form-select
                v-model="item.parkingPlace"
                :options="availList"
                :rows="2"
                :max-rows="2"
              >
                <template #first>
                  <b-form-select-option value="" default disabled
                    >-- Please select an option --</b-form-select-option
                  >
                </template>
              </b-form-select>
            </b-form-group>
            <b-form-group label="Fireplace">
              <b-form-select
                v-model="item.Fireplace"
                :options="availList"
                :rows="2"
                :max-rows="2"
              >
                <template #first>
                  <b-form-select-option value="" default disabled
                    >-- Please select an option --</b-form-select-option
                  >
                </template>
              </b-form-select>
            </b-form-group>
            <b-form-group label="View">
              <b-form-select
                v-model="item.View"
                :options="availList"
                :rows="2"
                :max-rows="2"
              >
                <template #first>
                  <b-form-select-option value="" default disabled
                    >-- Please select an option --</b-form-select-option
                  >
                </template>
              </b-form-select>
            </b-form-group>
            <b-form-group label="Minergie Construction">
              <b-form-select
                v-model="item.minergieConstruction"
                :options="availList"
                :rows="2"
                :max-rows="2"
              >
                <template #first>
                  <b-form-select-option value="" default disabled
                    >-- Please select an option --</b-form-select-option
                  >
                </template>
              </b-form-select>
            </b-form-group>
            <b-form-group label="New Building">
              <b-form-select
                v-model="item.newBuilding"
                :options="availList"
                :rows="2"
                :max-rows="2"
              >
                <template #first>
                  <b-form-select-option value="" default disabled
                    >-- Please select an option --</b-form-select-option
                  >
                </template>
              </b-form-select>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group label="Child Friendly">
              <b-form-select
                v-model="item.childFriendly"
                :options="availList"
                :rows="2"
                :max-rows="2"
              >
                <template #first>
                  <b-form-select-option value="" default disabled
                    >-- Please select an option --</b-form-select-option
                  >
                </template>
              </b-form-select>
            </b-form-group>
            <b-form-group label="Smoking Prohibited">
              <b-form-select
                v-model="item.smokingProhibited"
                :options="availList"
                :rows="2"
                :max-rows="2"
              >
                <template #first>
                  <b-form-select-option value="" default disabled
                    >-- Please select an option --</b-form-select-option
                  >
                </template>
              </b-form-select>
            </b-form-group>
            <b-form-group label="Garage">
              <b-form-select
                v-model="item.garage"
                :options="availList"
                :rows="2"
                :max-rows="2"
              >
                <template #first>
                  <b-form-select-option value="" default disabled
                    >-- Please select an option --</b-form-select-option
                  >
                </template>
              </b-form-select>
            </b-form-group>
            <b-form-group label="Elevator">
              <b-form-select
                v-model="item.elevator"
                :options="availList"
                :rows="2"
                :max-rows="2"
              >
                <template #first>
                  <b-form-select-option value="" default disabled
                    >-- Please select an option --</b-form-select-option
                  >
                </template>
              </b-form-select>
            </b-form-group>
            <b-form-group label="Private Washing Machine">
              <b-form-select
                v-model="item.privateWashingMachine"
                :options="availList"
                :rows="2"
                :max-rows="2"
              >
                <template #first>
                  <b-form-select-option value="" default disabled
                    >-- Please select an option --</b-form-select-option
                  >
                </template>
              </b-form-select>
            </b-form-group>
            <b-form-group label="Quiet Neighbourhood">
              <b-form-select
                v-model="item.quiteNeighbpurhood"
                :options="availList"
                :rows="2"
                :max-rows="2"
              >
                <template #first>
                  <b-form-select-option value="" default disabled
                    >-- Please select an option --</b-form-select-option
                  >
                </template>
              </b-form-select>
            </b-form-group>
            <b-form-group label="Minergie Certified">
              <b-form-select
                v-model="item.minergieCertified"
                :options="availList"
                :rows="2"
                :max-rows="2"
              >
                <template #first>
                  <b-form-select-option value="" default disabled
                    >-- Please select an option --</b-form-select-option
                  >
                </template>
              </b-form-select>
            </b-form-group>
            <b-form-group label="Old Building">
              <b-form-select
                v-model="item.oldBuilding"
                :options="availList"
                :rows="2"
                :max-rows="2"
              >
                <template #first>
                  <b-form-select-option value="" default disabled
                    >-- Please select an option --</b-form-select-option
                  >
                </template>
              </b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
      </b-form>

      <template slot="modal-footer">
        <b-button
          variant="outline-secondary"
          @click="hideModal('propFurnishingEditModal')"
          >Cancel</b-button
        >
        <b-button
          variant="primary"
          @click.prevent="updateFurnishingFeatures()"
          class="mr-1"
          >Save</b-button
        >
      </template>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import { getCurrentUser } from "../../utils";
import { apiUrl } from "../../constants/config";

export default {
  name: "UpdatePropertyFurnishingNFeaturesModal",
  props: {
    item: {
      id: 0,
      wheelChairAcess: false,
      petsAllowed: false,
      balcony: false,
      parkingPlace: false,
      Fireplace: false,
      View: false,
      minergieConstruction: false,
      newBuilding: false,
      childFriendly: false,
      smokingProhibited: false,
      garage: false,
      elevator: false,
      privateWashingMachine: false,
      quiteNeighbpurhood: false,
      minergieCertified: false,
      oldBuilding: false,
      createdDate: "",
      updateAt: "",
      propertyId: 0,
    },
  },
  data() {
    return {
      availList: [
        { value: true, text: "True" },
        { value: false, text: "False" },
      ],
    };
  },
  methods: {
    async updateFurnishingFeatures() {
      var features = {
        wheelChairAcess: this.item.wheelChairAcess,
        petsAllowed: this.item.petsAllowed,
        balcony: this.item.balcony,
        parkingPlace: this.item.parkingPlace,
        Fireplace: this.item.Fireplace,
        View: this.item.View,
        minergieConstruction: this.item.minergieConstruction,
        newBuilding: this.item.newBuilding,
        childFriendly: this.item.childFriendly,
        smokingProhibited: this.item.smokingProhibited,
        garage: this.item.garage,
        elevator: this.item.elevator,
        privateWashingMachine: this.item.privateWashingMachine,
        quiteNeighbpurhood: this.item.quiteNeighbpurhood,
        minergieCertified: this.item.minergieCertified,
        oldBuilding: this.item.oldBuilding,
      };
      var user = getCurrentUser();
      var config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      await axios
        .post(
          apiUrl + "property/createFurnishingFeature/" + this.item.propertyId,
          features,
          config
        )
        .then((res) => {
          if (res.status == 201) {
            this.$notify(
              "Success",
              "Property furnishing features updated successfully!",
              "Code: " + res.status + ", Message:" + res.statusText,
              {
                permanent: false,
                duration: 1000,
                type: "success",
              }
            );
            this.updateView();
            this.hideModal("propFurnishingEditModal");
          } else {
            this.$notify(
              "Error",
              "Property furnishing features could not be updated!",
              "Code: " + res.status + ", Message:" + res.statusText,
              {
                permanent: false,
                duration: 5000,
                type: "error",
              }
            );
          }
        })
        .catch((err) => {
          this.$notify("Error", "Property furnishing features updation error!", err, {
            permanent: false,
            duration: 5000,
            type: "error",
          });
        });
    },
    async updateView() {
      let uri = window.location.search.substring(1);
      let id = new URLSearchParams(uri);
      var propertyID = id.get("p");

      var user = getCurrentUser();
      var config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      this.details = await axios
        .get(apiUrl + "property/" + propertyID, config)
        .then((res) => {
          if (res.status == 200) {
            this.details = res.data;
            this.$store.dispatch("setSelectedProp", this.details);
            this.$notify("success", "Property data fetched successfully", res.status, {
              type: "success",
              duration: 5000,
              permanent: false,
            });
          } else {
            this.$notify("success", "Property data could not be fetched", res.status, {
              type: "success",
              duration: 5000,
              permanent: false,
            });
          }
        })
        .catch((err) => {
          console.log("error");
        });
    },
    hideModal(refname) {
      this.$refs[refname].hide();
    },
  },
};
</script>
