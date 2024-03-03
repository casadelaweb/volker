<script lang="ts" setup>

</script>

<template>
  <div class="calculator">
    <div class="calculator-top">
      <label class="form-group">
        <span class="form-label">Количество:</span>
        <input class="form-input" max="999" min="0" placeholder="Сколько заказать?"
               type="number">
      </label>
    </div>
    <div class="calculator-discounts">
      <label class="calculator-label" title="Покупаю как юридическое лицо">
        <input class="calculator-checkbox" data-alt type="checkbox">
        <span class="calculator-label-text"> Рассчитать для юридического лица </span>
      </label>
      <label class="calculator-label" title="Скидка 8% при оплате наличными">
        <input class="calculator-checkbox" data-alt type="checkbox">
        <span class="calculator-label-text"> Рассчет наличными </span>
      </label>
      <label class="calculator-label"
             title="Скидка 3% при покупке от 150 ед. и 5% при покупке от 300 ед.">
        <input class="calculator-checkbox" data-alt type="checkbox">
        <span class="calculator-label-text"> Оптовая скидка </span>
      </label>
      <div class="calculator-submit-info">
        Оптовая скидка применяется автоматически - 3% при покупке от 150 ед. и 5% при
        покупке от 300 ед.
      </div>
    </div>
    <div class="calculator-bottom">
      <div class="calculator-result-row">
        <div class="calculator-result-text">Приблизительная стоимость:</div>
        <div class="row">
          <div class="calculator-result-value">23&nbsp;100</div>
          <div class="calculator-result-currency">₽</div>
        </div>
      </div>
      <div class="calculator-submit-info">Указанная информация носит ознакомительный
        характер и
        не является публичной офертой. Наличие и актуальную стоимость узнавайте у продавца.
      </div>
      <router-link class="calculator-submit-button" title="Перейти в контакты"
                   to="/contacts">
        В контакты
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.calculator {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 4px 4px 16px 0 rgba(black, 0.1);

  &-label {
    @include flex(center);
  }

  &-checkbox {
    flex-shrink: 0;
    margin-right: 8px;
  }

  &-discounts {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 20px;
  }
}
</style>
