<script lang="ts" setup>
import { ref } from 'vue'
import ButtonMain from 'src/views/components/ui/ButtonMain.vue'
import FieldMain from 'src/views/components/ui/fields/FieldMain.vue'

function validateField(input: HTMLInputElement, validationSchemes: string[],) {
  let errorsQuantity: number = 0
  let errorText = ''
  const schemas = {
    no_digits: new RegExp(/\d/iumg),
    tel: new RegExp(/^(\+\d{1,3}\s?)?[\s\-]?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{1,2}$/),
    email: new RegExp(/^[a-zA-Z0-9][-_.+!#$%&'*/=?^`{|]?([a-zA-Z0-9][-_.+!#$%&'*/=?^`{|]?)*[a-zA-Z0-9]@[a-zA-Z0-9][-.]?([a-zA-Z][-.]?)*[a-zA-Z0-9]\.[a-zA-Z0-9]+([.-]?[a-zA-Z])*[a-zA-Z0-9]*$/i)
  }

  validationSchemes.forEach((schemeName: string,) => {
    // todo: декомпозировать валидацию и схемы валидации в отдельные компоненты
    const value = input.value.trim()
    if (schemeName === 'user_name') {
      if (value.length < 2) {
        errorsQuantity++
        errorText = 'Не менее двух символов'
      }
    }
    if (schemeName === 'no_digits') {
      if (schemas.no_digits.test(value)) {
        errorsQuantity++
        errorText = 'В вашем имени есть цифры? Что-то тут не так.'
      }
    }
    if (schemeName === 'email') {
      if (!schemas.email.test(value)) {
        errorsQuantity++
        errorText = 'Введите корректный email в формате xxx@xxx.xx'
      }
    }
    if (schemeName === 'tel') {
      if (schemas.tel.test(value)) {
        errorsQuantity++
        errorText = 'Введите телефон в формате +7-xxx-xxx-xx-xx'
      }
    }
    if (schemeName === 'inn') {
      const cond = value.length === 10 || value.length === 12
      if (!cond) {
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
  const value = input.value.trim()

  fieldsMain.value.forEach((field) => {
    if (field.id === input.id) field.value = value

    if (input.id === field.id) {
      const val = validateField(input, field.validationSchemes)
      field.isValid = val.isValid
      field.errorText = val.errorText
    }
  })
  fieldsBusiness.value.forEach((field) => {
    if (field.id === input.id) field.value = value

    if (input.id === field.id) {
      const val = validateField(input, field.validationSchemes)
      field.isValid = val.isValid
      field.errorText = val.errorText
    }
  })
  fieldsRoles.value.forEach((field) => {
    if (input.name === 'role' && field.id === input.id) {
      field.checked = input.checked
    } else if (input.name === 'role' && field.id !== input.id) {
      field.checked = !input.checked
    }
  })
}

const fieldsMain = ref([
  {
    id: 'user_name',
    label: 'Введите Ваше имя:',
    placeholder: 'Томас Круз',
    name: 'user_name',
    type: 'text',
    validationSchemes: ['user_name', 'no_digits'],
    value: '',
    isValid: null as boolean | null,
    errorText: '',
  },
  {
    id: 'email',
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
    id: 'tel',
    label: 'Введите Ваше номер телефона:',
    placeholder: '+7-xxx-xxx-xx-xx',
    name: 'tel',
    type: 'text',
    validationSchemes: ['tel',],
    value: '',
    isValid: null as boolean | null,
    errorText: '',
  },
])
const fieldsRoles = ref([
  {
    id: 'rolePerson',
    label: 'Я физическое лицо',
    placeholder: 'Физическое лицо',
    name: 'role',
    type: 'radio',
    validationSchemes: [],
    value: 'Физическое лицо',
    isValid: null as boolean | null,
    errorText: '',
    checked: false as boolean,
  },
  {
    id: 'roleBusiness',
    label: 'Я юридическое лицо',
    placeholder: 'Юридическое лицо',
    name: 'role',
    type: 'radio',
    validationSchemes: [],
    value: 'Юридическое лицо',
    isValid: null as boolean | null,
    errorText: '',
    checked: false as boolean,
  },
])
const fieldsBusiness = ref([
  {
    id: 'inn',
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
    id: 'company_name',
    label: 'Название Вашей компании:',
    placeholder: 'ООО Туда Сюда',
    name: 'company_name',
    type: 'text',
    validationSchemes: ['company_name',],
    value: '',
    isValid: null as boolean | null,
    errorText: '',
  },
])
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
              <FieldMain v-for="field in fieldsMain" :id="field.id"
                         :key="field.id" :error-text="field.errorText"
                         :is-valid="field.isValid" :label="field.label"
                         :name="field.name" :placeholder="field.placeholder"
                         :type="field.type" :value="field.value" @update="handleFieldUpdate"/>
            </fieldset>
            <fieldset class="fieldset">
              <legend class="fieldset-title">Выберите роль:</legend>
              <FieldMain v-for="(field,index) in fieldsRoles" :id="field.id"
                         :key="field.id" :checked="field.checked" :error-text="field.errorText"
                         :is-valid="field.isValid" :label="field.label"
                         :name="field.name" :placeholder="field.placeholder"
                         :style="(index + 1) === fieldsRoles.length ? 'margin-bottom: 16px;' : null"
                         :type="field.type" :value="field.value" @update="handleFieldUpdate"/>

              <FieldMain v-for="field in fieldsBusiness" v-if="fieldsRoles[1].checked"
                         :id="field.id" :key="field.id" :error-text="field.errorText"
                         :is-valid="field.isValid" :label="field.label"
                         :name="field.name" :placeholder="field.placeholder"
                         :type="field.type" :value="field.value" @update="handleFieldUpdate"/>
            </fieldset>
          </div>
          <FieldMain id="comment" :is-valid="true"
                     error-text="Заполните это поле" label="Оставьте комментарий"
                     name="comment" placeholder="Оставьте комментарий"
                     type="textarea" value="" @update="handleFieldUpdate"/>
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
