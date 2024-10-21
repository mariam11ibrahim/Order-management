<script setup>
import { ref } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  rules: {
    type: [String, Object],
  },
});
const emit = defineEmits(["update"]);
const value = ref();

// Methods
const handleChange = () => {
  emit("update", value.value);
};
</script>
<template>
  <label class="form-control w-full max-w-xs">
    <div class="label">
      <span class="label-text">{{ label }}</span>
      <!-- <span class="label-text-alt">Top Right label</span> -->
    </div>
    <input
      :type="type"
      placeholder="Type here"
      class="input input-bordered w-full max-w-xs"
      v-model="value"
      @input="handleChange"
    />
  </label>
</template>

