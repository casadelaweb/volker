<template>
  <article class="offer" itemscope itemtype="https://schema.org/Article">
    <link :href="offer.url" itemprop="mainEntityOfPage">
    <link :href="offer.preview.url" itemprop="image">
    <meta :content="offer.title" itemprop="headline name">
    <meta :content="offer.description.short" itemprop="description">
    <meta :content="offer.date.published" itemprop="datePublished">
    <meta :content="offer.date.modified" itemprop="dateModified">

    <div v-if="offer.activity !== ''" class="offer-activity">
      {{ offer.activity }}
    </div>
    <router-link :title="offer.title" :to="offer.url" class="offer-preview">
      <img :alt="offer.preview.alt" :src="offer.preview.url" class="offer-img" loading="lazy">
    </router-link>
    <h3 class="offer-title">
      <router-link :title="offer.title" :to="offer.url">
        {{ offer.title }}
      </router-link>
    </h3>
    <div class="offer-description">
      {{ offer.description.short }}
    </div>
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
  @include flex($d: column);
  row-gap: 10px;
  position: relative;
  z-index: 0;
  padding: 10px;
  border: 2px solid #f5f5f5;
  border-radius: 8px;
  @include mediaTabletM {
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
    border-radius: 8px;
    @include mediaTabletM {
      font-size: 14px;
    }
  }

  &-preview {
    display: block;
    overflow: hidden;
    border-radius: 8px;
  }

  &-img {
    width: 100%;
    transition: transform 0.334s;
    aspect-ratio: 4 / 3;
    object-fit: cover;

    &:hover {
      transform: scale(1.25);
    }
  }

  &-title {
    @include h6;
  }

  &-description {
    font-size: 14px;
    line-height: 1.4;
  }
}
</style>
