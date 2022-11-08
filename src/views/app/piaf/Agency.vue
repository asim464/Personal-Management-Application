<template>
  <div>
    <div v-if="currentUser.role == UserRole.SuperAdmin">
      <b-row>
        <b-colxx xxs="12">
          <piaf-breadcrumb :heading="$t('menu.agency')" />
          <div class="separator mb-5"></div>
        </b-colxx>
      </b-row>
      <b-row>
        <b-colxx xxs="12">
          <b-card class="mb-4" :title="$t('menu.agency')">
            <!-- <b-row>
              <b-alert v-model="showSuccessAlert" variant="success" dismissible>
                {{ alertMessage }}
              </b-alert>
            </b-row> -->
            <b-row class="d-flex">
              <b-colxx xxs="6">
                <h3 style="
                    font-family: 'Nunito', sans-serif;
                    font-weight: 400;
                    font-size: 18px;
                    padding-top: 1.4rem;
                  ">
                  Agencies List
                </h3>
              </b-colxx>
              <b-colxx xxs="6" style="
                  display: flex;
                  justify-content: flex-end;
                  padding-bottom: 1rem;
                ">
                <b-button variant="success" v-b-modal.modalright><i class="simple-icon-plus"
                    style="padding-inline: 0.5rem; top: 1px; position: relative"></i>Create Agency</b-button>
              </b-colxx>
            </b-row>
            <add-new-agency-modal />
            <b-table small hover :items="agenciesList" :fields="fields" responsive="sm">
              <template #cell(actions)="row">
                <b-button variant="primary" size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
                  update
                </b-button>
                <b-button variant="danger" size="sm" @click="row.toggleDetails">
                  Delete
                </b-button>
              </template>
            </b-table>
          </b-card>
        </b-colxx>
      </b-row>
    </div>
    <div class="card" v-else>
      <img src="https://cdn.svgator.com/images/2022/01/404-page-animation-example.gif"
        class="kg-image lightense-target image-fluid" alt="" loading="lazy" />
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
export default {
  name: "Agency",
  components: {
    "add-new-agency-modal": AddNewAgencyModal
  },
  computed: {
    ...mapGetters([
      "currentUser",
      "agenciesList",
    ]),
  },
  data() {
    return {
      UserRole,
      fields: [
        {
          key: "id"
        },
        {
          key: "name"
        },
        {
          key: "Address.house_number",
          label: "ADDRESS"
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
    };
  },
   mounted() {

    this.setAgencies()
    // console.log(this.items);
  },
  methods: {
    ...mapActions(["setAgencies"]),
  }
};
</script>

<style scoped>

</style>
