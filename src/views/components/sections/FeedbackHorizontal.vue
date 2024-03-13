<template>
  <section class="feedback">
    <div class="feedback-container">
      <form class="form">
        <h2 class="form-title">Оставьте заявку на обратную связь</h2>
        <div class="form-layout">
          <label class="form-label">
            <span class="form-subtitle">Введите имя <i class="required">*</i></span>
            <input v-model="userName" class="form-input" placeholder="Томас Круз"
                   required type="text">
          </label>
          <label class="form-label">
            <span class="form-subtitle">Введите телефон <i class="form-obligatory">*</i></span>
            <input ref="el" class="form-input" placeholder="+7-xxx-xxx-xx-xx" required>
          </label>
          <ButtonMain class="form-button" title="Отправить" type="submit">
            Отправить
          </ButtonMain>
        </div>
        <label class="form-note">
          <input class="form-checkbox" data-alt required type="checkbox">
          <span>Нажимая на кнопку "Отправить" вы даете согласие на хранение и обработку персональных данных.</span>
        </label>
      </form>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useIMask } from 'vue-imask'
import { ref } from 'vue'
import ButtonMain from 'src/views/components/ui/ButtonMain.vue'

const userName = defineModel('userName', { default: '', })

const { el, masked } = useIMask({
  mask: '+7-000-000-00-00'
})

async function handleSubmit(event: Event) {
  event.preventDefault()
  const inputTel = el.value as HTMLInputElement
  console.log(userName.value, inputTel.value, masked.value)
}
</script>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.feedback {
  margin: 40px 0 80px;

  &-container {
    @include container;
  }
}

.form {
  background: #f5f5f5;
  box-shadow: 4px 4px 16px 0 rgba(black, 0.1);
  border-radius: 8px;
  padding: 40px;

  &-title {
    @include h3;
    text-align: center;
    margin: 0 0 1.5em;
  }

  &-layout {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 20px;
    @include mediaTabletL {
      grid-template-columns: repeat(3, 1fr);
      column-gap: 20px;
    }
    margin-bottom: 16px;
  }

  &-label {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
  }

  &-input {
    @include buttonTemplate;
    background: white;
    border: 2px solid transparent;
  }

  &-button {
    min-height: 0;
    //margin-top: 20px;
    @include mediaTabletL {
      margin-top: auto;
    }
  }
}
</style>
