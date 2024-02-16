<template>
  <section class="product">
    <div v-if="!isLoading" class="container">
      <div class="product-container">
        <div class="sliders">
          <div class="sliders-sticky">
            <div class="slider_bg">
              <div class="sliders-tags">
                <router-link class="sliders-tag" to="#">Акция</router-link>
                <div class="sliders-tag">Новинка</div>
              </div>
              <template v-if="product.images && product.images.length > 1">
                <swiper :lazy="settings.lazy" :loop="settings.loop" :modules="modules"
                        :pagination="settings.pagination" :slides-per-view="1" :space-between="20">
                  <swiper-slide v-for="(img, index) in product.images" :key="index">
                    <img :alt="product.title" :src="img.url" class="slider-img">
                  </swiper-slide>
                </swiper>
              </template>
              <template v-else-if="product.images && product.images.length === 1">
                <img :alt="product.title" :src="product.images[0].url" class="slider-img">
              </template>
              <template v-else>
                <img :alt="product.title" class="slider-img" src="src/assets/img/placeholder.jpg">
              </template>
            </div>
            <div class="slider-thumbs">
              <div v-for="(img, index) in product.images" :key="index" class="slider-thumb">
                <img :alt="product.title" :src="img.thumbSmall.url">
              </div>
            </div>
            <div class="sliders-warning">
              Нажмите на изображение для перехода в полноэкранный режим
            </div>
          </div>
        </div>
        <div class="product-information">
          <h1 class="product-title"> {{ product.title }}</h1>
          <div class="product-description">
            {{ product.description.full ? product.description.full : product.description.short }}
          </div>
          <div class="product-price">
            <span>{{ product.price }}</span> {{ currency }}
          </div>
          <button class="product-order" title="Открыть форму заказа" type="button">
            Заказать
          </button>
          <div v-if="product.parameters.length > 0" class="product-parameters">
            <div v-for="(parameter, index) in product.parameters" :key="index"
                 class="product-parameter">
              <div class="product-parameter-name">{{ parameter.title }}</div>
              <div class="product-parameter-value">{{ parameter.value }}</div>
            </div>
          </div>
          <div class="product-warning">
            Актуальные цены и наличие товара на складе можно уточнить по телефону
            <a :href="'tel:'+siteTel" :title="siteTel">{{ siteTel }}</a>
            или в
            <router-link to="/contacts">мессенджерах</router-link>
            .
          </div>

          <div class="calculator">
            <div class="calculator-top">
              <label class="form-group">
                <span class="form-label">Количество:</span>
                <input class="form-input" max="999" min="0" placeholder="Сколько заказать?"
                       type="number">
              </label>
            </div>
            <div class="calculator-discounts">
              <label class="calculator-label" title="Покупаю как юридическое лицо">
                <input class="calculator-checkbox" data-alt type="checkbox">
                <span class="calculator-label-text"> Рассчитать для юридического лица </span>
              </label>
              <label class="calculator-label" title="Скидка 8% при оплате наличными">
                <input class="calculator-checkbox" data-alt type="checkbox">
                <span class="calculator-label-text"> Рассчет наличными </span>
              </label>
              <label class="calculator-label"
                     title="Скидка 3% при покупке от 150 ед. и 5% при покупке от 300 ед.">
                <input class="calculator-checkbox" data-alt type="checkbox">
                <span class="calculator-label-text"> Оптовая скидка </span>
              </label>
              <div class="calculator-submit-info">
                Оптовая скидка применяется автоматически - 3% при покупке от 150 ед. и 5% при
                покупке от 300 ед.
              </div>
            </div>
            <div class="calculator-bottom">
              <div class="calculator-result-row">
                <div class="calculator-result-text">Приблизительная стоимость:</div>
                <div class="row">
                  <div class="calculator-result-value">23&nbsp;100</div>
                  <div class="calculator-result-currency">₽</div>
                </div>
              </div>
              <div class="calculator-submit-info">Указанная информация носит ознакомительный
                характер и
                не является публичной офертой. Наличие и актуальную стоимость узнавайте у продавца.
              </div>
              <router-link class="calculator-submit-button" title="Перейти в контакты"
                           to="/contacts">
                В контакты
              </router-link>
            </div>
          </div>

        </div>
      </div>
    </div>
    <img v-else alt="loading" class="lazy" src="src/assets/img/loading.gif">
  </section>
  <section class="gallery">
    <div class="gallery-container">
      <h2 class="gallery-title">Рассмотрите получше</h2>
      <div class="gallery-video">
        вот здесь видео или фото в 360 градусов
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, Pagination } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/free-mode'

// import Suggestions from 'src/views/components/sections/suggestions.vue'
// import breadcrumbs from 'src/views/components/sections/breadcrumbs.vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
    // Suggestions,
    // breadcrumbs,
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
      // siteTel: this.$store.state.main.site_tel,
      // currency: this.$store.state.main.site_currency,
      siteTel: '8-800-888-88-88',
      product: {
        title: 'title',
        description: {
          short: 'descriptionShort',
          full: 'descriptionFull',
        },
        price: 4500,
        images: [
          {
            url: 'src/assets/img/placeholder.jpg',
            thumbSmall: {
              url: 'src/assets/img/placeholder.jpg',
            }
          }
        ],
        parameters: [
          {
            title: 'parameterTitle',
            value: 'parameterValue',
          }
        ],
      },
      currency: 'rub',
      products: [],
      isLoading: false,
      suggestions: {
        products: [],
        title: {
          text: 'Интересное в категории',
        },
      },
    }
  },
  // methods: {
  //   createSuggestions() {
  //     this.suggestions.products = this.products.filter((product) => {
  //       const conditionNoSelfRepeat = product.id !== this.$route.params.id
  //       const conditionSameCategory = product.category === this.$route.params.category
  //       return conditionNoSelfRepeat && conditionSameCategory
  //     })
  //   },
  //   async fetchCatalog() {
  //
  //   },
  // },
  // mounted() {
  //   this.fetchCatalog()
  // },
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

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.product {
  @include section;

  &-container {
    @include container;
    display: grid;
    grid-template-columns: 3fr 2fr;
    column-gap: 20px;
  }

  &-information {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 20px;
    //& > :not(:last-child) {
    //  margin-bottom: 20px;
    //}
  }

  &-title {
    @include h2;
    margin-bottom: 20px;
  }

  &-price {
    @include h3;
    text-align: right;
  }

  &-order {
    @include h4;
    min-height: 56px;
    color: white;
    border-radius: 8px;
    background: darkseagreen;
  }

  &-description {
  }

  &-parameters {
  }

  &-parameter {
    @include flex(baseline, space-between);
    padding: 16px 20px;
    border-radius: 8px;

    &:nth-child(odd) {
      background: #f5f5f5;
      // border: 2px solid #f5f5f5;
    }

    &-name {
      flex-shrink: 0;
      min-width: 200px;
    }

    &-value {
      text-align: right;
      flex-grow: 1;
    }
  }

  &-warning {
    padding: 20px;
    border-radius: 8px;
    background: #f5f5f5;
    // background: darkseagreen;
    // color: white;

    a {
      font-weight: 500;
      // color: darkseagreen;
    }
  }
}

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

.calculator {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 4px 4px 16px 0 rgba(black, 0.1);

  &-label {
    @include flex(center);
  }

  &-checkbox {
    flex-shrink: 0;
    margin-right: 8px;
  }

  &-discounts {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 20px;
  }
}

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
