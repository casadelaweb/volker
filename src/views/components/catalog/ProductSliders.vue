<script lang="ts" setup>

import { Swiper, SwiperSlide } from 'swiper/vue'
</script>

<template>
  <div class="sliders">
    <div class="sliders-sticky">
      <div class="slider_bg">
        <div class="sliders-tags">
          <router-link class="sliders-tag" to="#">Акция</router-link>
          <div v-if="product.isNew" class="sliders-tag">Новинка</div>
        </div>
        <template v-if="product.images && product.images.length > 1">
          <swiper :lazy="settings.lazy" :loop="settings.loop" :modules="modules"
                  :pagination="settings.pagination" :slides-per-view="1" :space-between="20">
            <swiper-slide v-for="(img, index) in product.images" :key="index">
              <img :alt="product.title" :src="img.url" class="slider-img" loading="lazy">
              <div class="swiper-lazy-preloader"></div>
            </swiper-slide>
          </swiper>
        </template>
        <template v-else-if="product.images && product.images.length === 1">
          <img :alt="product.title" :src="product.images[0].url" class="slider-img"
               loading="lazy">
        </template>
        <template v-else>
          <img :alt="product.title" class="slider-img" loading="lazy"
               src="src/assets/img/placeholder.jpg">
        </template>
      </div>
      <div class="slider-thumbs" style="display: none">
        <div v-for="(img, index) in product.images" :key="index" class="slider-thumb">
          <img :alt="product.title" :src="img.url" loading="lazy">
        </div>
      </div>
      <div class="sliders-warning">
        Нажмите на изображение для перехода в полноэкранный режим
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sliders {
  min-width: 0;
  // max-width: 1440px * 0.5;

  &-sticky {
    position: sticky;
    z-index: 1;
    top: 160px + 20px;
  }

  &-tags {
    // @include flex($j: flex-end);
    @include flex;
    position: absolute;
    z-index: 2;
    top: 20px;
    left: 16px;
    width: 100%;

    a, button {
      transition: background-color 0.334s;

      &:hover {
        background: darkseagreen;
      }
    }
  }

  &-tag {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.025em;
    margin: 0 4px;
    padding: 4px 8px;
    color: white;
    // background: mediumseagreen;
    border-radius: 8px;
    background: #ff648d;
  }

  &-warning {
    font-size: 14px;
    font-weight: 300;
    margin: 10px 0;
  }
}

.slider {
  &_bg {
    position: relative;
    z-index: 0;
  }

  &-img {
    display: block;
    width: 100%;
    height: 480px;
    object-fit: cover;
    object-position: center;
  }
}
</style>
