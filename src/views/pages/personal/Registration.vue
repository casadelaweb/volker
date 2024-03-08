<script lang="ts" setup>
import { ref } from 'vue'

import ButtonMain from 'src/views/components/ui/ButtonMain.vue'
import Field from 'src/views/components/ui/Field.vue'

function validateField(input: HTMLInputElement, validationSchemes: string[],) {
  let errorsQuantity: number = 0
  let errorText = ''

  validationSchemes.forEach((schemeName: string,) => {
    const value = input.value.trim()
    if (schemeName === 'user_name') {
      if (value.length < 2) {
        errorsQuantity++
        errorText = 'Не менее двух символов'
      }
    }
    if (schemeName === 'no_digits') {
      if (/\d/iumg.test(value)) {
        errorsQuantity++
        errorText = 'В вашем имени есть цифры? Что-то тут не так.'
      }
    }
    if (schemeName === 'email') {
      const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
      if (!pattern.test(value)) {
        errorsQuantity++
        errorText = 'Введите корректный email в формате xxx@xxx.xx'
      }
    }
    if (schemeName === 'tel') {
      if (value.length !== 18) {
        errorsQuantity++
        errorText = 'Введите телефон в формате +7-xxx-xxx-xx-xx'
      }
    }
    if (schemeName === 'inn') {
      const cond1 = value.length === 10 || value.length === 12
      console.log(cond1, !cond1)
      if (!cond1) {
        errorsQuantity++
        errorText = 'Последовательность из 10 или 12 арабских цифр'
      }
    }
  })

  return {
    isValid: errorsQuantity === 0,
    errorText,
  }
}

function handleFieldUpdate(event: InputEvent) {
  const input = event.target as HTMLInputElement

  if (input.name === 'role') {
    fields.value.roles[1].checked = input.value === 'Юридическое лицо' && input.checked
  }

  // if (input.name === 'user_name') {
  //   fields.value.main.find((obj) => {
  //     if (obj.name === 'user_name') {
  //       const val = validateField(input, obj.validationSchemes)
  //       obj.isValid = val.isValid
  //       obj.errorText = val.errorText
  //     }
  //   })
  // }
  // if (input.name === 'tel') {
  //   fields.value.main.find((obj) => {
  //     if (obj.name === 'tel') {
  //       const val = validateField(input, obj.validationSchemes)
  //       obj.isValid = val.isValid
  //       obj.errorText = val.errorText
  //     }
  //   })
  // }
  // if (input.name === 'email') {
  //   fields.value.main.find((obj) => {
  //     if (obj.name === 'email') {
  //       const val = validateField(input, obj.validationSchemes)
  //       obj.isValid = val.isValid
  //       obj.errorText = val.errorText
  //     }
  //   })
  // }
  //
  // if (input.name === 'company_name') {
  //   fields.value.legalEntity.find((obj) => {
  //     if (obj.name === 'company_name') {
  //       const val = validateField(input, obj.validationSchemes)
  //       obj.isValid = val.isValid
  //       obj.errorText = val.errorText
  //     }
  //   })
  // }
  // if (input.name === 'inn') {
  //   fields.value.legalEntity.find((obj) => {
  //     if (obj.name === 'inn') {
  //       const val = validateField(input, obj.validationSchemes)
  //       obj.isValid = val.isValid
  //       obj.errorText = val.errorText
  //     }
  //   })
  // }
}

interface iField {
  label: string,
  placeholder: string,
  name: string,
  type: 'text' | 'radio' | 'checkbox',
  validationSchemes: Array<string>,
  value: string,
  isValid: boolean | null,
  errorText: string,
}

const fields = ref({
  main: [
    {
      label: 'Введите Ваше имя:',
      placeholder: 'Томас Круз',
      name: 'user_name',
      type: 'text',
      validationSchemes: ['user_name',],
      value: '',
      isValid: null as boolean | null,
      errorText: '',
    },
    {
      label: 'Введите Вашу электронную почту:',
      placeholder: 'my@email.io',
      name: 'email',
      type: 'text',
      validationSchemes: ['email',],
      value: '',
      isValid: null as boolean | null,
      errorText: '',
    },
    {
      label: 'Введите Ваше номер телефона:',
      placeholder: '+7-xxx-xxx-xx-xx',
      name: 'tel',
      type: 'text',
      validationSchemes: ['tel',],
      value: '',
      isValid: null as boolean | null,
      errorText: '',
    },
  ],
  roles: [
    {
      label: 'Я физическое лицо',
      placeholder: 'Физическое лицо',
      name: 'role',
      type: 'radio',
      validationSchemes: ['inn',],
      value: 'Физическое лицо',
      isValid: null as boolean | null,
      errorText: '',
      checked: null as boolean | null,
    },
    {
      label: 'Я юридическое лицо',
      placeholder: 'Юридическое лицо',
      name: 'role',
      type: 'radio',
      validationSchemes: ['inn',],
      value: 'Юридическое лицо',
      isValid: null as boolean | null,
      errorText: '',
      checked: null as boolean | null,
    },
  ],
  legalEntity: [
    {
      label: 'ИНН Вашей компании:',
      placeholder: '1234567890',
      name: 'inn',
      type: 'text',
      validationSchemes: ['inn',],
      value: '',
      isValid: null as boolean | null,
      errorText: '',
    },
    {
      label: 'Название Вашей компании:',
      placeholder: 'ООО Туда Сюда',
      name: 'company_name',
      type: 'text',
      validationSchemes: ['company_name',],
      value: '',
      isValid: null as boolean | null,
      errorText: '',
    },
  ],
})
</script>

<template>
  <section class="section">
    <div class="container">
      <form class="form">
        <div class="form-info">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
          ducimus ex iure maiores minima molestias officia porro sit ullam voluptate?
        </div>
        <div class="form-body">
          <h2 class="form-title">Регистрация</h2>
          <div class="form-fields">
            <fieldset class="fieldset">
              <Field v-for="(field,index) in fields.main" :key="index"
                     :error-text="field.errorText"
                     :is-valid="field.isValid"
                     :label="field.label"
                     :name="field.name"
                     :placeholder="field.placeholder"
                     :type="field.type"
                     :value="field.value"
                     @update="handleFieldUpdate"/>
            </fieldset>
            <fieldset class="fieldset">
              <legend class="fieldset-title">Выберите роль:</legend>
              <Field v-for="(field,index) in fields.roles" :key="index"
                     :error-text="field.errorText"
                     :is-valid="field.isValid"
                     :label="field.label"
                     :name="field.name"
                     :placeholder="field.placeholder"
                     :style="(index + 1) === fields.roles.length ? 'margin-bottom: 16px;' : null"
                     :type="field.type"
                     :value="field.value"
                     class-list="_checkbox"
                     @update="handleFieldUpdate"
              />
              <Field v-for="(field,index) in fields.legalEntity"
                     v-if="fields.roles[1].checked"
                     :key="index"
                     :error-text="field.errorText"
                     :is-valid="field.isValid"
                     :label="field.label"
                     :name="field.name"
                     :placeholder="field.placeholder"
                     :type="field.type"
                     :value="field.value"
                     @update="handleFieldUpdate"/>
            </fieldset>
          </div>
          <label class="field _checkbox">
            <input name="privacy_policy" required type="checkbox">
            <span>
              Нажимая кнопку отправить, вы соглашаетесь с
              <router-link target="_blank" title="Политика обработки персональных данных"
                           to="/privacy-policy/">
                политикой обработки персональных данных
              </router-link>
            </span>
          </label>
          <ButtonMain class-list="form-submit" title="Зарегистрироваться" type="submit">
            Зарегистрироваться
          </ButtonMain>
        </div>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.form {
  display: block;
  padding: 0;
  overflow: hidden;
  border-radius: 16px;
  margin: 160px 0 80px;
  box-shadow: 4px 4px 32px 0 rgba(black, 0.1);
  @include mediaTabletL {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  &-info, &-body {
    padding: 20px 12px;
    @include mediaMobileS {
      padding: 24px 16px;
    }
    @include mediaTabletM {
      padding: 32px 24px;
    }
    @include mediaLaptopXs {
      padding: 32px;
    }
  }

  &-info {
    background: darkseagreen;
    color: white;
    font-weight: 500;
  }

  &-body {
    background: white;
  }

  &-title {
    margin-bottom: 20px;
    @include mediaTabletL {
      margin-bottom: 32px;
    }
  }

  &-fields {
    @include mediaTabletM {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 24px;
      row-gap: 24px;
    }
    @include mediaLaptopL {
      column-gap: 48px;
      row-gap: 48px;
    }
  }

  &-submit {
    margin: 20px auto 0;
    max-width: 400px;
  }
}

.fieldset {
  &-title {
    margin-bottom: 8px;
  }
}
</style>
