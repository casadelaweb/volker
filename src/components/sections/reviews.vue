<template>
  <section class="reviews">
    <div class="container">
      <section-top title="Отзывы">
        <div class="reviews-slider-controls">
          <button class="reviews-slider-button" title="Предыдущий слайд" type="button">
            prev
          </button>
          <button class="reviews-slider-button" title="Следующий слайд" type="button">
            next
          </button>
        </div>
      </section-top>
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
                <div class="iconfont icon-location"></div>
                <div class="iconfont icon-location"></div>
                <div class="iconfont icon-location"></div>
                <div class="iconfont icon-location"></div>
                <div class="iconfont icon-location"></div>
              </div>
              <div :style="'width: '+ calculateRatingOverlayWidth(review.rating) + '%;'"
                   class="review-rating-row_overlay">
                <div class="iconfont icon-location"></div>
                <div class="iconfont icon-location"></div>
                <div class="iconfont icon-location"></div>
                <div class="iconfont icon-location"></div>
                <div class="iconfont icon-location"></div>
              </div>
            </div>
            <div class="review-body">{{ review.body }}</div>
            <div class="review-author">{{ review.author }}</div>
          </article>
        </swiper-slide>

      </swiper>

      <!--      <form class="form">-->
      <!--        <label class="form-label">-->
      <!--          <span class="form-subtitle">Ваше имя <span class="form-obligatory">*</span></span>-->
      <!--          <input class="form-input" placeholder="Имя" required type="text">-->
      <!--        </label>-->
      <!--        <label class="form-label">-->
      <!--          <span class="form-subtitle">Комментарий <span class="form-obligatory">*</span></span>-->
      <!--          <textarea class="form-input" placeholder="Комментарий"></textarea>-->
      <!--        </label>-->
      <!--        <label class="form-note">-->
      <!--          <input class="form-checkbox" data-alt required type="checkbox">-->
      <!--          <span>Нажимая на кнопку "Отправить" вы даете согласие на хранение и обработку персональных данных.</span>-->
      <!--        </label>-->
      <!--        <button class="form-button" type="button">Отправить</button>-->
      <!--      </form>-->
    </div>
  </section>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, Lazy, Navigation, Pagination } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/lazy'
import 'swiper/scss/pagination'

import sectionTop from 'src/components/ui/section-top.vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
    sectionTop,
  },
  props: {
    reviews: {
      type: Array,
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
    calculateRatingOverlayWidth(rating) {
      return rating * 100 / 5
    },
  },
  setup() {
    return {
      modules: [
        Lazy,
        Pagination,
        Navigation,
        A11y,
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import "src/styles/shared";

.reviews {
  @extend .section;
  overflow: hidden;

  &-slider {
    overflow: unset;
    padding: 20px 0 40px;

    &-button {
      padding: 4px 24px;
      border: 2px solid darkseagreen;
      margin-left: 20px;
      //border-radius: 20px;
    }
  }

  &-slide {
    box-shadow: 4px 4px 24px 0 rgba(black, 0.1);
  }
}

.review {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;
  padding: 20px;
  // min-height: 180px;

  &-rating {
    @include flex(center);
    position: relative;
    z-index: 0;
    font-size: 20px;
    color: #808080;
    width: fit-content;

    &-row {
      @include flex(center);
      $this: &;

      &_overlay {
        @extend #{$this};
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        min-width: 0;
        max-width: 100%;
        color: #ffd220;
      }
    }
  }

  &-author {
    font-weight: 500;
    text-align: right;
  }
}
</style>
