<template>
  <div :class="[className, isFantasyText ? 'fantasy' : '', fontSize || 'text-[24px]', 'flex font-light relative']">
    {{ value }}
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    value: string;
    isFantasyText?: boolean;
    fontSize?: string;
    className?: string;
  }>()
</script>

<style lang="scss" scoped>
  .fantasy {
    font-family: fantasy;
  }

  @keyframes move {
    from {
      width: 50%;
    }
    to {
      width: 0;
    }
  }
</style>