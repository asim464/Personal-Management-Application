<template>
  <div>
    <b-modal
      id="propAgentEditModal"
      ref="propAgentEditModal"
      title="Edit Agent Assigned"
      modal-class="modal-right"
    >
      <b-form>
        <b-form-group label="Agents">
          <b-form-select
            class="pt-2"
            v-model="item.agentId"
            :options="agentLst"
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
        <b-button variant="outline-secondary" @click="hideModal('propAgentEditModal')"
          >Cancel</b-button
        >
        <b-button variant="primary" @click="update()" class="mr-1">SAVE</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import { apiUrl } from "../../constants/config";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "UpdatePropertyAgentModal",
  props: {
    item: Object,
  },
  data() {
    return {
      agentLst: [],
      propertyId: 0,
      // agencyId: 0,
    };
  },
  watch: {
    item(value) {
      // this.propertyId = value.id;
      console.log(value);
    }
  },
  mounted() {
    // console.log(this.agentsList);
    this.agentsList.forEach((el) => {
      if(el.roles == "Agent") {
        let elem = {
          text: el.firstName + " " + el.lastName,
          value: el.id,
        };
        this.agentLst.push({...elem})
      }
    })
    // console.log(this.agentLst);
  },
  methods: {
    ...mapActions({
      updatePropAgent: "updatePropertyAgent",
    }),
    async update() {
      let uri = window.location.search.substring(1);
      let id = new URLSearchParams(uri);
      let propertyID = id.get("p");

      let agentId= this.item.agentId;

      const res = await this.updatePropAgent({
        pk:propertyID,
        ps:agentId,
        config: this.config
      });

      if (res.status == 200 || res.status == 201) {
        this.$notify("Success", "Agent assigned to property succesfully", res.status, {
          type: "success",
          duration: 5000,
          permanent: false,
        });
        this.$emit("updateData");
        this.hideModal("propAgentEditModal");
      } else {
        this.$notify("Error", "Agent could not be assigned.", err, {
          type: "error",
          duration: 5000,
          permanent: false,
        });
      }

      // axios
      //   .patch(
      //     apiUrl + "property/updateAgent/" + this.item.id + "/" + this.item.agentId,
      //     this.config
      //   )
      //   .then((res) => {
      //     if (res.status == 200) {
      //       this.$notify(
      //         "Success",
      //         "Agent assigned to property succesfully",
      //         res.status,
      //         {
      //           type: "success",
      //           duration: 5000,
      //           permanent: false,
      //         }
      //       );
      //       this.hideModal("propAgentEditModal");
      //     }
      //     else if (res.status == 401) {
      //       this.$notify("Error", "Agent could not be assigned.", err, {
      //         type: "error",
      //         duration: 5000,
      //         permanent: false,
      //       });
      //     }
      //   })
      //   .catch((err) => {
      //     this.$notify("Error", "Network error occured", err, {
      //       type: "error",
      //       duration: 5000,
      //       permanent: false,
      //     });
      //     console.log(err);
      //   });
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
