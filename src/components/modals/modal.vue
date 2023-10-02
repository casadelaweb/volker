<template>
  <div :data-modal="dataModal" class="modal">
    <button class="modal-button" data-modal-close type="button">закрыть</button>
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    dataModal: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import "src/styles/shared";

.modal {
  @include flex(center, center);
  position: fixed;
  z-index: 110;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // backdrop-filter: blur(2px);
  background: rgba(black, 0.25);
  // transform: translate(-125%, 0);
  opacity: 0;
  transition: transform 0.5s, opacity 0.5s;
  pointer-events: none;

  &.active {
    transform: none;
    opacity: 1;
    pointer-events: auto;
  }

  &-button {
    position: absolute;
    z-index: 1;
    top: 32px;
    right: 32px;
  }

  &-content {
  }
}
</style>
