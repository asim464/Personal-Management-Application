<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="agencyName + '—' + $t('menu.settings')" />
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12">
        <b-card
          class="mb-4"
          header-text-variant="dark"
          style="min-width: 543px; width: max-content"
        >
          <template #header>
            <b-row>
              <b-col xxs="9">
                <h3 class="card-title">
                  <portal-icon />
                  <span>Portals</span>
                </h3>
              </b-col>
              <b-col class="d-flex justify-content-end" xxs="3">
                <b-button
                  class="mt-2"
                  style="height: min-content"
                  variant="outline-success"
                  v-b-modal.settingPortalInfoCreate
                >
                  <i class="iconsminds-add"></i>Create</b-button
                >
              </b-col>
              <create-publishing-modal :agencyID="agencyID" @fetchPublishings="loadPublishings" />
            </b-row>
          </template>
          <template v-if="settings === null">
            <b-row class="m-1">
              <h4
                @mouseover="isHovering = true"
                @mouseout="isHovering = false"
                style="text-align: center; cursor: pointer"
              >
                <i
                  class="iconsminds-information"
                  style="align-items: center; display: inline-flex"
                ></i
                ><br />No data available.<br />
                Click edit button to add data.
              </h4>
            </b-row>
          </template>
          <template v-else>
            <b-card-text>
              <div v-for="data in settings" :key="data.id" class="pl-2" :class="data == settings[0]?'':'pt-3'">
                <b-row style="text-transform: uppercase"
                  ><b-col>{{ data.hostname }}</b-col
                  ><b-col class="d-flex flex-row-reverse mb-2"
                    ><b-button variant="outline-success" v-b-modal.settingPortalInfoEdit @click="selectedItem = data">
                      <i class="iconsminds-pen"></i>Edit</b-button
                    ></b-col
                  >
                  </b-row
                >
                <b-row class="m-1">
                  <b-col cols="4"> Host: </b-col>
                  <input cols="8" type="text" v-model="data.ftpHost" style="width:max-content!important;" disabled />
                </b-row>
                <b-row class="m-1">
                  <b-col cols="4"> Password: </b-col>
                  <input cols="8" type="password" v-model="data.password" style="width:min-content" disabled />
                </b-row>
              </div>
              <edit-publishing-modal :item="selectedItem" @fetchPublishings="loadPublishings" />
            </b-card-text>
          </template>
        </b-card>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
import { getCurrentUser } from "@/utils";
import { PortalsIcon } from "@/components/Svg";
import { mapActions, mapGetters } from "vuex";
import UpdatePublishingsModal from "../../../components/Form/UpdatePublishingsModal.vue";
import AddNewPublishingsModal from '../../../components/Form/AddNewPublishingsModal.vue';

export default {
  name: "Settings",
  components: {
    "portal-icon": PortalsIcon,
    "edit-publishing-modal": UpdatePublishingsModal,
    "create-publishing-modal": AddNewPublishingsModal,
  },
  data() {
    return {
      agencyName: "",
      agencyID: "",
      settings: [],
      isHovering: false,
      selectedItem: {},
    };
  },
  mounted() {
    let user = getCurrentUser();
    // console.log(user);
    this.agencyName = user.agencyName;
    this.agencyID = user.agencyId;
    this.loadPublishings();
    // console.log(this.agencyName);
  },
  methods: {
    ...mapActions({
      getSettings: "getPublishing",
    }),
    async loadPublishings() {
      const res = await this.getSettings({
        config: this.config,
      });

      if (res.status === 200 || res.status === 201) {
        var getLocation = function (href) {
          var l = document.createElement("a");
          l.href = href;
          return l;
        };
        res.data.forEach((element) => {
          if (element.agencyId == this.agencyID) {
            let l = getLocation(element.ftpHost);
            let ln = l.hostname;
            let el = {
              ...element,
              hostname: ln.substring(0, ln.indexOf('.')),
            };
            this.settings.push(el);
          }
        });
        this.$store.dispatch("setPublishList", this.settings);
        this.$notify("Success", "Settings loaded successfully", res.status, {
          type: "success",
          permanent: false,
          duration: 5000,
        });
      } else if (res.status === 400 || res.status === 401) {
        this.$notify("Error", "Settings could not be loaded", res.status, {
          type: "error",
          permanent: false,
          duration: 5000,
        });
      }
    },
  },
  computed: {
    ...mapGetters(["config"]),
  },
};
</script>

<style>
.card-title {
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-size: 18px;
  padding-top: 1rem;
}
/* .portal-name {

} */
.portal-text {
  font-family: Nunito;
  font-size: 12px;
  font-weight: 300;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
}
/* .portal-info {

} */
</style>
