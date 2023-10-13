<template>
  <article class="offer" itemscope itemtype="https://schema.org/Article">
    <link :href="offer.url" itemprop="mainEntityOfPage">
    <link :href="offer.preview.url" itemprop="image">
    <meta :content="offer.title" itemprop="headline name">
    <meta :content="offer.description.short" itemprop="description">
    <meta :content="offer.date.published" itemprop="datePublished">
    <meta :content="offer.date.modified" itemprop="dateModified">

    <div v-if="offer.activity !== ''" class="offer-activity"> {{ offer.activity }}</div>
    <router-link :title="offer.title" :to="offer.url" class="offer-preview">
      <img :alt="offer.preview.alt" :src="offer.preview.url" class="offer-img" loading="lazy">
    </router-link>
    <h3 class="offer-title">
      <router-link :title="offer.title" :to="offer.url"> {{ offer.title }}</router-link>
    </h3>
  </article>
</template>

<script lang="ts">
import { iPageOffer } from 'src/store/db.types'
import { PropType, defineComponent } from 'vue'

export default defineComponent({
  props: {
    offer: {
      type: Object as PropType<iPageOffer>,
      required: true,
    },
  },
  data() {
    return {
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
})
</script>

<style lang="scss">
@use 'src/styles/shared' as *;

.offer {
  // @include flex($d: column);
  position: relative;
  z-index: 0;
  padding: 10px;
  border: 2px solid #f5f5f5;
  border-radius: 8px;
  @include mediaTablet {
    padding: 20px;
  }

  &-activity {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.02em;
    position: absolute;
    z-index: 1;
    top: 10px;
    right: 10px;
    padding: 4px 8px;
    color: white;
    background: lightcoral;
    @include mediaTablet {
      font-size: 14px;
    }
  }

  &-preview {
    display: block;
    overflow: hidden;
    border-radius: 12px;
  }

  &-img {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    transition: transform 0.25s;
    aspect-ratio: 21 / 9;
    object-fit: contain;

    &:hover {
      transform: scale(1.25);
    }
  }

  &-title {
    @include h6;
  }
}
</style>
