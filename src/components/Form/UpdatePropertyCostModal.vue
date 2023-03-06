<template>
  <div>
    <b-modal
      id="propCostEditModal"
      ref="propCostEditModal"
      title="Edit Cost"
      modal-class="modal-right"
    >
      <b-form>
        <b-form-group label="Payment type">
          <b-form-select
            class="pt-2"
            :options="paymentTypes"
            v-model="item.paymentType"
            :rows="2"
            :max-rows="2"
          />
        </b-form-group>
        <b-form-group label="Cost:">
          <b-input-group>
            <template #append>
              <b-input-group-text>CHF</b-input-group-text>
            </template>
            <b-form-input
              v-model="item.price"
              placeholder="Enter the price of the property"
              type="number"
              min="0"
              :rows="2"
              :max-rows="2"
            />
          </b-input-group>
        </b-form-group>
      </b-form>

      <template slot="modal-footer">
        <b-button variant="outline-secondary" @click="hideModal('propCostEditModal')"
          >Cancel</b-button
        >
        <b-button variant="primary" @click.prevent="updatePropertyCost()" class="mr-1"
          >SAVE</b-button
        >
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { payment_types } from "../../utils/property.consts";

export default {
  name: "UpdatePropertyCostModal",
  props: {
    item: Object,
  },
  data() {
    return {
      paymentTypes: payment_types,
    };
  },
  methods: {
    ...mapActions({
      updatePropCost: "updatePropertyCost",
    }),
    async updatePropertyCost() {
      let cost = {
        paymentType: this.item.paymentType,
        price: Number(this.item.price),
      };

      console.log(cost);
      try {
        const res = await this.updatePropCost({
          pk: this.item.propertyId,
          payload: cost,
          config: this.config,
        });

        if (res.status == 200 || res.status == 201) {
          this.$notify("Success", "Property cost edited succesfully", res.status, {
            type: "success",
            duration: 5000,
            permanent: false,
          });
          this.$emit("updateData");
          this.hideModal("propCostEditModal");
        }
      } catch(err) {
        this.$notify("Error", "Property cost could not be edited", err.message, {
          type: "error",
          duration: 5000,
          permanent: false,
        });
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
