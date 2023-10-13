<template>
  <nav class="menu" data-menu="menu" role="navigation">
    <div class="menu-categories">
      <template v-for="(category, i) in categories" :key="category.id">
        <router-link
          :class="[ 'menu-category', { 'active': i === 0 } ]"
          :data-category="category.id"
          :to="category.url"
          @mouseenter="showProducts($event)">
          {{ category.name }}
        </router-link>
      </template>

      <router-link class="menu-category menu-category-alt" to="/catalog/">Все товары</router-link>
    </div>
    <div class="menu-products">
      <div v-for="(category, indexCategory) in categories"
           :key="category.id"
           :class="['menu-products-group', {'active': indexCategory === 0}]"
           :data-category="category.id">

        <router-link v-for="(product, indexProduct) in category.products"
                     :key="product.id"
                     :class="['menu-product', {'active': indexProduct === 0}]"
                     :data-product-id="product.id"
                     :to="product.url"
                     @mouseenter="showProductPreview($event)">
          {{ product.name }}
        </router-link>

        <div v-if="!category.products || category.products.length === 0">
          В этой категории пока нет товаров.
        </div>
      </div>
    </div>
    <div class="menu-preview">
      <menu-product-card v-if="!isLoading" :class="{ 'active': isPreviewing }" :product="productPreview" />
    </div>
  </nav>
</template>

<script lang="ts">
import menuProductCard from 'src/components/modals/menu-product-card.vue'

export default {
  components: {
    menuProductCard,
  },
  data: function() {
    return {
      categories: [],
      products: [],
      productPreview: {},
      isPreviewing: true,
      isLoading: true,
    }
  },
  methods: {
    showProducts(event) {
      const buttonPrevious = this.menuCategories.querySelector('[data-category].active')
      buttonPrevious?.classList.remove('active')
      const button = event.target.closest('[data-category]')
      button?.classList.add('active')

      const menuProductsGroupPrevious = this.menuProducts.querySelector('[data-category].active')
      menuProductsGroupPrevious?.classList.remove('active')

      const id = button?.getAttribute('data-category')
      const menuProductsGroup = this.menuProducts.querySelector('[data-category=' + id + ']')
      menuProductsGroup?.classList.add('active')

      const product = menuProductsGroup.querySelector('.menu-product')
      if(product) {
        const productActive = menuProductsGroup.querySelector('.menu-product.active')
        let id = ''
        if(productActive) {
          id = productActive.getAttribute('data-product-id')
        } else {
          product.classList.add('active')
          id = product.getAttribute('data-product-id')
        }

        this.changePreviewedProductById(id)
        this.isPreviewing = true
      } else {
        this.isPreviewing = false
      }
    },
    deactivateProducts(parent = this.menuProducts) {
      const productActive = parent.querySelector('.menu-product.active')
      productActive?.classList.remove('active')
    },
    activateProduct(button) {
      button.classList.add('active')
    },
    showProductPreview(event) {
      // this.isPreviewing = true;

      this.deactivateProducts(this.menuProducts.querySelector('.menu-products-group.active'))

      const button = event.target.closest('.menu-product')
      this.activateProduct(button)

      const id = button.getAttribute('data-product-id')
      this.changePreviewedProductById(id)
    },
    changePreviewedProductById(id) {
      const products = this.products

      this.productPreview = products.find(product => {
        return product.id === id
      })
    },
    async fetchCatalog() {
    }
  },
  mounted() {
    this.fetchCatalog()
    const {body,} = document
    this.menu = body.querySelector('[data-menu=menu]')

    this.menuCategories = this.menu.querySelector('.menu-categories')
    this.menuProducts = this.menu.querySelector('.menu-products')
    this.menuPreview = this.menu.querySelector('.menu-preview')
  },
}
</script>

<style lang="scss">
@use 'src/styles/shared' as *;

.menu {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  width: 100%;
  transition: transform 0.5s;
  transform: translateY(-150%);
  pointer-events: none;
  background: white;
  box-shadow: 0 0 20px 0 rgba(black, 0.1);

  &.active {
    transform: none;
    pointer-events: auto;
  }

  &-categories, &-products {
    @include flex($d: column);
    overflow-y: auto;

    max-height: 480px;
    border-right: 2px solid #f5f5f5;

    &::-webkit-scrollbar {
      width: 3px;
    }

    &::-webkit-scrollbar-thumb {
      border: 0;
      border-radius: 0;
      background: #bfbfbf;
    }
  }

  &-category, &-product {
    font-size: 18px;
  }

  &-category {
    padding: 20px;
    transition: background-color 0.25s, color 0.25s;

    &.active {
      background: #f5f5f5;
    }

    &-alt {
      margin-top: auto;
    }
  }

  &-products {
    padding: 20px;

    &-group {
      display: none;

      &.active {
        display: block;
      }
    }
  }

  &-product {
    display: block;
    width: fit-content;
    margin-bottom: 16px;
    transition: color 0.25s;

    &.active {
      color: darkseagreen;
    }
  }

  &-preview {
    padding: 20px;
  }
}
</style>
