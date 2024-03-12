<template>
  <SectionHero/>
  <SectionDisplay/>
  <SectionProducts :button="button" :is-loading="isLoading" :products="products" :title="title"/>
  <SectionRegistrationDiscount/>
  <SectionPromos/>
  <SectionReviews :reviews="reviews"/>
  <SectionProduction/>
</template>

<script lang="ts">
import { PlaceholderProducts } from 'src/api/base.ts'
import axios from 'axios'
import { defineComponent } from 'vue'
import SectionProduction from 'src/views/components/sections/SectionProduction.vue'
import SectionReviews from 'src/views/components/sections/SectionReviews.vue'
import SectionPromos from 'src/views/components/sections/SectionPromos.vue'
import SectionDisplay from 'src/views/components/sections/SectionDisplay.vue'
import SectionHero from 'src/views/components/sections/SectionHero.vue'
import SectionProducts from 'src/views/components/sections/SectionProducts.vue'
import SectionRegistrationDiscount
  from 'src/views/components/sections/SectionRegistrationDiscount.vue'

export default defineComponent({
  components: {
    SectionRegistrationDiscount,
    SectionProducts,
    SectionHero,
    SectionDisplay,
    SectionPromos,
    SectionProduction,
    SectionReviews,
  },
  data: function () {
    return {
      titleData: 'Актуальные публикации',
      reviews: [
        {
          id: 'test_id1',
          title: 'test title',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur iure provident tempora unde voluptate! Error et iusto libero magni odit quos repellendus voluptates! Accusantium commodi, consectetur deserunt dolore eveniet facere in laudantium necessitatibus nemo optio perferendis placeat quo, reiciendis voluptatem!',
          author: 'test author',
          rating: 3.6,
        },
        {
          id: 'test_id2',
          title: 'test title',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur iure provident tempora unde voluptate!',
          author: 'test author',
          rating: 4.4,
        },
        {
          id: 'test_id3',
          title: 'test title',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur iure provident tempora unde voluptate! Error et iusto libero magni odit quos repellendus voluptates!',
          author: 'test author',
          rating: 4.2,
        },
      ],
      products: PlaceholderProducts,
      isLoading: true,
      title: {
        text: 'Популярные товары',
        url: '/catalog/',
      },
      button: {
        text: 'Перейти в каталог',
        url: '/catalog/',
      }
    }
  },
  methods: {
    async fetchProducts() {
      try {
        this.isLoading = true
        const response = await axios({
          method: 'get',
          url: '/api/products/',
          params: {
            is_recommended: 1,
            limit: 8,
            public_key: '95fsHRwiJoIqvJo1rxPil7Cs',
          },
        })
        this.products = response.data
        console.log(this.products)
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    async fetchReviews() {
    },
  },
  mounted() {
    this.fetchReviews()
    this.fetchProducts()
  },
})
</script>

<style lang="scss"></style>
