<template>
  <section class="catalog">
    <div class="catalog-container">
      <div class="catalog-header">
        <h1 class="catalog-title">Название категории товаров</h1>
        <button style="margin: 20px 0 40px;" type="button" @click="handleClick">
          <span class="iconfont icon-filters"></span>
        </button>
      </div>
      <div class="catalog-layout">
        <Filters :category-filters="categoryFilters"/>
        <ProductsList :length="products.length">
          <ProductCard v-for="product in products" :key="product.id" :product="product"/>
        </ProductsList>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
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
      products: [],
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
          },
        })
        this.products = response.data
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    }
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
    @include h1;
    margin-bottom: 40px;
  }

  &-container {
    @include container;
  }

  &-main {
    position: relative;
    z-index: 0;
  }

  &-loading {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(white, 0.75);

    &-img {
      position: sticky;
      top: 50%;
      display: block;
      width: 128px;
      height: 128px;
      margin: 0 auto;
      transform: translateY(-50%);
    }
  }


  &-categories {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 20px;
    margin-bottom: 80px;
  }

  &-category {
    padding: 20px;
    background: #f5f5f5;
  }

  &-sorting {
    @include flex(center, space-between);
    margin-bottom: 40px;
    padding: 20px;
    box-shadow: 4px 4px 16px 0 rgba(black, 0.1);
  }

  &-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 40px;
  }
}

.catalog {
  &-layout {
    @include mediaLaptopXs {
      display: grid;
      grid-template-columns: 320px auto;
      column-gap: 40px;
    }
    @include mediaLaptopL {
      grid-template-columns: 360px auto;
    }
  }
}


</style>
