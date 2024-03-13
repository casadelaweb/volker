<script lang="ts" setup>
import { ref } from 'vue'
import SectionTop from 'src/views/components/ui/SectionTop.vue'
import ButtonMain from 'src/views/components/ui/ButtonMain.vue'

const registrationUrl = ref('/auth/registration/')

const sectionTitle = ref({
  text: 'Можно дешевле!',
  url: registrationUrl,
})
const sectionButton = ref({
  text: 'Зарегистрироваться',
  url: registrationUrl,
})
</script>

<template>
  <section class="registration">
    <div class="container">
      <SectionTop :button="sectionButton" :is-loading="false" :title="sectionTitle"></SectionTop>
    </div>
    <div class="registration-container">
      <div class="registration-main">
        <div class="post-body">
          <h3>Нравится наша продукция?</h3>
          <p>Пройдите простую регистрацию в два шага и получите постоянную скидку для
            зарегистрированных пользователей.</p>
        </div>
        <ButtonMain :url="registrationUrl" title="Получить скидку" type="router-link">
          Получить скидку
        </ButtonMain>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.registration {
  @include section;
  background: url('src/assets/img/registration-bg.jpg') no-repeat center left;
  background-size: cover;

  &-container {
    @include container;
    @include flex(center, flex-end);
    min-height: 480px;
    @include mediaTabletL {
    }
  }

  &-main {
    width: 100%;
    max-width: 400px;
    margin: 0 auto auto;
    flex: 0 0 auto;
    background: white;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 4px 4px 16px 0 rgba(black, 0.1);
    @include mediaTabletM {
      margin: 0 0 10%;
    }
    @include mediaTabletL {
      margin: 0;
    }
  }
}
</style>
