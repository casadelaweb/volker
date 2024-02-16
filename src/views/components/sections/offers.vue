<template>
  <section class="offers">
    <div class="offers-container">

      <sectionTop :button="sectionTopProps.button" :title="sectionTopProps.title"/>

      <div v-if="!isLoading" class="offers-layout">

        <offer v-for="offer in offers" :key="offer.id" :offer="offer"/>

      </div>
      <div v-else>
        <img alt="loading" src="src/assets/img/loading.gif">
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import sectionTop from 'src/components/ui/section-top.vue'
import offer from 'src/components/sections/offer.vue'

export default {
  components: {
    sectionTop, offer,
  },
  data: function () {
    return {
      sectionTopProps: {
        title: {
          text: 'Акции и предложения',
          url: '/offers/',
        },
        button: {
          text: 'Смотреть все',
          url: '/offers/',
        },
      },
      offers: this.$store.state.offers,
      isLoading: true,
    }
  },
  methods: {
    async fetchOffers() {
      this.isLoading = false
    },
  },
  mounted() {
    this.fetchOffers()
  },
}
</script>

<style lang="scss">
// @use 'src/styles/shared' as *;

.offers {
  margin: 40px 0 80px;

  &-container {
    @include container;
  }

  &-title {
    @include h2;
    margin-bottom: 20px;
  }

  &-layout {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 20px;
    row-gap: 20px;
    @include mediaMobileBg {
      grid-template-columns: repeat(2, 1fr);
    }
    @include mediaTabletL {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
