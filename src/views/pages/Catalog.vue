<template>
  <section class="catalog">
    <div class="catalog-container">
      <h1 class="catalog-title">Каталог</h1>
      <div class="catalog-categories">
        <article v-for="category in categories" :key="category.id" class="catalog-category">
          <h2 class="catalog-category-title">
            <a :href="category.url"> {{ category.title }} </a>
          </h2>
          <a :href="category.url">
            <img :alt="category.title" :src="category.img.url" class="catalog-category-img">
          </a>
          <div class="catalog-category-description">
            {{ category.description }}
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts">

export default {
  data: function () {
    return {
      categories: [
        {
          id: 'first',
          url: '/catalog/first/',
          title: 'Категория первая',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, sit.',
          img: {
            url: 'src/assets/img/placeholder.jpg',
          }
        },
        {
          id: 'second',
          url: '/catalog/second/',
          title: 'Категория вторая',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse officiis sint voluptatum?',
          img: {
            url: 'src/assets/img/placeholder.jpg',
          }
        },
        {
          id: 'third',
          url: '/catalog/third/',
          title: 'Категория третья',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eveniet expedita hic, laudantium non quidem saepe tempora voluptatem. Aut, soluta?',
          img: {
            url: 'src/assets/img/placeholder.jpg',
          }
        },
        {
          id: 'fourth',
          url: '/catalog/fourth/',
          title: 'Категория четвертая',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          img: {
            url: 'src/assets/img/placeholder.jpg',
          }
        },
        {
          id: 'fifth',
          url: '/catalog/fifth/',
          title: 'Категория пятая',
          description: 'Lorem ipsum dolor sit amet, consectetur.',
          img: {
            url: 'src/assets/img/placeholder.jpg',
          }
        },
        {
          id: 'sixth',
          url: '/catalog/sixth/',
          title: 'Категория шестая',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod.',
          img: {
            url: 'src/assets/img/placeholder.jpg',
          }
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.catalog {
  @include section;

  &-container {
    @include container;
  }

  &-title {
    @include h1;
    margin-bottom: 40px;
  }

  &-categories {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 14px;
    row-gap: 14px;
    @include mediaMobileM {
      column-gap: 16px;
      row-gap: 16px;
    }
    @include mediaTabletS {
      row-gap: 20px;
      column-gap: 20px;
    }
    @include mediaTabletL {
      grid-template-columns: repeat(3, 1fr);
    }
    @include mediaLaptopS {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &-category {
    @include flex($d: column);
    row-gap: 10px;
    padding: 20px;
    border: 1px solid #f0f0f0;
    box-shadow: 4px 4px 16px 0 rgba(black, 0.05);
    border-radius: 8px;

    &-title {
      font-size: 18px;
      font-weight: 500;
    }

    &-img {
      aspect-ratio: 16 / 9;
      width: 100%;
      background: #f0f0f0;
    }

    &-description {
      font-size: 14px;
      color: #505050;
    }
  }
}
</style>
