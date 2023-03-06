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
        <b-button variant="primary" @click.prevent="update()" class="mr-1">Save</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "UpdatePropertyFurnishingNFeaturesModal",
  props: {
    item: Object,
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
    ...mapActions({
      updatePropFurnishing: "updatePropertyFeatureNFurnishing",
    }),
    async update() {
      let features = {
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
      console.log(features);
      console.log(this.item.propertyId);

      try {
        const res = await this.updatePropFurnishing({
          pk: this.item.propertyId,
          payload: features,
          config: this.config,
        });

        if (res.status == 201 || res.status == 200) {
          this.$notify(
            "Success",
            "Property furnishing features updated successfully!",
            "Code: " + res.status + ", Message:" + res.statusText,
            {
              permanent: false,
              duration: 5000,
              type: "success",
            }
          );
          this.$emit("updateData");
          this.hideModal("propFurnishingEditModal");
        }
      } catch (err) {
        this.$notify(
          "Error",
          "Property furnishing features could not be updated!",
          "Code: " + res.status + ", Message:" + err,
          {
            permanent: false,
            duration: 5000,
            type: "error",
          }
        );
      }
    },
    hideModal(refname) {
      this.$refs[refname].hide();
    },
  },
  computed: {
    ...mapGetters(["config"]),
  },
};
</script>
