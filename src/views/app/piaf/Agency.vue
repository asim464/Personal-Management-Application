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
            <b-table striped hover :items="items"></b-table>
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
export default {
  name: "Agency",
  computed: {
    ...mapGetters(["currentUser"]),
  },
  data() {
    return {
      items: [],
      UserRole,
    };
  },
  async created() {
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
        Name: data[i].name,
        Address:
          data[i].Address.house_number + ", " + data[i].Address.street_number,
        Country: data[i].Address.country,
        CO: data[i].Address.co,
      };
      this.items.push(temp);
    }
    console.log(this.items);
  },
};
</script>
  
  <style>
</style>