<template>
  <section class="section">
    <div class="container">

      <form class="form">
        <h2 class="form-title">Оставьте заявку</h2>
        <div class="form-layout">
          <label class="form-label">
            <span class="form-subtitle">Введите имя <span class="required">*</span></span>
            <input class="form-input" placeholder="Имя" required type="text">
          </label>
          <label class="form-label">
            <span class="form-subtitle">Введите телефон <span class="form-obligatory">*</span></span>
            <input class="form-input" placeholder="+7 999 999 99 99" required type="text">
          </label>
          <button class="form-button" type="submit">Отправить</button>
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
export default {}
</script>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.form {
  &-layout {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px
  }

  &-label {
    display: grid;
    grid-template-columns: 1fr;;
  }

  &-button {
    min-height: 0;
    margin-top: auto;
  }
}
</style>
