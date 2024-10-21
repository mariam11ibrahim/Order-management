<script setup>
import { computed } from "vue";

const props=defineProps({
  label: {
    type: String,
    default: "Pending",
  },
});

</script>
<template>
  <span class="border border-gray-200 rounded-md flex items-center gap-2 px-2">

    <span class="badge badge-xs bg-warning" v-if="label==='Pending'"></span>
    <span class="badge badge-xs bg-success" v-if="label==='Paid'"></span>
    <span class="badge badge-xs bg-error" v-if="label==='Canceled'"></span>
    <span class="text-gray-500 capitalize text-sm">
      {{ label }}
    </span>
  </span>
</template>