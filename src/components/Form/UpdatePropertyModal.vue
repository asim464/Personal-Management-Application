<template>
  <div>
    <b-modal
      id="modalEditProp"
      ref="modalEditProp"
      title="Edit Property"
      modal-class="modal-right"
    >
      <b-form>
        <b-form-group v-if="currentUser.role == UserRole.SuperAdmin" label="Agency">
          <b-form-select
            v-if="currentUser.role == UserRole.SuperAdmin"
            v-model="agencyID"
          >
            <template #first>
              <b-form-select-option value="" default disabled
                >-- Please select an option --</b-form-select-option
              >
            </template>
            <b-form-select-option
              v-for="agency in agenciesList"
              :key="agency.id"
              :value="agency.id"
              >{{ agency.name }}</b-form-select-option
            >
          </b-form-select>
        </b-form-group>
        <b-form-group label="Title">
          <b-form-input v-model="title" />
        </b-form-group>
        <b-form-group label="Type">
          <b-form-select v-model="type" :options="property_types" :rows="2" :max-rows="2">
            <template #first>
              <b-form-select-option value="" default disabled
                >-- Please select an option --</b-form-select-option
              >
            </template>
          </b-form-select>
        </b-form-group>
        <b-form-group label="Payment type">
          <b-form-radio-group
            class="pt-2"
            :options="payment_types"
            v-model="paymentType"
          />
        </b-form-group>
      </b-form>

      <template slot="modal-footer">
        <b-button variant="outline-secondary" @click="hideModal('modalEditProp')"
          >Cancel</b-button
        >
        <b-button variant="primary" @click="updateProperty()" class="mr-1">SAVE</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import { getCurrentUser } from "../../utils";
import { apiUrl } from "../../constants/config";
import { mapActions, mapGetters } from "vuex";
import { UserRole } from "../../utils/auth.roles";
import { payment_types, property_types } from "../../utils/property.consts";

export default {
  name: "UpdatePropertyModal",
  computed: {
    ...mapGetters(["currentUser", "agenciesList", "paginatedList", "config"]),
  },
  props: ["item"],
  data() {
    return {
      UserRole,
      payment_types,
      property_types,
      property: {},
      agencyID: 0,
      title: "",
      type: "",
      paymentType: "",
    };
  },
  watch: {
    item(value) {
      if (value) {
        this.paginatedList.properties.forEach((element) => {
          if (element.id === value[0]) {
            this.property = element;
          }
        });
        this.agencyID = this.property.agencyId;
        this.title = this.property.title;
        this.type = this.property.type;
        this.paymentType = this.property.paymentType;
      }
    },
  },
  methods: {
    ...mapActions({
      editProperty: "editPropertyById",
    }),
    async updateProperty() {
      let prop = {
        title: this.title,
        type: this.type,
        paymentType: this.paymentType,
      };

      const res = await this.editProperty({
        pk: this.agencyID,
        payload: prop,
        config: this.config,
      });
      if (res.status == 200) {
        this.$notify("Success", "Property updated successfully", res.status, {
          type: "success",
          duration: 5000,
          permanent: false,
        });
        this.$emit("updateList");
        this.hideModal("modalEditProp");
      } else if (res.status == 401) {
        this.$notify("Error", "Property could not be updated", err, {
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
};
</script>
