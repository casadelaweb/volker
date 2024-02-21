<template>
  <section class="promos">
    <div class="promos-container">

      <SectionTop :button="SectionTopProps.button" :title="SectionTopProps.title"/>

      <div v-if="!isLoading" class="promos-layout">

        <promo v-for="promo in promos" :key="promo.id" :promo="promo"/>

      </div>
      <div v-else>
        <img alt="loading" src="src/assets/img/loading.gif">
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import SectionTop from 'src/views/components/ui/SectionTop.vue'
import promo from 'src/views/components/sections/promo.vue'

export default {
  components: {
    SectionTop, promo,
  },
  data: function () {
    return {
      SectionTopProps: {
        title: {
          text: 'Акции и предложения',
          url: '/promos/',
        },
        button: {
          text: 'Смотреть все',
          url: '/promos/',
        },
      },
      promos: [
        {
          id: 'testid1',
          title: 'test title',
          url: 'promos/testid1/',
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
    async fetchPromos() {
      this.isLoading = false
    },
  },
  mounted() {
    this.fetchPromos()
  },
}
</script>

<style lang="scss">
@use 'src/styles/shared' as *;

.promos {
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
