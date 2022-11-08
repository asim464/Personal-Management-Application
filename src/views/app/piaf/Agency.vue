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
                    variant="success"
                    v-b-modal.modalright
                  ><i
                    class="simple-icon-plus"
                    style="padding-inline: 0.5rem; top: 1px; position: relative"
                  ></i
                  >Create Agency</b-button
                >
              </b-colxx>
            </b-row>
            <add-new-agency-modal />
            <b-table small hover :items="items" responsive="sm">
            </b-table>
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
import axios from "axios";
import { apiUrl } from "../../../constants/config";
import AddNewAgencyModal from "../../../components/Form/AddNewAgencyModal.vue";
export default {
  name: "Agency",
  components: {
    "add-new-agency-modal": AddNewAgencyModal
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  data() {
    return {
      items: [],
      UserRole,
    };
  },
  async mounted() {
    var config = {
      headers: {
        Authorization: `Bearer ${this.currentUser.token}`,
      },
    };
    var res = await axios.get(apiUrl + "agency/findallAgencies", config);
    var data = res.data;
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      var temp = {
        ID: data[i].id,
        NAME: data[i].name,
        ADDRESS:
          data[i].Address.house_number + ", " + data[i].Address.street_number,
        COUNTRY: data[i].Address.country,
        CO: data[i].Address.co,
      };
      this.items.push(temp);
    }
    console.log(this.items);
  },
};
</script>
  
<style scoped>
</style>