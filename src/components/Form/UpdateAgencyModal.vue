<template>
  <div>
    <b-modal
      id="upmodalright"
      ref="upmodalright"
      title="Edit Agency"
      modal-class="modal-right"
    >
      <b-form>
        <b-form-group label="Name">
          <b-form-input v-model="item.agencyName" disabled />
        </b-form-group>
        <b-form-group label="Street Number">
          <b-form-input
            v-model="item.data.street_number"
            :rows="2"
            :max-rows="2"
          />
        </b-form-group>
        <b-form-group label="House Number">
          <b-form-input
            v-model="item.data.house_number"
            :rows="2"
            :max-rows="2"
          />
        </b-form-group>
        <b-form-group label="City">
          <b-form-input v-model="item.data.city" :rows="2" :max-rows="2" />
        </b-form-group>
        <b-form-group label="Country">
          <b-form-input v-model="item.data.country" :rows="2" :max-rows="2" />
        </b-form-group>
        <b-form-group label="Postal Code">
          <b-form-input
            v-model="item.data.postal_code"
            type="number"
            :rows="2"
            :max-rows="2"
          />
        </b-form-group>
        <b-form-group label="CO">
          <b-form-input v-model="item.data.co" :rows="2" :max-rows="2" />
        </b-form-group>
      </b-form>

      <template slot="modal-footer">
        <b-button variant="outline-secondary" @click="hideModal('upmodalright')"
          >Cancel</b-button
        >
        <b-button variant="primary" @click="editAgency()" class="mr-1"
          >Edit</b-button
        >
      </template>
    </b-modal>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "UpdateAgencyModal",
  computed: {
    ...mapGetters(["currentUser"]),
  },
  props: {
    item: {},
  },
  methods: {
    ...mapActions(["updateAgency"]),
    ...mapActions(["setAgencies"]),
    editAgency() {
      this.updateAgency(this.$props.item);
      this.$nextTick(() => {
        this.setAgencies();
      });
      this.hideModal("upmodalright");
    },
    hideModal(refname) {
      this.$refs[refname].hide();
    },
  },
};
</script>
    
    