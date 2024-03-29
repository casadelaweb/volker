<script lang="ts" setup>
import { useStoreMain } from 'src/stores/storeMain.ts'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, Pagination } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/free-mode'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import LoadingPlaceholder from 'src/views/components/ui/LoadingPlaceholder.vue'

const store = useStoreMain()
const isLoading = ref(true)
const slides = ref([
  {
    title: '',
    description: '',
    image: {
      url: '',
      alt: '',
    }
  }
])
const swiperSettings = ref({
  pagination: {
    clickable: true,
  },
  lazy: {
    preloadImages: true,
    lazy: {
      loadOnTransitionStart: true,
      loadPrevNext: true,
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
  },
  loop: true,
})
const swiperModules = ref([
  Pagination,
  A11y,
],)

async function fetchData() {
  try {
    isLoading.value = true
    const response = await axios({
      method: 'get',
      url: '/api/hero/',
      params: {
        public_key: store.publicKey,
      }
    })
    slides.value = response.data
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchData()
})
</script>

<template>
  <section class="hero">
    <LoadingPlaceholder v-if="isLoading"/>
    <h1 class="hero-title"></h1>
    <swiper :lazy="swiperSettings.lazy"
            :loop="swiperSettings.loop"
            :modules="swiperModules"
            :pagination="swiperSettings.pagination"
            :slides-per-view="1"
            :space-between="0">
      <swiper-slide v-for="(slide, index) in slides" :key="index" class="hero-slide">
        <img :alt="slide.image.alt" :src="slide.image.url" class="hero-img swiper-lazy"
             loading="lazy">
        <div class="swiper-lazy-preloader"></div>
        <div class="hero-container">
          <div class="hero-slide-inner">
            <h2 class="hero-title">{{ slide.title }}</h2>
            <div class="hero-description">{{ slide.description }}</div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.hero {
  position: relative;
  z-index: 0;
  //@include section;

  &-container {
    @include container;
    @include flex($j: center, $d: column);
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
  }

  &-title {
    @include h2;
    line-height: 1.25;
    margin-bottom: 0.5em;
  }

  &-description {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 0.02em;
  }

  &-slide {
    position: relative;
    z-index: 0;

    &::before {
      content: ' ';
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(225deg, transparent 0 25%, rgba(#e6e6e6, 0.8) 0 100%);
      pointer-events: none;
      @include mediaTabletL {
        background: linear-gradient(225deg, transparent 0 50%, rgba(#e6e6e6, 0.8) 0 100%);
      }
    }

    &-inner {
      @include mediaTabletL {
        max-width: 40%;
      }
    }
  }

  &-img {
    object-fit: cover;
    width: 100%;
    min-height: 50vh;
    height: 400px;
    @include mediaTabletL {
      height: 540px;
    }
    @include mediaLaptopL {
      height: 580px;
    }
    //aspect-ratio: 21 / 9;
  }
}
</style>
