<template>
  <a class="logo" href="/">
    логотип
  </a>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss" scoped>
// @use 'src/styles/shared' as *;

.logo {
  @include flex(center, center);
  background: #f5f5f5;

  &, &-img {
    width: 160px;
    height: 48px;
  }
}
</style>
