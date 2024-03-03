<template>
  <section class="product">
    <div class="product-container">
      <div>
        <img alt="loading" class="lazy" src="src/assets/img/loading.gif">
      </div>
      <div class="product-information">
        <h1 class="product-title"> {{ product.title }}</h1>
        <div class="product-description">
          {{ product.description }}
        </div>
        <div class="product-price">
          <span>{{ product.priceOld }}</span>
          <span>{{ product.price }}</span>
          <span>{{ currency }}</span>
        </div>
        <button class="product-order" title="Открыть форму заказа" type="button">
          Заказать
        </button>
        <div v-if="product.parameters?.length > 0" class="product-parameters">
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
      </div>
    </div>

  </section>

</template>

<script lang="ts">
import { iPageProduct } from '../../../fakeapi/types/base.ts'
import { defineComponent } from 'vue'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, Pagination } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/free-mode'

// import Suggestions from 'src/views/components/sections/SectionProducts.vue'
// import breadcrumbs from 'src/views/components/sections/breadcrumbs.vue'

export default defineComponent({
  name: 'Product',
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
      siteTel: '8-800-888-88-88',
      product: {} as iPageProduct,
      currency: '₽',
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
  methods: {
    async fetchData() {
      try {
        this.isLoading = true
        const response = await axios.get(`/api/product/${ this.currentRoute }`)
        this.product = response.data
        console.log(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    }
  },
  computed: {
    currentRoute() {
      return this.$router.currentRoute.value.params.id
    }
  },
  mounted() {
    this.fetchData()
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
  min-width: 0;
  min-height: 0;
  @include section;

  &-container {
    min-width: 0;
    min-height: 0;
    @include container;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 16px;
  }

  &-information {
    min-width: 0;
    min-height: 0;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 16px;
  }

  &-title {
    @include h2;
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
    column-gap: 16px;
    padding: 16px;
    border-radius: 8px;

    &:nth-child(odd) {
      background: #f5f5f5;
      // border: 2px solid #f5f5f5;
    }

    &-name {
      flex-shrink: 0;
      // min-width: 80px;
    }

    &-value {
      text-align: right;
      flex-grow: 1;
    }
  }

  &-warning {
    padding: 16px;
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
</style>
