    <script>
export default {};
</script>
<template>
  <div class="card bg-base-100  shadow-xs border border-gray-200">
    <div class="card-body">
      <!-- header -->
      <!-- <header v-if="$slots.header" class="card-title"> -->
        <slot name="header"> </slot>
      <!-- </header> -->
      <!-- content -->
      <slot></slot>
      <!-- Footer -->
      <slot v-if="$slots.footer" name="footer"> </slot>
    </div>
  </div>
</template>


<style>
</style>