<template>
  <div class="section-top">
    <h2 class="section-top-title">
      <a v-if="title.url" :href="title.url" title="Перейти на страницу">
        <span>{{ title.text }}</span>
      </a>
      <span v-else>{{ title.text }}</span>
    </h2>
    <slot></slot>
    <a v-if="button" :href="button.url" class="section-top-button" title="Перейти на страницу">
      <span>{{ button.text }}</span>
    </a>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: Object,
      required: true,
    },
    button: {
      type: Object,
      required: false,
    },
  },
}
</script>

<style lang="scss">
@use 'src/styles/shared' as *;

.section-top {
  @include flex($a: center, $j: space-between);
  margin: 0 0 32px;

  &-title {
    @include h2;
  }

  &-button {
    font-size: 13px;
    font-weight: 500;
    color: #808080;
    @include mediaTablet {
      font-size: 14px;
    }
    @include mediaTabletBg {
      font-size: 16px;
    }
  }
}
</style>
