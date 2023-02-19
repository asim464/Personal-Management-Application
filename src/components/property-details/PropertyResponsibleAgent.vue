<template>
  <b-card id="custom-row-card" header-text-variant="dark">
    <template #header>
      <b-row class="d-flex">
        <b-col class="d-flex justify-content-start" xxs="9">
          <h3
            style="font-family: 'Nunito', sans-serif;font-weight: 400;font-size: 18px;padding-top: 1rem;"
          >
            <i class="iconsminds-project"></i>Responsible Agent
          </h3>
        </b-col>
        <b-col class="d-flex justify-content-end" xxs="3">
          <b-button
            style="height: max-content; margin-top: 5%"
            variant="outline-success"
            v-b-modal.propAgentEditModal
          >
            <i class="iconsminds-pen"></i>Edit</b-button
          >
          <edit-agent-modal :item="agentItem" @updateData="updateData" />
        </b-col>
      </b-row>
    </template>
    <template v-if="!agentItem.agentId">
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
    <template v-else>
      <b-card-text>
        <b-row class="ml-2">
          <b-col class="rowsLbl" cols="6">Agent:</b-col>
          <b-col
            ><p class="rowsVal">{{ agentItem.agentName }}</p></b-col
          >
        </b-row>
      </b-card-text>
    </template>
  </b-card>
</template>

<script>
import UpdatePropertyAgentModal from "../Form/UpdatePropertyAgentModal.vue";

export default {
  name: "PropertyResponsibleAgent",
  props: {
    property: Object,
  },
  components: {
    "edit-agent-modal": UpdatePropertyAgentModal,
  },
  data() {
    return {
      isHovering:false,
      agentItem: {
        propertyId: 0,
        agentName: "",
        agentId: null
      }
    };
  },
  watch: {
    property(value) {
      if(value.agent != null){
        this.agentItem.agentName = value.agent.firstName + " " + value.agent.lastName;
      }
      this.agentItem.agentId = value.agentId;
      this.agentItem.propertyId = value.id;
    },
  },
  methods: {
    async updateData(){
      this.$emit("fetchProperty");
    }
  },
};
</script>

<style></style>
