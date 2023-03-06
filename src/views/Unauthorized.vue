<template>
  <div id="root">
    <div class="fixed-background">
      <main>
        <div class="container">
          <b-row class="h-100">
            <b-colxx xxs="12" md="10" class="mx-auto my-auto">
              <b-card class="auth-card" no-body>
                <div class="position-relative image-side">
                  <p class="text-white h2">NOTIFICATION</p>
                  <p class="white mb-0">Unauthorized User!</p>
                </div>
                <div class="form-side">
                  <router-link to="/">
                    <span class="logo-single" />
                  </router-link>
                  <h6 class="mb-4">{{ $t("unauthorized.title") }}</h6>
                  <p class="mb-0 text-muted text-small mb-0">
                    {{ $t("unauthorized.detail") }}
                  </p>
                  <p class="display-1 font-weight-bold mb-5">404</p>
                  <b-button
                    type="submit"
                    variant="primary"
                    size="lg"
                    class="btn-shadow"
                    @click="goBack()"
                    >{{ $t("pages.go-back-home") }}</b-button
                  >
                </div>
              </b-card>
            </b-colxx>
          </b-row>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import { adminRoot } from "../constants/config";
import { mapGetters } from "vuex";

export default {
  methods: {
    goBack() {
      // if (this.currentUser != null) {
        // this.$router.push(`${adminRoot}/piaf/Dashboard`);
      // } else {
        this.$router.push("/user");
      // }
    },
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  mounted() {
    document.body.classList.add("background");
  },
  beforeDestroy() {
    document.body.classList.remove("background");
  },
};
</script>
