<template>
  <section class="display">
    <div class="display-container">
      <sectionTop :button="sectionTopProps.button" :title="sectionTopProps.title" />
      <div v-if="isLoading" class="display-empty">
        <img alt="loading" class="lazy" data-src="src/assets/img/loading.gif" src="src/assets/img/placeholder.jpg">
      </div>
      <div v-else class="display-layout">
        <template v-for="category in categories" :key="category.id">
          <article :id="category.id" class="display-card">
            <h2 class="display-card-title">
              <router-link :title="category.name" :to="category.url"> {{ category.name }}</router-link>
            </h2>
            <div class="display-card-description">{{ category.description }}</div>
          </article>
        </template>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import sectionTop from 'src/components/ui/section-top.vue'

export default {
  components: {
    sectionTop,
  },
  data: function() {
    return {
      sectionTopProps: {
        title: {
          text: 'Каталог',
          url: '/catalog/',
        },
        button: {
          text: 'Смотреть все',
          url: '/catalog/',
        },
      },
      categories: [],
      isLoading: false,
    }
  },
  methods: {
    async getCategories() {
    },
  },
  mounted() {
    this.getCategories()
  },
}
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
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 20px;
    row-gap: 20px;
    grid-template-areas:
        'big big sm-1'
        'big big sm-2';
    grid-auto-columns: 1fr;
    grid-auto-flow: row;
  }

  &-card {
    @include flex($d: column);
    min-height: 180px;
    // background: #f5f5f5;
    padding: 20px;
    transition: color 0.25s, background-color 0.25s;
    // border: 2px solid white;
    animation: AnimationName 13s ease infinite;
    background: linear-gradient(45deg, #8dd0a1, white, #94c3e2);
    background-size: 600% 600%;

    @keyframes AnimationName {
      0% {
        background-position: 0 75%
      }
      50% {
        background-position: 100% 25%
      }
      100% {
        background-position: 0 100%
      }
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

    &-title {
      @include h4;
      margin-bottom: 12px;
    }
  }
}
</style>
