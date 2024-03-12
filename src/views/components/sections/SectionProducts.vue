<template>
  <section class="suggestions">
    <div class="suggestions-container">
      <SectionTop :button="button" :is-loading="isLoading" :title="title"/>
      <div v-if="products.length > 0" class="suggestions-layout">
        <ProductCard v-for="product in products" :key="product.id"
                     :is-loading="isLoading"
                     :product="product"/>
      </div>
      <div v-else class="suggestions-empty">
        <div class="suggestions-empty-warning">Пока здесь ничего нет.</div>
        <router-link class="suggestions-empty-button" to="/catalog/">Перейти в каталог</router-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import SectionTop from 'src/views/components/ui/SectionTop.vue'
import ProductCard from 'src/views/components/catalog/ProductCard.vue'
import { ref } from 'vue'
import { iPageProduct } from 'src/api/base.ts'

const props = defineProps<{
  isLoading: boolean,
  products: Array<iPageProduct>,
  title: {
    url: string,
    text: string,
  }
  button: {
    url: string,
    text: string,
  }
}>()
</script>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.suggestions {
  @include section;

  &-container {
    @include container;
  }

  &-layout {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 12px;
    row-gap: 12px;
    @include mediaMobileM {
      column-gap: 16px;
      row-gap: 16px;
    }
    @include mediaTabletL {
      grid-template-columns: repeat(4, 1fr);
      column-gap: 20px;
      row-gap: 20px;
    }
  }

  &-empty {
    text-align: center;

    &-warning {
      @include h4;
      margin: 40px 0 20px;
    }

    &-button {
      @include flex(center, center);
      font-weight: 500;
      letter-spacing: 0.025em;
      width: 240px;
      height: 48px;
      margin: 0 auto;
      color: white;
      border-radius: 8px;
      background: darkseagreen;
    }
  }
}
</style>
