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
          <b-form-input v-model="agencyName" />
        </b-form-group>
        <b-form-group label="Street Number">
          <b-form-input v-model="newItem.streetNo" :rows="2" :max-rows="2" />
        </b-form-group>
        <b-form-group label="House Number">
          <b-form-input v-model="newItem.houseNo" :rows="2" :max-rows="2" />
        </b-form-group>
        <b-form-group label="City">
          <b-form-input v-model="newItem.city" :rows="2" :max-rows="2" />
        </b-form-group>
        <b-form-group label="Country">
          <b-form-input v-model="newItem.country" :rows="2" :max-rows="2" />
        </b-form-group>
        <b-form-group label="Postal Code">
          <b-form-input v-model="newItem.postalNo" :rows="2" :max-rows="2" />
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
import {mapGetters} from "vuex";
import axios from "axios";
import { apiUrl } from "../../constants/config";
export default {
  name: "AddNewAgencyModal",
  computed: {
    ...mapGetters(["currentUser"]),
  },
  data() {
    return {
      agencyName: "",
      newItem: {
        streetNo: "",
        houseNo: "",
        city: "",
        country: "",
        postalNo: "",
        co: "",
      },
    };
  },
  methods: {
    async addNewItem() {
      var config = {
        headers: {
          Authorization: `Bearer ${this.currentUser.token}`,
        },
      };
      var res = await axios.post(
        apiUrl + "agency/create/" + this.agencyName,
        config,
        this.newItem
      );
      if ((await res).status == 201) {
        this.$bvToast.toast("Success", {
          title: "Agency Created Successfully",
          variant: "success",
          solid: true,
          toaster: "b-toaster-top-center",
        });
        this.hideModal("modalright");
      }
    },
    hideModal(refname) {
      this.$refs[refname].hide();
    },
  },
};
</script>
  
  