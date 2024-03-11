<template>
  <AppHeader/>
  <main id="main" class="main">
    <router-view :key="$route.path"></router-view>
  </main>
  <FeedbackHorizontal/>
  <AppFooter/>
</template>

<script lang="ts" setup>
import AppHeader from 'src/views/components/AppHeader.vue'
import AppFooter from 'src/views/components/AppFooter.vue'
import FeedbackHorizontal from 'src/views/components/sections/FeedbackHorizontal.vue'
</script>

<style lang="scss">

</style>
