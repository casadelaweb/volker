<template>
  <app-header />
  <main>
    <router-view :key="$route.path"></router-view>
  </main>
  <feedback-horizontal />
  <app-footer />
</template>

<script lang="ts">
import appHeader from 'src/components/app-header.vue'
import appFooter from 'src/components/app-footer.vue'
import feedbackHorizontal from 'src/components/sections/feedback-horizontal.vue'

export default {
  components: {
    appHeader,
    appFooter,
    feedbackHorizontal,
  },
}
</script>

<style lang="scss">
#app {
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
}
</style>
