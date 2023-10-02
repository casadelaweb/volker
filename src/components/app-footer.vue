<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-layout">
        <div class="footer-static">
          <logo />
          <link-tel class="footer-tel" />
          <button-feedback class="footer-button-feedback" />
          <div>
            <router-link class="footer-link" to="/offers/">Акции и предложения</router-link>
            <router-link class="footer-link" to="/delivery/">Доставка и оплата</router-link>
            <router-link class="footer-link" to="/contacts/">Контакты</router-link>
            <router-link class="footer-link" to="/privacy/">Политика конфиденциальности</router-link>
          </div>
        </div>
        <div v-if="!isLoading" class="footer-catalog">
          <div v-for="category in catalog" :key="category.id" class="footer-catalog-group">
            <router-link :to="category.url" class="footer-link-category">{{ category.name }}</router-link>

            <router-link v-for="product in category.products" :key="product.id" :to="product.url" class="footer-link">
              {{ product.name }}
            </router-link>
          </div>
        </div>
        <img v-else alt="loading" src="src/assets/img/loading.gif">
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import logo from 'src/components/ui/logo.vue'
import linkTel from 'src/components/ui/link-tel.vue'
import buttonFeedback from 'src/components/ui/button-feedback.vue'

export default {
  components: {
    logo,
    linkTel,
    buttonFeedback,
  },
  data: function() {
    return {
      theme: this.$store.state.theme === 'dark',
      catalog: this.$store.state.catalog,
      isLoading: true,
    }
  },
  methods: {
    async fetchCatalog() {
    },
  },
  mounted() {
    this.isLoading = false
    console.log(this.catalog)
    this.fetchCatalog()
  },
}
</script>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.footer {
  padding: 40px 0 160px;
  // background: #383b40;
  // color: white;
  box-shadow: 0 -40px 40px 0 rgba(black, 0.05);

  &-container {
    @include container;
  }

  &-layout {
    display: grid;
    grid-template-columns: 1fr 3fr;
    column-gap: 20px;
    row-gap: 20px;
  }

  &-catalog {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 20px;
  }

  &-link {
    display: block;
    margin-bottom: 10px;

    &-category {
      font-weight: 600;
      display: block;
      margin-bottom: 20px;
    }
  }

  &-static {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 20px;
    border-right: 2px solid #f5f5f5;
  }
}

//.setting {
//  @include flex($a: center);
//
//  &-input {
//    margin-right: 10px;
//  }
//
//  &-text {
//  }
//}
</style>
