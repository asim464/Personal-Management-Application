<template>
  <div>
    <b-row>
      <b-col xxs="12">
        <h1>
          {{ details.title }}
        </h1>
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
            <property-main-feature
              :property="details"
              @fetchProperty="fetchProperty"
            />
            <property-details
              :property="details"
              @fetchProperty="fetchProperty"
            />
          </b-col>
          <b-col cols="6">
            <b-row>
              <property-cost
                :property="details"
                @fetchProperty="fetchProperty"
              />
              <property-responsible-agent
                :property="details"
                @fetchProperty="fetchProperty"
              />
            </b-row>
            <property-feature-details
              :property="details"
              @fetchProperty="fetchProperty"
            />
          </b-col>
        </b-row>
        <b-row>
          <b-col style="min-width: 100%">
            <property-media :property="details" @fetchProperty="fetchProperty" />
          </b-col>
        </b-row>
        <b-row>
          <b-col xxs="6">
            <property-status-publication
              :property="details"
              @fetchProperty="fetchProperty"
            />
          </b-col>
          <b-col xxxs="6">
            <property-owner
              :property="details"
              @fetchProperty="fetchProperty"
            />
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="5">
        <property-description :property="details" @fetchProperty="fetchProperty" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PropertyMainFeature from "../../../components/property-details/PropertyMainFeature.vue";
import PropertyDetailed from "../../../components/property-details/PropertyDetailed.vue";
import PropertyCosts from "../../../components/property-details/PropertyCosts.vue";
import PropertyResponsibleAgent from "../../../components/property-details/PropertyResponsibleAgent.vue";
import PropertyFeatureDetails from "../../../components/property-details/PropertyFeaturesDetails.vue";
import PropertyMedia from "../../../components/property-details/PropertyMedia.vue";
import PropertyOwner from "../../../components/property-details/PropertyOwner.vue";
import PropertyDescription from "../../../components/property-details/PropertyDescription.vue";
import PropertyStatusPublication from "../../../components/property-details/PropertyStatusPublication.vue";

export default {
  name: "PropertyDetails",
  components: {
    "property-main-feature": PropertyMainFeature,
    "property-details": PropertyDetailed,
    "property-cost": PropertyCosts,
    "property-responsible-agent": PropertyResponsibleAgent,
    "property-feature-details": PropertyFeatureDetails,
    "property-media": PropertyMedia,
    "property-owner": PropertyOwner,
    "property-description": PropertyDescription,
    "property-status-publication": PropertyStatusPublication,
  },
  data() {
    return {
      propertyID: Number,
      details: {},
    };
  },
  async mounted() {
    this.fetchProperty();
  },
  methods: {
    ...mapActions({
      getPropertyById: "getPropertyById",
    }),
    navigateBack() {
      this.$router.push("/app/second-menu/PropertiesListing");
    },
    async fetchProperty() {
      let uri = window.location.search.substring(1);
      let id = new URLSearchParams(uri);
      this.propertyID = id.get("p");

      const res = await this.getPropertyById({
        pk: this.propertyID,
        config: this.config,
      });

      if (res.status == 200) {
        this.details = res.data;
        this.$notify(
          "success",
          "Property data fetched successfully",
          res.status,
          {
            type: "success",
            duration: 5000,
            permanent: false,
          }
        );
      }
    },
  },
  computed: {
    ...mapGetters(["config"]),
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
