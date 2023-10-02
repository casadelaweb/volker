<template>
  <section class="offers">
    <div class="container">

      <sectionTop :button="sectionTopProps.button" :title="sectionTopProps.title" />

      <div v-if="!isLoading" class="offers-layout">

        <article v-for="offer in offers" :key="offer.id" class="offer" itemscope itemtype="https://schema.org/Article">
          <link :href="siteUrl + offer.url" itemprop="mainEntityOfPage">
          <link :href="siteUrl + offer.img.src" itemprop="image">
          <meta :content="offer.title" itemprop="headline name">
          <meta :content="offer.description" itemprop="description">
          <meta :content="offer.date_published" itemprop="datePublished">
          <meta :content="offer.date_modified" itemprop="dateModified">

          <div class="offer-activity">{{ offer.activity }}</div>
          <router-link :title="offer.title" :to="offer.url">
            <img :alt="offer.img.alt" :data-src="offer.img.src" class="lazy offer-img"
                 src="src/assets/img/placeholder.jpg">
          </router-link>
          <h3 class="offer-title">
            <router-link :title="offer.title" :to="offer.url"> {{ offer.title }}</router-link>
          </h3>
        </article>

      </div>
      <div v-else>
        <img alt="loading" class="lazy" data-src="src/assets/img/loading.gif"
             src="src/assets/img/placeholder.jpg">
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import sectionTop from 'src/components/ui/section-top.vue'
import axios from 'axios'

export default {
  components: {
    sectionTop,
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
      siteUrl: this.$store.state.main.site_url,
      siteName: this.$store.state.main.site_name,
      isLoading: true,
    }
  },
  methods: {
    async fetchOffers() {
      try {
        setTimeout(async () => {
          const response = await axios.get('https://volker-group.ru/api/')
          this.offers = response.data.offers
        }, 1000)
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
  },
  mounted() {
    this.fetchOffers()
  },
}
</script>

<style lang="scss">
@import "src/styles/shared";

.offers {
  &-title {
    @extend .h2;
    margin-bottom: 20px;
  }

  &-layout {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 20px;
  }
}

.offer {
  @include flex($d: column);
  position: relative;
  z-index: 0;

  &-activity {
    padding: 4px 8px;
    background: lightcoral;
    color: white;
    // font-weight: 500;
    letter-spacing: 0.02em;
    position: absolute;
    z-index: 0;
    top: 10px;
    right: 10px;
  }

  &-img {
    display: block;
    // height: 200px;
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    margin-bottom: 10px;
  }

  &-title {
    @extend .h4;
  }
}
</style>
