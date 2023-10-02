<template>
  <div class="overlay">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss">

.overlay {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(black, 0.25);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s;

  &.active {
    opacity: 1;
    pointer-events: auto;
  }
}

</style>
