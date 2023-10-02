<template>
  <div class="section-top">
    <h2 class="section-top-title">
      <a v-if="title.url" :href="title.url" title="Перейти на страницу">
        {{ title.text }}
      </a>
      <span v-else>{{ title.text }}</span>
    </h2>
    <slot></slot>
    <a v-if="button" :href="button.url" class="section-top-button" title="Перейти на страницу">
      {{ button.text }}
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
@import "src/styles/shared";

.section-top {
  @include flex($a: center, $j: space-between);
  margin: 20px 0 24px;

  &-title {
    @extend .h2;
  }

  &-button {
    color: #808080;
    font-weight: 500;
  }
}
</style>
