<template>
  <div>
    <b-modal
      id="propDescModal"
      ref="propDescModal"
      title="Edit Main Features"
      modal-class="modal-right"
    >
      <b-form class="av-tooltip tooltip-label-bottom">
        <b-form-group label="Title" class="has-float-label">
          <b-form-input
            v-model="item.title"
            placeholder="Enter the title"
            type="text"
            :rows="2"
            :max-rows="2"
          />
        </b-form-group>
        <b-form-group label="Description">
          <b-form-textarea
            type="text"
            placeholder="Enter the description"
            v-model="item.description"
          />
        </b-form-group>
      </b-form>

      <template slot="modal-footer">
        <b-button variant="outline-secondary" @click="hideModal('propDescModal')"
          >Cancel</b-button
        >
        <b-button variant="primary" @click.prevent="update()" class="mr-1">Save</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "UpdatePropertyDescriptionModal",
  props: {
    item: Object,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      updatePropertyDescription: "updatePropertyDescription",
    }),
    async update() {
      let desc = {
        title: this.item.title,
        description: this.item.description,
      };

      const res = await this.updatePropertyDescription({
        pk: this.item.id,
        payload: desc,
        config: this.config,
      });

      if (res.status == 200 || res.status == 201) {
        this.$notify("Success", "Description updated successfully", res.status, {
          type: "success",
          permanent: false,
          duration: 5000,
        });
        this.$emit("updateData");
        this.hideModal("propDescModal");
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
