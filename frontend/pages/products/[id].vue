<template>
  <div>
    <Head>
      <Title>Nuxt Dojo | {{ product.title }}</Title>
      <Meta name="description" :content="product.description"></Meta>
    </Head>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'products'
  });
  const { id } = useRoute().params;

  const url = `https://fakestoreapi.com/products/${id}`;

  const { data: product } = await useFetch(url, { key: id });

  if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product Not Found'});
  }
</script>

<style lang="scss" scoped>

</style>