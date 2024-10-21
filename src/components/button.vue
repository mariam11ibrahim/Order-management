<script setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "submit",
  },
  theme: {
    type: String,
    default: "primary",
  },
});
</script>
<template>
  <button :type="type" class="btn btn-active" :class="`btn-${theme}`">
    {{ label }}
    <slot></slot>
  </button>
</template>
