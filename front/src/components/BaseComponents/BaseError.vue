<template>
  <div v-show="error" class="base-error alert alert-danger text-left">
    {{ error }}
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.base-error {
  border: none;
  color: #fff;
  padding: 10px;
  background-color: var(--color-danger);
  font-size: var(--font-sm);
}
</style>
