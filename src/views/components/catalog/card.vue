<template>
  <article class="card" itemscope itemtype="https://schema.org/Product">
    <meta :content="product.name" itemprop="name">
    <meta :content="product.description.short" itemprop="description">
    <template v-if="product.images && product.images.length > 0">
      <link :href="siteUrl + product.images[0].src" itemprop="image">
    </template>
    <div hidden itemprop="promos" itemscope itemtype="https://schema.org/Promo">
      <meta :content="product.price" itemprop="price">
      <meta content="RUB" itemprop="priceCurrency">
      <link href="https://schema.org/InStock" itemprop="availability">
    </div>

    <div class="card-tags">
      <router-link v-if="product.recommend" class="card-tag card-tag_recommended"
                   to="/catalog/recommended">
        рекомендуемое
      </router-link>
    </div>

    <div class="card-images">
      <template v-if="product.images && product.images.length > 1">
        <swiper :lazy="settings.lazy" :loop="settings.loop" :modules="modules"
                :pagination="settings.pagination" :slides-per-view="1" :space-between="20">
          <swiper-slide v-for="(img, index) in product.images" :key="index">
            <img :alt="product.name" :data-src="img.thumb.url" class="swiper-lazy card-img"
                 src="src/assets/img/placeholder.jpg">
            <div class="swiper-lazy-preloader"></div>
          </swiper-slide>
        </swiper>
      </template>
      <template v-else-if="!product.images || product.images.length === 0">
        <img :alt="product.name" class="lazy card-img"
             src="src/assets/img/placeholder.jpg">
      </template>
      <template v-else>
        <img :alt="product.name" :data-src="product.images[0].thumb.url" class="lazy card-img"
             src="src/assets/img/placeholder.jpg">
      </template>
    </div>
    <h3 class="card-title">
      <router-link :title="product.name" :to="product.url">
        {{ product.name }}
      </router-link>
    </h3>
    <div class="card-description">
      {{ product.description.short }}
    </div>
    <div class="card-price">
      <span>{{ product.price }}</span> {{ currency }}
    </div>
    <router-link :title="product.name" :to="product.url" class="card-button">
      Подробнее
    </router-link>
  </article>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, Pagination } from 'swiper/modules'
import 'swiper/scss'

import 'swiper/scss/pagination'
import 'swiper/scss/free-mode'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data: function () {
    return {
      settings: {
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
      },
      siteUrl: this.$store.state.main.site_url,
      currency: this.$store.state.main.site_currency,
    }
  },
  setup() {
    return {
      modules: [
        Pagination,
        A11y,
      ],
    }
  },
}
</script>

<style lang="scss">
@use 'src/styles/shared' as *;

.card {
  position: relative;
  // border: 2px solid #f5f5f5;
  // padding: 20px 20px 24px;
  z-index: 0;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;
  min-width: 0;

  &-title {
    font-size: 18px;
    font-weight: 500;
  }

  &-tags {
    @include flex($a: center, $w: wrap);
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px;
  }

  &-tag {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.025em;
    margin: 0 4px;
    padding: 4px 8px;
    color: white;
    border-radius: 8px;
    background: #ff648d;

    //&_recommended {
    //  background: #ff648d;
    //  color: white;
    //}
  }

  &-images {
    min-width: 0;
  }

  &-img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  &-description {
    @include lineClamp;
  }

  &-price {
    font-size: 18px;
    font-weight: 500;
    margin: auto 0 0 auto;
  }

  &-button {
    @include flex(center, center);
    font-weight: 500;
    // padding: 10px;
    height: 48px;
    transition: background-color 0.334s, color 0.334s;
    background: #f5f5f5;
  }
}
</style>
