<template>
  <section class="promos">
    <div class="promos-container">
      <h1 class="promos-title">Акции и предложения</h1>
      <div class="promos-list">
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
import { useStoreMain } from 'src/stores/storeMain.ts'
import { onMounted, Ref, ref } from 'vue'
import axios from 'axios'
import { iPagesPromos, PlaceholderPromos } from 'src/api/base.ts'
import PromoCard from 'src/views/components/catalog/PromoCard.vue'

const store = useStoreMain()
const isLoading = ref(true)
const promos: Ref<iPagesPromos> = ref(PlaceholderPromos)

async function getPromos() {
  try {
    isLoading.value = true
    const response = await axios({
      method: 'get',
      url: `/api/promos/`,
      params: {
        public_key: store.publicKey,
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

</style>
