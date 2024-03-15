<template>
  <section class="catalog">
    <div class="catalog-container">
      <div class="catalog-header">
        <h1 class="catalog-title">Название категории товаров</h1>
        <button class="catalog-toggle" type="button" @click="handleClick">
          <span class="iconfont icon-filters"></span>
        </button>
      </div>
      <div class="catalog-layout">
        <Filters :category-filters="categoryFilters"/>
        <ProductsList :length="products.length">
          <ProductCard v-for="product in products" :key="product.id" :is-loading="isLoading"
                       :product="product"/>
        </ProductsList>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { PlaceholderProducts } from 'src/api/base.ts'
import { defineComponent } from 'vue'
import card from 'src/views/components/catalog/ProductCard.vue'
import Filters from 'src/views/components/catalog/Filters.vue'
import breadcrumbs from 'src/views/components/sections/breadcrumbs.vue'
import Filter from 'src/views/components/catalog/Filter.vue'
import ProductCard from 'src/views/components/catalog/ProductCard.vue'
import ProductsList from 'src/views/components/catalog/ProductsList.vue'
import axios from 'axios'

export default defineComponent({
  components: {
    ProductsList,
    ProductCard,
    card,
    Filters,
    breadcrumbs,
    Filter,
  },
  data: function () {
    return {
      products: PlaceholderProducts,
      isLoading: false,
      categoryFilters: [
        {
          title: 'test title filter',
          isOpenDefault: true,
          type: 'checkbox',
          inputs: [
            {
              name: 'test',
              value: 'test1',
              label: 'test title 1',
            },
            {
              name: 'test',
              value: 'test2',
              label: 'test title 3',
            },
            {
              name: 'test',
              value: 'test3',
              label: 'test title 3',
            },
          ]
        },
        {
          title: 'test 2 title filter',
          type: 'checkbox',
          inputs: [
            {
              name: 'test',
              value: 'test1',
              label: 'test title 1',
            },
            {
              name: 'test',
              value: 'test2',
              label: 'test title 3',
            },
            {
              name: 'test',
              value: 'test3',
              label: 'test title 3',
            },
          ]
        },
        {
          title: 'test 3 title filter',
          type: 'checkbox',
          inputs: [
            {
              name: 'test',
              value: 'test1',
              label: 'test title 1',
            },
            {
              name: 'test',
              value: 'test2',
              label: 'test title 3',
            },
            {
              name: 'test',
              value: 'test3',
              label: 'test title 3',
            },
          ]
        },
        {
          title: 'Сортировать',
          type: 'radio',
          inputs: [
            {
              name: 'sort',
              value: 'az',
              label: 'По алфавиту',
            },
            {
              name: 'sort',
              value: 'price_ascending',
              label: 'Сначала дешевле',
            },
            {
              name: 'sort',
              value: 'price_descending',
              label: 'Сначала дороже',
            },
          ]
        }
      ],
      searchQueryLatest: '',
    }
  },
  methods: {
    async fetchData() {
      try {
        this.isLoading = true
        const response = await axios({
          method: 'get',
          url: '/api/products/',
          params: {
            limit: 24,
            category: this.currentRoute,
            public_key: '95fsHRwiJoIqvJo1rxPil7Cs',
          },
        })
        this.products = response.data
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    handleClick(event: MouseEvent) {

    },
  },
  mounted() {
    this.fetchData()
  },
  computed: {
    currentRoute() {
      return this.$router.currentRoute.value.params.category
    }
  },
})
</script>

<style lang="scss" scoped>
@use 'src/styles/shared/index' as *;

.pagination {
  @include flex(center, center);
  margin: 80px 0 0;

  &-item {
    margin: 0 10px;
  }

  &-button {
    @include flex(center, center);
    font-size: 18px;
    font-weight: 600;
    width: 48px;
    height: 48px;
    color: #ff648d;
    border: 2px solid #ff648d;

    &.current {
      color: white;
      background: #ff648d;
    }
  }
}

.catalog {
  @include section;

  &-title {
    @include h2;
    margin-bottom: 40px;
  }

  &-container {
    @include container;
  }

  &-layout {
    @include mediaTabletL {
      display: grid;
      grid-template-columns: 320px auto;
      column-gap: 40px;
    }
    @include mediaLaptopL {
      grid-template-columns: 360px auto;
    }
  }

  &-toggle {
    display: flex;
    @include mediaLaptopXs {
      display: none;
    }
  }
}
</style>
