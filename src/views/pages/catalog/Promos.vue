<template>
  <section class="promos">
    <div class="promos-container">
      <h1 class="promos-title">Акции и предложения</h1>
      <div class="promos-list">
        <article v-for="promo in promos" :key="promo.id" class="promo">
          <LoadingPlaceholder v-if="isLoading" :is-loading="isLoading"/>
          <h2 class="promo-title">
            {{ promo.title }}
            <span v-if="isLoading" class="_loading"></span>
          </h2>
          <div class="promo-picture">
            <picture>
              <img :alt="promo.title" :src="promo.image.url" class="promo-img" loading="lazy">
            </picture>
            <span v-if="isLoading" class="_loading"></span>
          </div>
          <div class="promo-description">
            {{ promo.description }}
            <span v-if="isLoading" class="_loading"></span>
          </div>
          <ButtonMain :url="promo.url" title="Подробнее" type="router-link">
            Подробнее
          </ButtonMain>
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, Ref, ref } from 'vue'
import axios from 'axios'
import { iPagesPromos, PlaceholderPromos } from 'src/api/base.ts'
import ButtonMain from 'src/views/components/ui/ButtonMain.vue'
import LoadingPlaceholder from 'src/views/components/ui/LoadingPlaceholder.vue'

const isLoading = ref(true)
const promos: Ref<iPagesPromos> = ref(PlaceholderPromos)

async function getPromos() {
  try {
    isLoading.value = true
    const response = await axios({
      method: 'get',
      url: `/api/promos/`,
      params: {
        public_key: '95fsHRwiJoIqvJo1rxPil7Cs',
      },
    })
    promos.value = response.data
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  getPromos()
})
</script>

<style lang="scss" scoped>
@use 'src/styles/shared/index' as *;

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
