<script lang="ts" setup>
const props = defineProps<{
  label: string,
  errorText: string,
  type: 'text' | 'radio' | 'checkbox',
  placeholder: string,
  name: string,
  classList?: string,
  isValid: boolean | null,
  checked?: boolean | null,
  value: string,
  // required: boolean,
}>()

const emit = defineEmits(['update'])
const isCheckbox = props.type === 'radio' || props.type === 'checkbox'

function handleInput(event: Event) {
  // const value = event.target.value as string
  //console.log(event)
  emit('update', event,)
}

function handleFocus(event: Event) {
  // if (props.isValid === true) return
  //
  // const input = event.target as HTMLInputElement
  // const label: HTMLLabelElement = input.closest('label')
  // const error: HTMLElement = label.querySelector('.field-error')
  // label.classList.add('_error')
  // error.classList.add('_active')
}

function handleBlur(event: Event) {
  // if (props.isValid === true) return

  const input = event.target as HTMLInputElement
  const label = input.closest('label') as HTMLElement
  const error = label.querySelector('.field-error') as HTMLElement
  label.classList.remove('_error')
  error.classList.remove('_active')
}
</script>

<template>
  <label :class="{ '_error': isValid === false,'_checkbox':isCheckbox }" class="field">
    <span class="field-label">{{ label }}</span>
    <input :class="{'_checkbox':isCheckbox}"
           :name="name"
           :placeholder="placeholder"
           :type="type"
           :value="value"
           class="field-input"
           required
           @blur="handleBlur" @focus="handleFocus" @input="handleInput">
    <span :class="{ '_active': isValid === false, }" class="field-error">
      {{ errorText }}
    </span>
  </label>
</template>

<style lang="scss">
@use 'src/styles/shared' as *;

.field {
  position: relative;
  z-index: 0;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 8px;
  flex: 0 0 auto;
  //width: fit-content;
  width: 100%;
  height: fit-content;
  margin-bottom: 16px;

  &._error {
    z-index: 1;
  }

  &._checkbox {
    @include flex(center);
    margin-bottom: 4px;

    a {
      color: darkseagreen;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &-input {
    transition: color 0.3s, border-color 0.3s;
    border: 2px solid #e6e6e6;
    padding: 8px 16px;
    border-radius: 8px;
    @include mediaMobileS {
      padding: 10px 20px;
    }

    &._checkbox {
      order: -1;
      padding: 0;
      flex: 0 0 auto;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin: 0 4px 0 0;
    }

    &._error {
      border-color: indianred;
    }

    &._success {
      border-color: darkseagreen;
    }
  }

  &-error {
    font-size: 14px;
    letter-spacing: 0.02em;
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 0;
    width: 100%;
    max-width: 280px;
    background: indianred;
    padding: 8px;
    border-radius: 8px;
    color: white;
    transition: transform 0.25s, opacity 0.25s;
    transform: translate(0, 20px);
    pointer-events: none;
    opacity: 0;

    &::before {
      content: ' ';
      position: absolute;
      z-index: 1;
      top: -12px;
      left: 12px;
      width: 12px * 1.5;
      height: 12px;
      background: indianred;
      clip-path: polygon(50% 0%, 0 100%, 100% 100%);;
    }

    &._active {
      transform: translate3d(0, 0, 0);
      pointer-events: auto;
      opacity: 1;
    }
  }
}
</style>
