<script lang="ts" setup></script>

<template>
  <div class="loading"></div>
</template>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.loading {
  @include loadingPlaceholder;
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
</style>
