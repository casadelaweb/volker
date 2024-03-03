<template>
  <article class="product">
    <div class="product-buttons">
      <button class="product-fav" title="Добавить в избранное" type="button">
        <span class="iconfont icon-heart"></span>
      </button>
      <button class="product-cart" title="Добавить в корзину" type="button">
        <span class="iconfont icon-suitcase"></span>
      </button>
    </div>
    <div class="product-images">
      <swiper :lazy="settings.lazy"
              :loop="settings.loop"
              :modules="modules"
              :pagination="settings.pagination"
              :slides-per-view="1"
              :space-between="20">
        <swiper-slide v-for="(img, index) in product.images" :key="index">
          <img :alt="product.title" :src="img.url" class="swiper-lazy product-img" loading="lazy">
          <div class="swiper-lazy-preloader"></div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="product-body">
      <h2 class="product-title">
        <router-link :title="product.title" :to="product.url">
          {{ product.title }}
        </router-link>
      </h2>
      <div class="product-description">
        {{ product.description }}
      </div>
      <div class="product-prices">
        <span class="product-prices-caption">Цена: </span>
        <div v-if="product.priceOld" class="product-price _old">
          {{ product.priceOld }}
          <template v-if="product.currency">{{ product.currency }}</template>
        </div>
        <div class="product-price">
          {{ product.price }}
          <template v-if="product.currency">{{ product.currency }}</template>
        </div>
      </div>
      <router-link :to="product.url" class="product-button">
        Подробнее
      </router-link>
    </div>
  </article>
</template>

<script lang="ts">
import { iPageProduct } from 'src/api/base.ts'
import { defineComponent, PropType } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, Pagination } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/free-mode'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  name: 'ProductCard',
  props: {
    product: {
      type: Object as PropType<iPageProduct>,
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
      siteUrl: 'company@domain.test',
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
})
</script>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.product {
  @include flex($d: column);
  min-height: 0;
  min-width: 0;
  height: fit-content;
  border: 1px solid #f0f0f0;
  box-shadow: 4px 4px 16px 0 rgba(black, 0.05);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  z-index: 0;

  &-buttons {
    @include flex($d: column);
    row-gap: 12px;
    position: absolute;
    z-index: 2;
    top: 8px;
    right: 8px;
  }

  &-fav, &-cart {
    $size: 36px;
    flex: 0 0 auto;
    width: $size;
    height: $size;
    font-size: $size * 0.5;
    border-radius: 50%;
    background: rgba(white, 0.9);
    box-shadow: 2px 2px 12px 0 rgba(black, 0.2);
    transition: transform 0.25s, color 0.25s;

    @include hoverableDevice {
      &:hover {
        color: darkseagreen;
      }
    }

    &:active {
      transform: scale(1.1);
    }
  }

  &-fav {
    .iconfont {
      display: inline-block;
      transform: translateY(15%);
    }
  }

  &-images {
  }

  &-img {
    object-fit: cover;
    aspect-ratio: 4 / 3;
    width: 100%;
    background: #f0f0f0;
    flex: 0 0 auto;
  }

  &-body {
    @include flex($d: column);
    flex: 1 0 auto;
    row-gap: 16px;
    padding: 12px 12px 16px;
    //@include mediaMobileL {
    //  row-gap: 20px;
    //  padding: 20px;
    //}
  }

  &-title {
    @include lineClamp(3);
    font-size: 18px;
    line-height: 1.4;
    letter-spacing: 0.01em;
    font-weight: 500;
    margin-bottom: auto;
    @include hoverableDevice {
      &:hover {
        color: darkseagreen;
      }
    }
  }

  &-prices {
    @include flex(center);
    column-gap: 4px;
    font-size: 18px;

    &-caption {
      margin-right: auto;
    }
  }

  &-price {
    font-weight: 600;

    &._old {
      font-weight: 400;
      text-decoration: line-through;
      margin-right: 8px;
    }
  }


  &-button {
    @include buttonOutline;
  }
}
</style>
