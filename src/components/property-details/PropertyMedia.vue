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
            <i class="iconsminds-information"></i>Photos and Documents
          </h3>
        </b-col>
        <b-col class="d-flex justify-content-end" xxs="3">
          <b-button
            class="mt-2"
            style="height: min-content"
            variant="outline-success"
            v-b-modal.editMediaModal
          >
            <i class="iconsminds-pen"></i>Edit</b-button
          >
          <edit-property-media
            :item="imageList"
            :id="propertyId"
            @updateData="updateData"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-button>
          <i class="iconsminds-arrow-back"></i>
        </b-button>

        <b-img
          v-if="length > 0"
          :src="imageList[i].url"
          class="card-img-top m-2"
          style="height: 150px; width: 250px"
        />
        <b-img
          v-if="length > 0"
          :src="imageList[i].url"
          class="card-img-top m-2"
          style="height: 150px; width: 250px"
        />
        <b-img
          v-if="length > 0"
          :src="imageList[i].url"
          class="card-img-top m-2"
          style="height: 150px; width: 250px"
        />
        <b-button>
          <i class="iconsminds-arrow-forward"></i>
        </b-button>

      </b-row>
    </template>
  </b-card>
</template>

  <script>
import UpdatePropertyMediaModal from "../Form/UpdatePropertyMediaModal.vue";
export default {
  name: "PropertyMedia",
  components: {
    "edit-property-media": UpdatePropertyMediaModal,
  },
  props: {
    property: Object,
  },
  data() {
    return {
      imageList: [],
      length: 0,
      propertyId: 0,
      i: 0,
      j: 1,
      k: 2,
    };
  },
  watch: {
    property(value) {
      this.imageList = value.image;
      this.propertyId = value.id;
      this.length = this.imageList.length;
      console.log(this.imageList);
      console.log(this.length);
      console.log(this.propertyId);
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
