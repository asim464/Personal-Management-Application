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
                  v-b-modal.settingPortalInfoEdit
                >
                  <i class="iconsminds-pen"></i>Edit</b-button
                >
              </b-col>
            </b-row>
          </template>
          <b-card-body>
            <b-row>
                <h6 class="portal-name"></h6>
            </b-row>
          </b-card-body>
        </b-card>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
import { getCurrentUser } from "@/utils";
import { PortalsIcon } from "@/components/Svg";

export default {
  name: "Settings",
  components: {
    "portal-icon": PortalsIcon,
  },
  data() {
    return {
      agencyName: "",
    };
  },
  mounted() {
    let user = getCurrentUser();
    console.log(user);
    this.agencyName = user.agencyName;
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
