<template>
  <section class="production">
    <div class="container">
      <section-top :title="title" />
      <div class="production-img"></div>
    </div>
  </section>
</template>

<script lang="ts">
import sectionTop from 'src/components/ui/section-top.vue'

export default {
  components: {
    sectionTop,
  },
  data: function () {
    return {
      title: {
        text: 'Видео-презентация',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import "src/styles/shared";

.production {
  @extend .section;

  &-img {
    // width: 100%;
    background: #f5f5f5;
    // height: 480px;
    aspect-ratio: 21 / 9;
  }
}
</style>
