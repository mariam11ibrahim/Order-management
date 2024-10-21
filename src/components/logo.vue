<script setup>
defineProps({
  size: {
    type: String,
    default: null,
  },
 
  classes: {
    type: String,
    default: null,
  },
});
</script>
<template>
  <div
    class="rounded-xl shadow-xl shadow-white-400 border-1 border-white bg-primary"
    :class="{
      'px-0.5 py-2': size === 'sm',
      'px-1': size !== 'sm',
      [classes]:classes,
    }"
    :style="`${size == 'sm' ? 'font-size:30px' : 'font-size:50px'}`"
  >
    📦
  </div>
</template>