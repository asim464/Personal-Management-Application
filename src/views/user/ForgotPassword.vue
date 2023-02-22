<template>
  <b-row class="h-100">
    <b-colxx xxs="12" md="10" class="mx-auto my-auto">
      <b-card class="auth-card" no-body>
        <div class="position-relative image-side">
          <p class="white mb-0">
            Please use your e-mail to reset your password.
            <br />If you are not a member, please contact the admin to create
            your ID.
          </p>
        </div>
        <div class="form-side">
          <router-link to="/">
            <span class="logo-single" />
          </router-link>
          <h6 class="mb-4">{{ $t("user.forgot-password") }}</h6>
          <b-form
            @submit.prevent="formSubmit"
            class="av-tooltip tooltip-label-bottom"
          >
            <label class="form-group has-float-label mb-4">
              <input type="email" class="form-control" v-model="email" />
              <span>{{ $t("user.email") }}</span>
            </label>
            <label class="form-group has-float-label mb-4">
              <input type="password" class="form-control" v-model="password" />
              <span>{{ $t("user.password") }}</span>
            </label>
            <div class="d-flex justify-content-between align-items-center">
              <router-link to="/user/login"
                ><u>Click here to Login<i class="simple-icon-login"></i></u
              ></router-link>
              <b-button
                type="submit"
                variant="primary"
                size="lg"
                :disabled="processing"
                :class="{
                  'btn-multiple-state btn-shadow': true,
                  'show-spinner': processing,
                  'show-success': !processing && loginError === false,
                  'show-fail': !processing && loginError,
                }"
              >
                <span class="spinner d-inline-block">
                  <span class="bounce1"></span>
                  <span class="bounce2"></span>
                  <span class="bounce3"></span>
                </span>
                <span class="icon success">
                  <i class="simple-icon-check"></i>
                </span>
                <span class="icon fail">
                  <i class="simple-icon-exclamation"></i>
                </span>
                <span class="label">{{
                  $t("user.reset-password-button")
                }}</span>
              </b-button>
            </div>
          </b-form>
        </div>
      </b-card>
    </b-colxx>
  </b-row>
</template>

<script>
import { validationMixin } from "vuelidate";
import axios from "axios";

import { apiUrl } from "../../constants/config";

const { required, minLength, email } = require("vuelidate/lib/validators");

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  mixins: [validationMixin],
  validations: {
    form: {
      email: {
        required,
        email,
        minLength: minLength(4),
      },
    },
  },
  methods: {
    async formSubmit() {
      this.$v.form.$touch();
      const formdata = {
        email: this.email,
        password: this.password,
      };
      await axios
        .post(apiUrl + "auth/temporaryForgetPassword", formdata)
        .then((res) => {
          if (res.status == 201) {
            this.$notify(
              "Success",
              "Forget Email Success",
              "Changed Password Successfully",
              {
                type: "success",
                duration: 3000,
                permanent: false,
              }
            );
            this.$router.push("/user/login");
          }
        })
        .catch((err) => {
          this.$notify("Error", "Password Reset Failure", err, {
            type: "error",
            duration: 3000,
            permanent: false,
          });
        });
    },
  },
};
</script>
