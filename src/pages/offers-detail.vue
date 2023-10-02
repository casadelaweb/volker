<template>
  <breadcrumbs />
  <section class="offer" itemscope itemtype="https://schema.org/Article">
    <meta :content="title" itemprop="headline name">
    <meta :content="description" itemprop="description">
    <link :href="siteUrl + img.src" itemprop="image">

    <div class="offer-container">
      <h1 class="offer-title">{{ title }}</h1>
      <img :alt="title" :data-src="img.src" class="lazy offer-img" src="src/assets/img/placeholder.jpg">
      <div class="offer-description">{{ description }}</div>
    </div>
  </section>
  <suggestions :products="suggestedProducts" title="Товары по акции" />
</template>

<script lang="ts">
import Suggestions from 'src/components/sections/suggestions.vue'
import breadcrumbs from 'src/components/sections/breadcrumbs.vue'

export default {
  components: {
    breadcrumbs,
    Suggestions,
  },
  data: function() {
    return {
      siteUrl: this.$store.state.main.site_url,
      title: 'Название акции или специального предложения',
      img: {
        src: '/assets/img/placeholder-yellow.jpg',
      },
      description: 'Скидка 3% при покупке от 150 ед. и 5% при покупке от 300 ед. Распространяется на все товары.',
      suggestedProducts: this.$store.state.catalog.products.slice(0, 4),
    }
  },
}
</script>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.offer {
  @include section;

  &-container {
    @include container;
  }

  &-title {
    @include h2;
    margin-bottom: 40px;
  }

  &-img {
    display: block;
    width: 100%;
    height: 480px;
    margin-bottom: 20px;
  }
}
</style>
