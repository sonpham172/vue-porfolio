<template>
  <router-link
    :to="path"
    v-slot="{ href, route, navigate, isActive, isExactActive }"
    custom
  >
    <a :href="href" @click="navigate"
      :class="[isExactActive ? 'router-link-exact-active' : '', 
      'cursor-pointer rounded-3xl py-2 px-5 hover:bg-primary-border text-primary-text font-[300] flex items-center text-center whitespace-nowrap']"
    >
      {{ value }}
    </a>
  </router-link>
</template>

<script setup lang="ts">
  defineProps<{
    value: string;
    path: string;
  }>()
</script>

<style lang="scss" scoped>
  .router-link-exact-active {
    background: var(--primary-border);
  }

  @media (min-width: 768px) {
    .router-link-exact-active {
      background: var(--primary-border);
    }
  }
</style>