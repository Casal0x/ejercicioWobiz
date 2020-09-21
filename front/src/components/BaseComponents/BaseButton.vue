<template>
  <button
    :type="type"
    :class="
      `btn btn${outline ? '-outline' : ''}-${color}${computedSize}${
        block ? ' btn-block' : ''
      }`
    "
    @click="click"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    click: {
      type: Function,
      default: () => {},
    },
    type: {
      type: String,
      default: "button",
    },
    size: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "primary",
    },
    outline: Boolean,
    block: Boolean,
  },
  computed: {
    computedSize() {
      return this.size === "lg"
        ? " btn-lg"
        : this.size === "sm"
        ? " btn-sm"
        : "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
