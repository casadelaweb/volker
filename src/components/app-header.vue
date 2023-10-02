<template>
  <modal data-modal="modal-feedback">здесь форма какая-то блять</modal>
  <header class="header" data-header>
    <div class="header-container" data-header="content">
      <logo />
      <search />

      <button-feedback class="header-button-feedback" data-modal-open="modal-feedback" />

    </div>
    <div class="header-container">
      <button class="button-bordered header-button-menu" data-header="button-menu" type="button"
              @click="changeMenuStateTo('toggle')">
        <span>☰</span>
        <span>Каталог</span>
      </button>
      <template v-for="link in headerQuickLinks" :key="link.id">
        <router-link :title="link.title" :to="link.url" class="header-link">
          {{ link.title }}
        </router-link>
      </template>
      <link-tel class="header-tel" />
    </div>
  </header>

  <modal-menu data-header="menu" />
  <overlay data-header="overlay" @click="changeMenuStateTo('close')" />
</template>

<script lang="ts">
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock'
import search from 'src/components/ui/search.vue'
import modalMenu from 'src/components/modals/menu.vue'
import overlay from 'src/components/ui/overlay.vue'
import logo from 'src/components/ui/logo.vue'
import linkTel from 'src/components/ui/link-tel.vue'
import buttonFeedback from 'src/components/ui/button-feedback.vue'
import modal from 'src/components/modals/modal.vue'

export default {
  components: {
    search,
    modalMenu,
    overlay,
    logo,
    linkTel,
    buttonFeedback,
    modal,
  },
  data: function() {
    return {
      isMenuActive: false,
      headerQuickLinks: [],
      isLoading: true,
    }
  },
  methods: {
    changeMenuStateTo(state = 'toggle') {
      const {body,} = document

      const close = () => {
        this.button.classList.remove('active')
        this.menu.classList.remove('active')
        this.overlay.classList.remove('active')
        enableBodyScroll(body)
        this.isMenuActive = false
      }
      const open = () => {
        this.updateMenu()
        this.button.classList.add('active')
        this.menu.classList.add('active')
        this.overlay.classList.add('active')
        disableBodyScroll(body, {
          reserveScrollBarGap: true,
        })
        this.isMenuActive = true
      }

      switch(state) {
        case 'close':
          close()
          break
        case 'open':
          open()
          break
        case 'toggle':
          this.isMenuActive ? close() : open()
          break
      }
    },
    updateMenu() {
      const {body,} = document

      const headerContent = body.querySelector('[data-header=content]')

      const styles = window.getComputedStyle(headerContent, null)
      const maxWidth = headerContent.clientWidth - parseInt(styles.getPropertyValue('padding-left')) - parseInt(styles.getPropertyValue('padding-right'))
      this.menu.style.maxWidth = maxWidth + 'px'

      this.menu.style.top = this.header.getBoundingClientRect().height + 20 + 'px'
      this.menu.style.left = (body.getBoundingClientRect().width - maxWidth) * 0.5 + 'px'
    },
    async getHeaderQuickLinks() {
    },
  },
  created() {
    window.addEventListener('resize', this.updateMenu)
  },
  unmounted() {
    window.removeEventListener('resize', this.updateMenu)
  },
  mounted() {
    const {body,} = document

    this.button = body.querySelector('[data-header=button-menu]')
    this.header = body.querySelector('[data-header]')
    this.menu = body.querySelector('[data-header=menu]')
    this.overlay = body.querySelector('[data-header=overlay]')

    this.updateMenu()
    this.getHeaderQuickLinks()
  },
}
</script>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.header {
  position: sticky;
  z-index: 100;
  top: 0;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  padding: 20px 0;
  border-bottom: 2px solid #f5f5f5;
  background: white;

  &-container {
    @include container;
    @include flex(center, space-between, $w: wrap);
    position: relative;
    z-index: 2;
    background: white;
  }

  &-button {
    &-menu {
      margin-right: 40px;
    }

    &-feedback {
      margin-left: auto;
    }
  }

  &-link {
    // font-weight: 300;
    margin-right: 20px;
  }

  &-tel {
    margin-left: auto;
  }
}
</style>
