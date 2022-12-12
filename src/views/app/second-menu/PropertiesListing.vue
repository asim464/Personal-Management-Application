<template>
  <b-row>
    <b-colxx class="disable-text-selection">
      <list-page-heading
        :title="$t('menu.prop-listing')"
        :selectAll="selectAll"
        :isSelectedAll="isSelectedAll"
        :isAnyItemSelected="isAnyItemSelected"
        :keymap="keymap"
        :displayMode="displayMode"
        :changeDisplayMode="changeDisplayMode"
        :changeOrderBy="changeOrderBy"
        :changePageSize="changePageSize"
        :sort="sort"
        :searchChange="searchChange"
        :from="from"
        :to="to"
        :total="total"
        :perPage="perPage"
      ></list-page-heading>
      <template v-if="isLoad">
        <list-page-listing
          :displayMode="displayMode"
          :items="items"
          :selectedItems="selectedItems"
          :toggleItem="toggleItem"
          :lastPage="lastPage"
          :perPage="perPage"
          :page="page"
          :changePage="changePage"
          :handleContextMenu="handleContextMenu"
          :onContextMenuAction="onContextMenuAction"
        ></list-page-listing>
      </template>
      <template v-else>
        <div class="loading"></div>
      </template>
    </b-colxx>
  </b-row>
</template>

<script>
import axios from "axios";
import { apiUrl } from "../../../constants/config";
import ListPageHeading from "../../../containers/pages/ListPageHeading";
import ListPageListing from "../../..//containers/pages/ListPageListing";

import { getCurrentUser } from "../../../utils";
export default {
  name: "PropertiesListing",
  components: {
    "list-page-heading": ListPageHeading,
    "list-page-listing": ListPageListing,
  },
  data() {
    return {
      isLoad: false,
      displayMode: "list",
      sort: {
        key: "id",
        label: "ID",
      },
      page: 2,
      perPage: 2,
      search: "",
      from: 1,
      to: 2,
      total: 0,
      lastPage: 0,
      items: [],
      selectedItems: [],
    };
  },
  methods: {
    async loadItems() {
      this.isLoad = false;
      var user = getCurrentUser();
      var config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      await axios
        .get(apiUrl + "property", config)
        .then((res) => {
          if (res.status == 200) {
            this.items = res.data;
            this.total = this.items.length;
            console.log(this.items);
            this.isLoad = true;
            this.$store.dispatch("setProperties", this.items);
          }
        })
        .catch((err) => {
          console.log("error :", err);
        });

      /*

      axios
        .get("https://api.coloredstrategies.com/cakes/fordatatable")
        .then(response => {
          return response.data;
        })
        .then(res => {
          this.total = res.total;
          this.from = res.from;
          this.to = res.to;
          this.items = res.data.map(x => {
            return {
              ...x,
              img: x.img.replace("/img/", "/img/products/")
            };
          });
          this.perPage = res.per_page;
          this.selectedItems = [];
          this.lastPage = res.last_page;
          this.isLoad = true;
        });
        */
    },

    changeDisplayMode(displayType) {
      this.displayMode = displayType;
      console.log(this.displayMode);
    },
    changePageSize(perPage) {
      this.page = 1;
      this.perPage = perPage;
    },
    changeOrderBy(sort) {
      this.sort = sort;
    },
    searchChange(val) {
      this.search = val;
      this.page = 1;
    },

    selectAll(isToggle) {
      if (this.selectedItems.length >= this.items.length) {
        if (isToggle) this.selectedItems = [];
      } else {
        this.selectedItems = this.items.map((x) => x.id);
      }
    },
    keymap(event) {
      switch (event.srcKey) {
        case "select":
          this.selectAll(false);
          break;
        case "undo":
          this.selectedItems = [];
          break;
      }
    },
    getIndex(value, arr, prop) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i][prop] === value) {
          return i;
        }
      }
      return -1;
    },
    toggleItem(event, itemId) {
      if (event.shiftKey && this.selectedItems.length > 0) {
        let itemsForToggle = this.items;
        var start = this.getIndex(itemId, itemsForToggle, "id");
        var end = this.getIndex(
          this.selectedItems[this.selectedItems.length - 1],
          itemsForToggle,
          "id"
        );
        itemsForToggle = itemsForToggle.slice(
          Math.min(start, end),
          Math.max(start, end) + 1
        );
        this.selectedItems.push(
          ...itemsForToggle.map((item) => {
            return item.id;
          })
        );
      } else {
        if (this.selectedItems.includes(itemId)) {
          this.selectedItems = this.selectedItems.filter((x) => x !== itemId);
        } else this.selectedItems.push(itemId);
      }
    },
    handleContextMenu(vnode) {
      if (!this.selectedItems.includes(vnode.key)) {
        this.selectedItems = [vnode.key];
      }
    },
    onContextMenuAction(action) {
      console.log(
        "context menu item clicked - " + action + ": ",
        this.selectedItems
      );
    },
    changePage(pageNum) {
      this.page = pageNum;
    },
  },
  computed: {
    isSelectedAll() {
      return this.selectedItems.length >= this.items.length;
    },
    isAnyItemSelected() {
      return (
        this.selectedItems.length > 0 &&
        this.selectedItems.length < this.items.length
      );
    },
    // apiUrl() {
    //   return `${this.apiBase}?sort=${this.sort.column}&page=${this.page}&per_page=${this.perPage}&search=${this.search}`;
    // }
  },
  watch: {
    search() {
      this.page = 1;
    },
    apiUrl() {
      this.loadItems();
    },
  },
  mounted() {
    this.loadItems();
  },
};
</script>
