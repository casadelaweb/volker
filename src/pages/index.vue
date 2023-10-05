<template>
  <breadcrumbs />
  <display />
  <!--  <deals />-->
  <!--  <production />-->
  <!--  <form-feedback />-->
  <!--  <suggestions :products="productsRecommended" />-->
  <!--  <reviews :reviews="reviews.list" />-->
</template>

<script lang="ts">
import display from 'src/components/catalog/display.vue'
import deals from 'src/components/sections/offers.vue'
import suggestions from 'src/components/sections/suggestions.vue'
import formFeedback from 'src/components/sections/feedback-img.vue'
import production from 'src/components/sections/production.vue'
import reviews from 'src/components/sections/reviews.vue'
import breadcrumbs from 'src/components/sections/breadcrumbs.vue'

export default {
  components: {
    breadcrumbs,
    suggestions,
    display,
    deals,
    formFeedback,
    production,
    reviews,
  },
  data: function() {
    return {
      posts: this.$store.state.posts,
      titleData: 'Актуальные публикации',
      reviews: {
        list: [],
        isLoading: true,
      },
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
}
</script>

<style lang="scss">
</style>
