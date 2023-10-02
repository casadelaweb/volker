<template>
  <article class="menu-card" itemscope itemtype="https://schema.org/Product">
    <meta :content="product.name" itemprop="name">
    <meta :content="product.description.short" itemprop="description">
    <template v-if="product.images.length > 0">
      <link :href="siteUrl + product.images[0].src" itemprop="image">
    </template>
    <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
      <meta :content="product.price" itemprop="price">
      <meta content="RUB" itemprop="priceCurrency">
      <link href="https://schema.org/InStock" itemprop="availability">
    </div>

    <router-link :title="product.name" :to="product.url">
      <template v-if="product.images.length > 0">
        <img :alt="product.name" :src="product.images[0].thumb.url" class="menu-card-img">
      </template>
      <template v-else>
        <img :alt="product.name" class="menu-card-img" src="src/assets/img/placeholder.jpg">
      </template>
    </router-link>
    <h3 class="menu-card-title">
      <router-link :title="product.name" :to="product.url">
        {{ product.name }}
      </router-link>
    </h3>
    <div class="menu-card-description"> {{ product.description.short }}</div>
    <router-link :title="product.name" :to="product.url" class="menu-card-button">
      Подробнее
    </router-link>
  </article>
</template>

<script lang="ts">
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data: function () {
    return {
      siteUrl: this.$store.state.main.site_url,
      // isPreviewLoading: true,
    }
  },
}
</script>

<style lang="scss" scoped>
@import "src/styles/shared";

.menu-card {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s, pointer-events 0.25s;

  &.active {
    opacity: 1;
    pointer-events: auto;
  }

  &-title {
    @include lineClamp(2);
    font-weight: 500;
    // min-height: 40px;
  }

  &-description {
    @include lineClamp(3);
    margin-bottom: auto;
  }

  &-img {
    display: block;
    object-fit: cover;
    height: 240px;
    width: 100%;
  }

  &-button {
    @include flex(center, center);
    margin-top: auto;
    background: #f5f5f5;
    height: 48px;
  }
}
</style>
