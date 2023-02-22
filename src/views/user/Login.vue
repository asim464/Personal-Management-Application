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
          <i class="simple-icon-login" style="font-size: 2rem"></i>
          <h6 class="mb-4">Login</h6>

          <b-form @submit.prevent="formSubmit" class="av-tooltip tooltip-label-bottom">
            <b-form-group label="E-mail" class="has-float-label mb-4">
              <b-form-input
                type="text"
                v-model="$v.form.email.$model"
                :state="!$v.form.email.$error"
              />
              <b-form-invalid-feedback v-if="!$v.form.email.required"
                >Please enter your email address
              </b-form-invalid-feedback>
              <b-form-invalid-feedback v-else-if="!$v.form.email.email"
                >Please enter a valid email address
              </b-form-invalid-feedback>
              <b-form-invalid-feedback v-else-if="!$v.form.email.minLength"
                >Your email must be minimum 4 characters</b-form-invalid-feedback
              >
            </b-form-group>

            <b-form-group label="Password" class="has-float-label mb-4">
              <b-form-input
                type="password"
                v-model="$v.form.password.$model"
                :state="!$v.form.password.$error"
              />
              <b-form-invalid-feedback v-if="!$v.form.password.required"
                >Please enter your password
              </b-form-invalid-feedback>
              <b-form-invalid-feedback
                v-else-if="!$v.form.password.minLength || !$v.form.password.maxLength"
                >Your password must be between 4 and 16
                characters</b-form-invalid-feedback
              >
            </b-form-group>
            <div class="d-flex justify-content-between align-items-center">
              <router-link to="/user/forgot-password">Forgot Password</router-link>
              <b-button
                :disabled="flag === true"
                @click="formSubmit()"
                type="submit"
                variant="primary"
                size="lg"
              >
                <!-- <span class="spinner d-inline-block">
                  <span class="bounce1"></span>
                  <span class="bounce2"></span>
                  <span class="bounce3"></span>
                </span>
                <span class="icon success">
                  <i class="simple-icon-check"></i>
                </span>
                <span class="icon fail">
                  <i class="simple-icon-exclamation"></i>
                </span> -->
                <span class="label">LOGIN</span>
              </b-button>
            </div>
            <!-- <div
              class="
                d-flex
                justify-content-between
                align-items-center
                mt-4
                pl-4
              "
              style="font-weight: 400px; font-size: medium"
            >
            :class="{
                  'btn-multiple-state btn-shadow': true,
                  'show-spinner': flag === true,
                  'show-success': !flag && loginError === false,
                  'show-fail': !flag && loginError,
                }"
              <router-link to="/user/register"
                ><u
                  >Not a member. Click here to Register<i
                    class="iconsminds-add-user"
                  ></i>
                  Now!</u
                ></router-link
              >
            </div> -->
          </b-form>
        </div>
      </b-card>
    </b-colxx>
  </b-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { validationMixin } from "vuelidate";
// import axios from "axios";
// import jwt_decode from "jwt-decode";
// import { apiUrl } from "../../constants/config";
import { adminRoot } from "../../constants/config";
// import { UserRole } from "../../utils/auth.roles";
const { required, maxLength, minLength, email } = require("vuelidate/lib/validators");

export default {
  data() {
    return {
      flag: false,
      form: {
        email: "Admin@gmail.com",
        password: "qwerty123456",
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
    ...mapGetters(["loginError", "isAuthGuardActive"]),
  },
  methods: {
    ...mapActions({
      loginAuthApi: "loginAuth",
    }),

    async formSubmit() {
      this.flag = true;
      this.$v.$touch();
      this.$v.form.$touch();
      if ((this.form.email == "example@ex.com") & (this.form.password == "xxxxxxx")) {
        this.$notify(
          "Error",
          "Kindly change default credentials to login",
          "Code:" + res.status + ", Message:" + res.statusText,
          {
            type: "error",
            duration: 5000,
            permanent: false,
          }
        );
      } else {
        var payload = {
          email: this.form.email,
          password: this.form.password,
        };

        const res = await this.loginAuthApi({
          payload: payload,
        });

        if (res.status == 201) {
          this.$notify(
            "Success",
            "Login Success",
            "Code:" + res.status + ", Message:" + res.statusText,
            {
              type: "success",
              duration: 5000,
              permanent: false,
            }
          );
          this.$nextTick(() => {
            this.$router.push(adminRoot);
          });
        } else {
          this.$notify(
            "Error",
            "Username or Password Incorrect",
            "Code:" + res.status + ", Message:" + res.statusText,
            {
              type: "error",
              duration: 5000,
              permanent: false,
            }
          );
        }
      }
    },
  },
};
</script>
