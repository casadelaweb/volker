<template>
  <header class="header">
    <div class="header-container">
      <router-link class="header-catalog" to="/catalog/" type="button">
        <span class="iconfont icon-menu"></span>
        <span>Каталог</span>
      </router-link>

      <div class="header-links">
        <router-link v-for="link in links" :key="link.id"
                     :class="{ _custom: link.id == 'custom',}"
                     :to="link.url" class="header-link">
          {{ link.title }}
        </router-link>
      </div>
      <router-link class="header-logo" to="/">
        <img alt="logo" class="header-logo-img" src="src/assets/img/placeholder.jpg">
      </router-link>
      <router-link class="header-link" to="/about/">О компании</router-link>
      <router-link class="header-link" to="/contacts/">Контакты</router-link>
      <button class="header-search" type="button">
        <span class="iconfont icon-search"></span>
      </button>
      <button class="header-feedback" type="button">
        Оставить заявку
      </button>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  data: function () {
    return {
      links: [
        {
          id: 'promos',
          title: 'Акции',
          url: '/promos/',
        },
        {
          id: 'shipping',
          title: 'Доставка',
          url: '/shipping/',
        },
        {
          id: 'custom',
          title: 'Custom Shop',
          url: '/promo/custom-shop/',
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.header {
  $fontSizeM: 14px;
  $fontSizeL: 16px;
  position: sticky;
  z-index: 100;
  top: 0;
  padding: 16px 0;
  background: white;
  box-shadow: 4px 4px 16px 0 rgba(black, 0.1);
  border-bottom: 2px solid #f0f0f0;
  display: none;
  @include mediaLaptopXs {
    display: block;
  }

  &-container {
    @include container;
    @include flex(center, space-between);
    position: relative;
    z-index: 0;
    column-gap: 10px;
    @include mediaLaptopL {
      column-gap: 16px;
    }
  }

  &-catalog {
    @include buttonTemplate;
    background: darkseagreen;
    color: white;
  }

  &-logo {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: calc(48px * 21 / 9);
    height: 48px;
    transform: translate(-50%, -50%);

    &-img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
  }

  &-links {
    @include flex(center);
    column-gap: $fontSizeM;
    margin-right: auto;
    @include mediaLaptopL {
      column-gap: $fontSizeL;
    }
  }

  &-link {
    @include link;
  }

  &-feedback {
    @include buttonAccented;
  }

  &-search {
    @include linkRound;
  }
}
</style>
