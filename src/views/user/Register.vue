<template>
  <b-row class="h-100">
    <b-colxx xxs="12" md="10" class="mx-auto my-auto">
      <b-card class="auth-card" no-body>
        <div class="position-relative image-side">
          <p class="white mb-0">
            Please use this form to register. <br />If you are a member, please
            <router-link to="/user/login" class="white">login</router-link>.
          </p>
        </div>
        <div class="form-side">
          <i class="iconsminds-add-user" style="font-size:2rem;"></i>
          <h6 class="mb-4">{{ $t("user.register") }}</h6>
          <b-form @submit.prevent="formSubmit">
            <label class="form-group has-float-label mb-4">
              <input type="text" class="form-control" v-model="fullname" />
              <span>{{ $t("user.fullname") }}</span>
            </label>
            <label class="form-group has-float-label mb-4">
              <input type="email" class="form-control" v-model="email" />
              <span>{{ $t("user.email") }}</span>
            </label>
            <label class="form-group has-float-label mb-4">
              <input type="password" class="form-control" v-model="password" />
              <span>{{ $t("user.password") }}</span>
            </label>
            <div class="d-flex justify-content-end align-items-center">
              <b-button
                type="submit"
                variant="primary"
                size="lg"
                class="btn-shadow"
                >{{ $t("user.register-button") }}</b-button
              >
            </div>
            <div
              class="
                d-flex
                justify-content-between
                align-items-center
                mt-4
                pl-2
              "
              style="font-weight: 400px; font-size: medium"
            >
              <router-link to="/user/login"
                ><u
                  >Already have an account. Click here to Login<i
                    class="simple-icon-login"
                  ></i>
                  now!</u
                ></router-link
              >
            </div>
          </b-form>
        </div>
      </b-card>
    </b-colxx>
  </b-row>
</template>
<script>
import { adminRoot } from "../../constants/config";

export default {
  data() {
    return {
      fullname: "",
      email: "",
      password: "",
    };
  },
  methods: {
    formSubmit() {
      console.log("register");
      this.$router.push(adminRoot);
    },
  },
};
</script>
