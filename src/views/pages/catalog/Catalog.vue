<template>
  <section class="catalog">
    <div class="catalog-container">
      <h1 class="catalog-title">Каталог</h1>
      <div class="catalog-categories">
        <article v-for="category in categories" :key="category.id" class="catalog-category">
          <h2 class="catalog-category-title">
            <router-link :title="category.title" :to="category.url">
              {{ category.title }}
            </router-link>
          </h2>
          <router-link :title="category.title" :to="category.url">
            <img :alt="category.title" :src="category.image.url" class="catalog-category-img"
                 loading="lazy">
          </router-link>
          <div class="catalog-category-description">
            {{ category.description }}
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { iPageCatalog } from 'src/api/base.ts'
import axios from 'axios'
import { ref, onMounted, Ref, computed } from 'vue'

const categories: Ref<iPageCatalog[]> = ref([])
const isLoading = ref(true)

async function fetchData() {
  isLoading.value = true
  try {
    const response = await axios.get('/api/catalog/')
    console.log(response.data)
    categories.value = response.data
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchData()
})


// const currentRoute = computed(() => {
//   return this.$router.currentRoute.value.params.id
// })
</script>

<style lang="scss" scoped>
@use 'src/styles/shared/index' as *;

.catalog {
  @include section;

  &-container {
    @include container;
  }

  &-title {
    @include h1;
    margin-bottom: 40px;
  }

  &-categories {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 8px;
    row-gap: 8px;
    @include mediaMobileM {
      column-gap: 12px;
      row-gap: 12px;
    }
    @include mediaTabletS {
      row-gap: 20px;
      column-gap: 20px;
    }
    @include mediaTabletL {
      grid-template-columns: repeat(3, 1fr);
      row-gap: 24px;
      column-gap: 24px;
    }
    @include mediaLaptopS {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &-category {
    @include flex($d: column);
    row-gap: 8px;
    padding: 12px;
    border: 1px solid #f0f0f0;
    box-shadow: 4px 4px 16px 0 rgba(black, 0.05);
    border-radius: 8px;
    @include mediaMobileM {
      row-gap: 12px;
      padding: 16px;
    }
    @include mediaTabletS {
      row-gap: 16px;
      padding: 20px;
    }

    &-title {
      font-size: 16px;
      font-weight: 500;
      @include mediaTabletM {
        font-size: 18px;
      }
    }

    &-img {
      aspect-ratio: 16 / 9;
      width: 100%;
      background: #f0f0f0;
      border-radius: 8px;
    }

    &-description {
      font-size: 13px;
      // line-height: 1.4;
      letter-spacing: 0.01em;
      color: #505050;
      @include mediaTabletM {
        font-size: 16px;
      }
    }
  }
}
</style>
