<script setup>
import { useRouter } from "vue-router";

// Components
import Badge from "./badge.vue";

// Props
const props=defineProps({
  isClickable: {
    type: Boolean,
    default: true,
  },
  data: {
    type:Object,
    default:()=>{},
  },
  
});

// Comosable
const router = useRouter();

// Methods
const navToDetails = (id) => {
  if (!props.isClickable) return;
  router.push(`/app/orders/${id}`);
};
</script>

<template>
  <o-card
    class="border-1 p-0"
    :class="{
      'ease-in cursor-pointer hover:scale-105 transition-all hover:border-blue-500':
        isClickable,
    }"
    @click="navToDetails(data.id)"
  >
    <template #header>
      <div class="flex justify-between">
        <span class="inline-block text-gray-500 border px-2 rounded"
          ># {{ data.id }}</span
        >
        <badge :label="data.status" />
      </div>
      <span class="text-gray-500 text-xs">  {{ data.created_at}}</span>
      <h1 class="text-md font-medium">{{ data.name }}</h1>
    </template>

    <div class="flex gap-4">
      <div class="text-sm">
        <span class="text-gray-500 font-medium"> Price: </span>
        <span class="font-medium">{{data.price}}$ </span>
      </div>
      <div class="text-sm">
        <span class="pb-1 text-gray-500 font-medium"> Count: </span>
        <span class="font-medium">{{ data.count }} </span>
      </div>
    </div>
  </o-card>
</template>


<style>
</style>