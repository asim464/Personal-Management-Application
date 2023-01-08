<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
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
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx cols="7">
        <b-row>
          <b-colxx cols="6">
            <b-card header-text-variant="dark" class="mb-2">
              <template #header>
                <b-row class="d-flex" no-gutters>
                  <b-colxx class="d-flex justify-content-start" xxs="9">
                    <h3
                      style="
                        font-family: 'Nunito', sans-serif;
                        font-weight: 400;
                        font-size: 18px;
                        padding-top: 1rem;
                      "
                    >
                      <i class="iconsminds-map-marker"></i>Main Features
                    </h3>
                  </b-colxx>
                  <b-colxx class="d-flex justify-content-end" xxs="3">
                    <b-button
                      class="mt-2"
                      style="height: 71%"
                      variant="outline-success"
                      v-b-modal.mainFeaturesModal
                    >
                      <i class="iconsminds-pen"></i>Edit</b-button
                    >
                  </b-colxx>
                </b-row>
              </template>
              <b-card-text>
                <b-row class="ml-2">
                  <b-col class="rowsLbl" cols="6">Rooms:</b-col>
                  <b-col
                    v-if="
                      details.length == 0 || details.mainFeature.length == 0
                    "
                    cols="6"
                    ><p class="rowsVal">N/A</p></b-col
                  >
                  <b-col v-else
                    ><p class="rowsVal">
                      {{ details.mainFeature.Rooms }}
                    </p></b-col
                  >
                </b-row>
                <b-row class="ml-2">
                  <b-col class="rowsLbl" cols="6">Living Space:</b-col>
                  <b-col
                    v-if="
                      details.length == 0 || details.mainFeature.length == 0
                    "
                    cols="6"
                    ><p class="rowsVal">N/A &#13217;</p></b-col
                  >
                  <b-col v-else
                    ><p class="rowsVal">
                      {{ details.mainFeature.LeavingSpace }}
                    </p></b-col
                  >
                </b-row>
                <b-row class="ml-2">
                  <b-col class="rowsLbl" cols="6">Street & Nr:</b-col>
                  <b-col
                    v-if="
                      details.length == 0 || details.mainFeature.length == 0
                    "
                    cols="6"
                    ><p class="rowsVal">N/A</p></b-col
                  >
                  <b-col v-else
                    ><p class="rowsVal">
                      {{ details.mainFeature.Street }}
                    </p></b-col
                  >
                </b-row>
                <b-row class="ml-2">
                  <b-col class="rowsLbl" cols="6">Zip Code & City:</b-col>
                  <b-col
                    v-if="
                      details.length == 0 || details.mainFeature.length == 0
                    "
                    cols="6"
                    ><p class="rowsVal">N/A</p></b-col
                  >
                  <b-col v-else
                    ><p class="rowsVal">
                      {{ details.mainFeature.ZipCodeOrCity }}
                    </p></b-col
                  >
                </b-row>
                <b-row class="ml-2">
                  <b-col class="rowsLbl" cols="6">Available:</b-col>
                  <b-col
                    v-if="
                      details.length == 0 || details.mainFeature.length == 0
                    "
                    cols="6"
                    ><p class="rowsVal">N/A</p></b-col
                  >
                  <b-col v-else
                    ><p class="rowsVal">
                      {{ details.mainFeature.Availibility }}
                    </p></b-col
                  >
                </b-row>
              </b-card-text>
            </b-card>
            <b-card header-text-variant="dark" class="mb-2">
              <template #header>
                <b-row class="d-flex" no-gutters>
                  <b-colxx class="d-flex justify-content-start" xxs="9">
                    <h3
                      style="
                        font-family: 'Nunito', sans-serif;
                        font-weight: 400;
                        font-size: 18px;
                        padding-top: 1rem;
                      "
                    >
                      <i class="iconsminds-information"></i>Details
                    </h3>
                  </b-colxx>
                  <b-colxx class="d-flex justify-content-end" xxs="3">
                    <b-button
                      class="mt-2"
                      style="height: 71%"
                      variant="outline-success"
                      v-b-modal.detailsModal
                    >
                      <i class="iconsminds-pen"></i>Edit</b-button
                    >
                  </b-colxx>
                </b-row>
              </template>
              <b-card-text>
                <b-row class="ml-2">
                  <b-col class="rowsLbl" cols="6">Floors:</b-col>
                  <b-col
                    v-if="
                      details.length == 0 ||
                      details.propertyDetail.length == 0 ||
                      details.propertyDetail.Floors == 0
                    "
                    cols="6"
                    ><p class="rowsVal">N/A</p></b-col
                  >
                  <b-col v-else
                    ><p class="rowsVal">
                      {{ details.propertyDetail.Floors }}
                    </p></b-col
                  >
                </b-row>
                <b-row class="ml-2">
                  <b-col class="rowsLbl" cols="6">Number Of Floors:</b-col>
                  <b-col
                    v-if="
                      details.length == 0 ||
                      details.propertyDetail.length == 0 ||
                      details.propertyDetail.numberOfFloors == 0
                    "
                    cols="6"
                    ><p class="rowsVal">N/A</p></b-col
                  >
                  <b-col class="rowsVal" v-else
                    ><p class="rowsVal">
                      {{ details.propertyDetail.numberOfFloors }}
                    </p></b-col
                  >
                </b-row>
                <b-row class="ml-2">
                  <b-col class="rowsLbl" cols="6"
                    >Lot Size in (&#13217;):</b-col
                  >
                  <b-col
                    v-if="
                      details.length == 0 ||
                      details.propertyDetail.length == 0 ||
                      details.propertyDetail.lotDetailSizeInM2 == 0
                    "
                    cols="6"
                    ><p class="rowsVal">N/A</p></b-col
                  >
                  <b-col class="rowsVal" v-else
                    ><p class="rowsVal">
                      {{ details.propertyDetail.lotDetailSizeInM2 }}
                    </p></b-col
                  >
                </b-row>
                <b-row class="ml-2">
                  <b-col class="rowsLbl" cols="6">Room Height:</b-col>
                  <b-col
                    v-if="
                      details.length == 0 ||
                      details.propertyDetail.roomsHeight == 0 ||
                      details.propertyDetail.length == 0
                    "
                    cols="6"
                    ><p class="rowsVal">N/A</p></b-col
                  >
                  <b-col v-else
                    ><p class="rowsVal">
                      {{ details.propertyDetail.roomsHeight }}
                    </p></b-col
                  >
                </b-row>
                <b-row class="ml-2">
                  <b-col class="rowsLbl" cols="6">Year Built:</b-col>
                  <b-col
                    v-if="
                      details.length == 0 ||
                      details.propertyDetail.length == 0 ||
                      details.propertyDetail.yearBuilt == 0
                    "
                    cols="6"
                    ><p class="rowsVal">N/A</p></b-col
                  >
                  <b-col v-else
                    ><p class="rowsVal">
                      {{ details.propertyDetail.yearBuilt }}
                    </p></b-col
                  >
                </b-row>
                <b-row class="ml-2">
                  <b-col class="rowsLbl" cols="6"
                    >Floor Space (&#13217;):</b-col
                  >
                  <b-col
                    v-if="
                      details.length == 0 ||
                      details.propertyDetail.length == 0 ||
                      details.propertyDetail.floorSpaceM2 == 0
                    "
                    cols="6"
                    ><p class="rowsVal">N/A</p></b-col
                  >
                  <b-col v-else
                    ><p class="rowsVal">
                      {{ details.propertyDetail.floorSpaceM2 }}
                    </p></b-col
                  >
                </b-row>
                <b-row class="ml-2">
                  <b-col class="rowsLbl" cols="6">Volume in (&#x33A5;):</b-col>
                  <b-col
                    v-if="
                      details.length == 0 ||
                      details.propertyDetail.length == 0 ||
                      details.propertyDetail.volumeInM3 == 0
                    "
                    cols="6"
                    ><p class="rowsVal">N/A</p></b-col
                  >
                  <b-col v-else
                    ><p class="rowsVal">
                      {{ details.propertyDetail.volumeInM3 }}
                    </p></b-col
                  >
                </b-row>
                <b-row class="ml-2">
                  <b-col class="rowsLbl" cols="6">Last Renovation:</b-col>
                  <b-col
                    v-if="
                      details.length == 0 ||
                      details.propertyDetail.length == 0 ||
                      details.propertyDetail.lastRenovation == 0
                    "
                    cols="6"
                    ><p class="rowsVal">N/A</p></b-col
                  >
                  <b-col v-else
                    ><p class="rowsVal">
                      {{ details.propertyDetail.lastRenovation }}
                    </p></b-col
                  >
                </b-row>
              </b-card-text>
            </b-card>
          </b-colxx>
          <b-colxx cols="6">
            <b-row>
              <b-card id="custom-row-card" header-text-variant="dark">
                <template #header>
                  <b-row class="d-flex">
                    <b-colxx class="d-flex justify-content-start" xxs="9">
                      <h3
                        style="
                          font-family: 'Nunito', sans-serif;
                          font-weight: 400;
                          font-size: 18px;
                          padding-top: 1rem;
                        "
                      >
                        <i class="iconsminds-pricing"></i>Costs
                      </h3>
                    </b-colxx>
                    <b-colxx class="d-flex justify-content-end" xxs="3">
                      <b-button
                        class="mt-2"
                        style="height: 71%"
                        variant="outline-success"
                        v-b-modal.costsModal
                      >
                        <i class="iconsminds-pen"></i>Edit</b-button
                      >
                    </b-colxx>
                  </b-row>
                </template>
                <b-card-text>
                  <b-row class="ml-2">
                    <b-col class="rowsLbl" cols="6">Type:</b-col>
                    <b-col
                      v-if="details.length == 0 || details.paymentType == 0"
                      cols="6"
                      ><p class="rowsVal">N/A</p></b-col
                    >
                    <b-col v-else
                      ><p class="rowsVal">{{ details.paymentType }}</p></b-col
                    >
                  </b-row>
                  <b-row class="ml-2">
                    <b-col class="rowsLbl" cols="6">Price:</b-col>
                    <b-col
                      v-if="details.length == 0 || details.price == 0"
                      cols="6"
                      ><p class="rowsVal">N/A</p></b-col
                    >
                    <b-col v-else
                      ><p class="rowsVal">CHF {{ details.price }}</p></b-col
                    >
                  </b-row>
                </b-card-text>
              </b-card>
              <b-card id="custom-row-card" header-text-variant="dark">
                <template #header>
                  <b-row class="d-flex">
                    <b-colxx class="d-flex justify-content-start" xxs="9">
                      <h3
                        style="
                          font-family: 'Nunito', sans-serif;
                          font-weight: 400;
                          font-size: 18px;
                          padding-top: 1rem;
                        "
                      >
                        <i class="iconsminds-project"></i>Responsible Agent
                      </h3>
                    </b-colxx>
                    <b-colxx class="d-flex justify-content-end" xxs="3">
                      <b-button
                        class="mt-2"
                        style="height: 71%"
                        variant="outline-success"
                        v-b-modal.costsModal
                      >
                        <i class="iconsminds-pen"></i>Edit</b-button
                      >
                    </b-colxx>
                  </b-row>
                </template>
                <b-card-text>
                  <b-row class="ml-2">
                    <b-col class="rowsLbl" cols="6">Agent:</b-col>
                    <b-col
                      v-if="details.length == 0 || details.agentAssigned == 0"
                      cols="6"
                      ><p class="rowsVal">N/A</p></b-col
                    >
                    <b-col v-else
                      ><p class="rowsVal">{{ details.agentAssigned }}</p></b-col
                    >
                  </b-row>
                </b-card-text>
              </b-card>
            </b-row>
            <b-card header-text-variant="dark" class="mb-2">
              <template #header>
                <b-row class="d-flex" no-gutters>
                  <b-colxx class="d-flex justify-content-start" xxs="9">
                    <h3
                      style="
                        font-family: 'Nunito', sans-serif;
                        font-weight: 400;
                        font-size: 18px;
                        padding-top: 1rem;
                      "
                    >
                      <i class="iconsminds-information"></i>Features and
                      Furnishings
                    </h3>
                  </b-colxx>
                  <b-colxx class="d-flex justify-content-end" xxs="3">
                    <b-button
                      class="mt-2"
                      style="height: min-content"
                      variant="outline-success"
                      v-b-modal.mainFeaturesModal
                    >
                      <i class="iconsminds-pen"></i>Edit</b-button
                    >
                  </b-colxx>
                </b-row>
              </template>
            </b-card>
          </b-colxx>
        </b-row>
        <b-row>
          <b-colxx style="min-width: 100%">
            <b-card header-text-variant="dark" class="mb-2">
              <template #header>
                <b-row class="d-flex" no-gutters>
                  <b-colxx class="d-flex justify-content-start" xxs="9">
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
                  </b-colxx>
                  <b-colxx class="d-flex justify-content-end" xxs="3">
                    <b-button
                      class="mt-2"
                      style="height: min-content"
                      variant="outline-success"
                      v-b-modal.mainFeaturesModal
                    >
                      <i class="iconsminds-pen"></i>Edit</b-button
                    >
                  </b-colxx>
                </b-row>
              </template>
            </b-card>
          </b-colxx>
        </b-row>
      </b-colxx>
      <b-colxx cols="5">
        <b-card header-text-variant="dark" class="mb-2" style="height: 97%">
          <template #header>
            <b-row class="d-flex" no-gutters>
              <b-colxx class="d-flex justify-content-start" xxs="9">
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
              </b-colxx>
              <b-colxx class="d-flex justify-content-end" xxs="3">
                <b-button
                  class="mt-2"
                  style="height: 71%"
                  variant="outline-success"
                  v-b-modal.mainFeaturesModal
                >
                  <i class="iconsminds-pen"></i>Edit</b-button
                >
              </b-colxx>
            </b-row>
          </template>
        </b-card>
      </b-colxx>
    </b-row>
    <!-- <b-row>
      <b-colxx xxs="12">
        <h1>Magdalena Cake</h1>
        <div class="top-right-button-container">
          <b-button
            id="ddown5"
            size="lg"
            variant="outline-primary"
            class="top-right-button top-right-button-single"
            no-fade="true"
            @click="navigateBack()"
            ><i class="iconsminds-arrow-back" />{{ $t("pages.back") }}</b-button
          >
        </div>
        <piaf-breadcrumb />
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <b-row>
      <b-colxx xxs="12" xl="8" class="col-left">
        <b-card class="mb-4" no-body>
          <b-card-body>
            <glide-component-thumbs
              :settingsImages="{
                bound: true,
                rewind: false,
                focusAt: 0,
                startAt: 0,
                gap: 5,
                perView: 1,
                data: detailImages,
              }"
              :settingsThumbs="{
                bbound: true,
                rewind: false,
                focusAt: 0,
                startAt: 0,
                gap: 10,
                perView: 5,
                data: detailThumbs,
                breakpoints: { 576: { perView: 4 }, 420: { perView: 3 } },
              }"
            />
          </b-card-body>
        </b-card>

        <b-card class="mb-4" no-body>
          <b-tabs card no-fade>
            <b-tab :title="$t('pages.details-title')" active>
              <b-row>
                <b-colxx sm="12">
                  <b-card-text>
                    <p class="font-weight-bold">Augue Vitae Commodo</p>
                    <p>
                      Vivamus ultricies augue vitae commodo condimentum.
                      Nullamfaucibus eros eu mauris feugiat, eget consectetur
                      tortor tempus. Sed volutpatmollis dui eget fringilla.
                      Vestibulum blandit urna ut tellus lobortis
                      tristique.Vestibulum ante ipsum primis in faucibus orci
                      luctus et ultrices posuere cubiliaCurae; Pellentesque quis
                      cursus mauris. Nam in ornare erat. Vestibulum
                      convallisenim ac massa dapibus consectetur. Maecenas
                      facilisis eros ac felis mattis, egetauctor sapien varius.
                      <br />
                      <br />
                      Nulla non purus fermentum, pulvinar dui condimentum,
                      malesuada nibh. Sed viverra quam urna, at condimentum ante
                      viverra non. Mauris posuere erat sapien, a convallis
                      libero lobortis sit amet. Suspendisse in orci tellus.
                    </p>
                    <br />
                    <p class="font-weight-bold">Phasellus Efficitur</p>
                    <p>
                      Tellus a sem condimentum, vitae convallis sapien
                      feugiat.Aenean non nibh nec nunc aliquam iaculis. Ut quis
                      suscipit nunc. Duis at lectusa est aliquam venenatis vitae
                      eget arcu. Sed egestas felis eget convallismaximus.
                      Curabitur maximus, ligula vel sagittis iaculis, risus nisi
                      tinciduntsem, ut ultricies libero nulla eu ligula. Nam
                      ultricies mollis nulla, sedlaoreet leo convallis ac.
                      Mauris nisl risus, tincidunt ac diam aliquet,convallis
                      pellentesque nisi. Nam sit amet libero at odio malesuada
                      ultricies avitae dolor. Cras in viverra felis, non
                      consequat quam. Praesent a orci enim.Vivamus porttitor
                      nisi at nisl egestas iaculis. Nullam commodo eget
                      duisollicitudin sagittis. Duis id nibh mollis, hendrerit
                      metus consectetur,ullamcorper risus. Morbi elementum
                      ultrices nunc, quis porta nisi ornare sitamet.
                      <br />
                      <br />
                      Etiam tincidunt orci in nisi aliquam placerat. Aliquam
                      finibus in sem utvehicula. Morbi eget consectetur leo.
                      Quisque consectetur lectus eros, sedsodales libero ornare
                      cursus. Etiam elementum ut dolor eget
                      hendrerit.Suspendisse eu lacus eu eros lacinia feugiat sit
                      amet non purus.
                      <br />
                      <br />
                      Pellentesque quis cursus mauris. Nam in ornare erat.
                      Vestibulum convallis enim ac massa dapibus consectetur.
                      Maecenas facilisis eros ac felis mattis, eget auctor
                      sapien varius.
                    </p>
                    <br />
                    <p class="font-weight-bold">Elementum Ultrices</p>
                    <b-table borderless :items="tableItems" />
                  </b-card-text>
                </b-colxx>
              </b-row>
            </b-tab>
            <b-tab :title="`${$t('pages.comments-title')} (19)`">
              <b-row>
                <b-colxx sm="12">
                  <b-card-text>
                    <comment-with-likes
                      v-for="(item, index) in commentWithLikesData"
                      :data="item"
                      :key="`comment_${index}`"
                    ></comment-with-likes>

                    <b-input-group class="comment-contaiener">
                      <b-form-input :placeholder="$t('pages.addComment')" />
                      <b-input-group-append>
                        <b-button variant="primary">
                          <span class="d-inline-block">{{
                            $t("pages.send")
                          }}</span>
                          <i class="simple-icon-arrow-right ml-2"></i>
                        </b-button>
                      </b-input-group-append>
                    </b-input-group>
                  </b-card-text>
                </b-colxx>
              </b-row>
            </b-tab>
            <b-tab :title="`${$t('pages.questions-title')} (6)`">
              <b-row>
                <b-colxx sm="12">
                  <b-card-text>
                    <question-answer
                      v-for="(item, index) in detailsQuestionsData"
                      :data="item"
                      :key="`question_${index}`"
                    ></question-answer>
                  </b-card-text>
                </b-colxx>
              </b-row>
            </b-tab>
          </b-tabs>
        </b-card>
      </b-colxx>
      <b-colxx xxs="12" xl="4" class="col-right">
        <b-card class="mb-4">
          <div class="mb-3">
            <div class="post-icon mr-3 d-inline-block">
              <router-link to="#">
                <i class="simple-icon-heart mr-1"></i>
              </router-link>
              <span>4 {{ $t("pages.likes") }}</span>
            </div>

            <div class="post-icon mr-3 d-inline-block">
              <router-link to="#">
                <i class="simple-icon-bubble mr-1"></i>
              </router-link>
              <span>2 {{ $t("pages.comments-title") }}</span>
            </div>
          </div>
          <p class="mb-3">
            Vivamus ultricies augue vitae commodo condimentum. Nullam faucibus
            eros eu mauris feugiat, eget consectetur tortor tempus.
            <br /><br />
            Sed volutpat mollis dui eget fringilla. Vestibulum blandit urna ut
            tellus lobortis tristique. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia Curae; Pellentesque quis
            cursus mauris.
            <br /><br />
            Nulla non purus fermentum, pulvinar dui condimentum, malesuada nibh.
            Sed viverra quam urna, at condimentum ante viverra non. Mauris
            posuere erat sapien, a convallis libero lobortis sit amet.
            Suspendisse in orci tellus.
          </p>
          <p class="text-muted text-small mb-2">{{ $t("forms.tags") }}</p>
          <p class="mb-3">
            <b-badge variant="outline-secondary" class="mb-1 mr-1" pill
              >FRONTEND</b-badge
            >
            <b-badge variant="outline-secondary" class="mb-1 mr-1" pill
              >JAVASCRIPT</b-badge
            >
            <b-badge variant="outline-secondary" class="mb-1 mr-1" pill
              >SECURITY</b-badge
            >
            <b-badge variant="outline-secondary" class="mb-1 mr-1" pill
              >DESIGN</b-badge
            >
          </p>
        </b-card>
        <b-card class="mb-4">
          <b-card-title>{{ $t("pages.similar-projects") }}</b-card-title>
          <gallery-detail />
        </b-card>
      </b-colxx>
    </b-row> -->
  </div>
</template>

<script>
import $ from "jquery";
import { mapGetters } from "vuex";
export default {
  name: "PropertyDetails",
  mounted() {
    let uri = window.location.search.substring(1);
    let id = new URLSearchParams(uri);
    this.propertyID = id.get("p");

    this.propertiesList.forEach((element) => {
      if (element.id == this.propertyID) {
        this.details = element;
      }
    });
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
