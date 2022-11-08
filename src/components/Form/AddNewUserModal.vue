<template>
  <div>
    <b-modal
      id="modalright"
      ref="modalright"
      :title="$t('menu.user')"
      modal-class="modal-right"
    >
      <b-form>
        <b-form-group label="Agency">
          <b-dropdown v-model="agencyName" />
        </b-form-group>
        <b-form-group label="Email">
          <b-form-input v-model="newItem.email" :rows="2" :max-rows="2" />
        </b-form-group>
        <b-form-group label="First Name">
          <b-form-input v-model="newItem.fName" :rows="2" :max-rows="2" />
        </b-form-group>
        <b-form-group label="Last Name">
          <b-form-input v-model="newItem.lName" :rows="2" :max-rows="2" />
        </b-form-group>
        <b-form-group label="Username">
          <b-form-input v-model="newItem.userName" :rows="2" :max-rows="2" />
        </b-form-group>
        <b-form-group label="Description">
          <b-text-area v-model="newItem.desc" :rows="2" :max-rows="2" />
        </b-form-group>
        <b-form-group label="">
          <b-form-radio-group
            stacked
            class="pt-2"
            :options="statuses"
            v-model="newItem.status"
          />
        </b-form-group>
        <b-form-group label="Role">
          <b-dropdown
            v-model="newItem.role"
            text="Select Role"
            :rows="2"
            :max-rows="2"
          >
            <b-dropdown-item v-for="roles in UserRole" :key="roles">{{
              roles
            }}</b-dropdown-item>
          </b-dropdown>
        </b-form-group>
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
import { mapGetters } from "vuex";
import axios from "axios";
import { apiUrl } from "../../constants/config";
import { UserRole } from "../../utils/auth.roles";
export default {
  name: "AddNewUserModal",
  computed: {
    ...mapGetters(["currentUser"]),
  },
  components: {
    UserRole,
  },
  data() {
    return {
      agencyName: "",
      newItem: {
        email: "",
        fName: "",
        lName: "",
        userName: "",
        desc: "",
        status: Boolean,
        role: ""
      },
      statuses: {
        0: "Active",
        1: "In Active"
      }
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
    
    