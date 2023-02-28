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
            Status and Publication
          </h3>
        </b-col>
        <b-col class="d-flex justify-content-end" xxs="3">
          <b-button
            class="mt-2"
            style="height: min-content"
            variant="outline-success"
            v-b-modal.editStatusPublicationModal
          >
            <i class="iconsminds-pen"></i>Edit</b-button
          >
        </b-col>
        <edit-stat-modal :item="stats" @updateData="updateData" />
      </b-row>
    </template>
    <template v-if="publicationsList === []">
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
        <b-row v-for="data in publicationsList" :key="data.id">
          <b-col
            ><p>Publication on {{ data.hostname }}</p></b-col
          ><b-col
            ><p>
              <i
                class="simple-icon-check"
                style="color: green; font-size: large; font-weight: 700"
              /></p
          ></b-col>
        </b-row>
        <b-row>
          <b-col><p>Status</p></b-col>
          <b-col
            ><p>
              <b-button v-if="property.status == 'Online'" variant="outline-success" disabled>{{
                property.status
              }}</b-button>
              <b-button v-else-if="property.status == 'Offline'" variant="outline-danger" disabled>{{
                property.status
              }}</b-button>
            </p></b-col
          >
        </b-row>
      </b-card-text>
    </template>
  </b-card>
</template>

<script>
import { mapGetters } from "vuex";
import UpdateStatusPublicationModal from '../Form/UpdateStatusPublicationModal.vue';

export default {
  name: "PropertyStatusPublication",
  components: {
    "edit-stat-modal": UpdateStatusPublicationModal,
  },
  props: {
    property: Object,
  },
  data() {
    return {
      isHovering: false,
      stats: {
        setting: [],
        status: Boolean,
      }
    };
  },
  watch: {
    property(value) {
      this.stats.status = value.status;
    }
  },
  mounted() {
    this.stats.setting = this.publicationsList;
  },
  methods: {
    async updateData(){
      this.$emit("fetchProperty");
    }
  },
  computed: {
    ...mapGetters(["publicationsList"]),
  },
};
</script>

<style></style>
