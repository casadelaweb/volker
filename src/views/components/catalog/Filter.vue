<template>
  <fieldset class="filter">
    <legend class="filter-legend" @click="handleClick">
      <span class="filter-legend-title">{{ title }}</span>
      <span class="filter-legend-icon iconfont icon-arrow-down"></span>
    </legend>
    <div v-show="isOpen" class="filter-body">
      <label v-for="input in inputs" class="filter-label">
        <input :name="input.name" :type="type" :value="input.value"
               class="filter-input" @change="handleChange">
        <span class="filter-span">{{ input.label }}</span>
      </label>
    </div>
  </fieldset>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  title: string,
  isOpenDefault?: boolean,
  type: 'checkbox' | 'radio',
  inputs: Array<{
    name: string,
    value: string,
    label: string,
  }>,

}>()

const isOpen = ref(false)

if (props.isOpenDefault) isOpen.value = true

function handleClick() {
  isOpen.value = isOpen.value !== true
}

function handleChange(event: InputEvent) {
  const input = event.target as HTMLInputElement
}
</script>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.filter {
  @include flex($d: column);
  border-bottom: 1px solid #f0f0f0;

  &-legend {
    @include flex(center, space-between);
    width: 100%;
    flex: 0 0 auto;
    padding: 20px;
    transition: background-color 0.25s;
    cursor: pointer;
    @include hoverableDevice {
      &:hover {
        background: #f0f0f0;
      }
    }

    &:active {
      background: #e6e6e6;
    }

    &-title {
    }

    &-icon {
    }
  }

  &-body {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 16px;
    padding: 20px;
  }

  &-label {
    @include flex(center);
    column-gap: 10px;
    min-width: 0;
    width: fit-content;
    transition: color 0.25s;
    @include hoverableDevice {
      &:hover {
        color: darkseagreen;
      }
    }
  }

  &-input {
  }

  &-span {
  }
}
</style>
