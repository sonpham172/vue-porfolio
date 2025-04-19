<template>
  <div class="flex gap-2 md:gap-3 overflow-auto">
    <NavigateItem value="Home" path="/"/>
    <NavigateItem value="About Me" path="/about"/>
  </div>
</template>

<script setup lang="ts">
import NavigateItem from './NavigateItem.vue';
</script>

<style lang="scss" scoped>

</style>