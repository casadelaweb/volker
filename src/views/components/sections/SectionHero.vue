<script lang="ts" setup>
import { ref } from 'vue'

const title = ref('Заголовок для хиро баннера')
const images = ref([
  { url: 'src/assets/img/placeholder.jpg' },
])
</script>

<template>
  <section class="hero">
    <div class="hero-container">
      <h1 class="hero-title">{{ title }}</h1>

      <div v-for="(img, index) in images" :key="index" class="hero-slide">
        <img :alt="title" :src="img.url" class="hero-img" loading="lazy">
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.hero {
  @include section;

  &-container {
    @include container;
  }

  &-title {
    @include h1;
    margin-bottom: 0.5em;
  }

  &-slide {

  }

  &-img {
    width: 100%;
    height: 400px;
    //aspect-ratio: 21 / 9;
  }
}
</style>
