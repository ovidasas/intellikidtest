<template>
  <div class="logo-container">
    <img
      class="logo"
      src="@/assets/intellikid-systems-logo.webp"
      alt="IntelliKid Systems logo"
    />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="sass">
.logo-container
  display: flex
  justify-content: center
  align-items: center

  > .logo
    max-width: 200px
    width: 100%
    display: block
</style>
