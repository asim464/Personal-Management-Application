<template>
  <b-row>
    <b-colxx xxs="12">
      <b-row>
        <b-col cols="5"
          ><h1>{{ title }}</h1></b-col
        >
        <b-col cols="2.5">
          <b-button variant="primary" size="lg" @click="publishAll()">
            PUBLISH ALL
          </b-button>
        </b-col>
        <b-col cols="3">
          <b-row>Last Publication Date:</b-row>
          <b-row><span><span style="font-weight:bolder">01/01/XX </span> By <span style="font-weight:900"> xyv</span></span></b-row>
        </b-col>
        <b-col>
          <div class="top-right-button-container">
            <b-button
              v-b-modal.modalAddProp
              variant="primary"
              size="lg"
              class="top-right-button newPropBtn"
              ><i
                class="iconsminds-add"
                style="position: relative; margin-right: 5px"
              />ADD NEW</b-button
            >
            <b-button-group>
              <b-dropdown
                split
                right
                @click="selectAll(true)"
                class="check-button ml-2"
                variant="primary"
              >
                <label
                  class="custom-control custom-checkbox pl-4 mb-0 d-inline-block"
                  slot="button-content"
                >
                  <input
                    class="custom-control-input"
                    type="checkbox"
                    :checked="isSelectedAll"
                    v-shortkey="{ select: ['ctrl', 'a'], undo: ['ctrl', 'd'] }"
                    @shortkey="keymap"
                  />
                  <span
                    :class="{
                      'custom-control-label': true,
                      indeterminate: isAnyItemSelected,
                    }"
                    >&nbsp;</span
                  >
                </label>
                <b-dropdown-item v-b-modal.deletePropertyModal disabled>{{
                  $t("pages.delete")
                }}</b-dropdown-item>
                <b-dropdown-item v-b-modal.modalEditProp disabled>{{$t('pages.edit')}}</b-dropdown-item>
              </b-dropdown>
            </b-button-group>
          </div>
        </b-col>
        <add-new-property-modal />
        <delete-property-modal :selectedItems="items" @updateList="updateList" />
        <edit-property-modal :item="items" @updateList="updateList" />
      </b-row>
      <piaf-breadcrumb />
      <div class="mb-2 mt-2">
        <b-button
          variant="empty"
          class="pt-0 pl-0 d-inline-block d-md-none"
          v-b-toggle.displayOptions
        >
          {{ $t("pages.display-options") }}
          <i class="simple-icon-arrow-down align-middle" />
        </b-button>
        <b-collapse id="displayOptions" class="d-md-block">
          <span class="mr-3 d-inline-block float-md-left">
            <a
              :class="{ 'mr-2 view-icon': true, active: displayMode === 'list' }"
              @click="changeDisplayMode('list')"
            >
              <data-list-icon />
            </a>
            <a
              :class="{ 'mr-2 view-icon': true, active: displayMode === 'thumb' }"
              @click="changeDisplayMode('thumb')"
            >
              <thumb-list-icon />
            </a>
            <a
              :class="{ 'mr-2 view-icon': true, active: displayMode === 'image' }"
              @click="changeDisplayMode('image')"
            >
              <image-list-icon />
            </a>
          </span>
          <div class="d-block d-md-inline-block pt-1">
            <b-dropdown
              id="ddown1"
              :text="`${$t('pages.orderby')} ${sort.label}`"
              variant="outline-dark"
              class="mr-1 float-md-left btn-group"
              size="xs"
            >
              <b-dropdown-item
                v-for="(order, index) in sortOptions"
                :key="index"
                @click="changeOrderBy(order)"
                >{{ order.label }}</b-dropdown-item
              >
            </b-dropdown>

            <div class="search-sm d-inline-block float-md-left mr-1 align-top">
              <b-input
                :placeholder="$t('menu.search')"
                @input="(val) => searchChange(val)"
              />
            </div>
          </div>
          <div class="float-md-right pt-1">
            <span class="text-muted text-small mr-1 mb-2"
              >{{ from }}-{{ to }} of {{ total }}</span
            >
            <!-- <b-dropdown
              id="ddown2"
              right
              :text="`${perPage}`"
              variant="outline-dark"
              class="d-inline-block"
              size="xs"
            >
              <b-dropdown-item
                v-for="(size,index) in pageSizes"
                :key="index"
                @click="changePageSize(size)"
              >{{ size }}</b-dropdown-item>
            </b-dropdown> -->
          </div>
        </b-collapse>
      </div>
      <div class="separator mb-5" />
    </b-colxx>
  </b-row>
</template>
<script>
import { DataListIcon, ThumbListIcon, ImageListIcon } from "../../components/Svg";
import AddNewPropertyModal from "../../components/Form/AddNewPropertyModal.vue";
import DeletePropertyModal from "../../components/Form/DeletePropertyModal.vue";
import UpdatePropertyModal from "../../components/Form/UpdatePropertyModal.vue";
import { getCurrentUser } from '../../utils';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    "data-list-icon": DataListIcon,
    "thumb-list-icon": ThumbListIcon,
    "image-list-icon": ImageListIcon,
    "add-new-property-modal": AddNewPropertyModal,
    "delete-property-modal": DeletePropertyModal,
    "edit-property-modal": UpdatePropertyModal,
  },
  props: [
    "title",
    "selectAll",
    "isSelectedAll",
    "isAnyItemSelected",
    "selectedItems",
    "keymap",
    "displayMode",
    "changeDisplayMode",
    "changeOrderBy",
    "sort",
    "searchChange",
    "from",
    "to",
    "total",
    "perPage",
  ],
  data() {
    return {
      sortOptions: [
        {
          column: "id",
          label: "ID",
        },
        {
          column: "title",
          label: "Title",
        },
        {
          column: "updateAt",
          label: "Last Updated",
        },
        {
          column: "status",
          label: "Status",
        },
        {
          column: "price",
          label: "Price",
        },
      ],
      items: [],
      // pageSizes: [4, 8, 12],
    };
  },
  watch: {
    selectedItems(value) {
      console.log(value);
      this.items = value;
    },
  },
  methods: {
    ...mapActions({
      publish: "publishAll",
    }),
    async updateList() {
      this.$emit("fetchList");
    },
    async publishAll() {
      let user = getCurrentUser();
      let id = user.agencyId;

      const res = await this.publish({
        pk: id,
        config: this.config,
      });

      console.log(res);

      if(res.status === 200 || res.status === 201) {
        this.$notify("Success", "Published all properties successfully", res.status, {
          type: "success",
          permanent: false,
          duration: 5000,
        });
      } else if (res.statusCode == 400) {
        this.$notify("Error", "Publishing failed", res.status + " " + res.message, {
          type: "error",
          permanent: false,
          duration: 5000,
        });
      }
    },
  },
  computed: {
    ...mapGetters(["config"])
  }
};
</script>

<style scoped></style>
