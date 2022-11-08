<template>
  <b-row class="h-100">
    <b-colxx xxs="12" md="10" class="mx-auto my-auto">
      <b-card class="auth-card" no-body>
        <div class="position-relative image-side">
          <p class="white mb-0">
            Please use your credentials to login.
            <br />If you are not a member, please
            <router-link to="/user/register" class="white">register</router-link>.
          </p>
        </div>
        <div class="form-side">
          <router-link to="/">
            <span class="logo-single" />
          </router-link>
          <h6 class="mb-4">Login</h6>

          <b-form @submit.prevent="formSubmit" class="av-tooltip tooltip-label-bottom">
            <b-form-group label="E-mail" class="has-float-label mb-4">
              <b-form-input type="text" v-model="$v.form.email.$model" :state="!$v.form.email.$error" />
              <b-form-invalid-feedback v-if="!$v.form.email.required">Please enter your email address
              </b-form-invalid-feedback>
              <b-form-invalid-feedback v-else-if="!$v.form.email.email">Please enter a valid email address
              </b-form-invalid-feedback>
              <b-form-invalid-feedback v-else-if="!$v.form.email.minLength">Your email must be minimum 4
                characters</b-form-invalid-feedback>
            </b-form-group>

            <b-form-group label="Password" class="has-float-label mb-4">
              <b-form-input type="password" v-model="$v.form.password.$model" :state="!$v.form.password.$error" />
              <b-form-invalid-feedback v-if="!$v.form.password.required">Please enter your password
              </b-form-invalid-feedback>
              <b-form-invalid-feedback v-else-if="
                !$v.form.password.minLength || !$v.form.password.maxLength
              ">Your password must be between 4 and 16
                characters</b-form-invalid-feedback>
            </b-form-group>
            <div class="d-flex justify-content-between align-items-center">
              <router-link to="/user/forgot-password">Forgot Password</router-link>
              <b-button :click="formSubmit" type="submit" variant="primary" size="lg" :disabled="processing" :class="{
                'btn-multiple-state btn-shadow': true,
                'show-spinner': processing,
                'show-success': !processing && loginError === false,
                'show-fail': !processing && loginError,
              }">
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
                <span class="label">LOGIN</span>
              </b-button>
            </div>
            <div class="
                d-flex
                justify-content-between
                align-items-center
                mt-4
                pl-4
              " style="font-weight: 400px; font-size: medium">
              <router-link to="/user/register"><u>Not a member. Click here to Register Now!</u></router-link>
            </div>
          </b-form>
        </div>
      </b-card>
    </b-colxx>
  </b-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { validationMixin } from "vuelidate";
const {
  required,
  maxLength,
  minLength,
  email,
} = require("vuelidate/lib/validators");
import { adminRoot } from "../../constants/config";

export default {
  data() {
    return {
      form: {
        email: "example@ex.com",
        password: "xxxxxxx",
      },
    };
  },
  mixins: [validationMixin],
  validations: {
    form: {
      password: {
        required,
        maxLength: maxLength(16),
        minLength: minLength(4),
      },
      email: {
        required,
        email,
        minLength: minLength(4),
      },
    },
  },
  computed: {
    ...mapGetters(["processing", "loginError", "isAuthGuardActive"]),
  },
  methods: {
    ...mapActions(["login"]),
    formSubmit() {
      this.$v.$touch();
      this.$v.form.$touch();

      if (

        (this.form.email == "example@ex.com") &
        (this.form.password == "xxxxxxx")
      ) {
        this.$bvToast.toast(
          "Kindly change default credentials and try again.",
          {
            title: "Invalid Credentials",
            variant: "warning",
            solid: true,
            toaster: "b-toaster-top-center",
          }
        );
      } else {
        var res = this.login({
          email: this.form.email,
          password: this.form.password,
        });
        if (res == true) {
          this.$bvToast.toast("Logged in successfully", {
            title: "Logged In",
            variant: "success",
            solid: true,
            toaster: "b-toaster-top-center",
          });
          this.$router.push("/app");
          
        } else {
          this.$bvToast.toast("E-mail or Password incorrect. Kindly re-check.", {
            title: "Invalid Credentials",
            variant: "danger",
            solid: true,
            toaster: "b-toaster-top-center",
          });
        }
      }
      // if (!this.$v.form.$anyError) {

      //}
    },
  },
  // watch: {
  //   currentUser(val) {
  //     if (val && val.uid && val.uid.length > 0) {
  //       setTimeout(() => {
  //         this.$router.push(adminRoot);
  //       }, 200);
  //     }
  //   },
  //   loginError(val) {
  //     if (val != null) {
  //       this.$notify("error", "Login Error", val, {
  //         duration: 3000,
  //         permanent: false,
  //       });
  //     }
  //   },
  // },
};
</script>
