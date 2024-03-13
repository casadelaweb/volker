<template>
  <section class="promos">
    <div class="promos-container">
      <SectionTop :button="sectionTop.button" :is-loading="isLoading"
                  :title="sectionTop.title"/>
      <div class="promos-layout">
        <PromoCard v-for="promo in promos"
                   :id="promo.id"
                   :key="promo.id"
                   :description="promo.description"
                   :image="promo.image"
                   :is-loading="isLoading"
                   :title="promo.title"
                   :url="promo.url"/>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import PromoCard from 'src/views/components/catalog/PromoCard.vue'
import SectionTop from 'src/views/components/ui/SectionTop.vue'
import { useStoreMain } from 'src/stores/storeMain.ts'
import { onMounted, Ref, ref } from 'vue'
import { iPagesPromos, PlaceholderPromos } from 'src/api/base.ts'
import axios from 'axios'

const store = useStoreMain()
const isLoading = ref(true)
const promos: Ref<iPagesPromos> = ref(PlaceholderPromos)

const sectionTop = ref({
  title: {
    text: 'Акции и предложения',
    url: '/promos/',
  },
  button: {
    text: 'Смотреть все',
    url: '/promos/',
  }
})

async function getPromos() {
  try {
    isLoading.value = true
    const response = await axios({
      method: 'get',
      url: `/api/promos/`,
      params: {
        public_key: store.publicKey,
        limit: 4,
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

<style lang="scss">
@use 'src/styles/shared' as *;

.promos {
  margin: 40px 0 80px;

  &-container {
    @include container;
  }

  &-title {
    @include h2;
    margin-bottom: 20px;
  }

  &-layout {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    row-gap: 20px;
    @include mediaTabletL {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
