<template>
  <b-card
    @click.prevent="toggleItem($event, data.id)"
    :class="{
      'd-flex flex-row': true,
      active: selectedItems.includes(data.id),
    }"
    no-body
  >
    <div class="pl-2 d-flex flex-grow-1 min-width-zero">
      <div
        class="
          card-body
          align-self-center
          d-flex
          flex-column flex-lg-row
          justify-content-between
          min-width-zero
          align-items-lg-center
        "
      >
        <router-link
          :to="`/app/second-menu/PropertyDetails?p=${data.id}`"
          class="w-10 text-small w-sm-100"
        >
          <p class="text-muted text-small mb-0 truncate">{{ data.id }}</p>
        </router-link>
        <router-link
          :to="`/app/second-menu/PropertyDetails?p=${data.id}`"
          class="w-15 text-small w-sm-100"
        >
          <img
            v-if="data.image.length"
            :src="imageUrl"
            class="card-img-top"
            style="height: 72px; width: 86px"
          />
          <img
            v-else
            class="card-img-top"
            style="height: 72px; width: 86px"
          />
        </router-link>
        <router-link
          :to="`/app/second-menu/PropertyDetails?p=${data.id}`"
          class="w-15 text-small w-sm-100"
        >
          <p class="text-small mb-0 truncate" style="color: #4556ac">
            {{ data.title }}
          </p>
        </router-link>
        <p class="mb-0 text-muted text-small w-15 w-sm-100">{{ data.type }}</p>
        <p
          v-if="data.address == null"
          class="mb-0 text-muted text-small w-15 w-sm-100"
        >
          N/A
        </p>
        <p
          v-else-if="data.address != null"
          class="mb-0 text-muted text-small w-15 w-sm-100"
        >
          {{ data.address }}
        </p>
        <p
          v-if="data.price == null"
          class="mb-0 text-muted text-small w-15 w-sm-100"
        >
          N/A
        </p>
        <p
          v-else-if="data.price != null"
          class="mb-0 text-muted text-small w-15 w-sm-100"
        >
          {{ data.price }}
        </p>
        <p
          v-if="data.agentAssigned == null"
          class="mb-0 text-small w-15 w-sm-100"
          style="color: #3757fa"
        >
          N/A
        </p>
        <p
          v-else-if="data.agentAssigned != null"
          class="mb-0 text-small w-15 w-sm-100"
          style="color: #3757fa"
        >
          {{ data.agentAssigned }}
        </p>
        <p
          v-if="data.updateAt == null"
          class="mb-0 text-muted text-small w-15 w-sm-100"
        >
          N/A
        </p>
        <p
          v-else-if="data.updateAt != null"
          class="mb-0 text-muted text-small w-15 w-sm-100"
        >
          {{ data.updateAt }}
        </p>
        <p
          v-if="data.createdDate == null"
          class="mb-0 text-muted text-small w-15 w-sm-100"
        >
          N/A
        </p>
        <p
          v-else-if="data.createdDate != null"
          class="mb-0 text-muted text-small w-15 w-sm-100"
        >
          {{ data.createdDate }}
        </p>
        <p class="mb-0 text-small w-15 w-sm-100" style="color: #3755f2">
          {{ data.user.roles }}
        </p>

        <div class="w-15 w-sm-100">
          <b-badge v-if="data.status == null || data.status == 'Offline' " pill variant="danger"
            >OFFLINE</b-badge
          >
          <b-badge v-else-if="data.status != null" pill variant="success">{{
            data.status
          }}</b-badge>
        </div>
        <!-- <div class="w-15 w-sm-100">
          <b-button v-b-modal.modalEditProp variant="primary" size="sm" 
            ><i class="iconsminds-file-edit" style="position: relative"></i
            >Edit</b-button
          >
        </div> -->
      </div>
      <div class="custom-control custom-checkbox pl-1 align-self-center pr-4">
        <b-form-checkbox
          :checked="selectedItems.includes(data.id)"
          class="itemCheck mb-0"
        />
      </div>
    </div>
    <!-- <edit-prop-modal :property="data" /> -->
  </b-card>
</template>

<script>
// import UpdatePropertyModal from "../Form/UpdatePropertyModal.vue";

export default {
  components: {
    // "edit-prop-modal": UpdatePropertyModal,
  },
  props: ["data", "selectedItems"],
  data() {
    return {
      imageUrl: "",
    };
  },
  mounted() {
    this.getImageUrl();
  },
  methods: {
    toggleItem(event, itemId) {
      this.$emit("toggle-item", event, itemId);
    },
    getImageUrl() {
      if (this.data.image.length > 0) {
        this.data.image.forEach((image) => {
          if (image.isMain) {
            this.imageUrl = image.url;
          }
        });
      }
    },
  },
};
</script>
