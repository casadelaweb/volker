<template>
  <footer class="footer">
    <div class="container">
      <router-link class="footer-logo" to="/">
        <img alt="logo" class="footer-logo-img" src="src/assets/img/placeholder.jpg">
      </router-link>
    </div>
    <div class="footer-main">
      <div class="footer-main-container">
        <div class="footer-links">
          <router-link v-for="link in links" :key="link.id"
                       :class="{ _custom: link.id == 'custom',}"
                       :to="link.url"
                       class="footer-link">
            {{ link.title }}
          </router-link>
        </div>
        <div class="footer-links">
          <router-link v-for="link in links2" :key="link.id"
                       :class="{ _custom: link.id == 'custom',}"
                       :to="link.url"
                       class="footer-link">
            {{ link.title }}
          </router-link>
        </div>
        <div class="footer-contacts">
          <button class="footer-feedback" type="button">
            Оставить заявку
          </button>
          <a class="footer-tel" href="tel:8-800-888-88-88">
            8-800-888-88-88
          </a>
          <div class="footer-contacts-socials">
            <a class="footer-telegram" href="#">
              <span class="iconfont icon-telegram"></span>
            </a>
            <a class="footer-vk" href="#">
              <span class="iconfont icon-vk"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom-container">
        <div class="footer-copyright">© 2000 — 2024 CompanyName</div>
        <router-link class="footer-link" to="/privacy-policy/">
          Политика конфиденциальности
        </router-link>
        <router-link class="footer-link" to="/user-agreement/">
          Пользовательское соглашение
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const links = ref([
  // {
  //   id: 'home',
  //   title: 'Главная',
  //   url: '/',
  // },
  {
    id: 'about',
    title: 'О компании',
    url: '/about/',
  },
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
    id: 'contacts',
    title: 'Контакты',
    url: '/contacts/',
  },
  // {
  //   id: 'posts',
  //   title: 'Посты',
  //   url: '/posts/',
  // },
])
const links2 = ref([
  {
    id: 'catalog',
    title: 'Каталог',
    url: '/catalog/',
  },
  {
    id: 'catalog-new',
    title: 'Новинки',
    url: '/catalog/new/',
  },
  {
    id: 'custom',
    title: 'Custom Shop',
    url: '/custom/',
  },
])
</script>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.footer {
  margin-top: 40px;
  box-shadow: 0 -40px 40px 0 rgba(black, 0.05);

  &-logo {
    display: inline-block;
    margin-top: 40px;
    width: calc(48px * 21 / 9);
    height: 48px;

    &-img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
  }

  &-links {
    @include flex($d: column);
    font-size: 16px;
    column-gap: 16px;
    row-gap: 16px;
  }

  &-link {
    @include link;
  }

  &-vk {
    @include linkRound;
  }

  &-telegram {
    @include linkRound;

    span {
      transform: translate(-10%, 0);
    }
  }

  &-tel {
    @include link($addBottomLineOnHover: false);
    height: fit-content;
    font-size: 16px;
    font-weight: 500;
    @include mediaLaptopL {
      font-size: 16px;
    }
  }

  &-feedback {
    @include buttonAccented;
  }

  &-main {
    @include flex;
    padding: 40px 0;

    &-container {
      @include container;
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 16px;
      @include mediaTabletM {
        @include flex;
        column-gap: 80px;
      }
    }
  }

  &-contacts {
    @include flex($d: column);
    font-size: 16px;
    column-gap: 16px;
    row-gap: 16px;
    @include mediaTabletM {
      margin-left: auto;
    }

    &-socials {
      @include flex;
      column-gap: 16px;
    }
  }

  &-bottom {
    border-top: 2px solid #f0f0f0;
    padding: 16px 0 40px;

    &-container {
      @include container;
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 16px;
      @include mediaTabletM {
        @include flex;
        column-gap: 16px;
      }
    }
  }

  &-copyright {
    font-size: 16px;
    margin-right: auto;
  }
}

</style>
