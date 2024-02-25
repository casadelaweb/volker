<template>
  <article class="promo" itemscope itemtype="https://schema.org/Article">
    <link :href="promo.url" itemprop="mainEntityOfPage">
    <link :href="promo.preview.url" itemprop="image">
    <meta :content="promo.title" itemprop="headline name">
    <meta :content="promo.description.short" itemprop="description">
    <meta :content="promo.date.published" itemprop="datePublished">
    <meta :content="promo.date.modified" itemprop="dateModified">

    <div v-if="promo.activity !== ''" class="promo-activity">
      {{ promo.activity }}
    </div>
    <router-link :title="promo.title" :to="promo.url" class="promo-preview">
      <img :alt="promo.preview.alt" :src="promo.preview.url" class="promo-img" loading="lazy">
    </router-link>
    <h3 class="promo-title">
      <router-link :title="promo.title" :to="promo.url">
        {{ promo.title }}
      </router-link>
    </h3>
    <div class="promo-description">
      {{ promo.description.short }}
    </div>
  </article>
</template>

<script lang="ts">
import { iPagePromo } from 'src/store/db.types'
import { PropType, defineComponent } from 'vue'

export default defineComponent({
  props: {
    promo: {
      type: Object as PropType<iPagePromo>,
      required: true,
    },
  },
  data() {
    return {
      isLoading: true,
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
})
</script>

<style lang="scss">
@use 'src/styles/shared' as *;

.promo {
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

  //&-img {
  //  width: 100%;
  //  //transition: transform 0.334s;
  //  aspect-ratio: 4 / 3;
  //  object-fit: cover;
  //
  //  &:hover {
  //    transform: scale(1.25);
  //  }
  //}

  &-title {
    @include h6;
  }

  &-description {
    font-size: 14px;
    line-height: 1.4;
  }
}
</style>
