<template>
  <div>
    <b-modal
      id="modalright"
      ref="modalright"
      title="Add New User"
      modal-class="modal-right"
    >
      <b-form>
        <b-form-group label="Agency">
          <b-form-select
            v-if="currentUser.role == UserRole.Admin"
            v-model="newItem.agencyID"
            disabled
          >
            <b-form-select-option
              v-for="agency in agenciesList"
              :key="agency.id"
              :value="newItem.agencyID"
              disabled
              >{{ agency.name }}</b-form-select-option
            >
          </b-form-select>
          <b-form-select
            v-else-if="currentUser.role == UserRole.SuperAdmin"
            v-model="newItem.agencyID"
          >
            <template #first>
              <b-form-select-option value="" disabled
                >-- Please select an option --</b-form-select-option
              >
            </template>
            <b-form-select-option
              v-for="agency in agenciesList"
              :key="agency.id"
              :value="newItem.agencyID"
              >{{ agency.name }}</b-form-select-option
            >
          </b-form-select>
        </b-form-group>
        <b-form-group label="Email">
          <b-form-input v-model="newItem.user.email" :rows="2" :max-rows="2" />
        </b-form-group>
        <b-form-group label="First Name">
          <b-form-input
            v-model="newItem.user.firstName"
            :rows="2"
            :max-rows="2"
          />
        </b-form-group>
        <b-form-group label="Last Name">
          <b-form-input
            v-model="newItem.user.lastName"
            :rows="2"
            :max-rows="2"
          />
        </b-form-group>
        <b-form-group label="Username">
          <b-form-input
            v-model="newItem.user.userName"
            :rows="2"
            :max-rows="2"
          />
        </b-form-group>
        <b-form-group label="Description">
          <b-textarea
            v-model="newItem.user.description"
            :rows="2"
            :max-rows="2"
          />
        </b-form-group>
        <b-form-group label="Status">
          <b-form-radio-group
            stacked
            class="pt-2"
            :options="statuses"
            v-model="newItem.user.status"
          />
        </b-form-group>
        <b-form-group label="Role">
          <b-form-select
            v-model="newItem.user.roles"
            :options="roles"
            :rows="2"
            :max-rows="2"
          ></b-form-select>
        </b-form-group>
      </b-form>

      <template slot="modal-footer">
        <b-button variant="outline-secondary" @click="hideModal('modalright')"
          >Cancel</b-button
        >
        <b-button variant="primary" @click="addUser()" class="mr-1"
          >Create</b-button
        >
      </template>
    </b-modal>
  </div>
</template>
  
  <script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
import { getCurrentUser } from "../../utils";
import { UserRole } from "../../utils/auth.roles";

export default {
  name: "AddNewUserModal",
  computed: {
    ...mapGetters(["currentUser", "agenciesList"]),
  },
  async created() {
    var user = getCurrentUser();
    var config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    await axios
      .get(apiUrl + "users/findUser/" + user.id, config)
      .then(async (res) => {
        this.newItem.agencyID = res.data.agencyId;
      });
  },
  data() {
    return {
      UserRole,
      newItem: {
        agencyID: "",
        user: {
          email: "",
          firstName: "",
          lastName: "",
          userName: "",
          description: "",
          status: "",
          roles: "",
        },
      },
      statuses: ["Active", "In Active"],
      roles: [
        { value: "SuperAdmin", text: "SuperAdmin" },
        { value: "Admin", text: "Admin" },
        { value: "Agent", text: "Agent" },
        { value: "Customer", text: "Customer" },
      ],
    };
  },
  methods: {
    ...mapActions(["setAgents"]),
    addUser() {
      this.$store.dispatch("createAgent", this.newItem);
      this.$nextTick(() => {
        this.setAgents();
      });
    },
    hideModal(refname) {
      this.$refs[refname].hide();
    },
  },
};
</script>
    
    