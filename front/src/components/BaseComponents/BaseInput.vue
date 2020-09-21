<template>
  <div class="form-group base-input">
    <label v-if="label" :for="name" class="base-input__label font-bold">{{
      label
    }}</label>
    <input
      :id="name"
      :name="name"
      v-model="computedInputVal"
      :placeholder="placeholder"
      class="form-control base-input__input"
      :type="type"
    />
  </div>
</template>

<script>
export default {
  name: "WInput",
  props: {
    label: String,
    placeholder: String,
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
  },
  computed: {
    computedInputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.base-input {
  &.form-group {
    text-align: left;
  }

  .form-control {
    height: calc(1.5em + 0.75rem + 16px) !important;
  }

  &__label {
    font-size: var(--font-xs);
  }

  &__input {
    font-size: var(--font-md);
  }
}
</style>
