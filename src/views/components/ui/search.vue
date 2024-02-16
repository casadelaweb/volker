<template>
  <form class="search">
    <input class="search-input" placeholder="Найди мне что-нибудь" type="text">
    <button class="search-button" type="button">
      <span class="iconfont icon-search"></span>
      <span>Искать</span>
    </button>
  </form>
</template>

<script lang="ts">
export default {
  props: {
    vModel: {
      type: String,
      required: false,
    },
  },
}
</script>

<style lang="scss">
// @use 'src/styles/shared' as *;

.search {
  @include flex(center);
  flex: 1 0 auto;
  margin: 0 40px;

  &-input {
    flex: 1 0 auto;
    height: 48px;
    padding: 0 20px;
    border: 2px solid #f5f5f5;
    background: none;
  }

  &-button {
    flex: 0 0 48px * 3;
    width: 48px * 3;
    height: 48px;
    background: #f5f5f5;

    @include notLastChild;
  }
}
</style>
