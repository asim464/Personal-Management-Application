<template>
  <div>
    <b-modal
      id="propOwnerEditModal"
      ref="propOwnerEditModal"
      title="Edit Owner Assigned"
      modal-class="modal-right"
    >
      <b-form>
        <b-form-group label="Select Owner">
          <b-form-select
            class="pt-2"
            v-model="item.ownerId"
            :options="ownerLst"
            :rows="2"
            :max-rows="2"
          >
            <template #first>
              <b-form-select-option value="null" default disabled
                >-- Please select an option --</b-form-select-option
              >
            </template>
          </b-form-select>
        </b-form-group>
        <template v-if="item.ownerId === 0">
          <b-form-group label="Name">
            <b-form-input v-model="Name" :rows="2" :max-rows="2" required />
          </b-form-group>
          <b-form-group label="Contact">
            <b-form-input v-model="Contact" :rows="2" :max-rows="2" required />
          </b-form-group>
          <b-form-group label="E-mail">
            <b-form-input v-model="Email" :rows="2" :max-rows="2" required />
          </b-form-group>
          <b-form-group label="IBAN">
            <b-form-input
              v-model="IBAN"
              :state="ibanState"
              :rows="2"
              :max-rows="2"
              aria-describedby="input-live-help input-live-feedback"
              required
            />
            <b-form-invalid-feedback id="input-live-feedback">
              Enter 14 Character IBAN.
            </b-form-invalid-feedback>
          </b-form-group>
        </template>
        <template v-else-if="!item.ownerId">
          <p>Select an owner from above dropdown to continue further.</p>
        </template>
        <template v-else-if="item.ownerId > 0">
          <!-- <b-form-group label="Name">
            <b-form-input v-model="item.Name" :rows="2" :max-rows="2" disabled />
          </b-form-group>
          <b-form-group label="Contact">
            <b-form-input v-model="item.Contact" :rows="2" :max-rows="2" disabled />
          </b-form-group>
          <b-form-group label="E-mail">
            <b-form-input v-model="item.Email" :rows="2" :max-rows="2" disabled />
          </b-form-group> -->
          <b-form-group label="IBAN">
            <b-form-input
              v-model="IBAN"
              :state="ibanState"
              :rows="2"
              :max-rows="2"
              aria-describedby="input-live-help input-live-feedback"
              required
            />
            <b-form-invalid-feedback id="input-live-feedback">
              Enter 14 Character IBAN.
            </b-form-invalid-feedback>
          </b-form-group>
        </template>
      </b-form>

      <template slot="modal-footer">
        <b-button variant="outline-secondary" @click="hideModal('propOwnerEditModal')"
          >Cancel</b-button
        >
        <b-button variant="primary" @click="update()" class="mr-1">SAVE</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "UpdatePropertyOwnerModal",
  props: {
    item: Object,
  },
  data() {
    return {
      ownerLst: [
        {
          text: "New Owner",
          value: 0,
        },
      ],
      Name: "",
      Contact: "",
      Email: "",
      IBAN: "",
      propertyId: 0,
    };
  },
  mounted() {
    this.agentsList.forEach((el) => {
      if (el.roles == "Customer") {
        let elem = {
          text: el.firstName + " " + el.lastName,
          value: el.id,
        };
        this.ownerLst.push({ ...elem });
      }
    });
  },
  methods: {
    ...mapActions({
      updatePropEOwner: "updatePropertyExistingOwner",
      updatePropNOwner: "updatePropertyNewOwner",
    }),
    async update() {
      let uri = window.location.search.substring(1);
      let id = new URLSearchParams(uri);
      let propertyID = id.get("p");

      let ownerId = this.item.ownerId;
      console.log(ownerId);

      if (ownerId === 0) {
        let payload = {
          Name: this.Name,
          Contact: this.Contact,
          Email: this.Email,
          IBAN: this.IBAN,
        };
        const res = await this.updatePropNOwner({
          pk: propertyID,
          payload: payload,
          config: this.config,
        });
        if (res.status == 200 || res.status == 201) {
          this.$notify("Success", "Owner assigned to property succesfully", res.status, {
            type: "success",
            duration: 5000,
            permanent: false,
          });
          this.hideModal("propOwnerEditModal");
        } else {
          this.$notify("Error", "Owner could not be assigned.", res.status, {
            type: "error",
            duration: 5000,
            permanent: false,
          });
        }
      } else if (ownerId > 0) {
        const res = await this.updatePropEOwner({
          pk: propertyID,
          pc: ownerId,
          payload: {IBAN: this.IBAN},
          config: this.config,
        });
        if (res.status == 200 || res.status == 201) {
          this.$notify("Success", "Owner assigned to property succesfully", res.status, {
            type: "success",
            duration: 5000,
            permanent: false,
          });
          this.hideModal("propOwnerEditModal");
        } else {
          this.$notify("Error", "Owner could not be assigned.", res.status, {
            type: "error",
            duration: 5000,
            permanent: false,
          });
        }
      } else {
        this.$notify("Error", "Owner could not be assigned.", "400", {
          type: "error",
          duration: 5000,
          permanent: false,
        });
      }
    },
    hideModal(refname) {
      this.$emit("updateData");
      this.$refs[refname].hide();
    },
  },
  computed: {
    ...mapGetters(["config", "agentsList"]),
    ibanState() {
      return this.IBAN.length === 14 ? true : false;
    },
  },
};
</script>
