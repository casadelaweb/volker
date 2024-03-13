<script lang="ts" setup>
defineProps<{
  title: string
  type: 'link' | 'router-link' | 'button' | 'submit',
  url?: string,
}>()
</script>

<template>
  <template v-if="type === 'link'">
    <a :aria-label="title" :href="url" :title="title" class="button">
      <slot></slot>
    </a>
  </template>
  <template v-else-if="type === 'router-link'">
    <router-link :aria-label="title" :title="title" :to="url" class="button">
      <slot></slot>
    </router-link>
  </template>
  <template v-else>
    <button :aria-label="title" :title="title" :type="type" class="button">
      <slot></slot>
    </button>
  </template>
</template>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.button {
  @include buttonOutline;
}
</style>
