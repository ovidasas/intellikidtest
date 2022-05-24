<template>
  <div class="container">
    <MainLogo />
    <ScrollableTable :columns="columns" :rows="rows" :isHeaderFixed="true" />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import ScrollableTable from "@/components/ScrollableTable.vue";
import MainLogo from "@/components/MainLogo.vue";
import { alphabeticalSorting } from "@/helpers/alphabeticalSorting";
import { fetchGetApi } from "@/api/api";

export default {
  name: "HomeView",
  components: {
    ScrollableTable,
    MainLogo,
  },
  setup() {
    const herokuUrl = process.env.VUE_APP_HEROKU_URL;
    const columns = ref([]);
    const rows = ref([]);

    const url = `${herokuUrl}https://gitlab.com/-/snippets/2328789/raw/main/huge_6MB.json`;

    const getData = async () => {
      try {
        const response = await fetchGetApi(url);

        columns.value = response.columns.sort(alphabeticalSorting);

        const sortedList = [];

        // Let's first sort the values' list by keys to correspond to the sorted columns' headers
        response.rows.forEach((el) =>
          sortedList.push(
            Object.keys(el)
              .sort(alphabeticalSorting)
              .reduce((obj, key) => {
                obj[key] = el[key];
                return obj;
              }, {})
          )
        );

        sortedList.forEach((key) => {
          rows.value.push(Object.values(key));
        });
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(() => {
      getData();
    });

    return {
      columns,
      rows,
    };
  },
};
</script>

<style scoped lang="sass">
.container
  max-width: 1200px
  margin: 50px auto
  padding: 0 5%
  min-height: calc(100vh - 100px - 73.28px - 50px)

.logo-container
  margin-bottom: 50px
</style>
