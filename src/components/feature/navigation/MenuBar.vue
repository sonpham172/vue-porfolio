<template>
  <div class="flex gap-3">
    <NavigateItem value="Work" path="/"/>
    <NavigateItem value="About" path="/about"/>
    <NavigateItem value="Journal" path="/journal"/>
    <NavigateItem value="Contact" path="/contact"/>
  </div>
</template>

<script setup lang="ts">
import NavigateItem from './NavigateItem.vue';
</script>

<style lang="scss" scoped>

</style>