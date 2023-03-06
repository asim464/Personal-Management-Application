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
                  <p class="white mb-0">Unexpected Error!</p>
                </div>
                <div class="form-side">
                  <router-link to="/">
                    <span class="logo-single" />
                  </router-link>
                  <h6 class="mb-4">Ooops... something's are not where they should be.</h6>
                  <p class="mb-0 text-muted text-small mb-0">Oops... something went wrong!<br /> Press the button to go back.</p>
                  <p class="display-1 font-weight-bold mb-5">500</p>
                  <b-button
                    type="submit"
                    variant="primary"
                    size="lg"
                    class="btn-shadow"
                    @click="goBack"
                  >{{ $t("pages.go-back-home") }}</b-button>
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
import { adminRoot } from '../constants/config';
import { getCurrentUser } from '../utils';
import { UserRole } from '../utils/auth.roles';
export default {
  methods: {
    goBack() {
      // let user = getCurrentUser();
      // if (user.length > 0) {
        // this.$router.push(adminRoot);
      // } else {
        this.$router.push("/user");
      // }
    },
  },
  mounted: function () {
    document.body.classList.add("background");
  },
  beforeDestroy() {
    document.body.classList.remove("background");
  },
};
</script>
