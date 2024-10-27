<template>
  <div>
    <header class="shadow-sm bg-white">
      <NuxtLink to="/"></NuxtLink>
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>
  </div>

  <div class="container mx-auto p-4">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .router-link-exact-active {
    @apply text-red-500;
  }
</style>