<template>
  <b-card
    @click.prevent="toggleItem($event, data.id)"
    :class="{
      'd-flex flex-row': true,
      active: selectedItems.includes(data.id),
    }"
    no-body
  >
    <router-link :to="`/app/second-menu/PropertyDetails?p=${data.id}`" class="d-flex">
      <img
        v-if="data.image.length != 0"
        :src="data.image"
        class="list-thumbnail responsive border-0 my-2 mx-1"
        :alt="data.title"
        style="height: 72px; width: 86px"
      />
      <img
        v-else
        class="list-thumbnail responsive border-0 my-2 mx-1"
        :alt="data.title"
      />
      <p class="mb-0 text-muted text-small w-15 w-sm-100">{{ data.id }}</p>
    </router-link>

    <div class="pl-2 d-flex flex-grow-1 min-width-zero">
      <div
        class="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center"
      >
        <router-link :to="`/app/second-menu/PropertyDetails?p=${data.id}`" class="d-flex">
          <!-- <img :src="" class="list-thumbnail responsive border-0" :alt="data.title" /> -->
        </router-link>
        <router-link :to="`/app/second-menu/PropertyDetails?p=${data.id}`" class="w-40 w-sm-100">
          <p class="text-small mb-0 truncate" style="color: #4556ac">
            {{ data.title }}
          </p>
        </router-link>
        <p class="mb-0 text-muted text-small w-15 w-sm-100">{{ data.type }}</p>
        <p v-if="data.address == null" class="mb-0 text-muted text-small w-15 w-sm-100">
          N/A
        </p>
        <p
          v-else-if="data.address != null"
          class="mb-0 text-muted text-small w-15 w-sm-100"
        >
          {{ data.address }}
        </p>
        <p v-if="data.price == null" class="mb-0 text-muted text-small w-15 w-sm-100">
          N/A
        </p>
        <p
          v-else-if="data.price != null"
          class="mb-0 text-muted text-small w-15 w-sm-100"
        >
          {{ data.price }}
        </p>
        <p
          v-if="data.agentId == null"
          class="mb-0 text-small w-15 w-sm-100"
          style="color: #3757fa"
        >
          N/A
        </p>
        <p
          v-else-if="data.agentId != null"
          class="mb-0 text-small w-15 w-sm-100"
          style="color: #3757fa"
        >
          {{ data.agent.firstName }} {{ data.agent.lastName }}
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
        <div class="ml-5 w-15 w-sm-100">
          <b-badge v-if="data.status == null" pill variant="danger">OFFLINE</b-badge>
          <b-badge v-else-if="data.status != null" pill variant="success">{{
            data.status
          }}</b-badge>
        </div>
        <div class="ml-5 w-15 w-sm-100">
          <b-button v-b-modal.modalEditProp variant="primary" size="sm"
            ><i class="iconsminds-file-edit" style="position: relative"></i>Edit</b-button
          >
          <edit-prop-modal :property="data" />
        </div>
      </div>
      <div class="custom-control custom-checkbox pl-1 align-self-center pr-4">
        <b-form-checkbox
          :checked="selectedItems.includes(data.id)"
          class="itemCheck mb-0"
        />
      </div>
    </div>
  </b-card>
</template>

<script>
import UpdatePropertyModal from "../Form/UpdatePropertyModal.vue";

export default {
  components: {
    "edit-prop-modal": UpdatePropertyModal,
  },
  props: ["data", "selectedItems"],
  methods: {
    toggleItem(event, itemId) {
      this.$emit("toggle-item", event, itemId);
    },
  },
};
</script>
