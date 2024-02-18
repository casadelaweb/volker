<template>
  <section class="offers">
    <div class="offers-container">

      <SectionTop :button="SectionTopProps.button" :title="SectionTopProps.title"/>

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
import SectionTop from 'src/views/components/ui/SectionTop.vue'
import offer from 'src/views/components/sections/offer.vue'

export default {
  components: {
    SectionTop, offer,
  },
  data: function () {
    return {
      SectionTopProps: {
        title: {
          text: 'Акции и предложения',
          url: '/offers/',
        },
        button: {
          text: 'Смотреть все',
          url: '/offers/',
        },
      },
      offers: [
        {
          id: 'testid1',
          title: 'test title',
          url: 'offers/testid1/',
          description: {
            short: 'shfonn sapnpnasgd saggas'
          },
          preview: {
            url: 'src/assets/img/placeholder.jpg',
            alt: 'test',
          },
          activity: 'yo',
          date: {
            published: '12.12.2023',
            modified: '13.12.2023',
          },
        },
      ],
      isLoading: false,
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
@use 'src/styles/shared' as *;

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
    @include mediaMobileM {
      grid-template-columns: repeat(2, 1fr);
    }
    @include mediaTabletL {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
