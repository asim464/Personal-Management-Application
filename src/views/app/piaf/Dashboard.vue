<template>
  <div>
    <div v-if="currentUser != null">
      <b-row>
        <b-colxx xxs="12">
          <piaf-breadcrumb :heading="$t('menu.dashboard')" />
          <div class="separator mb-5"></div>
        </b-colxx>
      </b-row>
      <b-row>
        <b-colxx xxs="12">
          <b-card class="mb-4" :title="$t('menu.dashboard')"> </b-card>
        </b-colxx>
      </b-row>
    </div>
    <!-- <div class="card" v-else>
      <img
        src="https://cdn.svgator.com/images/2022/01/404-page-animation-example.gif"
        class="kg-image lightense-target image-fluid"
        alt=""
        loading="lazy"
      />
      <h1 class="d-flex justify-content-center" style="color: red">
        Access Not Allowed!
      </h1>
    </div> -->
  </div>
</template>

<script>
import { UserRole } from "../../../utils/auth.roles";
import { mapGetters } from "vuex";
export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["currentUser"]),
  },
  data() {
    return {
      UserRole,
    };
  },
};
</script>
