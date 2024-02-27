<template>

  <section class="promo" itemscope itemtype="https://schema.org/Article">
    <meta :content="title" itemprop="headline name">
    <meta :content="description" itemprop="description">
    <link :href="siteUrl + img.src" itemprop="image">

    <div class="promo-container">
      <h1 class="promo-title">{{ title }}</h1>
      <img :alt="title" class="promo-img" loading="lazy" src="src/assets/img/placeholder.jpg">
      <div class="promo-description">{{ description }}</div>
    </div>
  </section>
  <SectionProducts :products="suggestedProducts" title="Товары по акции"/>
</template>

<script lang="ts">
import SectionProducts from 'src/views/components/sections/SectionProducts.vue'
import breadcrumbs from 'src/views/components/sections/breadcrumbs.vue'
import axios from 'axios'

export default {
  components: {
    breadcrumbs,
    SectionProducts,
  },
  data: function () {
    return {
      siteUrl: 'siteUrl',
      title: 'Название акции или специального предложения',
      img: {
        src: 'src/assets/img/placeholder.jpg',
      },
      description: 'Скидка 3% при покупке от 150 ед. и 5% при покупке от 300 ед. Распространяется на все товары.',
      suggestedProducts: [],
      isLoading: true,
    }
  },
  methods: {
    async fetchData(url: string) {


      try {
        let result = false
        this.isLoading = true
        const response = await axios.get(url)
        console.log(response)
        result = response.data
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }


    },
  },
  mounted() {
    this.fetchData('posts/')
  }
}
</script>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.promo {
  @include section;

  &-container {
    @include container;
    //overflow: hidden;
  }

  &-title {
    @include h2;
    margin-bottom: 40px;
  }

  &-img {
    //display: block;
    width: 100%;
    aspect-ratio: 21 / 9;
    margin-bottom: 20px;
  }
}
</style>
