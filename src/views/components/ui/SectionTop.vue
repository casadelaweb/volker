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

<script lang="ts" setup>
defineProps<{
  title: {
    text: string,
    url: string,
  }
  button?: {
    text: string,
    url: string,
  }
}>()
</script>

<style lang="scss">
@use 'src/styles/shared' as *;

.section-top {
  @include flex(center, space-between);
  margin: 0 0 32px;

  &-title {
    @include h2;
  }

  &-button {
    font-size: 13px;
    font-weight: 500;
    position: relative;
    z-index: 0;
    transition: color 0.334s;
    color: #808080;
    @include mediaTabletM {
      font-size: 14px;
    }
    @include mediaTabletL {
      font-size: 16px;
    }

    &::before {
      // todo: вынести в отдельный mixin
      content: ' ';
      position: absolute;
      z-index: 1;
      top: calc(100% + 2px);
      left: 0;
      width: 100%;
      height: 2px;
      transition: transform 0.334s;
      transform: scale(0);
      transform-origin: 0 50%;
      background: darkseagreen;
    }

    &:hover {
      color: darkseagreen;

      &:before {
        transform: scale(1)
      }
    }
  }
}
</style>
