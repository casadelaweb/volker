<script lang="ts" setup>
defineProps<{
  title?: string
  classList?: string,
  type?: 'link' | 'router-link' | 'button' | 'submit',
  url?: string,
}>()
</script>

<template>
  <template v-if="type === 'link'">
    <a :aria-label="title" :class="classList" :href="url" :title="title" class="button">
      <slot></slot>
    </a>
  </template>
  <template v-else-if="type === 'router-link'">
    <router-link :aria-label="title" :class="classList" :title="title" :to="url" class="button">
      <slot></slot>
    </router-link>
  </template>
  <template v-else>
    <button :aria-label="title" :class="classList" :title="title" :type="type" class="button">
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
