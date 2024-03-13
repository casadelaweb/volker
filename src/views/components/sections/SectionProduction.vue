<template>
  <section class="production">
    <div class="production-container">
      <SectionTop :is-loading="false" :title="title"/>
      <div class="production-img"></div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SectionTop from 'src/views/components/ui/SectionTop.vue'

export default defineComponent({
  components: {
    SectionTop,
  },
  name: 'SectionProduction',
  data: function () {
    return {
      title: {
        text: 'Заголовок для презентации цеха',
      },
    }
  },
})
</script>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.production {
  @include section;

  &-container {
    @include container;
  }

  &-img {
    // width: 100%;
    background: #f5f5f5;
    // height: 480px;
    aspect-ratio: 21 / 9;
  }
}
</style>
