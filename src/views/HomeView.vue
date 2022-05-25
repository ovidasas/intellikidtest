<template>
  <div class="container">
    <MainLogo />
    <div v-if="isError" class="error-message">
      <span>Data could not be loaded. Please try again</span>
    </div>
    <ScrollableTable
      v-else
      :columns="columns"
      :rows="rows"
      :isHeaderFixed="true"
      :isLoading="isLoading"
    />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import ScrollableTable from "@/components/ScrollableTable.vue";
import MainLogo from "@/components/MainLogo.vue";
import { fetchGetApi } from "@/api/api";

export default {
  name: "HomeView",
  components: {
    ScrollableTable,
    MainLogo,
  },
  setup() {
    // Heroku url is used to circumvent cors policy from the server
    const herokuUrl = process.env.VUE_APP_HEROKU_URL;
    const isLoading = ref(false);
    const isError = ref(false);
    const columns = ref([]);
    const rows = ref([]);

    const url = `${herokuUrl}https://gitlab.com/-/snippets/2328789/raw/main/huge_18MB.json`;

    const getData = async () => {
      isError.value = false;
      isLoading.value = true;

      try {
        const response = await fetchGetApi(url);

        columns.value = response.columns;

        rows.value = response.rows;

        isLoading.value = false;
      } catch (error) {
        isLoading.value = false;
        isError.value = true;
      }
    };

    onMounted(() => {
      getData();
    });

    return {
      columns,
      rows,
      isLoading,
      isError,
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

.error-message
  display: flex
  align-items: center
  justify-content: center
  height: calc(100vh - 100px - 73.28px - 50px)
  font-weight: 500
  font-size: 20px
</style>
