<template>
  <div>
    <b-modal
      id="deletePropertyModal"
      ref="deletePropertyModal"
      title="Delete Selected Property(s)"
      hide-footer
    >
      <template v-if="selectedItems.length >= 1">
        <div class="d-block text-center">
          <h4>{{ $t("general.delete-confirmation") }}</h4>
        </div>
        <b-button class="mt-3" variant="outline-danger" block @click="deleteItem()"
          ><span style="font-size: 18px"
            ><i class="iconsminds-trash-with-men"></i>Confirm</span
          ></b-button
        >
        <b-button
          class="mt-3"
          variant="outline-light"
          block
          @click="hideModal('deletePropertyModal')"
          ><span style="font-size: 18px"
            ><i class="iconsminds-close"></i>Cancel</span
          ></b-button
        >
      </template>
      <template v-else>
        <div class="d-block text-center">
            <h4>Select items to get deletion dialogue.</h4>
        </div>
        <b-button
          class="mt-3"
          variant="outline-light"
          block
          @click="hideModal('deletePropertyModal')"
          ><span style="font-size: 18px"
            ><i class="iconsminds-close"></i>Cancel</span
          ></b-button
        >
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "DeletePropertyModal",
  props: ["selectedItems"],
  methods: {
    ...mapActions({
      deleteProperty: "deletePropertyById",
    }),
    async deleteItem() {
      console.log(this.selectedItems);
      const res = await this.deleteProperty({
        pk: this.selectedItems,
        config: this.config,
      });

      if (res.status == 200 || res.status == 201) {
        this.$notify("Success", "Deleted property(s) successfully!", res.status, {
          type: "success",
          duration: 5000,
          permanent: false,
        });
        this.$emit("updateList");
        this.hideModal("deletePropertyModal");
      } else {
        console.log(res.status);
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
