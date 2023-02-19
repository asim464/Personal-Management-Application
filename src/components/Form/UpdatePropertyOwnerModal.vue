<template>
  <div>
    <b-modal
      id="propOwnerEditModal"
      ref="propOwnerEditModal"
      title="Edit Owner Assigned"
      modal-class="modal-right"
    >
      <b-form>
        <b-form-group label="Owners">
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
      ownerLst: [],
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
      updatePropOwner: "updatePropertyOwner",
    }),
    async update() {
      let uri = window.location.search.substring(1);
      let id = new URLSearchParams(uri);
      let propertyID = id.get("p");

      let ownerId = this.item.ownerId;

      const res = await this.updatePropOwner({
        pk: propertyID,
        pc: ownerId,
        config: this.config,
      });

      if (res.status == 200 || res.status == 201) {
        this.$notify("Success", "Owner assigned to property succesfully", res.status, {
          type: "success",
          duration: 5000,
          permanent: false,
        });
        this.$emit("updateData");
        this.hideModal("propOwnerEditModal");
      } else {
        this.$notify("Error", "Owner could not be assigned.", res.status, {
          type: "error",
          duration: 5000,
          permanent: false,
        });
      }
    },
    hideModal(refname) {
      this.$refs[refname].hide();
    },
  },
  computed: {
    ...mapGetters(["config", "agentsList"]),
  },
};
</script>
