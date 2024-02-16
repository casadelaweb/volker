<template>
  <section class="feedbackImg">
    <div class="feedbackImg-container">
      <section-top :title="title"/>
      <div class="form-layout">
        <div class="form-decor"></div>
        <form class="form">
          <h3 class="form-title"> Введите свои данные и мы свяжемся с вами и проконсультируем по
            любому вопросу </h3>
          <label class="form-label">
            <span class="form-subtitle">
              Имя <span class="form-obligatory">*</span>
            </span>
            <input class="form-input" placeholder="Имя" required type="text">
          </label>
          <label class="form-label">
            <span class="form-subtitle">
              Телефон <span class="form-obligatory">*</span>
            </span>
            <input class="form-input" placeholder="Телефон" required type="text">
          </label>
          <label class="form-note">
            <input class="form-checkbox" data-alt required type="checkbox">
            <span>Нажимая на кнопку "Отправить" вы даете согласие на хранение и обработку персональных данных.</span>
          </label>
          <button class="form-button" type="submit">Отправить</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import sectionTop from 'src/components/ui/section-top.vue'

export default {
  components: {
    sectionTop,
  },
  data: function () {
    return {
      title: {
        text: 'Обратная связь',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
// @use 'src/styles/shared' as *;

.feedbackImg {
  @include section;

  &-container {
    @include container;
  }
}

.form {
  &-select {
    padding: 20px;
    background: white;
  }

  &-decor {
    background: #f5f5f5;
  }

  &-layout {
    display: grid;
    grid-template-columns: 3fr 2fr;
    column-gap: 20px;
    row-gap: 20px;
  }
}
</style>
