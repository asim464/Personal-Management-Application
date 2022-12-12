<template>
  <div>
    <b-modal
      id="modalAddProp"
      ref="modalAddProp"
      title="Add New Property"
      modal-class="modal-right"
    >
      <b-form>
        <b-form-group v-if="currentUser.role == UserRole.SuperAdmin" label="Agency">
          <b-form-select
            v-if="currentUser.role == UserRole.SuperAdmin"
            v-model="newItem.agencyID"
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
          <b-form-input v-model="newItem.prop.title" />
        </b-form-group>
        <b-form-group label="Type">
          <b-form-select
            v-model="newItem.prop.type"
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
        <b-form-group label="">
          <b-form-radio-group
            class="pt-2"
            :options="payment_types"
            v-model="newItem.prop.paymentType"
          />
        </b-form-group>
      </b-form>

      <template slot="modal-footer">
        <b-button variant="outline-secondary" @click="hideModal('modalAddProp')"
          >Cancel</b-button
        >
        <b-button variant="primary" @click="addNewProperty()" class="mr-1"
          >SAVE</b-button
        >
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

export default {
  name: "AddNewPropertyModal",
  computed: {
    ...mapGetters(["currentUser", "agenciesList"]),
  },
  data() {
    return {
      UserRole,
      newItem: {
        agencyID: "",
        prop: {
          title: "",
          type: "",
          paymentType: "",
        },
      },
      property_types: [],
      payment_types: [],
    };
  },
  created() {
    let ur = getCurrentUser();
    if (ur.role != UserRole.SuperAdmin) {
      this.newItem.agencyID = ur.agencyID;
    }
    this.property_types = [
      { value: "House", text: "House" },
      { value: "Apartment", text: "Apartment" },
      { value: "Plot", text: "Plot" },
    ];
    this.payment_types = [
      { value: "Sale", text: "Sale" },
      { value: "Rent", text: "Rent" },
    ];
  },
  methods: {
    addNewProperty() {
      let user = getCurrentUser();

      var config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      axios
        .post(
          apiUrl + "property/createProperty/" + this.newItem.agencyID,
          this.newItem.prop,
          config
        )
        .then((res) => {
          if (res.status == 201) {
            this.$notify("Success", "New Property Added", res.status, {
              duration: 5000,
              permanent: false,
            });
            // this.$router.push("/app/second-menu/PropertiesListing");
            window.location.reload();
          }
          if (res.status == 401) {
            this.$notify("Error", "New Property could not be added", err, {
              duration: 5000,
              permanent: false,
            });
          }
        })
        .catch((err) => {
          this.$notify("Error", "Unexpected Error Occured", err, {
            duration: 5000,
            permanent: false,
          });
          window.location.reload();
          console.log(err);
        });
      this.hideModal("modalAddProp");
    },
    hideModal(refname) {
      this.$refs[refname].hide();
    },
  },
};
</script>