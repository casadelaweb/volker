<template>
  <section class="section">
    <div class="container">
      <SectionTop title="Контакты"/>
      <div class="layout">
        <div class="info">
          <div class="info-item">
            <span class="iconfont icon-location"></span>
            <span>г. Название, ул. Название, дом 69</span>
          </div>
          <a class="info-item" href="tel:+7-999-999-99-99">
            <span class="iconfont icon-tel"></span>
            <span>+7 999 999 99 99</span>
          </a>

          <div class="info-item">
            <div style="font-weight: 500; margin-bottom: 8px;">График работы офиса:</div>
            <div style="margin-bottom: 4px">Пн. - Пт.: с 8:00 до 19:00</div>
            <div style="margin-bottom: 4px">Сб. - Вс.: с 9:00 до 18:00</div>
          </div>
        </div>
        <div class="map">
          здесь будет карта
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import SectionTop from 'src/views/components/ui/SectionTop.vue'
import breadcrumbs from 'src/views/components/sections/breadcrumbs.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Contacts',
  components: {
    breadcrumbs,
    SectionTop,
  },
})
</script>

<style lang="scss" scoped>
@use 'src/styles/shared/index' as *;

.layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 20px;
  row-gap: 20px;
}

.info {
  background: #f5f5f5;
  height: 400px;
  padding: 30px 20px;

  font-size: 18px;

  &-item {
    display: block;
    margin-bottom: 20px;

    span {
      margin-right: 4px;
    }
  }
}

.map {
  @include flex(center, center);
  background: #fff9f2;
}
</style>
