<template>
  <div class="filters">
    <div class="filters-content">
      <div class="filter-group">
        <input v-model="filters.searchQuery" class="filters-search" placeholder="Искать что-нибудь"
               type="text"
               @input="filterProductsBySearch">
        <!-- <div v-if="searchQueryIsInvalid" class="filter-note">Минимальная длина слова - 3 символа.</div> -->
      </div>
      <template v-for="filterGroup in filters" :key="filterGroup.inputName">
        <div v-if="filterGroup.list && filterGroup.list.length > 0" class="filter-group">
          <div class="filter-title">{{ filterGroup.title }}</div>
          <label v-for="filter in filterGroup.list" :key="filter.inputValue" class="filter-label">
            <input v-model="filterGroup.model" :name="filterGroup.inputName"
                   :type="filterGroup.inputType"
                   :value="filter.inputValue" class="filter-checkbox"
                   @change="filterProductsByCategory">
            <span class="filter-name">{{ filter.filterName }}</span>
          </label>
        </div>
      </template>
      <div class="filter-group filter-group_suggest">
        <span>Нет нужного фильтра?</span>
        <button data-modal-open="modal-suggest-filter" type="button">Подскажите что нужно добавить
        </button>
      </div>
    </div>
  </div>
  <modal data-modal="modal-suggest-filter">
    <form class="form">
      <label class="form-label">
        <span class="form-subtitle">Каких фильтров не хватает?</span>
        <textarea class="form-input" placeholder="Каких фильтров не хватает?"></textarea>
      </label>
      <button class="form-button" type="submit">Отправить</button>
      <label class="form-note">
        <input class="form-checkbox" data-alt required type="checkbox">
        <span>Нажимая на кнопку "Отправить" вы даете согласие на хранение и обработку персональных данных.</span>
      </label>
    </form>
  </modal>
</template>

<script lang="ts">


export default {
  components: {},
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data: function () {
    return {
      // searchQueryIsInvalid: false,
      filters: {
        searchQuery: '',
        category: {
          title: 'Категории',
          inputName: 'filterByCategory',
          inputType: 'checkbox',
          model: [],
          list: [
            // ...this.$store.state.catalog.categories.map((category) => {
            //   return {
            //     inputValue: category.id,
            //     filterName: category.name,
            //   }
            // }),
          ],
        },
        offers: {
          title: '',
          inputName: 'offers',
          inputType: 'checkbox',
          model: 'price-low',
          list: [
            {
              filterName: 'В наличии',
              inputValue: '',
            },
            {
              filterName: 'По акции или со скидкой',
              inputValue: '',
            },
            {
              filterName: 'Уцененные',
              inputValue: '',
            },
          ],
        },
        sorting: {
          title: 'Сортировать по:',
          inputName: 'sorting',
          inputType: 'radio',
          model: 'price-low',
          list: [
            {
              filterName: 'По цене (сначала недорогие)',
              inputValue: 'price-low',
            },
            {
              filterName: 'По цене (сначала дорогие)',
              inputValue: 'price-high',
            },
            {
              filterName: 'По популярности',
              inputValue: 'popularity',
            },
          ],
        },
      },
    }
  },
  methods: {
    filterProductsBySearch() {
      this.$emit('filtrationStarts')

      const queries = this.filters.searchQuery
        .toLowerCase()
        .replace(/\s+/g, ' ')
        .split(' ')

      const productsFiltered = []
      queries.forEach((query) => {
        const filtered = this.products.filter((product) => {
          const name = product.name.toLowerCase().replace(/\s+/g, '')
          const description = product.description.short.toLowerCase().replace(/\s+/g, '')
          const keywords = product.keywords.toLowerCase().replace(/\s+/g, '')
          // product.keywords.forEach((keyword) => {
          //   keyword.toLowerCase().replace(/\s+/g, '')
          //   keywords = keywords + keyword
          // })

          const conditions = {
            notExistAlready: !productsFiltered.includes(product),
            hasAnyMatch: name.includes(query) || description.includes(query) || keywords.includes(query),
          }

          return conditions.notExistAlready && conditions.hasAnyMatch
        })

        productsFiltered.push(...filtered)
      })

      this.$emit('filtrationEnds', productsFiltered, this.filters.searchQuery)
    },
    filterProductsByCategory() {
      this.$emit('filtrationStarts')

      const productsFiltered = []
      const model = this.filters.category.model

      if (model.length > 0) {

        model.forEach((category) => {
          const filtered = this.products.filter((product) => {
            const conditions = {
              notExistAlready: !productsFiltered.includes(product),
              categoryMatches: product.category === category,
            }
            return conditions.notExistAlready && conditions.categoryMatches
          })
          productsFiltered.push(...filtered)
        })
      } else {
        productsFiltered.push(...this.products)
      }

      this.$emit('filtrationEnds', productsFiltered, this.filters.searchQuery)
    },
  },
}
</script>

<style lang="scss" scoped>
// @use 'src/styles/shared' as *;

.filters {
  // background: #f5f5f5;
  padding-right: 20px;
  border-right: 2px solid #f5f5f5;

  &-content {
    position: sticky;
    z-index: 0;
    top: 158px + 20px;
  }

  &-search {
    width: 100%;
    padding: 20px;
    transition: border-color 0.334s;
    border: 2px solid #f5f5f5;
    background: none;

    &:focus {
      border-color: darkseagreen;
    }
  }
}

.filter {
  &-note {
    font-weight: 300;
    margin-top: 10px;
  }

  &-group {
    margin-bottom: 40px;

    &_suggest {
      font-size: 14px;

      button {
        transition: color 0.334s;
        color: darkseagreen;

        &:hover {
          color: mediumseagreen;
        }
      }
    }
  }

  &-title {
    @include h4;
    margin-bottom: 20px;
  }

  &-label {
    @include flex(flex-end);
    margin-bottom: 20px;
  }

  &-checkbox {
    margin-right: 10px;
  }

  &-name {
    // font-size: 18px;
    line-height: 1;
  }
}
</style>
