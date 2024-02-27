<template>
  <section class="promos">
    <div class="promos-container">
      <h1 class="promos-title">Акции и предложения {{ quantity }}</h1>
      <div class="promos-list">
        <article v-for="promo in promos" :key="promo.id" class="promo">
          <h2 :class="isLoading ? '_loading' : ''"
              class="promo-title">
            {{ promo.title }}
          </h2>

          <img :alt="promo.title"
               :class="isLoading ? '_loading' : ''"
               :src="promo.image.url"
               class="promo-img"
               loading="lazy">

          <div :class="isLoading ? '_loading' : ''"
               class="promo-description">
            {{ promo.description }}
          </div>
          <router-link
            :class="isLoading ? '_loading' : ''"
            class="promo-button"
            to="/promo/test">
            Подробнее
          </router-link>
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useStoreMain } from 'src/stores/storeMain.ts'

const quantity = ref(0)
const store = useStoreMain()
const isLoading = store.isLoading
let promos = store.promos
const promosLimit: number = 24

onMounted(() => {
  store.getPromos()
  // const counterAnimation = setInterval(() => {
  //   if (quantity.value < store.getPromosQuantity) {
  //     quantity.value++
  //   } else {
  //     clearInterval(counterAnimation)
  //   }
  // }, 100)
})
</script>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.promos {
  @include section;

  &-container {
    @include container;
  }

  &-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 16px;
    row-gap: 16px;
    @include mediaTabletM {
      grid-template-columns: repeat(3, 1fr);
    }
    @include mediaTabletL {
      grid-template-columns: repeat(4, 1fr);
      column-gap: 20px;
      row-gap: 20px;
    }
  }

  &-title {
    @include h1;
    margin-bottom: 1em;
  }
}

.promo {
  @include flex($d: column);
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

    &._loading {
      border-radius: 8px;
      @include loadingPlaceholder;
    }
  }

  &-img {
    min-width: 0;
    height: 160px;
    width: 100%;
    border-radius: 8px;

    &._loading {
      @include loadingPlaceholder;
    }
  }

  &-description {
    font-size: 16px;
    line-height: 1.25;
    border-radius: 8px;
    min-height: 16px * 1.25 * 2;
    margin-bottom: auto;

    &._loading {

      @include loadingPlaceholder;
    }
  }

  &-button {
    min-height: 20px;

    &._loading {
      @include loadingPlaceholder;
    }
  }
}

</style>
