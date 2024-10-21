<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import api from "../services/api";

// Components
import { StripeCheckout } from "@vue-stripe/vue-stripe";
import Order from "../components/order.vue";
import FilterForm from "../components/filter-form.vue";

// const STRIPE_PK = import.meta.env.VITE_StripPK;
// const successURL = "your-success-url";
// const cancelUR = "your-cancel-url";
// const lineItems = [
//   {
//     price: "some-price-id", // The id of the one-time price you created in your Stripe dashboard
//     quantity: 1,
//   },
// ];

// Composable
const route = useRoute();

// Ref
const checkoutRef = ref();
const orderDetails = ref({});
const loading = ref(false);
const loadingPayment = ref(false);

//Computed
const total = computed(
  () =>
    `${orderDetails.value?.price}$ X ${orderDetails.value?.count} = ${
      orderDetails.value?.price * orderDetails.value?.count
    } $`
);

// Methods
const handleGetOrder = async () => {
  try {
    loading.value = true;
    orderDetails.value = await api.getOrder(route.params.id);
  } catch (e) {
  } finally {
    loading.value = false;
  }
};
const handlePayment = async () => {
  try {
    loadingPayment.value = true;

    await api.pay(orderDetails.value.id);
  } catch (e) {
  } finally {
    loadingPayment.value = false;
  }
};
// Life cycle
onMounted(handleGetOrder);
</script>

<template>
  <o-loading v-if="loading"/>
  <o-page v-else>
    <section class="grid grid-cols-2 gap-10">
      <order :data="orderDetails" :is-clickable="false" />

      <o-card class="border-1 p-0">
        <template #header>
          <div class="text-center">
            <h3 class="text-xl font-medium">
              Payment with
              <span class="text-primary italic"> Stripe </span>
            </h3>
            <p class="text-sm text-gray-400">Safe & Easy</p>
          </div>
        </template>

        <div class="flex gap-4">
          <!-- <stripe-checkout
            :pk="STRIPE_PK"
            ref="checkoutRef"
            mode="payment"
            :line-items="lineItems"
            :success-url="successURL"
            :cancel-url="cancelURL"
            /> -->
          <div class="text-sm">
            <span class="text-gray-500 font-medium"> Total: </span>
            <span class="font-medium">{{ total }}</span>
          </div>
        </div>

        <o-loading v-if="loadingPayment" />
        <template v-else>
          <o-btn
            v-if="orderDetails.status !== 'Paid'"
            label="Pay Now"
            class="mt-5"
            theme="primary"
            @click="handlePayment"
          />
          <o-btn v-else label="Paid" class="mt-5" theme="primary" disabled />
        </template>
      </o-card>
    </section>
  </o-page>
</template>