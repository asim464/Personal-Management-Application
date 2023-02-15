<template>
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
        <!-- <b-col class="d-flex justify-content-end" xxs="3">
          <b-button
            class="mt-2"
            style="height: min-content"
            variant="outline-success"
          >
            <i class="iconsminds-pen"></i>Edit</b-button
          >
        </b-col> -->
      </b-row>
    </template>
  </b-card>
</template>
    
    <script>
export default {
  name: "PropertyStatusPublication",
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
    