<template>
  <div>
    <b-modal
      id="propertyDetailsModal"
      ref="propertyDetailsModal"
      title="Edit Details"
      modal-class="modal-right"
    >
      <b-form>
        <b-form-group label="Floor">
          <b-form-input
            v-model="item.Floors"
            type="number"
            min="0"
            :rows="2"
            :max-rows="2"
          />
        </b-form-group>
        <b-form-group label="Number of floors">
          <b-form-input
            v-model="item.numberOfFloors"
            type="number"
            min="0"
            :rows="2"
            :max-rows="2"
          />
        </b-form-group>
        <b-form-group label="Lot size">
          <b-input-group>
            <template #append>
              <b-input-group-text>&#13217;</b-input-group-text>
            </template>
            <b-form-input
              v-model="item.lotDetailSizeInM2"
              type="number"
              min="0"
              :rows="2"
              :max-rows="2"
            />
          </b-input-group>
        </b-form-group>
        <b-form-group label="Room height">
          <b-input-group>
            <template #append>
              <b-input-group-text>m</b-input-group-text>
            </template>
            <b-form-input
              v-model="item.roomsHeight"
              type="number"
              min="0"
              :rows="2"
              :max-rows="2"
            />
          </b-input-group>
        </b-form-group>
        <b-form-group label="Year built">
          <b-form-input
            v-model="item.yearBuilt"
            type="number"
            min="1900"
            step="1"
            :rows="2"
            :max-rows="2"
          />
        </b-form-group>
        <b-form-group label="Floor space">
          <b-input-group>
            <template #append>
              <b-input-group-text>&#13217;</b-input-group-text>
            </template>
            <b-form-input
              v-model="item.floorSpaceM2"
              type="number"
              min="0"
              :rows="2"
              :max-rows="2"
            />
          </b-input-group>
        </b-form-group>
        <b-form-group label="Volume">
          <b-input-group>
            <template #append>
              <b-input-group-text>&#x33A5;</b-input-group-text>
            </template>
            <b-form-input
              v-model="item.volumeInM3"
              type="number"
              min="0"
              :rows="2"
              :max-rows="2"
            />
          </b-input-group>
        </b-form-group>
        <b-form-group label="Last renovation">
          <b-form-input
            v-model="item.lastRenovation"
            type="number"
            min="1800"
            step="1"
            :rows="2"
            :max-rows="2"
          />
        </b-form-group>
        <!-- <b-form-group label="Last renovation">
          <vuejs-datepicker
            v-model="defaultDate"
            :format="DatePickerFormat"
            minimum-view="year"
            name="datepicker"
            input-class="input-dt"
            wrapper-class="input-box"
          ></vuejs-datepicker>
        </b-form-group> -->
      </b-form>

      <template slot="modal-footer">
        <b-button variant="outline-secondary" @click="hideModal('propertyDetailsModal')"
          >Cancel</b-button
        >
        <b-button variant="primary" @click.prevent="updateDetails()" class="mr-1"
          >Save</b-button
        >
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import vuejsDatepicker from "vuejs-datepicker";

export default {
  name: "UpdatePropertyDetailsModal",
  props: {
    item: Object,
  },
  components: {
    "vuejs-datepicker": vuejsDatepicker,
  },
  data() {
    return {
      // last_value: 0,
      // validation: [
      //   {
      //     min: 0,
      //     max: 10,
      //     decimal: 10,
      //   },
      //   {
      //     min: 1000,
      //     max: 3000,
      //     decimal: 10,
      //   },
      // ],
      // defaultDate: "2023-01-01",
      // DatePickerFormat: "yyyy",
    };
  },
  methods: {
    ...mapActions({
      updatePropertyDetails: "updatePropertyDetails",
    }),
    async updateDetails() {
      // let date = this.defaultDate.getFullYear();
      // this.item.lastRenovation = Number(date);
      let features = {
        Floors: Number(this.item.Floors),
        numberOfFloors: Number(this.item.numberOfFloors),
        lotDetailSizeInM2: Number(this.item.lotDetailSizeInM2),
        roomsHeight: Number(this.item.roomsHeight),
        yearBuilt: Number(this.item.yearBuilt),
        floorSpaceM2: Number(this.item.floorSpaceM2),
        volumeInM3: Number(this.item.volumeInM3),
        lastRenovation: Number(this.item.lastRenovation),
      };
      console.log(features);

      const res = await this.updatePropertyDetails({
        pk: this.item.propertyId,
        payload: features,
        config: this.config,
      });

      if (res.status == 200 || res.status == 201) {
        this.$notify(
          "Success",
          "Property details updated successfully!",
          "Code: " + res.status + ", Message:" + res.statusText,
          {
            permanent: false,
            duration: 1000,
            type: "success",
          }
        );
        this.$emit("updateData");
        this.hideModal("propertyDetailsModal");
      } else {
        this.$notify(
          "Error",
          "Property details could not be updated!",
          "Code: " + res.status + ", Message:" + res.statusText,
          {
            permanent: false,
            duration: 5000,
            type: "error",
          }
        );
        this.$emit("updateData");
      }
    },
    hideModal(refname) {
      this.$refs[refname].hide();
    },
    // format_number(e) {
    //   if (e > this.validation[0].max) {
    //     return this.validation[0].max;
    //   } else if (e < this.validation[0].min) {
    //     return this.validation[0].min;
    //   } else if (
    //     Math.round(e * this.validation[0].decimal) / this.validation[0].decimal !=
    //     e
    //   ) {
    //     return this.last_value;
    //   } else {
    //     this.last_value = e;
    //     return e;
    //   }
    // },
  },
  computed: {
    ...mapGetters(["config"]),
  },
};
</script>

<style>
.input-dt {
  min-width: max-content;
  width: 100%;
  padding: 5px;
}
</style>
