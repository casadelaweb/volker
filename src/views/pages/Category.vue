<template>
  <!--  <section class="catalog">-->
  <!--    <div class="catalog-container">-->
  <!--      <h1 class="catalog-title">-->
  <!--        <router-link title="Каталог" to="/catalog/">Каталог</router-link>-->
  <!--      </h1>-->
  <!--      <div class="catalog-layout">-->

  <!--        <filters :products="productsAll" @filtrationEnds="updateProducts"-->
  <!--                 @filtrationStarts="changeState('loading')"/>-->

  <!--        <div class="catalog-main">-->

  <!--          <div v-if="isLoading" class="catalog-loading">-->
  <!--            <img alt="loading" class="catalog-loading-img lazy"-->
  <!--                 data-src="src/assets/img/loading.gif"-->
  <!--                 src="src/assets/img/placeholder.jpg">-->
  <!--          </div>-->

  <!--          <div v-if="productsFiltered && productsFiltered.length === 0" class="catalog-nomatch">-->
  <!--            <h2 class="catalog-nomatch-title">-->
  <!--              К сожалению, по Вашему запросу <span-->
  <!--              class="catalog-nomatch-query">"{{ searchQueryLatest }}"</span> ничего-->
  <!--              не найдено.-->
  <!--            </h2>-->
  <!--            <ul class="catalog-nomatch-list">-->
  <!--              <li>Убедитесь, что все слова написаны без ошибок.</li>-->
  <!--              <li>Попробуйте использовать другие ключевые слова.</li>-->
  <!--              <li>Попробуйте использовать более популярные ключевые слова.</li>-->
  <!--              <li>Попробуйте уменьшить количество слов в запросе.</li>-->
  <!--            </ul>-->
  <!--          </div>-->

  <!--          <div class="catalog-categories">-->
  <!--            <article v-for="(category) in this.categories" :key="category.id"-->
  <!--                     class="catalog-category">-->
  <!--              <h2 class="catalog-category-title">-->
  <!--                <router-link :to="category.url">{{ category.name }}</router-link>-->
  <!--              </h2>-->
  <!--              &lt;!&ndash;<img :alt="category.name" class="catalog-category-img" data-src src="src/assets/img/placeholder.jpg">&ndash;&gt;-->
  <!--              &lt;!&ndash;<div class="catalog-category-description">{{ category.description.short }}</div>&ndash;&gt;-->
  <!--            </article>-->
  <!--          </div>-->
  <!--          <div class="catalog-sorting">-->
  <!--            <div> Всего результатов: {{ this.productsFiltered.length }}</div>-->
  <!--            <div>сортировать по: сначала недорогие</div>-->
  <!--            <div>группировать по: категории</div>-->
  <!--            <div>показывать по: 24 / 48 / 96</div>-->
  <!--          </div>-->
  <!--          <div class="catalog-cards">-->
  <!--            <card v-for="product in productsFiltered" :key="product.id" :product="product"/>-->
  <!--          </div>-->
  <!--          <div class="pagination">-->
  <!--            <div v-for="pageNumber in this.pagination.total" :key="pageNumber"-->
  <!--                 class="pagination-item">-->
  <!--              <button :class="{-->
  <!--                'current': pageNumber === this.pagination.page-->
  <!--              }" class="pagination-button" type="button" @click="changePage(pageNumber)">-->
  <!--                {{ pageNumber }}-->
  <!--              </button>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </section>-->

  <section class="catalog">
    <div class="catalog-container">
      <div class="catalog-header">
        <h1 class="catalog-title">Название категории товаров</h1>
        <button style="margin: 20px 0 40px;" type="button" @click="handleClick">
          <span class="iconfont icon-filters"></span>
        </button>
      </div>
      <div class="catalog-layout">
        <!-- todo: декомпозировать в отдельные компоненты -->

        <form class="filters">
          <div class="filters-header">
            <div class="filters-title">Фильтры</div>
            <button class="filters-close" title="Закрыть" type="button" @click="handleClick">
              <span class="iconfont icon-close"></span>
            </button>
          </div>
          <div class="filters-body">
            <Filter v-for="filter in categoryFilters" :inputs="filter.inputs"
                    :isOpenDefault="filter.isOpenDefault" :title="filter.title"
                    :type="filter.type"/>
          </div>
          <div class="filters-footer">
            <button class="filters-reset" type="button">
              Сбросить
            </button>
            <button class="filters-submit" type="button">
              Применить
            </button>
          </div>
        </form>
        <Teleport to="#app">
          <div class="filters-overlay" @click="handleClick"></div>
        </Teleport>

        <div :class="products.length === 0 ? 'products _empty' : 'products' ">

          <article v-for="product in products" :key="product.id" class="product">
            <div class="product-buttons">
              <button class="product-fav" title="Добавить в избранное" type="button">
                <span class="iconfont icon-heart"></span>
              </button>
              <button class="product-cart" title="Добавить в корзину" type="button">
                <span class="iconfont icon-suitcase"></span>
              </button>
            </div>

            <router-link :title="product.title" :to="product.url">
              <img :alt="product.title" :src="product.img.url" class="product-img">
            </router-link>
            <div class="product-body">
              <h2 class="product-title">
                <router-link :title="product.title" :to="product.url">
                  {{ product.title }}
                </router-link>
              </h2>
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

          <div v-if="products.length === 0" class="catalog-nomatch">
            <h2 class="catalog-nomatch-title">
              К сожалению, по Вашему запросу <span
              class="catalog-nomatch-query">"{{ searchQueryLatest }}"</span> ничего
              не найдено.
            </h2>
            <ul class="catalog-nomatch-list">
              <li>Убедитесь, что все слова написаны без ошибок.</li>
              <li>Попробуйте использовать другие ключевые слова.</li>
              <li>Попробуйте использовать более популярные ключевые слова.</li>
              <li>Попробуйте уменьшить количество слов в запросе.</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import card from 'src/views/components/catalog/card.vue'
import filters from 'src/views/components/catalog/filters.vue'
import breadcrumbs from 'src/views/components/sections/breadcrumbs.vue'
import Filter from 'src/views/components/Filter.vue'

export default defineComponent({
  components: {
    card,
    filters,
    breadcrumbs,
    Filter,
  },
  data: function () {
    return {
      products: [
        {
          id: 'teriohnasg',
          url: '/product/teriohnasg/',
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit minima',
          img: {
            url: 'src/assets/img/placeholder.jpg',
          },
          price: '13340',
          priceOld: '15560',
          currency: '₽',
        },
        {
          id: 'teriohnasg2',
          url: '/product/teriohnasg2/',
          title: 'Lorem ipsum dolor sit amet',
          img: {
            url: 'src/assets/img/placeholder.jpg',
          },
          price: '5340',
          currency: '₽',
        },
        {
          id: 'teriohnasg3',
          url: '/product/teriohnasg3/',
          title: 'Lorem pnsdgpnp ipsum dolor sit amet',
          img: {
            url: 'src/assets/img/placeholder.jpg',
          },
          price: 'по запросу',
        },
        {
          id: 'teriohnasg',
          url: '/product/teriohnasg/',
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit minima',
          img: {
            url: 'src/assets/img/placeholder.jpg',
          },
          price: '13340',
          priceOld: '15560',
          currency: '₽',
        },
        {
          id: 'teriohnasg2',
          url: '/product/teriohnasg2/',
          title: 'Lorem ipsum dolor sit amet',
          img: {
            url: 'src/assets/img/placeholder.jpg',
          },
          price: '5340',
          currency: '₽',
        },
        {
          id: 'teriohnasg3',
          url: '/product/teriohnasg3/',
          title: 'Lorem pnsdgpnp ipsum dolor sit amet',
          img: {
            url: 'src/assets/img/placeholder.jpg',
          },
          price: 'по запросу',
        },
        {
          id: 'teriohnasg2',
          url: '/product/teriohnasg2/',
          title: 'Lorem ipsum dolor sit amet',
          img: {
            url: 'src/assets/img/placeholder.jpg',
          },
          price: '5340',
          currency: '₽',
        },
        {
          id: 'teriohnasg3',
          url: '/product/teriohnasg3/',
          title: 'Lorem pnsdgpnp ipsum dolor sit amet',
          img: {
            url: 'src/assets/img/placeholder.jpg',
          },
          price: 'по запросу',
        },
      ],
      isLoading: false,
      categories: [],
      productsAll: [],
      productsFiltered: [],
      searchQueryLatest: '',
      pagination: {
        page: 1,
        limit: 3,
        total: 0,
      },
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
    handleClick(event: MouseEvent) {
      const modal = document.body.querySelector('.filters')
      const overlay = document.body.querySelector('.filters-overlay')

      modal.classList.toggle('_active')
      overlay.classList.toggle('_active')
    }
  },
  mounted() {
    this.fetchCatalog()
    // console.log(this.$route)
  },
})
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
      grid-template-columns: 1fr 3fr;
      column-gap: 16px;
    }
  }
}

.filters {
  @include flex($d: column);
  flex: 0 0 auto;
  min-width: 0;
  min-height: 0;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 320px;
  height: 100%;
  background: white;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
  box-shadow: 4px 4px 16px 0 rgba(black, 0.05);
  pointer-events: none;
  transform: translate(-100%, 0);
  transition: transform 0.334s;
  @include mediaLaptopXs {
    position: sticky;
    top: 100px;
    z-index: 1;
    height: fit-content;
    pointer-events: auto;
    transform: none;
  }

  &._active {
    pointer-events: auto;
    transform: none;
  }

  &-header, &-footer {
    @include flex(center, space-between);
    padding: 20px;
    border-bottom: 1px solid #f0f0f0;
  }

  &-body {
    overflow-x: auto;
  }

  &-title {
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 0.01em;
  }

  &-close {
    $size: 36px;
    flex: 0 0 auto;
    width: $size;
    height: $size;
    font-size: $size * 0.5;
    border-radius: 50%;
    background: rgba(white, 0.5);
    box-shadow: 0 2px 4px 0 rgba(black, 0.05);
    transition: transform 0.25s, color 0.25s;
    @include mediaLaptopXs {
      display: none;
    }

    @include hoverableDevice {
      &:hover {
        color: darkseagreen;
      }
    }

    &:active {
      transform: scale(1.1);
    }
  }

  &-footer {
    margin-top: auto;
    border-bottom: 0;
  }

  &-reset {
    @include buttonOutline;
  }

  &-submit {
    @include buttonAccented;
  }

  &-overlay {
    position: fixed;
    z-index: 90;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(black, 0.25);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.334s;

    &._active {
      opacity: 1;
      pointer-events: auto;
    }
  }
}

.products {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 16px;
  column-gap: 16px;
  flex: 0 0 auto;
  min-width: 0;
  min-height: 0;
  @include mediaLaptopXs {
    grid-template-columns: repeat(3, 1fr);
  }

  &._empty {
    display: block
  }
}

.product {
  @include flex($d: column);
  //row-gap: 20px;
  border: 1px solid #f0f0f0;
  box-shadow: 4px 4px 16px 0 rgba(black, 0.05);
  // padding: 20px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  z-index: 0;

  &-buttons {
    @include flex($d: column);
    row-gap: 12px;
    position: absolute;
    z-index: 1;
    top: 16px;
    right: 8px;
  }

  &-fav, &-cart {
    $size: 36px;
    flex: 0 0 auto;
    width: $size;
    height: $size;
    font-size: $size * 0.5;
    border-radius: 50%;
    background: rgba(white, 0.5);
    box-shadow: 0 2px 4px 0 rgba(black, 0.05);
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

  //&-fav {
  //}
  //
  //&-cart {
  //}

  &-img {
    aspect-ratio: 4 / 3;
    width: 100%;
    background: #f0f0f0;
    flex: 0 0 auto;
  }

  &-body {
    @include flex($d: column);
    flex: 1 0 auto;
    row-gap: 24px;
    padding: 16px 16px 24px;
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

  //&-currency {
  //  font-weight: 600;
  //}

  &-button {
    @include buttonOutline;
  }
}
</style>
