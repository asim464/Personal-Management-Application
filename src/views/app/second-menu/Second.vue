<template>
  <div>
    <div v-if="currentUser.role == UserRole.SuperAdmin">
      <b-row>
        <b-colxx xxs="12">
          <piaf-breadcrumb :heading="$t('menu.admin')" />
          <div class="separator mb-5"></div>
        </b-colxx>
      </b-row>
      <b-row>
        <b-colxx xxs="12">
          <b-card class="mb-4" :title="$t('menu.user')">
            <!-- <b-row>
              <b-alert v-model="showSuccessAlert" variant="success" dismissible>
                {{ alertMessage }}
              </b-alert>
            </b-row> -->
            <div v-if="processingAgent" class="loading"></div>
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
                  <b-button variant="success" v-b-modal.modalright
                    ><i
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
                small
                hover
                :items="agentsList"
                :fields="fields"
                responsive="sm"
              >
                <template #cell(actions)="row">
                  <b-button
                    variant="primary"
                    size="sm"
                    @click="info(row.item, row.index, $event.target)"
                    class="mr-1"
                  >
                    Update
                  </b-button>
                  <b-button
                    variant="danger"
                    size="sm"
                    @click="row.toggleDetails"
                  >
                    Delete
                  </b-button>
                </template>
              </b-table>
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
import { mapGetters, mapActions } from "vuex";
import AddNewUserModal from "../../../components/Form/AddNewUserModal.vue";
export default {
  name: "Second",
  components: {
    "add-new-user-modal": AddNewUserModal,
  },
  computed: {
    ...mapGetters(["currentUser", "agentsList", "processingAgent"]),
  },
  data() {
    return {
      UserRole,
      fields: [
        {
          key: "id",
        },
        {
          key: "email",
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
    };
  },
  mounted() {
    this.setAgents();
    // console.log(this.items);
  },
  methods: {
    ...mapActions(["setAgents"]),
  },
};
</script>

<style scoped>
</style>
