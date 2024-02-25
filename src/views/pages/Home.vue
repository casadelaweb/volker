<template>
  <SectionHero/>
  <SectionDisplay/>
  <SectionPromos/>
  <SectionReviews :reviews="reviews"/>
  <SectionProduction/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SectionProduction from 'src/views/components/sections/SectionProduction.vue'
import SectionReviews from 'src/views/components/sections/SectionReviews.vue'
import SectionPromos from 'src/views/components/sections/SectionPromos.vue'
import SectionDisplay from 'src/views/components/sections/SectionDisplay.vue'
import SectionHero from 'src/views/components/sections/SectionHero.vue'

export default defineComponent({
  components: {
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
      isLoading: true,
      productsRecommended: [],
    }
  },
  methods: {
    async fetchProducts() {

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
