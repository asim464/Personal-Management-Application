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
          <b-form-select v-model="newItem.agencyID">
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
          <b-form-input class="prop-title" v-model="newItem.prop.title" /> 
          <!-- @click.native="transformName" -->
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
        <b-button variant="primary" @click="addNewProperty()" class="mr-1">SAVE</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
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
      this.newItem.agencyID = ur.agencyId;
    }
    this.property_types = [
      { value: "House", text: "House" },
      { value: "Apartment", text: "Apartment" },
      { value: "Gastronomy", text: "Gastronomy" },
      { value: "Industrial", text: "Industrial" },
      { value: "Parking", text: "Parking" },
      { value: "Garage", text: "Garage" },
      { value: "Land", text: "Land" },
    ];
    this.payment_types = [
      { value: "Sale", text: "Sale" },
      { value: "Rent", text: "Rent" },
    ];
  },
  methods: {
    // transformName() {
    //   $(".prop-title").on("change keydown paste", function (e) {
    //     if ((this.value.length = 1)) {
    //     }
    //     var $this_val = $(this).val();
    //     this_val = $this_val.toLowerCase().replace(/\b[a-z]/g, function (char) {
    //       return char.toUpperCase();
    //     });
    //     $(this).val(this_val);
    //   });
    // },
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
              type: "success",
              duration: 5000,
              permanent: false,
            });
            window.location.reload();
          }
          if (res.status == 401) {
            this.$notify("Error", "New Property could not be added", res.status, {
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
          // window.location.reload();
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
