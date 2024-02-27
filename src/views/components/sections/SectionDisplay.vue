<template>
  <section class="display">
    <div class="display-container">
      <SectionTop :button="SectionTopProps.button" :title="SectionTopProps.title"/>
      <div v-if="isLoading" class="display-empty">
        <img alt="loading" loading="lazy" src="src/assets/img/placeholder.jpg">
      </div>
      <div v-else class="display-layout">
        <article v-for="category in categories" :key="category.id" class="display-card">
          <img :alt="category.preview.alt ?? category.preview.title" :src="category.preview.url"
               class="display-card-img" loading="lazy">
          <h2 class="display-card-title">
            <router-link :title="category.title" :to="category.url">
              {{ category.title }}
            </router-link>
          </h2>
          <div class="display-card-description">
            {{ category.description.short }}
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SectionTop from 'src/views/components/ui/SectionTop.vue'
import axios from 'axios'

export default defineComponent({
  components: {
    SectionTop,
  },
  name: 'SectionDisplay',
  data: function () {
    return {
      SectionTopProps: {
        title: {
          text: 'Популярные категории',
          url: '/catalog/',
        },
        button: {
          text: 'Смотреть все',
          url: '/catalog/',
        },
      },
      categories: [
        {
          id: 'test',
          title: 'test title',
          url: '/catalog/test/',
          description: {
            short: 'test description',
          },
          preview: {
            alt: 'test alt',
            title: 'test preview title',
          },
        }, {
          id: 'test',
          title: 'test title',
          url: '/catalog/test/',
          description: {
            short: 'test description',
          },
          preview: {
            alt: 'test alt',
            title: 'test preview title',
          },
        }, {
          id: 'test',
          title: 'test title',
          url: '/catalog/test/',
          description: {
            short: 'test description',
          },
          preview: {
            alt: 'test alt',
            title: 'test preview title',
          },
        },
      ],
      isLoading: false,
    }
  },
  methods: {
    async getCategories() {
      const response = await axios.get('/api/posts')
      //console.log(response.data)
    },
  },
  mounted() {
    this.getCategories()
  },
})
</script>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.display {
  overflow-x: hidden;
  max-width: 100%;
  margin: 40px 0 80px;

  &-container {
    @include container
  }

  &-layout {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    row-gap: 10px;
    @include mediaMobileL {
      grid-template-columns: repeat(3, 1fr);
    }
    @include mediaTabletM {
      column-gap: 20px;
      row-gap: 20px;
    }
    @include mediaTabletL {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-auto-columns: 1fr;
      grid-auto-flow: row;
      grid-template-areas:
        'big big sm-1'
        'big big sm-2';
    }
  }

  &-card {
    @include flex($d: column);
    min-width: 0;
    padding: 10px;
    // min-height: 180px;
    transition: color 0.334s, background-color 0.334s;
    border: 2px solid #f5f5f5;
    border-radius: 8px;
    background: #f5f5f5;
    aspect-ratio: 4 / 3;
    @include mediaTabletM {
      padding: 20px;
    }
    @include mediaTabletL {
      aspect-ratio: 3 / 2;
    }
    @include mediaLaptopXs {
      aspect-ratio: 16 / 9;
    }

    &:nth-child(1) {
      @include mediaTabletL {
        grid-area: big;
      }
    }

    &:nth-child(2) {
      @include mediaTabletL {
        grid-area: sm-1;
      }
    }

    &:nth-child(3) {
      @include mediaTabletL {
        grid-area: sm-2;
      }
    }

    &-title {
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 0.02em;
      margin-bottom: 12px;
      @include mediaMobileM {
        font-size: 14px;
      }
      @include mediaTabletM {
        font-size: 18px;
      }
    }

    &-description {
      font-size: 14px;
      display: none;
      @include mediaTabletM {
        font-size: 16px;
      }
      @include mediaTabletL {
        display: block;
      }
    }
  }
}
</style>
