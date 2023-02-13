<template>
  <b-card
    @click.prevent="toggleItem($event, data.id)"
    :class="{ active: selectedItems.includes(data.id) }"
    no-body
  >
    <div class="position-relative">
      <router-link :to="`/app/second-menu/PropertyDetails?p=${data.id}`" class="w-40 w-sm-100">
        <img
          v-if="!data.image.length"
          :src="data.image"
          class="ml-4 mt-2 card-img-top"
          :alt="data.title"
          style="height: 72px; width: 86px"
        />
        <img v-else class="card-img-top ml-4 mt-2" :alt="data.title" />
      </router-link>
      <b-badge
        v-if="data.status == null"
        pill
        variant="danger"
        class="position-absolute badge-top-right"
        style="margin-right: 15px"
        >OFFLINE</b-badge
      >
      <b-badge
        v-else-if="data.status != null"
        pill
        variant="success"
        class="position-absolute badge-top-left"
        >{{ data.status }}</b-badge
      >
    </div>
    <div class="d-flex flex-row-reverse m-1">
      <b-button v-b-modal.modalEditProp variant="primary" size="sm"
        ><i class="iconsminds-file-edit" style="position: relative"></i>Edit</b-button
      >
      <edit-prop-modal :property="data" />
    </div>
    <b-card-body>
      <b-row>
        <b-colxx xxs="2">
          <b-form-checkbox
            :checked="selectedItems.includes(data.id)"
            class="itemCheck mb-0"
          />
        </b-colxx>
        <b-colxx xxs="10" class="mb-3">
          <router-link :to="`?p=${data.id}`" class="w-40 w-sm-100">
            <h6 class="mb-4 my-1 card-subtitle" style="color: #4556ac">
              {{ data.title }}
            </h6>
          </router-link>
          <p class="text-muted text-small mb-0 my-1 font-weight-light card-text">
            Created At: {{ data.createdDate }}
          </p>
          <p class="text-muted text-small mb-0 my-1 font-weight-light card-text">
            Last Updated: {{ data.updateAt }}
          </p>
        </b-colxx>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>
import UpdatePropertyModal from "../Form/UpdatePropertyModal.vue";

export default {
  props: ["data", "selectedItems"],
  components: {
    "edit-prop-modal": UpdatePropertyModal,
  },
  methods: {
    toggleItem(event, itemId) {
      this.$emit("toggle-item", event, itemId);
    },
  },
};
</script>
