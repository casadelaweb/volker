<script lang="ts" setup>
import LoadingPlaceholder from 'src/views/components/ui/LoadingPlaceholder.vue'
import ButtonMain from 'src/views/components/ui/ButtonMain.vue'
import { iPagePromo } from 'src/api/base.ts'

interface PromoProps extends iPagePromo {
  isLoading: boolean,
}

const props = defineProps<PromoProps>()
</script>

<template>
  <article class="promo">
    <LoadingPlaceholder v-if="isLoading" :is-loading="isLoading"/>
    <h2 class="promo-title">
      {{ title }}
    </h2>
    <div class="promo-picture">
      <img :alt="title" :src="image.url" class="promo-img" loading="lazy">
    </div>
    <div class="promo-description">
      {{ description }}
    </div>
    <ButtonMain :url="url" title="Подробнее" type="router-link">
      Подробнее
    </ButtonMain>
  </article>
</template>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.promo {
  @include flex($d: column);
  position: relative;
  z-index: 0;
  row-gap: 16px;
  padding: 16px;
  border-radius: 16px;
  box-shadow: 4px 4px 16px 0 rgba(black, 0.05);
  border: 1px solid #f0f0f0;
  min-width: 0;
  min-height: 0;

  &-title {
    @include lineClamp(2);
    font-size: 18px;
    line-height: 1.25;
    font-weight: 600;
    min-height: 18px * 1.25 * 2;
  }

  &-img {
    object-fit: cover;
    min-width: 0;
    aspect-ratio: 16 / 9;
    width: 100%;
    border-radius: 8px;
  }

  &-description {
    font-size: 16px;
    line-height: 1.25;
    border-radius: 8px;
    min-height: 16px * 1.25 * 2;
    margin-bottom: auto;
  }

  &-button {
    min-height: 20px;
  }
}
</style>
