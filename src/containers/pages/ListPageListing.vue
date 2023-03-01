<template>
  <div>
    <template v-if="paginatedList.properties.length == 0">
      <b-card align="center">
        <template #header>
          <b-row class="p-1">
            <b-col xxs="5" class="justify-content-center">
              <h4 class="d-flex justify-content-center flex-wrap">
                <i class="iconsminds-information"></i><br /><span>No data available.</span
                ><br />
              </h4>
            </b-col>
          </b-row>
        </template>
        <b-card-text> <h5>Click on "ADD NEW" button to create items for the properties list!</h5> </b-card-text>
      </b-card>
    </template>
    <template v-else>
      <b-row v-if="displayMode === 'image'" key="image">
        <b-colxx
          sm="6"
          lg="4"
          xl="3"
          class="mb-3"
          v-for="(item, index) in paginatedList.properties"
          :key="index"
          :id="item.id"
        >
          <image-list-item
            :key="item.id"
            :data="item"
            :selected-items="selectedItems"
            @toggle-item="toggleItem"
            v-contextmenu:contextmenu
          />
        </b-colxx>
      </b-row>
      <b-row v-else-if="displayMode === 'thumb'" key="thumb">
        <b-colxx
          xxs="12"
          class="mb-3"
          v-for="(item, index) in paginatedList.properties"
          :key="index"
          :id="item.id"
        >
          <thumb-list-item
            :key="item.id"
            :data="item"
            :selected-items="selectedItems"
            @toggle-item="toggleItem"
            v-contextmenu:contextmenu
          />
        </b-colxx>
      </b-row>
      <b-row v-else-if="displayMode === 'list'" key="list">
        <b-colxx
          xxs="12"
          class="mb-3"
          v-for="(item, index) in paginatedList.properties"
          :key="index"
          :id="item.id"
        >
          <data-list-item
            :key="item.id"
            :data="item"
            :selected-items="selectedItems"
            @toggle-item="toggleItem"
            v-contextmenu:contextmenu
          />
        </b-colxx>
      </b-row>
      <b-row v-if="total > 10">
        <b-colxx xxs="12">
          <!-- <b-pagination-nav
            :number-of-pages="lastPage"
            :link-gen="linkGen"
            :value="page"
            @change="(a) => changePage(a)"
            :per-page="perPage"
            align="center"
          >
            <template v-slot:next-text>
              <i class="simple-icon-arrow-right" />
            </template>
            <template v-slot:prev-text>
              <i class="simple-icon-arrow-left" />
            </template>
            <template v-slot:first-text>
              <i class="simple-icon-control-start" />
            </template>
            <template v-slot:last-text>
              <i class="simple-icon-control-end" />
            </template>
          </b-pagination-nav> -->
          <b-pagination
            @change="changePage"
            :total-rows="total"
            :per-page="perPage"
            v-model="paginatedList.currentPage"
            align="center"
          >
            <template v-slot:next-text>
              <i class="simple-icon-arrow-right" />
            </template>
            <template v-slot:prev-text>
              <i class="simple-icon-arrow-left" />
            </template>
            <template v-slot:first-text>
              <i class="simple-icon-control-start" />
            </template>
            <template v-slot:last-text>
              <i class="simple-icon-control-end" />
            </template>
          </b-pagination>
        </b-colxx>
      </b-row>

      <v-contextmenu @contextmenu="handleContextMenu" ref="contextmenu">
        <v-contextmenu-item @click="onContextMenuAction('edit')">
          <i class="simple-icon-docs" />
          <span>Edit</span>
        </v-contextmenu-item>
        <v-contextmenu-item @click="onContextMenuAction('delete')">
          <i class="simple-icon-trash" />
          <span>Delete</span>
        </v-contextmenu-item>
        <v-contextmenu-item @click="onContextMenuAction('cancel')">
          <i class="simple-icon-minus" />
          <span>Cancel Selection</span>
        </v-contextmenu-item>
      </v-contextmenu>
    </template>
  </div>
</template>
<script>
import ImageListItem from "../../components/Listing/ImageListItem";
import ThumbListItem from "../../components/Listing/ThumbListItem";
import DataListItem from "../../components/Listing/DataListItem";
import { mapGetters } from "vuex";

export default {
  components: {
    "image-list-item": ImageListItem,
    "thumb-list-item": ThumbListItem,
    "data-list-item": DataListItem,
  },
  props: [
    "displayMode",
    "selectedItems",
    "toggleItem",
    "perPage",
    "changePage",
    "handleContextMenu",
    "onContextMenuAction",
    "total"
  ],
  methods: {
    // linkGen(pageNum) {
    //   return "#page-" + pageNum;
    // },
  },
  computed: {
    ...mapGetters(["paginatedList"])
  }
};
</script>
