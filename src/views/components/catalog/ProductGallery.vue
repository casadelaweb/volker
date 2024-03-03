<script lang="ts" setup>

</script>

<template>
  <section class="gallery">
    <div class="gallery-container">
      <h2 class="gallery-title">Рассмотрите получше</h2>
      <div class="gallery-video">
        вот здесь видео или фото в 360 градусов
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.gallery {
  @include section;

  &-container {
    @include container;
  }

  &-title {
    @include h2;
    margin-bottom: 40px;
  }

  &-video {
    @include flex(center, center);
    background: #f5f5f5;
    aspect-ratio: 21 / 9;
  }
}
</style>
