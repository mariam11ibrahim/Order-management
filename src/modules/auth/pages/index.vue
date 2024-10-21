<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import api from "../services/api";

// Composables
const router = useRouter();

// Refs
const email = ref("");
const password = ref("");
const loading = ref(false);

// Methods
const handleEmailChange = (value) => {
  email.value = value;
};
const handlePasswordChange = (value) => {
  password.value = value;
};

const handleRegister = async (e) => {
  e.preventDefault();
  try {
    loading.value = true;
    await api.register({
      email: email.value,
      password: password.value,
    });
    router.push("/app/orders");
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
};
onMounted(() => {
  api.getCurrentUSer();
});
</script>
<template>
  <o-loading v-if="loading" />
  <section
    v-else
    class="flex flex-col h-dvh justify-center items-center bg-green-200 gap-4"
  >
    <o-logo />
    <o-card class="h-auto">
      <template #header>
        <div class="text-center">
          <h3 class="text-xl font-semibold text-primary">Register</h3>
          <p class="text-sm text-gray-400">
            Welcome just start tracking your orders
          </p>
        </div>
      </template>
      <form class="flex flex-col gap-3" @submit="handleRegister">
        <o-input label="Email" @update="handleEmailChange" />
        <o-input
          type="password"
          label="Password"
          @update="handlePasswordChange"
        />
        <o-btn label="Register" class="mt-5" theme="primary" />
      </form>
    </o-card>
  </section>
</template>