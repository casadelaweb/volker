<template>
  <section class="display">
    <div class="display-container">
      <SectionTop :button="SectionTopProps.button" :title="SectionTopProps.title"/>
      <div v-if="isLoading" class="display-empty">
        <img alt="loading" loading="lazy" src="src/assets/img/placeholder.jpg">
      </div>
      <div v-else class="display-layout">
        <article v-for="category in categories" :key="category.id" class="display-card">
          <img :alt="category.image.alt" :src="category.image.url"
               class="display-card-img" loading="lazy">
          <div class="display-card-body">
            <h2 class="display-card-title">
              <router-link :title="category.title" :to="category.url">
                {{ category.title }}
              </router-link>
            </h2>
            <div class="display-card-description">
              {{ category.description }}
            </div>
            <router-link :title="category.title" :to="category.url" class="display-card-button">
              <span class="iconfont icon-arrow-right"></span>
            </router-link>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import SectionTop from 'src/views/components/ui/SectionTop.vue'
import axios from 'axios'

const isLoading = ref(true)
const categories = ref([{
  id: '',
  title: '',
  description: '',
  url: '',
  image: {
    url: '',
    alt: '',
  }
}])
const SectionTopProps = ref({
  button: {
    url: '/catalog/',
    text: 'Каталог'
  },
  title: {
    url: '/catalog/',
    text: 'Популярные категории',
  }
})

async function fetchData() {
  try {
    isLoading.value = true
    const response = await axios({
      method: 'get',
      url: '/api/catalog/',
      params: {
        is_popular: 1,
      }
    })
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
</script>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.display {
  @include section;

  &-container {
    @include container
  }

  &-layout {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 12px;
    row-gap: 12px;
    grid-auto-columns: 1fr;
    grid-auto-flow: row;
    grid-template-areas:
        'big big'
        'sm-1 sm-2';
    @include mediaMobileM {
      column-gap: 16px;
      row-gap: 16px;
    }
    @include mediaTabletL {
      grid-template-columns: repeat(3, 1fr);
      grid-template-areas:
        'big big sm-1'
        'big big sm-2';
    }
  }

  &-card {
    min-height: 180px;
    overflow: hidden;
    position: relative;
    z-index: 0;
    border-radius: 8px;
    box-shadow: 4px 4px 16px 0 rgba(black, 0.1);
    @include mediaTabletL {
      min-height: 240px;
    }

    &:nth-child(1) {
      grid-area: big;
    }

    &:nth-child(2) {
      grid-area: sm-1;
    }

    &:nth-child(3) {
      grid-area: sm-2;
    }

    &-body {
      // background: rgba(#e6e6e6, 0.9);
      background: rgba(white, 0.9);
      width: 100%;
      height: 100%;
      padding: 12px;
      @include mediaMobileM {
        padding: 16px;
      }
      @include mediaTabletL {
        padding: 32px 24px;
      }
    }

    &-title {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 0.66em;
      @include mediaTabletS {
        font-size: 20px;
        letter-spacing: 0.03em;
      }
    }

    &-description {
      font-size: 13px;
      font-weight: 500;
      line-height: 1.25;
      @include mediaTabletS {
        font-size: 16px;
        letter-spacing: 0.03em;
      }
    }

    &-img {
      position: absolute;
      z-index: -1;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    &-button {
      @include flex(center, center);
      position: absolute;
      z-index: 1;
      right: 0;
      bottom: 0;
      width: 40px;
      height: 40px;
      background: darkseagreen;
      color: white;
      border-top-left-radius: 50%;
      @include mediaTabletS {
        width: 64px;
        height: 64px;
      }
    }
  }
}
</style>
