<template>
  <section class="reviews">
    <div class="reviews-container">
      <SectionTop :is-loading="false" :title="{ text:'Отзывы', }">
        <div class="reviews-slider-controls">
          <button class="reviews-slider-button" title="Предыдущий слайд" type="button">
            <span class="iconfont icon-arrow-left"></span>
          </button>
          <button class="reviews-slider-button" title="Следующий слайд" type="button">
            <span class="iconfont icon-arrow-right"></span>
          </button>
        </div>
      </SectionTop>
      <swiper :lazy="settings.lazy"
              :loop="settings.loop"
              :modules="modules"
              :pagination="settings.pagination"
              :slides-per-view="1.5"
              :space-between="20"
              class="reviews-slider">

        <swiper-slide v-for="review in reviews" :key="review.id" class="reviews-slide">
          <article class="review">
            <div class="review-rating">
              <div class="review-rating-row">
                <div class="iconfont icon-heart-fill"></div>
                <div class="iconfont icon-heart-fill"></div>
                <div class="iconfont icon-heart-fill"></div>
                <div class="iconfont icon-heart-fill"></div>
                <div class="iconfont icon-heart-fill"></div>
              </div>
              <div :style="'width: '+ calculateRatingOverlayWidth(review.rating) + '%;'"
                   class="review-rating-row _overlay">
                <div class="iconfont icon-heart-fill"></div>
                <div class="iconfont icon-heart-fill"></div>
                <div class="iconfont icon-heart-fill"></div>
                <div class="iconfont icon-heart-fill"></div>
                <div class="iconfont icon-heart-fill"></div>
              </div>
            </div>
            <div class="review-body">{{ review.body }}</div>
            <div class="review-author">{{ review.author }}</div>
          </article>
        </swiper-slide>

      </swiper>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, Navigation, Pagination } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/pagination'
import SectionTop from 'src/views/components/ui/SectionTop.vue'

interface review {
  id: string,
  title: string,
  body: string,
  author: string,
  rating: number,
}

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
    SectionTop,
  },
  props: {
    reviews: {
      type: Array<review>,
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
        loop: false,
      },
    }
  },
  methods: {
    calculateRatingOverlayWidth(rating: number) {
      return rating * 100 / 5
    },
  },
  setup() {
    return {
      modules: [
        Pagination,
        Navigation,
        A11y,
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.reviews {
  @include section;
  overflow: hidden;

  &-container {
    @include container;
  }

  &-slider {
    overflow: unset;
    padding: 20px 0 40px;

    &-controls {
      @include flex(center);
      column-gap: 40px;
    }

    &-button {
      @include flex(center, center);
      flex: 0 0 auto;
      border-radius: 8px;
      width: 64px;
      height: 32px;
      font-size: 16px;
      border: 2px solid darkseagreen;
      color: darkseagreen;
    }
  }

  &-slide {
    @include flex($d: column);
    height: auto;
    border-radius: 8px;
    box-shadow: 4px 4px 16px 0 rgba(black, 0.05);
    border: 1px solid #f0f0f0;
  }
}

.review {
  flex: 1 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;
  padding: 20px;
  // border-radius: 8px;
  // min-height: 180px;

  &-rating {
    @include flex(center);
    font-size: 20px;
    position: relative;
    z-index: 0;
    width: fit-content;
    color: #f0f0f0;

    &-row {
      @include flex(center);
      column-gap: 8px;
      $this: &;

      &._overlay {
        @extend #{$this};
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        overflow: hidden;
        width: 100%;
        min-width: 0;
        max-width: 100%;
        height: 100%;
        color: #f5ca20;
      }
    }
  }

  &-author {
    font-weight: 500;
    text-align: right;
  }
}
</style>
