<template>
  <div class="scrollable-table">
    <Loading :active="isLoading" :is-full-page="false" />
    <q-virtual-scroll
      type="table"
      class="table"
      style="max-height: calc(100vh - 100px - 73.28px - 50px)"
      :virtual-scroll-item-size="34"
      :items="rowList"
    >
      <template v-slot:before>
        <thead class="thead-sticky">
          <tr>
            <th v-for="(column, index) in columnList" :key="index">
              {{ column }}
            </th>
          </tr>
        </thead>
      </template>
      <template v-slot="{ item: row, index }">
        <tr :key="index">
          <td v-for="col in columns" :key="index + col">{{ row[col] }}</td>
        </tr>
      </template>
    </q-virtual-scroll>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import { alphabeticalSorting } from "@/helpers/alphabeticalSorting";

export default {
  name: "ScrollableTable",
  components: {
    Loading,
  },
  props: {
    columns: {
      type: Array,
      default() {
        return [];
      },
    },
    rows: {
      type: Array,
      default() {
        return [];
      },
    },
    isHeaderFixed: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    //column_list.value.sort(alphabeticalSorting);

    //console.log(column_list.value);

    //console.log(props.columns);
    //console.log(props.rows);
    const columnList = computed(() => {
      return props.columns;
    });

    //console.log(columnList);

    const rowList = computed(() => {
      return props.rows;
    });

    onMounted(() => {
      columnList.value.sort(alphabeticalSorting);
    });

    return {
      rowList,
      columnList,
    };
  },
};
</script>

<style scoped lang="sass">
.scrollable-table
  overflow: auto
  will-change: scroll-position
  height: calc(100vh - 100px - 73.28px - 50px)
  position: relative

.table
  border-collapse: collapse
  width: 100%

  th, td
    padding: 8px
    text-align: center
    border-bottom: 1px solid #DDD

  thead
    &.thead-sticky
        top: 0
        z-index: 2
        position: sticky
    th
      border-bottom: 2px solid #DDD
      background-color: #e9ecef
      color: #495057
      font-size: 18px

  tr:hover
    background-color: #D6EEEE
</style>
