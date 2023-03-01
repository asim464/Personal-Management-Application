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
              padding-top: 1rem;"
          >
            <i class="iconsminds-profile"></i>Owner
          </h3>
        </b-col>
        <b-col class="d-flex justify-content-end" xxs="3">
          <b-button
            class="mt-2"
            style="height: min-content"
            variant="outline-success"
            v-b-modal.propOwnerEditModal
          >
            <i class="iconsminds-pen"></i>Edit</b-button
          >
          <edit-owner-modal :item="ownerItem" @updateData="updateData" />
        </b-col>
      </b-row>
    </template>
    <template v-if="ownerItem.ownerId === null">
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
    <template v-else-if="ownerItem.propertyId != null">
      <b-card-text>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="6">Name:</b-col>
          <b-col
            ><p class="rowsVal">
              {{ ownerItem.firstName }}
            </p></b-col
          >
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="6">Contact:</b-col>
          <b-col
            ><p class="rowsVal">
              {{ ownerItem.Contact == "" ? "-" : ownerItem.Contact }}
            </p></b-col
          >
        </b-row>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="6">Email:</b-col>
          <b-col
            ><p class="rowsVal">
              {{ ownerItem.email }}
            </p></b-col
          >
        </b-row>
      </b-card-text>
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
        <b-col>
          <p class="rowsVal pl-5" style="text-decoration: underline solid gray">
            {{ ownerItem.IBAN == "" ? "-" : ownerItem.IBAN }}
          </p>
        </b-col>
      </b-row>
    </template>
  </b-card>
</template>

<script>
import UpdatePropertyOwnerModal from '../Form/UpdatePropertyOwnerModal.vue';

export default {
  name: "PropertyOwner",
  props: {
    property: Object,
  },
  components: {
    "edit-owner-modal": UpdatePropertyOwnerModal,
  },
  data() {
    return {
      isHovering:false,
      ownerItem: {
        firstName: "",
        Contact: "",
        email: "",
        IBAN: "",
        propertyId: 0,
        ownerId: null,
      },
    };
  },
  watch: {
    property(value) {
      this.ownerItem.propertyId = value.id;
      this.ownerItem.ownerId = value.ownerId;
      if(this.property.owner != null) {
        this.ownerItem.firstName = value.owner.firstName;
        this.ownerItem.Contact = value.owner.Contact;
        this.ownerItem.email = value.owner.email;
        this.ownerItem.IBAN = value.owner.IBAN;
      } else if(this.property.owner === null & this.property.newOwner != null){
        this.ownerItem.firstName = value.newOwner.Name;
        this.ownerItem.Contact = value.newOwner.Contact;
        this.ownerItem.email = value.newOwner.Email;
        this.ownerItem.IBAN = value.newOwner.IBAN;
      }
    },
  },
  methods: {
    async updateData(){
      this.$emit("fetchProperty");
    }
  },
};
</script>

<style>
@keyframes glowing {
  0% {
    background-color: white;
    box-shadow: 0 0 3px white;
  }
  100% {
    background-color: green;
    box-shadow: 0 0 3px green;
  }
}
.blink_btn {
  animation: glowing 800ms infinite;
}
</style>
