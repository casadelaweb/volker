<script lang="ts" setup>
import { ref } from 'vue'
import ButtonMain from 'src/views/components/ui/ButtonMain.vue'

const formData = ref({
  user_name: {
    schemes: ['user_name',],
    value: '',
    isValid: true,
    message: '',
  },
  email: '',
  tel: '',
  user_type: '',
  privacy_policy: '',
})

function validateForm() {
}

function validateField(input: HTMLInputElement, validationSchemes: string[],) {
  let errorsQuantity: number = 0
  let message = ''

  validationSchemes.forEach((schemeName: string,) => {
    const value = input.value.trim()
    if (schemeName === 'user_name') {
      if (value.length < 2) {
        errorsQuantity++
        message = 'Не менее двух символов'
      }
    }

    if (schemeName === 'no_digits') {
      if (/\d/iumg.test(value)) {
        errorsQuantity++
        message = 'В вашем имени есть цифры? Что-то тут не так.'
      }
    }
  })

  return {
    isValid: errorsQuantity === 0,
    message,
  }
}

function handleChange(event: InputEvent) {
  const input = event.target as HTMLInputElement
  switch (input.name) {
    case 'user_name':
      formData.value.user_name.value = input.value
      const val = validateField(input, [
        'user_name', 'only_cyrillic', 'no_digits'
      ])
      formData.value.user_name.isValid = val.isValid
      formData.value.user_name.message = val.message
      break
    case 'user_type':
      formData.value.user_type = input.value
      break
    default:
      console.log(formData.value)
      break
  }
}
</script>

<template>
  <section class="section">
    <div class="container">
      <form class="form" method="post">
        <div class="form-info">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
          ducimus ex iure maiores minima molestias officia porro sit ullam voluptate?
        </div>
        <div class="form-body">
          <h2 class="form-title">Регистрация</h2>
          <div class="form-fields">
            <fieldset class="fieldset">
              <label :class="!formData.user_name.isValid ? '_error': '' " class="field">
                <span class="field-label">Ваше имя:</span>
                <input :class="!formData.user_name.isValid ? '_error': '' " class="field-input"
                       data-mask="user_name"
                       name="user_name" placeholder="Томас Круз" required
                       type="text" @input="handleChange">
                <span :class="!formData.user_name.isValid ? '_active': '' " class="field-error">
                  {{ formData.user_name.message }}
                </span>
              </label>
              <label class="field">
                <span class="field-label">Ваша электронная почта:</span>
                <input class="field-input" data-mask="email" name="email"
                       placeholder="myemail@site.com" required type="text"
                       @input="handleChange">
                <span class="field-error"></span>
              </label>
              <label class="field">
                <span class="field-label">Ваш номер телефона:</span>
                <input class="field-input" data-mask="tel" name="tel"
                       placeholder="+7-934-356-54-12" required type="text"
                       @input="handleChange">
                <span class="field-error"></span>
              </label>
            </fieldset>
            <fieldset class="fieldset">
              <legend class="fieldset-title">Выберите роль:</legend>
              <label class="field _checkbox">
                <input name="user_type" required type="radio" value="company"
                       @change="handleChange">
                <span class="field-note">Я юридическое лицо</span>
              </label>
              <label class="field _checkbox">
                <input name="user_type" required type="radio" value="person"
                       @change="handleChange">
                <span class="field-note">Я физическое лицо</span>
              </label>
            </fieldset>
          </div>
          <label class="field _checkbox">
            <input name="privacy_policy" required type="checkbox" @change="handleChange">
            <span>
              Нажимая кнопку отправить, вы соглашаетесь с
              <router-link target="_blank" title="Политика обработки персональных данных"
                           to="/privacy-policy/">
                политикой обработки персональных данных
              </router-link>
            </span>
          </label>
          <ButtonMain title="Зарегистрироваться" type="submit">
            Зарегистрироваться
          </ButtonMain>
        </div>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.form {
  padding: 0;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-radius: 16px;
  margin: 160px 0 80px;
  box-shadow: 4px 4px 32px 0 rgba(black, 0.3);

  &-info {
    background: darkseagreen;
    color: white;
    font-weight: 500;
    padding: 32px;
  }

  &-body {
    padding: 32px;
    background: white;
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 16px;
    row-gap: 16px;
  }

  &-fields {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 16px;
    row-gap: 16px;
  }
}

.fieldset {
  &-title {
    margin-bottom: 8px;
  }
}

.field {
  position: relative;
  z-index: 0;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 8px;
  flex: 0 0 auto;
  width: fit-content;
  height: fit-content;
  margin-bottom: 16px;

  &._error {
    z-index: 1;
  }

  &._checkbox {
    display: block;

    a {
      color: darkseagreen;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &-label {
  }

  &-input {
    transition: color 0.3s, border-color 0.3s;
    border: 2px solid #e6e6e6;
    padding: 10px 20px;
    border-radius: 8px;

    &._error {
      border-color: indianred;
    }

    &._success {
      border-color: mediumseagreen;
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
