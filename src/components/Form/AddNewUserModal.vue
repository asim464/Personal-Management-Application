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
          <b-form-input
            v-if="currentUser.role == UserRole.Admin"
            :placeholder="currentUser.agencyName"
            disabled
          ></b-form-input>
          <b-form-select
            v-else-if="currentUser.role == UserRole.SuperAdmin"
            v-model="newItem.agencyID"
          >
            <template #first>
              <b-form-select-option value="" default
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
        <b-form-group label="Email">
          <b-form-input v-model="newItem.user.email" :rows="2" :max-rows="2" />
        </b-form-group>
        <b-form-group label="First Name">
          <b-form-input v-model="newItem.user.firstName" :rows="2" :max-rows="2" />
        </b-form-group>
        <b-form-group label="Last Name">
          <b-form-input v-model="newItem.user.lastName" :rows="2" :max-rows="2" />
        </b-form-group>
        <b-form-group label="Username">
          <b-form-input v-model="newItem.user.userName" :rows="2" :max-rows="2" />
        </b-form-group>
        <b-form-group label="Description">
          <b-textarea v-model="newItem.user.description" :rows="2" :max-rows="2" />
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
          <b-form-select v-model="newItem.user.roles" :rows="2" :max-rows="2">
            <template #first>
              <b-form-select-option value="" default disabled
                >-- Please select an option --</b-form-select-option
              >
            </template>
            <b-form-select-option
              v-for="role in roles"
              :key="role.value"
              :value="role.value"
              >{{ role.text }}</b-form-select-option
            >
          </b-form-select>
        </b-form-group>
      </b-form>

      <template slot="modal-footer">
        <b-button variant="outline-secondary" @click="hideModal('modalright')"
          >Cancel</b-button
        >
        <b-button variant="primary" @click="addUser()" class="mr-1">Create</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getCurrentUser } from "../../utils";
import { UserRole } from "../../utils/auth.roles";

export default {
  name: "AddNewUserModal",
  computed: {
    ...mapGetters(["currentUser", "agenciesList", "responseAG"]),
  },
  async mounted() {
    let ur = getCurrentUser();
    this.newItem.agencyID = ur.agencyId;
    if (ur.role == UserRole.SuperAdmin) {
      this.roles = [
        { value: "Admin", text: "Admin" },
        { value: "Agent", text: "Agent" },
        { value: "Customer", text: "Customer" },
      ];
    } else if (ur.role == UserRole.Admin) {
      this.roles = [
        { value: "Agent", text: "Agent" },
        { value: "Customer", text: "Customer" },
      ];
    }
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
      roles: [],
    };
  },
  methods: {
    addUser() {
      this.$store.dispatch("createAgent", this.newItem);
      this.hideModal("modalright");
      this.$store.dispatch("setAgents");
      this.$nextTick(() => {
        if (this.responseAG.status == 200 || this.responseAG.status == 201) {
          this.$notify(
            "Success",
            "New user created successfully",
            this.responseAG.status,
            {
              type: "success",
              duration: 5000,
              permanent: false,
            }
          );
        } else {
          this.$notify("Error", "New user could not be created", this.responseAG.status, {
            type: "error",
            duration: 5000,
            permanent: false,
          });
        }
      });
    },
    hideModal(refname) {
      this.$refs[refname].hide();
    },
  },
};
</script>
