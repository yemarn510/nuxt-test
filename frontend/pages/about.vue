<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur voluptate repellat molestias deserunt eum! Praesentium reprehenderit iusto nesciunt odio velit! Explicabo deleniti voluptas possimus nesciunt corrupti, beatae adipisci excepturi?</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et excepturi voluptate nihil, tempora aliquam sit, voluptatum unde ipsum cum nemo impedit eum blanditiis modi molestias praesentium asperiores molestiae maxime voluptatem.
    </p>
    <p>{{  data }}</p>
  </div>
</template>

<script setup>
  const { data } = await useFetch('/api/ninja?name=mario')
</script>

<style lang="scss" scoped>

</style>