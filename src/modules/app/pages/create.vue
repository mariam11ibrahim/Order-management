<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import api from "../services/api";

const router=useRouter()

const order = ref({
  name: "",
  count: null,
  price: null,
  status: "Pending",
});
const loading=ref(false)

// Methods
const handleOrder = (key, val) => {
  order.value[key] = val;
};
const handleCreateOrder = async (e) => {
  e.preventDefault();
  try {
    loading.value = true;
    await api.createOrder(order.value);
    router.push('/app/orders')
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <o-page>
    <section class="flex flex-col h-full justify-center items-center gap-4">
      <o-card class="h-auto">
        <template #header>
          <div class="text-center">
            <h3 class="text-xl font-semibold text-primary">Create New Order</h3>
            <p class="text-sm text-gray-400">Add your order details</p>
          </div>
        </template>
        <form class="flex flex-col gap-3" @submit="handleCreateOrder">
          <div class="flex gap-5">
            <o-input label="Name" @update="(val) => handleOrder('name', val)" />
            <o-select
              label="Status"
              :options="['Pending', 'Paid', 'Canceled']"
              @update="(val) => handleOrder('status', val)"
            />
          </div>
          <div class="flex gap-5">
            <o-input
              label="Price"
              type="number"
              @update="(val) => handleOrder('price', val)"
            />
            <o-input
              label="Count"
              type="number"
              @update="(val) => handleOrder('count', val)"
            />
          </div>
          <o-loading v-if="loading" />
          <o-btn v-else label="Create Order" class="mt-5" theme="primary" />
        </form>
      </o-card>
    </section>
  </o-page>
</template>