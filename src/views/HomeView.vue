<template>
  <div class="container">
    <MainLogo />
    <ScrollableTable />
  </div>
</template>

<script>
import ScrollableTable from "@/components/ScrollableTable.vue";
import MainLogo from "@/components/MainLogo.vue";

export default {
  name: "HomeView",
  components: {
    ScrollableTable,
    MainLogo,
  },
};
</script>

<style scoped lang="sass">
.container
  max-width: 1200px
  margin: 50px

.logo-container
  margin-bottom: 50px
</style>
