<template>
  <div>
    <b-modal
      id="settingPortalInfoEdit"
      ref="settingPortalInfoEdit"
      title="Edit Publishings"
      modal-class="modal-right"
    >
      <b-form>
        <b-form-group label="FTP Host">
          <b-form-input
            v-model="item.ftpHost"
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
          <b-form-input v-model="item.userName" :rows="2" :max-rows="2" required />
        </b-form-group>
        <b-form-group label="Password">
          <b-form-input
            v-model="item.password"
            type="password"
            :rows="2"
            :max-rows="2"
            required
          />
        </b-form-group>
      </b-form>

      <template slot="modal-footer">
        <b-button variant="outline-secondary" @click="hideModal('settingPortalInfoEdit')"
          >Cancel</b-button
        >
        <b-button variant="primary" @click.prevent="update()" class="mr-1"
          >Save</b-button
        >
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "UpdatePublishingsModal",
  props: {
    item: {},
  },
  methods: {
    ...mapActions({
      updateSettings: "updatePublishing",
    }),
    async update() {
      let data = {
        ftpHost: this.item.ftpHost,
        userName: this.item.userName,
        password: this.item.password,
      };

      const res = await this.updateSettings({
        pk: this.item.id,
        payload: data,
        config: this.config,
      });

      if (res.status == 200 || res.status == 201) {
        this.$notify(
          "Success",
          "Updated publications host settings successfully",
          res.status,
          {
            type: "success",
            permanent: false,
            duration: 5000,
          }
        );
        this.$emit("fetchPublishings");
        this.hideModal("settingPortalInfoEdit");
        window.location.reload();
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
      return this.validURL(this.item.ftpHost) ? true : false;
    },
  },
};
</script>

<style></style>
