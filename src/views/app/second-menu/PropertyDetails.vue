<template>
  <div>
    <b-row>
      <b-col xxs="12">
        <h1>{{ details.title }}</h1>
        <div class="top-right-button-container">
          <b-button
            id="ddown5"
            size="lg"
            variant="outline-success"
            class="top-right-button top-right-button-single"
            no-fade="true"
            @click="navigateBack()"
            ><i class="iconsminds-arrow-back" />{{ $t("pages.back") }}</b-button
          >
        </div>
        <!-- <piaf-breadcrumb /> -->
        <div class="separator mb-5"></div>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="7">
        <b-row>
          <b-col cols="6">
            <property-main-feature :property="details" />
            <property-details :property="details" />
          </b-col>
          <b-col cols="6">
            <b-row>
              <property-cost :property="details"/>
              <property-responsible-agent :property="details"/>
            </b-row>
            <property-feature-details :property="details"/>

          </b-col>
        </b-row>
        <b-row>
          <b-col style="min-width: 100%">
            <b-card header-text-variant="dark" class="mb-2">
              <template #header>
                <b-row class="d-flex" no-gutters>
                  <b-col class="d-flex justify-content-start" xxs="9">
                    <h3
                      style="
                        font-family: 'Nunito', sans-serif;
                        font-weight: 400;
                        font-size: 18px;
                        padding-top: 1rem;
                      "
                    >
                      <i class="iconsminds-information"></i>Photos and Documents
                    </h3>
                  </b-col>
                  <b-col class="d-flex justify-content-end" xxs="3">
                    <b-button
                      class="mt-2"
                      style="height: min-content"
                      variant="outline-success"
                    >
                      <i class="iconsminds-pen"></i>Edit</b-button
                    >
                  </b-col>
                </b-row>
              </template>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col xxs="6">
            <b-card header-text-variant="dark" class="mb-2">
              <template #header>
                <b-row class="d-flex" no-gutters>
                  <b-col class="d-flex justify-content-start" xxs="9">
                    <h3
                      style="
                        font-family: 'Nunito', sans-serif;
                        font-weight: 400;
                        font-size: 18px;
                        padding-top: 1rem;
                      "
                    >
                      Status and Publication
                    </h3>
                  </b-col>
                  <b-col class="d-flex justify-content-end" xxs="3">
                    <b-button
                      class="mt-2"
                      style="height: min-content"
                      variant="outline-success"
                    >
                      <i class="iconsminds-pen"></i>Edit</b-button
                    >
                  </b-col>
                </b-row>
              </template>
            </b-card>
          </b-col>
          <b-col xxxs="6">
            <b-card
              footer-bg-variant="white"
              footer-border-variant="light"
              header-text-variant="dark"
              class="mb-2"
            >
              <template #header>
                <b-row class="d-flex" no-gutters>
                  <b-col class="d-flex justify-content-start" xxs="9">
                    <h3
                      style="
                        font-family: 'Nunito', sans-serif;
                        font-weight: 400;
                        font-size: 18px;
                        padding-top: 1rem;
                      "
                    >
                      <i class="iconsminds-profile"></i>Owner
                    </h3>
                  </b-col>
                  <b-col class="d-flex justify-content-end" xxs="3">
                    <b-button
                      class="mt-2"
                      style="height: min-content"
                      variant="outline-success"
                    >
                      <i class="iconsminds-pen"></i>Edit</b-button
                    >
                  </b-col>
                </b-row>
              </template>
              <template #footer>
                <b-row class="d-flex" no-gutters>
                  <b-col class="d-flex justify-content-start" xxs="9">
                    <h3
                      style="
                        font-family: 'Nunito', sans-serif;
                        font-weight: 400;
                        font-size: 18px;
                        padding-top: 1rem;
                      "
                    >
                      <i class="iconsminds-bank"></i>Bank Information
                    </h3>
                  </b-col>
                </b-row>
                <b-row>
                  <!-- <b-col class="rowsLbl" xxs="4">IBAN:</b-col>
                  <b-col xxs="8">why</b-col> -->
                </b-row>
              </template>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="5">
        <b-card header-text-variant="dark" class="mb-2" style="height: 100%">
          <template #header>
            <b-row class="d-flex" no-gutters>
              <b-col class="d-flex justify-content-start" xxs="9">
                <h3
                  style="
                    font-family: 'Nunito', sans-serif;
                    font-weight: 400;
                    font-size: 18px;
                    padding-top: 1rem;
                  "
                >
                  <i class="iconsminds-information"></i>Description
                </h3>
              </b-col>
              <b-col class="d-flex justify-content-end" xxs="3">
                <b-button
                  class="mt-2"
                  style="height: 71%"
                  variant="outline-success"
                >
                  <i class="iconsminds-pen"></i>Edit</b-button
                >
              </b-col>
            </b-row>
          </template>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import { apiUrl } from "../../../constants/config";
import { getCurrentUser } from "../../../utils";
import PropertyMainFeature from "../../../components/property-details/PropertyMainFeature.vue";
import PropertyDetails from "../../../components/property-details/PropertyDetails.vue";
import PropertyCosts from "../../../components/property-details/PropertyCosts.vue"
import PropertyResponsibleAgent from "../../../components/property-details/PropertyResponsibleAgent.vue";
import PropertyFeatureDetails from "../../../components/property-details/PropertyFeaturesDetails.vue";

export default {
  name: "PropertyDetails",
  components: {
    "property-main-feature": PropertyMainFeature,
    "property-details": PropertyDetails,
    "property-cost": PropertyCosts,
    "property-responsible-agent": PropertyResponsibleAgent,
    "property-feature-details":PropertyFeatureDetails,
  },
  mounted() {
    let flag = false;
    let uri = window.location.search.substring(1);
    let id = new URLSearchParams(uri);
    this.propertyID = id.get("p");

    this.propertiesList.forEach((element) => {
      if (element.id == this.propertyID) {
        this.details = element;
        flag = true;
      }
    });

    if (flag == false) {
      var user = getCurrentUser();
      var config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      this.details = axios
        .get(apiUrl + "property/" + this.propertyID, config)
        .then((res) => {
          if (res.status == 200) {
            this.details = res.data;
          }
        })
        .catch((err) => {
          console.log("error");
        });
    }
  },
  computed: {
    ...mapGetters(["propertiesList"]),
  },
  data() {
    return {
      propertyID: Number,
      details: {},
    };
  },
  methods: {
    navigateBack() {
      this.$router.push("/app/second-menu/PropertiesListing");
    },
  },
};
</script>

<style scoped>
#custom-row-card {
  min-width: 250px;
  flex-grow: 1;
  margin-bottom: 10px;
  margin-inline: 15px;
}

.rowsLbl {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 200;
  font-size: 12px;
  color: #717171 !important;
}

.rowsVal {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  color: #212121 !important;
}

h1 {
  text-transform: uppercase;
}
</style>
