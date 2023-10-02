<template>
  <breadcrumbs />
  <section class="section">
    <div class="container">
      <h1 class="h1">404 - Не найдено</h1>
    </div>
  </section>
</template>

<script lang="ts">
import breadcrumbs from 'src/components/sections/breadcrumbs.vue'

export default {
  components: {
    breadcrumbs,
  },
}
</script>

<style lang="scss" scoped>
@import "src/styles/shared";
</style>
