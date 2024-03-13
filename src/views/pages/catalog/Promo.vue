<template>
  <section class="promo">
    <div class="promo-container">
      <h1 class="promo-title">{{ promo.title }}</h1>
      <img :alt="promo.image.alt" :src="promo.image.url" class="promo-img" loading="lazy">
      <div class="promo-description">
        {{ promo.description }}
      </div>
      <div class="promo-body post-body" v-html="promo.body"></div>
    </div>
  </section>
  <!--  <SectionProducts :products="suggestedProducts" title="Товары по акции"/>-->
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import axios from 'axios'
import { onMounted, ref } from 'vue'

const isLoading = ref(true)
const promo = ref({
  title: '',
  description: '',
  body: '',
  image: {
    url: '',
    alt: '',
  },
})
const route = useRoute()
const promoName = route.params.id

async function fetchData() {
  try {
    isLoading.value = true
    const response = await axios({
      method: 'get',
      url: `/api/promo/${ promoName }`,
      params: {
        public_key: '95fsHRwiJoIqvJo1rxPil7Cs',
      }
    })
    promo.value = response.data
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
@use 'src/styles/shared/index' as *;

.promo {
  @include section;

  &-container {
    @include container;
    //overflow: hidden;
  }

  &-title {
    @include h2;
    margin-bottom: 40px;
  }

  &-img {
    border-radius: 8px;
    object-fit: cover;
    width: 100%;
    aspect-ratio: 4 / 1;
    margin-bottom: 20px;
  }
}
</style>
