<script lang="ts" setup>
// import { IMaskDirective } from 'vue-imask'
// import { useIMask } from 'vue-imask'

const props = defineProps<{
  id: string,
  label: string,
  errorText: string,
  type: 'text' | 'radio' | 'checkbox',
  placeholder: string,
  name: string,
  isValid: boolean | null,
  value: string | number | null,
  checked?: boolean,
}>()

const emit = defineEmits(['update'])

// const { el, masked } = useIMask({
//   mask: '+7-000-000-00-00',
// })

function handleInput(event: Event) {
  emit('update', event,)
}

function handleChange(event: Event) {
  emit('update', event,)
}

function handleFocus(event: Event) {
  if (props.isValid === true || props.value === '' || props.type !== 'text') return

  const input = event.target as HTMLInputElement
  const label = input.closest('label') as HTMLLabelElement
  const error = label.querySelector('.field-error') as HTMLElement
  label.classList.add('_error')
  error.classList.add('_active')
}

function handleBlur(event: Event) {
  const input = event.target as HTMLInputElement
  const label = input.closest('label') as HTMLLabelElement
  const error = label.querySelector('.field-error') as HTMLElement
  label.classList.remove('_error')
  error.classList.remove('_active')
}

</script>

<template>
  <template v-if="type === 'checkbox' || type === 'radio'">
    <label :class="{ '_error': isValid === false, }" class="field _checkbox">
      <span class="field-label">{{ label }}</span>
      <input :id="id" :name="name" :placeholder="placeholder"
             :type="type" :value="value" class="field-input _checkbox"
             required @change="handleChange">
      <span :class="{ '_active': isValid === false }" class="field-error">
      {{ errorText }}
    </span>
    </label>
  </template>
  <template v-else>
    <label :class="{ '_error': isValid === false,}" class="field">
      <span class="field-label">{{ label }}</span>
      <input :id="id" :checked="!!checked" :name="name"
             :placeholder="placeholder"
             :type="type" :value="value" class="field-input" required
             @blur="handleBlur" @focus="handleFocus" @input="handleInput">
      <span :class="{ '_active': isValid === false }" class="field-error">
      {{ errorText }}
    </span>
    </label>
  </template>
</template>

<style lang="scss">
@use 'src/styles/shared/index' as *;

.field {
  position: relative;
  z-index: 0;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 8px;
  flex: 0 0 auto;
  width: 100%;
  height: fit-content;
  margin-bottom: 16px;

  &._error {
    z-index: 1;
  }

  &._checkbox {
    @include flex(center);
    width: fit-content;
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

    &:focus {
      border-color: #808080;
    }

    &._checkbox {
      order: -1;
      padding: 0;
      flex: 0 0 auto;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      // margin: 0 4px 0 0;
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
