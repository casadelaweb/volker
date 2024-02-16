<template>
  <h1>sdhfdshdhf</h1>
</template>

<script lang="ts">
//import appHeader from "src/components/app-header.vue";
// import display from 'src/components/catalog/display.vue'
// import offers from 'src/components/sections/offers.vue'
// import suggestions from 'src/components/sections/suggestions.vue'
// import formFeedback from 'src/components/sections/feedback-img.vue'
// import production from 'src/components/sections/production.vue'
// import reviews from 'src/components/sections/reviews.vue'
// import breadcrumbs from 'src/components/sections/breadcrumbs.vue'

export default {
  // components: {
  //   breadcrumbs,
  //   suggestions,
  //   display,
  //   offers,
  //   formFeedback,
  //   production,
  //   reviews,
  // },
  data: function () {
    return {
      // posts: this.$store.state.posts,
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

<style lang="scss"></style>
