<script setup>
import { ref } from "vue";

// Props
defineProps({
  label: {
    type: String,
    defualt: "",
  },
  options: {
    type: Array,
    defualt: [],
  },
});
// Emit
const emit = defineEmits(["update"]);

// Refs
const value = ref();

// Methods
const handleChange = (val) => {
  emit("update", value.value);
};
</script>

<template>
  <label
    class="form-control w-full lg:col-start-3 md:col-start-2 xs:cols-start-1"
  >
    <div class="label">
      <span class="label-text">{{ label }}</span>
    </div>
    <select
      class="select select-bordered"
      @change="handleChange"
      v-model="value"
    >
      <option disabled selected>Select</option>
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </label>
</template>