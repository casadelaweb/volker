<template>
  <a class="logo" href="/">
    <!-- <img alt="logo" class="modals-logo-img" src="../img/placeholder.jpg"> -->
    логотип
  </a>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.logo {
  @include flex(center, center);
  background: #f5f5f5;

  &, &-img {
    width: 160px;
    height: 48px;
  }
}
</style>
