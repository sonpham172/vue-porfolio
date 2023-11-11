<template>
  <header class="sticky top-0 shadow-lg">
    <div class="container justify-between py-8 items-center hidden md:flex">
      <h1 class="text-[24px] font-[fantasy]"><a href="/">FINN PHAM</a></h1>
      <MenuBar />
    </div>

    <div class=" container flex md:hidden fixed bottom-4 left-0 right-0 bg-[rgba(200,200,200,.5)] rounded-3xl justify-center">
      <MenuBar />
    </div>
  </header>
</template>

<script setup lang="ts">
import MenuBar from './MenuBar.vue';
</script>

<style lang="scss" scoped>

</style>