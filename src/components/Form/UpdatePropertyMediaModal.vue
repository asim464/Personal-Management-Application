<template>
  <div>
    <b-modal id="editMediaModal" ref="mainFeaturesModal" title="Edit Main Features" modal-class="modal-right">
      <b-form class="av-tooltip tooltip-label-bottom">
        <b-form-group>
          <b-form-checkbox v-model="isMain"> isMain </b-form-checkbox>
        </b-form-group>
        <b-form-group label="Drop Image or Document Here">
          <b-form-file v-model="file" ref="file-input"></b-form-file>
        </b-form-group>
      </b-form>
      <b-form-group label="Image Position">
        <b-row>
          <b-col md="6">
            <b-form-input v-model="position" type="Number" size="sm" />
          </b-col>
        </b-row>
      </b-form-group>
      <div v-if="listImages.length > 0">
        <h6>Uploaded Images and Documents</h6>
        <div v-for="(image, index) in listImages" :key="index">
          <b-row no-gutters>
            <b-col md="6">
              <b-card class="m-3" :img-src="image.url" img-left no-body />
            </b-col>
            <b-col md="6">
              <b-card-body>
                <b-row>
                  Upload Time :
                </b-row>
                <b-row>
                  Upload Time :
                </b-row>
                <b-row>
                  Upload Time :
                </b-row>
                <!-- <b-form class="av-tooltip tooltip-label-bottom">
                  <b-form-group>
                    <b-form-checkbox v-model="isMain"> isMain </b-form-checkbox>
                    <b-form-checkbox v-model="isActive">
                      isActive
                    </b-form-checkbox>
                  </b-form-group>
                </b-form> -->
              </b-card-body>
            </b-col>
          </b-row>
        </div>
      </div>
      <template slot="modal-footer">
        <b-button variant="outline-secondary" @click="hideModal('mainFeaturesModal')">Cancel</b-button>
        <b-button variant="primary" @click.prevent="update()" class="mr-1">Save</b-button>
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
      listImages: [],
      propertyId: 0,
      isMain: false,
      isActive: false,
      file: null,
      position: 0,
    };
  },
  watch: {
    item(value) {
      this.listImages = value;
    },
    id(value) {
      this.propertyId = value;
    },
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
