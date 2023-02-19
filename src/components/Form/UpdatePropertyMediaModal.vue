<template>
  <div>
    <b-modal
      id="editMediaModal"
      ref="mainFeaturesModal"
      title="Edit Main Features"
      modal-class="modal-right"
    >
      <b-form class="av-tooltip tooltip-label-bottom">
        <b-form-group>
          <b-form-checkbox-group>
            <b-form-checkbox>
              isMain
            </b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <b-form-group label="Living space">
          <b-input-group>
            <template #append>
              <b-input-group-text>&#13217;</b-input-group-text>
            </template>
            <b-form-input
              v-model="LeavingSpace"
              placeholder="Enter the total living space size"
              type="number"
              min="1"
              :rows="2"
              :max-rows="2"
            />
          </b-input-group>
        </b-form-group>
        <b-form-group label="Street &amp; Nr" class="has-float-label">
          <b-form-input
            v-model="Street"
            placeholder="Enter your street number"
            type="text"
            :rows="2"
            :max-rows="2"
          />
        </b-form-group>
        <b-form-group label="Zip code &amp; City" class="has-float-label">
          <b-form-input
            v-model="ZipCodeOrCity"
            placeholder="Enter your zip code followed by your city name"
            type="text"
            :rows="2"
            :max-rows="2"
          />
          <!-- <b-form-invalid-feedback>
            Data entry format example:0000 Brussels (i.e.,zip_code city).
          </b-form-invalid-feedback> -->
        </b-form-group>
        <b-form-group label="Available">
          <b-form-radio-group
            stacked
            class="pt-2"
            v-model="Availibility"
            :options="availList"
          />
        </b-form-group>
      </b-form>

      <template slot="modal-footer">
        <b-button
          variant="outline-secondary"
          @click="hideModal('mainFeaturesModal')"
          >Cancel</b-button
        >
        <b-button variant="primary" @click.prevent="update()" class="mr-1"
          >Save</b-button
        >
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "UpdatePropertyMainFeaturesModal",
  props: {
    item: Array,
    id: Number,
  },
  data() {
    return {
      last_value: 0,
      validation: {
        min: 0,
        max: 10,
        decimal: 10,
      },
      Rooms: 0,
      LeavingSpace:0,
      Street: '',
      ZipCodeOrCity: '',
      Availibility: '',

      availList: ["Immediatly", "By Agreement", "Date"],
    };
  },
  methods: {
    ...mapActions({
      updatePropertyFeatures: "updatePropertyMainFeature",
    }),
    async update() {

      let mainFeatures = {
        Rooms: Number(this.Rooms),
        LeavingSpace: Number(this.LeavingSpace),
        Street: this.Street,
        ZipCodeOrCity: this.ZipCodeOrCity,
        Availibility: this.Availibility,
      };
      console.log(mainFeatures);

      const res = await this.updatePropertyFeatures({
        pk: this.id,
        payload: mainFeatures,
        config: this.config,
      });

      if (res.status == 200 || res.status == 201) {
        this.$notify(
          "Success",
          "Main features updated successfully",
          res.status,
          {
            type: "success",
            permanent: false,
            duration: 5000,
          }
        );
         this.$emit("updateData");
        this.hideModal("mainFeaturesModal");
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
