<template>
  <div>
    <div
      v-if="
        (currentUser.role != null) &
        (currentUser.role != UserRole.Agent) &
        (currentUser.role != UserRole.Customer)
      "
    >
      <b-row>
        <b-colxx xxs="12">
          <piaf-breadcrumb :heading="$t('menu.admin')" />
          <div class="separator mb-5"></div>
        </b-colxx>
      </b-row>
      <b-row>
        <b-colxx xxs="12">
          <b-card class="mb-4" :title="$t('menu.user')">
            <div v-if="processingAgent" class="loading" />
            <div v-else>
              <b-row class="d-flex">
                <b-colxx xxs="6">
                  <h3
                    style="
                      font-family: 'Nunito', sans-serif;
                      font-weight: 400;
                      font-size: 18px;
                      padding-top: 1.4rem;
                    "
                  >
                    Users List
                  </h3>
                </b-colxx>
                <b-colxx
                  xxs="6"
                  style="
                    display: flex;
                    justify-content: flex-end;
                    padding-bottom: 1rem;
                  "
                >
                  <b-button variant="success" v-b-modal.modalright>
                    <i
                      class="iconsminds-add-user"
                      style="
                        padding-inline: 0.5rem;
                        top: 1px;
                        position: relative;
                      "
                    ></i
                    >Create User</b-button
                  >
                </b-colxx>
              </b-row>
              <add-new-user-modal />
              <b-table
                v-if="currentUser.role == UserRole.Admin"
                small
                :items="agentsList"
                :fields="fields"
                responsive="sm"
              >
                <template #cell(actions)="row">
                  <b-button
                    v-b-modal.upmodalright
                    variant="primary"
                    size="sm"
                    @click="updateUser(row.index)"
                    class="mr-1"
                  >
                    Update
                  </b-button>
                  <b-button
                    variant="danger"
                    size="sm"
                    @click="deleteUser(row.item, row.index)"
                  >
                    Delete
                  </b-button>
                </template>
              </b-table>
              <b-table
                v-else-if="currentUser.role == UserRole.SuperAdmin"
                small
                :items="agentsList"
                :fields="fields"
                responsive="sm"
              >
                <template #cell(actions)="row">
                  <b-button
                    v-b-modal.upmodalright
                    variant="primary"
                    size="sm"
                    @click="updateUser(row.index)"
                    class="mr-1"
                  >
                    Update
                  </b-button>
                  <b-button
                    variant="danger"
                    size="sm"
                    @click="deleteUser(row.item, row.index)"
                  >
                    Delete
                  </b-button>
                </template>
              </b-table>
              <update-user-modal :item="data" />
            </div>
          </b-card>
        </b-colxx>
      </b-row>
    </div>
    <div class="card" v-else>
      <img
        src="https://cdn.svgator.com/images/2022/01/404-page-animation-example.gif"
        class="kg-image lightense-target image-fluid"
        alt=""
        loading="lazy"
      />
      <h1 class="d-flex justify-content-center" style="color: red">
        Access Not Allowed!
      </h1>
    </div>
  </div>
</template>

<script>
import { UserRole } from "../../../utils/auth.roles";
import { mapGetters } from "vuex";
import AddNewUserModal from "../../../components/Form/AddNewUserModal.vue";
import UpdateUserModal from "../../../components/Form/UpdateUserModal.vue";

export default {
  name: "UsersListingView",
  components: {
    "add-new-user-modal": AddNewUserModal,
    "update-user-modal": UpdateUserModal,
  },
  computed: {
    ...mapGetters(["currentUser", "agentsList"]),
    ...mapGetters(["processingAgent"]),
  },
  data() {
    return {
      UserRole,
      fields: [
        {
          key: "id",
          label: "ID",
        },
        {
          key: "email",
          label: "EMAIL",
        },
        {
          key: "firstName",
          label: "FIRST NAME",
        },
        {
          key: "lastName",
          label: "LAST NAME",
        },
        {
          key: "userName",
          label: "USERNAME",
        },
        {
          key: "roles",
          label: "ROLE",
        },
        {
          key: "status",
          label: "STATUS",
        },
        {
          key: "actions",
          label: "ACTIONS",
        },
      ],
      data: {
        index: Number,
        agencyId: Number,
        userId: Number,
        data: {
            email: String,
            firstName: String,
            lastName: String,
            userName:String,
            description: String,
            status: String,
            roles: String,
          }
      },
    };
  },
  mounted() {
    this.$store.dispatch("setAgents");
  },
  updated() {
    this.$root.$on('bv::modal::hide', function(e) {
      this.$store.dispatch("setAgents");
    })
  },
  methods: {
    async deleteUser(data, index) {
      let payload = {
        data,
        index,
      };
      await this.$store.dispatch("deleteAgent", payload);
      this.$store.dispatch("setAgents");
    },
    updateUser(index) {
      if (this.currentUser.role == UserRole.SuperAdmin) {
        this.data = {
          index: index,
          agencyId: this.agentsList[index].agencyId,
          userId: this.agentsList[index].id,
          data: {
            email: this.agentsList[index].email,
            firstName: this.agentsList[index].firstName,
            lastName: this.agentsList[index].lastName,
            userName: this.agentsList[index].userName,
            description: this.agentsList[index].description,
            status: this.agentsList[index].status,
            roles: this.agentsList[index].roles,
          },
        };
      } else if (this.currentUser.role == UserRole.Admin) {
        this.data = {
          index: index,
          agencyID: this.agentsList[index].agencyId,
          userId: this.agentsList[index].id,
          data: {
            email: this.agentsList[index].email,
            firstName: this.agentsList[index].firstName,
            lastName: this.agentsList[index].lastName,
            userName: this.agentsList[index].userName,
            description: this.agentsList[index].description,
            status: this.agentsList[index].status,
            roles: this.agentsList[index].roles,
          },
        };
      }
    },
  },
};
</script>

<style scoped>
</style>
