<script lang="ts" setup>
import Filter from 'src/views/components/catalog/Filter.vue'

interface iCategoryFilter {
  title: string,
  type: 'checkbox' | 'radio',
  isOpenDefault: boolean,
  inputs: Array<{
    name: string,
    value: string | number,
    label: string,
  }>
}

const props = defineProps<{
  categoryFilters: Array<iCategoryFilter>
}>()

function handleClick(event: MouseEvent) {
  const { body } = document
  const modal = body.querySelector('.filters') as HTMLElement
  const overlay = body.querySelector('.filters-overlay') as HTMLElement

  modal.classList.toggle('_active')
  overlay.classList.toggle('_active')
}
</script>

<template>
  <form class="filters">
    <div class="filters-header">
      <div class="filters-title">Фильтры</div>
      <button class="filters-close" title="Закрыть" type="button" @click="handleClick">
        <span class="iconfont icon-close"></span>
      </button>
    </div>
    <div class="filters-body">
      <Filter v-for="filter in categoryFilters" :inputs="filter.inputs"
              :isOpenDefault="filter.isOpenDefault" :title="filter.title"
              :type="filter.type"/>
    </div>
    <div class="filters-footer">
      <button class="filters-reset" type="button">
        Сбросить
      </button>
      <button class="filters-submit" type="button">
        Применить
      </button>
    </div>
  </form>
  <Teleport to="#app">
    <div class="filters-overlay" @click="handleClick"></div>
  </Teleport>
</template>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.filters {
  @include flex($d: column);
  flex: 0 0 auto;
  min-width: 0;
  min-height: 0;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
  box-shadow: 4px 4px 16px 0 rgba(black, 0.05);
  pointer-events: none;
  transform: translate(-100%, 0);
  transition: transform 0.334s;
  @include mediaLaptopXs {
    position: sticky;
    top: 100px;
    z-index: 1;
    height: fit-content;
    pointer-events: auto;
    transform: none;
  }

  &._active {
    pointer-events: auto;
    transform: none;
  }

  &-header, &-footer {
    @include flex(center, space-between);
    padding: 20px;
    border-bottom: 1px solid #f0f0f0;
  }

  &-body {
    overflow-x: auto;
  }

  &-title {
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 0.01em;
  }

  &-close {
    $size: 36px;
    flex: 0 0 auto;
    width: $size;
    height: $size;
    font-size: $size * 0.5;
    border-radius: 50%;
    background: rgba(white, 0.5);
    box-shadow: 0 2px 4px 0 rgba(black, 0.05);
    transition: transform 0.25s, color 0.25s;
    @include mediaLaptopXs {
      display: none;
    }

    @include hoverableDevice {
      &:hover {
        color: darkseagreen;
      }
    }

    &:active {
      transform: scale(1.1);
    }
  }

  &-footer {
    margin-top: auto;
    border-bottom: 0;
  }

  &-reset {
    @include buttonOutline;
  }

  &-submit {
    @include buttonAccented;
  }

  &-overlay {
    position: fixed;
    z-index: 90;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(black, 0.25);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.334s;

    &._active {
      opacity: 1;
      pointer-events: auto;
    }
  }
}
</style>
