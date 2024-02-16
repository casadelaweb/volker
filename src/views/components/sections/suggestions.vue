<template>
  <section class="suggestions">
    <div class="suggestions-container">
      <section-top :button="button" :title="title"/>
      <div v-if="products.length > 0" class="suggestions-layout">
        <card v-for="product in products" :key="product.id" :product="product"/>
      </div>
      <div v-else class="suggestions-empty">
        <div class="suggestions-empty-warning">Пока здесь ничего нет.</div>
        <router-link class="suggestions-empty-button" to="/catalog/">Перейти в каталог</router-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import sectionTop from 'src/components/ui/section-top.vue'
import card from 'src/components/catalog/card.vue'

export default {
  components: {
    card,
    sectionTop,
  },
  props: {
    title: {
      type: Object,
      default: function () {
        return {
          text: 'Рекомендуемое',
          url: '/catalog/recommended',
        }
      },
      required: false,
    },
    button: {
      type: Object,
      default: function () {
        return {
          text: 'Смотреть все',
          url: '/catalog/recommended',
        }
      },
      required: false,
    },
    limit: {
      type: Number,
      default: 8,
      required: false,
    },
    products: {
      type: Array,
      required: true,
    },
  },
  data: function () {
    return {}
  },
}
</script>

<style lang="scss" scoped>
// @use 'src/styles/shared' as *;

.suggestions {
  @include section;

  &-container {
    @include container;
  }

  &-layout {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 40px;
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
