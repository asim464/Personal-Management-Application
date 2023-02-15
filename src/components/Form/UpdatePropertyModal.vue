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
            v-model="property.agencyID"
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
          <b-form-input v-model="property.title" />
        </b-form-group>
        <b-form-group label="Type">
          <b-form-select
            v-model="property.type"
            :options="property_types"
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
        <b-form-group label="Payment type">
          <b-form-radio-group
            class="pt-2"
            :options="payment_types"
            v-model="property.paymentType"
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
import { mapGetters } from "vuex";
import { UserRole } from "../../utils/auth.roles";
import { payment_types, property_types } from "../../utils/property.consts";

export default {
  name: "UpdatePropertyModal",
  computed: {
    ...mapGetters(["currentUser", "agenciesList"]),
  },
  props: {
    property: Object,
  },
  data() {
    return {
      UserRole,
      payment_types,
      property_types,
    };
  },
  created() {
    let ur = getCurrentUser();
    if (ur.role != UserRole.SuperAdmin) {
      this.property.agencyID = ur.agencyID;
    }
  },
  methods: {
    updateProperty() {
      let prop = {
        title: this.property.title,
        type: this.property.type,
        paymentType: this.paymentType,
      };
      let user = getCurrentUser();

      var config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      axios
        .patch(apiUrl + "property/" + this.property.id, prop, config)
        .then((res) => {
          if (res.status == 200) {
            this.$notify("Success", "New Property Added", res.status, {
              type: "success",
              duration: 5000,
              permanent: false,
            });
            window.location.reload();
          }
          if (res.status == 401) {
            this.$notify("Error", "New Property could not be added", err, {
              type: "error",
              duration: 5000,
              permanent: false,
            });
          }
        })
        .catch((err) => {
          this.$notify("Error", "Unexpected Error Occured", err, {
            type: "error",
            duration: 5000,
            permanent: false,
          });
          window.location.reload();
          console.log(err);
        });
      this.hideModal("modalEditProp");
    },
    hideModal(refname) {
      this.$refs[refname].hide();
    },
  },
};
</script>
