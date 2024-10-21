<script setup>
import { onMounted, ref } from "vue";
import api from "../services/api";

// Component
import FilterForm from "../components/filter-form.vue";
import Order from "../components/order.vue";

// Refs
const orders = ref([]);
const loading = ref(false);
const loadingFilter = ref(false);

// Methods
const handleGetOrders = async () => {
  try {
    loading.value = true;
    const data = await api.getOrders();
    orders.value = data;
  } catch (e) {
  } finally {
    loading.value = false;
  }
};
// const handleFilter = async (data) => {
//   orders.value = data;
// };
const handleFilterOrders = async ({ key, val }) => {
  try {
    loadingFilter.value = true;
    if (key === "status") orders.value = await api.filterOrdersByStatus(val);
    else orders.value = await api.filterOrdersByDate(val);
  } catch (e) {
  } finally {
    loadingFilter.value = false;
  }
};
// Life cycle
onMounted(handleGetOrders);
</script>

<template>
  <o-loading v-if="loading" />
  <o-page v-else>
    <filter-form @filter="handleFilterOrders" />
    <o-loading v-if="loadingFilter" />

    <section
      v-else-if="orders.length > 0"
      class="grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-1 gap-10"
    >
      <template v-for="order in orders" :key="order.id">
        <order v-if="order" :data="order" />
      </template>
    </section>
    <section v-else>Empty data</section>
  </o-page>
</template>
