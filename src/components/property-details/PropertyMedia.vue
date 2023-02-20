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
        <div class="m-5">
          <b-card-group deck>
            <b-card :img-src="imageList[0].url" no-body />
            <b-card :img-src="imageList[1].url" no-body />
            <b-card :img-src="imageList[1].url" no-body />
            <!-- <b-card-img> </b-card-img> -->
          </b-card-group>
          <div class="m-2 d-flex justify-content-center">
            <b-button pill><i class="iconsminds-arrow-back"></i></b-button>
            <b-button pill class="ml-2">
              <i class="iconsminds-arrow-forward"></i
            ></b-button>
          </div>
        </div>

        <!-- <b-col>
        
        </b-col>
        <b-col>

        </b-col>
        <b-col>

        </b-col> -->
        <!-- <b-carousel :interval="4000">
          <b-carousel-slide
            v-for="(image, index) in imageList"
            :key="index"
            :img-src="image.url"
            img-height="1024"
            img-width="480"
          >
          </b-carousel-slide>
        </b-carousel> -->
        <!-- <b-button>
          <i class="iconsminds-arrow-back"></i>
        </b-button> -->

        <!-- <b-img
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
        /> -->
        <!-- <b-button>
          <i class="iconsminds-arrow-forward"></i>
        </b-button> -->
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
      slide: 0,
      url1: "https://picsum.photos/1024/480/?image=52",
      url2: "https://picsum.photos/1024/480/?image=58",
      url3: "https://picsum.photos/1024/480/?image=55",
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
