<template>
  <div>
    <b-modal
      id="settingPortalInfoCreate"
      ref="settingPortalInfoCreate"
      title="Create Publishings"
      modal-class="modal-right"
    >
      <b-form>
        <b-form-group label="FTP Host">
          <b-form-input
            v-model="ftpHost"
            :state="hostState"
            aria-describedby="input-live-help input-live-feedback"
            required
            :rows="2"
            :max-rows="2"
          />
          <b-form-invalid-feedback id="input-live-feedback">
            Enter correct FTP host url
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group label="Username">
          <b-form-input v-model="userName" :rows="2" :max-rows="2" required />
        </b-form-group>
        <b-form-group label="Password">
          <b-form-input
            v-model="password"
            type="password"
            :rows="2"
            :max-rows="2"
            required
          />
        </b-form-group>
      </b-form>

      <template slot="modal-footer">
        <b-button
          variant="outline-secondary"
          @click="hideModal('settingPortalInfoCreate')"
          >Cancel</b-button
        >
        <b-button variant="primary" @click.prevent="update()" class="mr-1">Save</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { getCurrentUser } from '../../utils';
export default {
  name: "AddNewPublishingsModal",
  data() {
    return {
      ftpHost: "",
      userName: "",
      password: "",
      id: 0,
    };
  },
  methods: {
    ...mapActions({
      createSettings: "createPublishing",
    }),
    async update() {
      let data = {
        ftpHost: this.ftpHost,
        userName: this.userName,
        password: this.password,
      };

      let user = getCurrentUser();
      let id = user.agencyId;

      const res = await this.createSettings({
        pk: id,
        payload: data,
        config: this.config,
      });

      if (res.status == 200 || res.status == 201) {
        this.$notify(
          "Success",
          "Created a new publications host settings successfully",
          res.status,
          {
            type: "success",
            permanent: false,
            duration: 5000,
          }
        );
        this.$emit("fetchPublications");
        this.hideModal("settingPortalInfoCreate");
      }
    },
    validURL(url) {
      let regex = new RegExp(
        /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
      );
      return regex.test(url);
    },
    hideModal(refname) {
      this.$refs[refname].hide();
    },
  },
  computed: {
    ...mapGetters(["config"]),
    hostState() {
      return this.validURL(this.ftpHost) ? true : false;
    },
  },
};
</script>

<style></style>
