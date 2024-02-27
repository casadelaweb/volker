<template>
  <AppHeader/>
  <main id="main">
    <router-view :key="$route.path"></router-view>
  </main>
  <FeedbackHorizontal/>
  <AppFooter/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from 'src/views/components/AppHeader.vue'
import AppFooter from 'src/views/components/AppFooter.vue'
import FeedbackHorizontal from 'src/views/components/sections/FeedbackHorizontal.vue'

export default defineComponent({
  components: {
    AppFooter,
    FeedbackHorizontal,
    AppHeader
  },
  data: function () {
    return {}
  },
})
</script>

<style lang="scss">

</style>
