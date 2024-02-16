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
// @use 'src/styles/shared' as *;

.modal {
  @include flex(center, center);
  position: fixed;
  z-index: 110;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // backdrop-filter: blur(2px);
  transition: transform 0.334s, opacity 0.334s;
  // transform: translate(-125%, 0);
  pointer-events: none;
  opacity: 0;
  background: rgba(black, 0.25);

  &.active {
    transform: none;
    pointer-events: auto;
    opacity: 1;
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
