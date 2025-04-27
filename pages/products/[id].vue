<script setup lang="ts">
import type { Product } from "~/types";
const products = useState<Product[]>("products");
const route = useRoute();
const id = Number(route.params.id);
const product = products.value.find((element) => {
  return element.id === id;
});

if (!product) {
  throw createError({ statusCode: 404, statusMessage: "Not Found" });
}

useHead({
  title: product.name,
});
</script>

<template>
  <section class="product">
    <div class="desc">
      <h2>{{ product.name }}</h2>
      <p>{{ product.desc }}</p>
      <p>{{ product.price.toLocaleString() }}円 (税込)</p>
      <button>購入する</button>
    </div>
    <div class="pic">
      <img src="https://placehold.jp/300x300.png" :alt="product.name" />
    </div>
  </section>
</template>

<style scoped>
.product {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}

.product img {
  width: 100%;
  height: auto;
}

.product div {
  flex: 1;
}

.product p {
  margin-top: 1rem;
}

.product button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
