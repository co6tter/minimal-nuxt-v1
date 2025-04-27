<template>
  <div class="container">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style scoped>
.container {
  width: calc(100% - 4rem);
  margin-inline: auto;
  box-sizing: border-box;
  padding-top: 2rem;
}
</style>
