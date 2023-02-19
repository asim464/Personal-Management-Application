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
          <piaf-breadcrumb :heading="$t('menu.agency')" />
          <div class="separator mb-5"></div>
        </b-colxx>
      </b-row>
      <b-row>
        <b-colxx xxs="12">
          <b-card class="mb-4" :title="$t('menu.agency')">
            <div v-if="processingAgency" class="loading" />
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
                    Agencies List
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
                  <b-button
                    v-if="currentUser.role == UserRole.SuperAdmin"
                    variant="success"
                    v-b-modal.modalright
                  >
                    <i
                      class="simple-icon-plus"
                      style="
                        padding-inline: 0.5rem;
                        top: 1px;
                        position: relative;
                      "
                    >
                    </i>
                    Create Agency
                  </b-button>
                </b-colxx>
              </b-row>
              <add-new-agency-modal />
              <b-table
                v-if="currentUser.role == UserRole.Admin"
                small
                hover
                :items="agency"
                :fields="fields"
                responsive="sm"
              >
                <template #cell(actions)="row">
                  <b-button
                    v-b-modal.upmodalright
                    variant="primary"
                    size="sm"
                    @click="updateAgency(row.item, row.index)"
                    class="mr-1"
                  >
                    Update
                  </b-button>
                  <b-button
                    v-if="currentUser.role == UserRole.SuperAdmin"
                    variant="danger"
                    size="sm"
                    @click="deleteAgency(row.item, row.index)"
                  >
                    Delete
                  </b-button>
                </template>
              </b-table>
              <b-table
                v-if="currentUser.role == UserRole.SuperAdmin"
                small
                hover
                :items="agenciesList"
                :fields="fields"
                responsive="sm"
              >
                <!-- v-if="(row.item.id == agent.agencyId) & (currentUser.role == UserRole.Admin)" -->
                <template #cell(actions)="row">
                  <b-button
                    v-b-modal.upmodalright
                    variant="primary"
                    size="sm"
                    @click="updateAgency(row.item, row.index)"
                    class="mr-1"
                  >
                    Update
                  </b-button>
                  <!-- <b-button
                    v-else-if="currentUser.role == UserRole.SuperAdmin"
                    v-b-modal.upmodalright
                    variant="primary"
                    size="sm"
                    @click="updateAgency(row.item, row.index)"
                    class="mr-1"
                  >
                    Update
                  </b-button> -->
                  <b-button
                    v-if="currentUser.role == UserRole.SuperAdmin"
                    variant="danger"
                    size="sm"
                    @click="deleteAgency(row.item, row.index)"
                  >
                    Delete
                  </b-button>
                </template>
              </b-table>
              <update-agency-modal :item="data" />
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
import AddNewAgencyModal from "../../../components/Form/AddNewAgencyModal.vue";
import UpdateAgencyModal from "../../../components/Form/UpdateAgencyModal.vue";
import axios from "axios";
import { apiUrl } from "../../../constants/config";
import { getCurrentUser } from "../../../utils";
export default {
  name: "Agency",
  components: {
    "add-new-agency-modal": AddNewAgencyModal,
    "update-agency-modal": UpdateAgencyModal,
  },
  computed: {
    ...mapGetters(["currentUser", "agenciesList", "processingAgency"]),
  },
  data() {
    return {
      agency: [],
      UserRole,
      fields: [
        {
          key: "id",
        },
        {
          key: "name",
        },
        {
          key: "Address.house_number",
          label: "ADDRESS",
        },
        {
          key: "Address.country",
          label: "Country",
        },
        {
          key: "actions",
          label: "Action",
        },
      ],
      data: {
        index: Number,
        agencyName: String,
        agencyID: Number,
        data: {
          street_number: String,
          house_number: String,
          city: String,
          country: String,
          postal_code: String,
          co: String,
        },
      },
    };
  },
  async created() {
    var user = getCurrentUser();
    console.log(user);
    if (user.role != UserRole.SuperAdmin) {
      var config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      await axios
        .get(apiUrl + "agency/findAgency/" + user.agencyId, config)
        .then((res) => {
          this.agency = [
            {
              id: user.agencyId,
              name: res.data.name,
              Address: {
                street_number: res.data.Address.street_number,
                house_number: res.data.Address.house_number,
                city: res.data.Address.city,
                country: res.data.Address.country,
                postal_code: res.data.Address.postal_code,
                co: res.data.Address.co,
              },
            },
          ];
        });
    }
  },
  async mounted() {
    this.setAgencies();
  },
  methods: {
    ...mapActions(["setAgencies"]),
    async deleteAgency(data, index) {
      let payload = { data, index };
      await this.$store.dispatch("deleteAgency", payload);
      this.$nextTick(() => {
        this.setAgencies();
      });
    },
    updateAgency(data, index) {
      if (this.currentUser.role == UserRole.SuperAdmin) {
        this.data = {
          index: index,
          data: this.agenciesList[index].Address,
          agencyName: this.agenciesList[index].name,
          agencyID: data.id,
        };
      } else if (this.currentUser.role == UserRole.Admin) {
        this.data = {
          index: index,
          data: this.agency[index].Address,
          agencyName: this.agency[index].name,
          agencyID: this.agency[index].id,
        };
      }
    },
  },
};
</script>

<style scoped>
</style>
