<script setup lang="ts">
import type { Product } from "~/types";

useState<Product[]>("products", () => [
  {
    id: 0,
    name: "product A",
    price: 1000,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, libero.",
  },
  {
    id: 1,
    name: "product B",
    price: 2000,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, libero.",
  },
  {
    id: 2,
    name: "product C",
    price: 3000,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, libero.",
  },
  {
    id: 3,
    name: "product D",
    price: 4000,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, libero.",
  },
  {
    id: 4,
    name: "product E",
    price: 5000,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, libero.",
  },
]);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
