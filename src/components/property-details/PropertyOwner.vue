<template>
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
</template>
  
  <script>
export default {
  name: "PropertyOwner",
  props: {
    property: Object,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>
  
  <style></style>
  