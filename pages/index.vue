<script setup lang="ts">
import type { Product } from "~/types";

const products = useState<Product[]>("products");

useHead({
  title: "Products",
});
</script>

<template>
  <section class="products">
    <h2>Products</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        <NuxtLink :to="`/products/${product.id}`">
          <img src="https://placehold.jp/300x300.png" :alt="product.name" />
          <h3>{{ product.name }}</h3>
          <p>{{ product.price.toLocaleString() }}円</p>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.products {
  h2 {
    margin-top: 2rem;
  }
  ul {
    margin: 2rem 0 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  a {
    display: block;
  }
  img {
    width: 100%;
    height: auto;
  }
  h3 {
    margin-top: 0.5rem;
  }
}
</style>
