<script setup>
import { ref } from "vue";

import api from "../services/api";

// Component
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const emit = defineEmits(["filter"]);
// Ref
const date = ref({});

// Methods
const handleFilterOrders = async (key, val) => {
  // let data=[];
  // if (key === "status") data = await api.filterOrdersByStatus(val);
  // else data = await api.filterOrdersByDate(val);
  emit("filter", {key,val});
};
</script>

<template>
  <form
    class="grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-1 md:gap-10 mb-5"
  >
    <o-select
      label="Filter by status"
      :options="['All', 'Pending', 'Paid', 'Canceled']"
      @update="(val) => handleFilterOrders('status', val)"
    />
    <div>
      <div class="label">
        <span class="label-text">Filter by date</span>
      </div>
      <VueDatePicker
        v-model="date"
        placeholder="Pick Date"
        @update:model-value="(val) => handleFilterOrders('date', val)"
      />
      <!-- :range="{ partialRange: false }" -->
    </div>
  </form>
</template>

<style  scoped>
:deep(.dp__input_reg) {
  border-radius: 8px !important;
  padding-top: 11.2px;
  padding-bottom: 11.2px;
  border-color: var(--fallback-bc, oklch(var(--bc) / 0.2));
}

:deep(.dp__input_reg:hover) {
  box-shadow: none;
  border-color: var(--fallback-bc, oklch(var(--bc) / 0.2));
  outline-style: solid;
  outline-width: 2px;
  outline-offset: 2px;
  outline-color: var(--fallback-bc, oklch(var(--bc) / 0.2));
}
</style>
