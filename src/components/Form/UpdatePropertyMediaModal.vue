<template>
  <div>
    <b-modal id="editMediaModal" ref="editPropertyMedia" title="Edit Property Media" modal-class="modal-right">
      <b-form class="av-tooltip tooltip-label-bottom">
        <b-form-group>
          <b-form-checkbox v-model="isMain" @change="clearAll">
            isMain
          </b-form-checkbox>
        </b-form-group>
        <b-form-group label="Drop Image or Document Here">
          <b-form-file v-if="isMain" v-model="file" ref="file-input"></b-form-file>
          <b-form-file v-else multiple v-model="files" ref="file-input"></b-form-file>
        </b-form-group>

        <b-form-group label="Image Position">
          <b-row>
            <b-col md="6">
              <b-form-input v-model="position" size="sm" />
            </b-col>
          </b-row>
        </b-form-group>
        <b-button class="mb-1" variant="primary" @click="addMedia">ADD</b-button>
      </b-form>
      <div v-if="listImages.length > 0">
        <h6>Uploaded Images and Documents</h6>
        <div v-for="(image, index) in listImages" :key="index">
          <b-row no-gutters>
            <b-col md="5">
              <b-card class="m-3" :img-src="image.url" img-left no-body />
            </b-col>
            <b-col md="7">
              <b-card-body>

                <b-row>
                  <span>Upload Time :</span>
                  <span>{{ timeFormat(image.uploadTime) }}</span>
                </b-row>
                <b-row>
                  <span>IsMain : </span>
                  <span><b-form-checkbox disabled v-model="image.isMain" /></span>
                </b-row>
                <b-row>
                  <span>IsActive : </span>
                  <b-form-checkbox disabled v-model="image.isActive" text-field="IsActive" />
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
          <div class="d-flex flex-row-reverse">
            <b-button variant="outline-danger" size="sm" class="mb-2 ml-2" @click="deleteMedia(image.id)"> <i
                class="simple-icon-trash"></i></b-button>
            <!-- <b-button variant="outline-danger" size="sm" class="mb-2"  > <i class="simple-icon-trash"></i></b-button> -->
          </div>

          <div class="separator mb-5"></div>
        </div>
      </div>
      <template slot="modal-footer">
        <b-button variant="outline-secondary" @click="hideModal('editPropertyMedia')">Cancel</b-button>
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
      files: [],
      file: null,
      position: 0,
    };
  },
  watch: {
    item(value) {
      this.listImages = value;
      console.log(value);
    },
    id(value) {
      this.propertyId = value;
    },
  },
  methods: {
    ...mapActions({
      addPropertyImages: "createPropertyImages",
      addMainImage: "createMainImage",
      deleteImage: "deletePropertyImage",
    }),
    async addMedia() {
      let formData = new FormData();


      if (this.isMain) {
        formData.append("file", this.file);
        const res = await this.addMainImage({
          pk: this.propertyId,
          config: this.config,
          payload: formData,
        });
        if (res.status == 201) {
          this.$notify("Success", "Media Added successfully", res.status, {
            type: "success",
            permanent: false,
            duration: 5000,
          });
          this.$emit("updateData");
          this.clearAll;
          // this.hideModal("editPropertyMedia");
        }
      } else {
        this.files.forEach((file) => {
          formData.append("propertyImages", file);
        });
        const res = await this.addPropertyImages({
          pk: this.propertyId,
          config: this.config,
          payload: formData,
        });
        if (res.status == 201) {
          this.$notify("Success", "Media Added successfully", res.status, {
            type: "success",
            permanent: false,
            duration: 5000,
          });
          this.$emit("updateData");
          this.clearAll;
          // this.hideModal("editPropertyMedia");
        }
      }
    },
    async deleteMedia(imageId) {
      const res = await this.deleteImage({
        pk: imageId,
        config: this.config,
      });
      console.log(res);
      if (res.status == 200) {
        this.$notify("Success", "Media deleted successfully", res.status, {
          type: "success",
          permanent: false,
          duration: 5000,
        });
        this.$emit("updateData");
        this.clearAll;
        // this.hideModal("editPropertyMedia");
      }
    },
    hideModal(refname) {
      this.$refs[refname].hide();
    },
    timeFormat(time) {
      let date = new Date(time);
      let dateTime =
        date.getDate() +
        "." +
        (date.getMonth() + 1) +
        "." +
        date.getFullYear() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes();
      return dateTime;
    },
    clearAll() {
      this.files = [];
      this.file = null;
    },
  },
  computed: {
    ...mapGetters(["config"]),
  },
};
</script>
