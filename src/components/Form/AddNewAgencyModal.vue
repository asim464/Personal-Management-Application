<template>
  <div>
    <b-modal
      id="modalright"
      ref="modalright"
      :title="$t('menu.Agency')"
      modal-class="modal-right"
    >
      <b-form>
        <b-form-group label="Name">
          <b-form-input v-model="newItem.agencyName" />
        </b-form-group>
        <b-form-group label="Street Number">
          <b-form-input
            v-model="newItem.street_number"
            :rows="2"
            :max-rows="2"
          />
        </b-form-group>
        <b-form-group label="House Number">
          <b-form-input
            v-model="newItem.house_number"
            :rows="2"
            :max-rows="2"
          />
        </b-form-group>
        <b-form-group label="City">
          <b-form-input v-model="newItem.city" :rows="2" :max-rows="2" />
        </b-form-group>
        <b-form-group label="Country">
          <b-form-input v-model="newItem.country" :rows="2" :max-rows="2" />
        </b-form-group>
        <b-form-group label="Postal Code">
          <b-form-input
            v-model="newItem.postal_code"
            type="number"
            :rows="2"
            :max-rows="2"
          />
        </b-form-group>
        <b-form-group label="CO">
          <b-form-input v-model="newItem.co" :rows="2" :max-rows="2" />
        </b-form-group>
        <!-- <b-form-group label="">
          <b-form-radio-group stacked class="pt-2" :options="statuses" v-model="newItem.status" />
        </b-form-group> -->
      </b-form>

      <template slot="modal-footer">
        <b-button variant="outline-secondary" @click="hideModal('modalright')"
          >Cancel</b-button
        >
        <b-button variant="primary" @click="addNewItem()" class="mr-1"
          >Create</b-button
        >
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AddNewAgencyModal",
  computed: {
    ...mapGetters(["currentUser"]),
  },
  data() {
    return {
      newItem: {
        agencyName: "",
        street_number: "",
        house_number: "",
        city: "",
        country: "",
        postal_code: null,
        co: "",
      },
    };
  },
  methods: {
    ...mapActions(["setAgencies"]),
    addNewItem() {
      this.$store.dispatch("createAgency", this.newItem);
      this.$nextTick(() => {
        this.setAgencies();
      });
      this.hideModal("modalright");
    },
    hideModal(refname) {
      this.$refs[refname].hide();
    },
  },
};
</script>