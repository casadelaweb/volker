<template>
  <section class="feedback">
    <div class="feedback-container">
      <form action="/api/form/feedback" class="form" method="post">
        <h2 class="form-title">Оставьте заявку на обратную связь</h2>
        <div class="form-layout">
          <label class="form-label">
            <span class="form-subtitle">Введите имя <i class="required">*</i></span>
            <input :value="formValues.userName" class="form-input" placeholder="Томас Круз" required
                   type="text">
          </label>
          <label class="form-label">
            <span class="form-subtitle">Введите телефон <i class="form-obligatory">*</i></span>
            <input :value="formValues.userTel" class="form-input" required
                   @accept="onAccept">
          </label>
          <button class="form-button" title="Отправить форму" type="submit" @click="onSubmit">
            <span>Отправить</span>
          </button>
        </div>
        <label class="form-note">
          <input class="form-checkbox" data-alt required type="checkbox">
          <span>Нажимая на кнопку "Отправить" вы даете согласие на хранение и обработку персональных данных.</span>
        </label>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
//import { IMaskDirective } from 'vue-imask'

// interface iMaskEvent extends Event {
//   detail: {
//     value: string,
//     unmaskedValue: string,
//   }
// }

export default {
  data: function () {
    return {
      formValues: {
        userName: '',
        userTel: '',
      },
      mask: {
        mask: '{+7} 000-000-00-00',
        lazy: false
      },
    }
  },
  methods: {
    // onSubmit(event: MouseEvent) {
    //   event.preventDefault()
    // },
    // onAccept(event: iMaskEvent) {
    //   const maskRef = event.detail
    //   this.formValues.userTel = maskRef.value
    // },
  },
  // directives: {
  //   imask: IMaskDirective
  // }
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
  &-layout {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 20px;
    @include mediaTabletL {
      grid-template-columns: repeat(3, 1fr);
      column-gap: 20px;
    }
  }

  &-label {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
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
