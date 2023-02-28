<template>
  <div>
    <b-modal
      id="editStatusPublicationModal"
      ref="editStatusPublicationModal"
      title="Edit Status and Publishings"
      modal-class="modal-right"
    >
      <template v-if="item">
        <b-form>
          <b-form-checkbox
            v-for="data in item.setting"
            :key="data.id"
            v-model="status"
            value="true"
            unchecked-value="false"
            >publish on {{ data.ftpHost }}</b-form-checkbox
          >
          <b-form-group label="Status">
            <b-form-select
              v-model="item.status"
              :options="availList"
              :rows="2"
              :max-rows="2"
            >
              <template #first>
                <b-form-select-option value="" default disabled
                  >-- Please select an option --</b-form-select-option
                >
              </template>
            </b-form-select>
          </b-form-group>
        </b-form>
      </template>

      <template slot="modal-footer">
        <b-button
          variant="outline-secondary"
          @click="hideModal('editStatusPublicationModal')"
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
  name: "UpdateStatusPublicationModal",
  props: {
    item: [],
  },
  data() {
    return {
      status: true,
      availList: [
        { value: "Online", text: "Online" },
        { value: "Offline", text: "Offline" },
      ],
    };
  },
  methods: {
    ...mapActions({
      updatePublicationStatus: "updatePublicationStatus",
    }),
    async update() {
      let uri = window.location.search.substring(1);
      let id = new URLSearchParams(uri);
      let propertyID = id.get("p");

      const res = await this.updatePublicationStatus({
        pk: propertyID,
        ps: this.item.status,
        config: this.config,
      });

      if (res.status === 200 || res.status === 201) {
        this.$notify("Success", "Status and Publications data changed succcesfully", res.status, {
            type: "success",
            permanent: false,
            duration: 5000,
        });
        this.$emit("updateData");
        this.hideModal("editStatusPublicationModal");
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

<style></style>
