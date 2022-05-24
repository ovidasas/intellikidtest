<template>
  <div class="scrollable-table">
    <table class="table">
      <thead :class="{ fixed: isHeaderFixed }">
        <tr>
          <th v-for="(column, index) in columns" :key="index">{{ column }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td v-for="(key, value) in row" :key="key + value">{{ key }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ScrollableTable",
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
  },
};
</script>

<style scoped lang="sass">
.scrollable-table
  overflow:hidden
  overflow-y: auto
  overflow-x: auto
  height: calc(100vh - 100px - 73.28px - 50px)

.table
  border-collapse: collapse
  width: 100%

  th, td
    padding: 8px
    text-align: left
    border-bottom: 1px solid #DDD

  thead
    &.fixed
        top: 0
        z-index: 2
        position: sticky
    th
      border-bottom: 2px solid #DDD
      background-color: #e9ecef
      color: #495057

  tr:hover
    background-color: #D6EEEE
</style>
