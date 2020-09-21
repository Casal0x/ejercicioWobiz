<template>
  <div class="row base-absolute-message d-none d-lg-inline-flex">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.base-absolute-message {
  top: 42px;
  position: absolute;
  right: 10%;
}
</style>
