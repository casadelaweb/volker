<template>
  <breadcrumbs />
  <section class="catalog">
    <div class="catalog-container">
      <h1 class="catalog-title">
        <router-link title="Каталог" to="/catalog/">Каталог</router-link>
      </h1>
      <div class="catalog-layout">

        <filters :products="productsAll" @filtrationEnds="updateProducts"
                 @filtrationStarts="changeState('loading')" />

        <div class="catalog-main">

          <div v-if="isLoading" class="catalog-loading">
            <img alt="loading" class="catalog-loading-img lazy" data-src="src/assets/img/loading.gif"
                 src="src/assets/img/placeholder.jpg">
          </div>

          <div v-if="productsFiltered && productsFiltered.length === 0" class="catalog-nomatch">
            <h2 class="catalog-nomatch-title">
              К сожалению, по Вашему запросу <span class="catalog-nomatch-query">"{{ searchQueryLatest }}"</span> ничего
              не найдено.
            </h2>
            <ul class="catalog-nomatch-list">
              <li>Убедитесь, что все слова написаны без ошибок.</li>
              <li>Попробуйте использовать другие ключевые слова.</li>
              <li>Попробуйте использовать более популярные ключевые слова.</li>
              <li>Попробуйте уменьшить количество слов в запросе.</li>
            </ul>
          </div>

          <div class="catalog-categories">
            <article v-for="(category) in this.categories" :key="category.id" class="catalog-category">
              <h2 class="catalog-category-title">
                <router-link :to="category.url">{{ category.name }}</router-link>
              </h2>
              <!--<img :alt="category.name" class="catalog-category-img" data-src src="src/assets/img/placeholder.jpg">-->
              <!--<div class="catalog-category-description">{{ category.description.short }}</div>-->
            </article>
          </div>
          <div class="catalog-sorting">
            <div> Всего результатов: {{ this.productsFiltered.length }}</div>
            <div>сортировать по: сначала недорогие</div>
            <div>группировать по: категории</div>
            <div>показывать по: 24 / 48 / 96</div>
          </div>
          <div class="catalog-cards">
            <card v-for="product in productsFiltered" :key="product.id" :product="product" />
          </div>
          <div class="pagination">
            <div v-for="pageNumber in this.pagination.total" :key="pageNumber" class="pagination-item">
              <button :class="{
                'current': pageNumber === this.pagination.page
              }" class="pagination-button" type="button" @click="changePage(pageNumber)">
                {{ pageNumber }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import card from 'src/components/catalog/card.vue'
import filters from 'src/components/catalog/filters.vue'
import breadcrumbs from 'src/components/sections/breadcrumbs.vue'

export default {
  components: {
    card,
    filters,
    breadcrumbs,
  },
  data: function() {
    return {
      isLoading: true,
      categories: [],
      productsAll: [],
      productsFiltered: [],
      searchQueryLatest: '',
      pagination: {
        page: 1,
        limit: 3,
        total: 0,
      },
    }
  },
  methods: {
    changeState(state = 'completed') {
      this.isLoading = state === 'loading'
    },
    updateProducts(productsFiltered, query = '') {
      this.productsFiltered = productsFiltered
      this.searchQueryLatest = query

      this.changeState()
    },
    async fetchCatalog() {

    },
    changePage() {
    },
  },
  mounted() {
    this.fetchCatalog()
    // console.log(this.$route)
  },
}
</script>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

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

  &-layout {
    display: grid;
    grid-template-columns: 1fr 3fr;
    column-gap: 20px;
    // row-gap: 40px;
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

  &-nomatch {
    &-title {
      font-size: 32px;
      font-weight: 500;
      margin-bottom: 40px;
    }

    &-query {
      letter-spacing: 0.05em;
    }

    &-list {
      font-size: 20px;

      li {
        @include flex(center);
        margin-bottom: 12px;

        &::before {
          content: ' ';
          width: 10px;
          height: 10px;
          margin-right: 10px;
          border-radius: 50%;
          background: darkseagreen;
        }
      }
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
    background: #f0f0f0;
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

</style>
