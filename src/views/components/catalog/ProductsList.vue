<script lang="ts" setup>
defineProps<{
  length: number,
}>()
</script>

<template>
  <div :class="length === 0 ? 'products _empty' : 'products' ">
    <template v-if="length === 0">
      <h2 class="nomatch-title">
        К сожалению, по Вашему запросу ничего не найдено.
      </h2>
      <ul class="nomatch-list">
        <li>Убедитесь, что все слова написаны без ошибок.</li>
        <li>Попробуйте использовать другие ключевые слова.</li>
        <li>Попробуйте использовать более популярные ключевые слова.</li>
        <li>Попробуйте уменьшить количество слов в запросе.</li>
      </ul>
    </template>
    <slot v-else></slot>
  </div>
</template>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.nomatch {
  &-title {
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 40px;
  }

  &-query {
    letter-spacing: 0.05em;
  }

  &-list {
    font-size: 20px;

    li {
      @include flex(center);
      margin-bottom: 12px;

      &::before {
        content: ' ';
        width: 10px;
        height: 10px;
        margin-right: 10px;
        border-radius: 50%;
        background: darkseagreen;
      }
    }
  }
}

.products {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 16px;
  column-gap: 16px;
  flex: 0 0 auto;
  min-width: 0;
  min-height: 0;
  @include mediaTabletM {
    grid-template-columns: repeat(3, 1fr);
  }
  @include mediaTabletL {
    grid-template-columns: repeat(2, 1fr);
  }
  @include mediaLaptopS {
    grid-template-columns: repeat(3, 1fr);
  }
  @include mediaDesktop {
    grid-template-columns: repeat(4, 1fr);
  }

  &._empty {
    display: block
  }
}
</style>
