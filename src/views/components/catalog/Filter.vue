<template>
  <fieldset class="filter">
    <legend class="filter-legend" @click="handleClick">
      <span class="filter-legend-title">{{ title }}</span>
      <span class="filter-legend-icon iconfont icon-arrow-down"></span>
    </legend>
    <div :class="{'_open': isOpen,}" class="filter-body">
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

interface iFilterProps {
  title: string,
  isOpenDefault?: boolean,
  type: 'checkbox' | 'radio',
  inputs: Array<{
    name: string,
    value: string,
    label: string,
  }>,
}

const props = defineProps<iFilterProps>()

const isOpen = ref(false)

if (props.isOpenDefault) isOpen.value = true
let animation: any = null
const easing = 'linear'
const durationMin: number = 250
const durationMax: number = 1000
const durationPerHeight: number = 0.5

function calculateDuration(startHeight: number, endHeight: number): number {
  let duration = durationMin

  const valueAddedDuration: number = Math.abs(endHeight - startHeight)
  duration = duration + (valueAddedDuration * durationPerHeight)

  if (duration > durationMax) duration = durationMax

  duration = Math.round(duration)

  return duration
}

function onAnimationFinish(filter: HTMLElement, body: HTMLElement, open: boolean) {
  animation = null
  filter.style.height = filter.style.overflow = ''
  if (open) {
    body.classList.add('_open')
  } else {
    body.classList.remove('_open')
  }
  body.classList.remove('_opening')
  body.classList.remove('_closing')
}

function open(filter: HTMLElement, legend: HTMLElement, body: HTMLElement) {
  const startHeight: string = filter.offsetHeight + 'px'
  const endHeight: string = legend.offsetHeight + body.offsetHeight + 'px'
  filter.style.height = startHeight
  body.classList.add('_opening')

  if (animation) animation.cancel()

  animation = filter.animate({ height: [startHeight, endHeight,], }, {
    duration: calculateDuration(filter.offsetHeight, legend.offsetHeight + body.offsetHeight),
    easing: easing,
  })
  animation.onfinish = () => onAnimationFinish(filter, body, true)
}

function close(filter: HTMLElement, legend: HTMLElement, body: HTMLElement) {
  const startHeight: string = filter.offsetHeight + 'px'
  const endHeight: string = legend.offsetHeight + 'px'
  body.classList.add('_closing')

  if (animation) animation.cancel()

  animation = filter.animate({ height: [startHeight, endHeight,], }, {
    duration: calculateDuration(filter.offsetHeight, legend.offsetHeight),
    easing: easing,
  })
  animation.onfinish = () => onAnimationFinish(filter, body, false)
}

function handleClick(event: MouseEvent) {
  isOpen.value = isOpen.value !== true
  const target = event.target as HTMLElement
  const legend = target.closest('legend') as HTMLElement
  const filter = legend.closest('.filter') as HTMLElement
  const body = filter.querySelector('.filter-body') as HTMLElement

  filter.style.overflow = 'hidden'
  if (!isOpen || body.classList.contains('_closing')) {
    window.requestAnimationFrame(() => open(filter, legend, body))
  } else if (body.classList.contains('_open') || body.classList.contains('_opening')) {
    close(filter, legend, body)
  }
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

    //&-title {
    //}
    //
    //&-icon {
    //}
  }

  &-body {
    display: none;
    flex-direction: column;
    padding: 20px;
    row-gap: 16px;

    &._opening, &._open {
      display: flex;
    }
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
