<template>
  <div class="flex flex-col gap-4">
    <div class="relative rounded-2xl overflow-hidden">
      <img :src="`./images/${image}.webp`" alt="image-card" class="img-card"/>
    </div>
    <div class="flex flex-col gap-1">
      <BasicText :value="title" class-name="uppercase" fontSize="text-[14px]" />
      <BasicText :value="description" class-name="capitalize" is-fantasy-text />
    </div>
  </div>
</template>

<script setup lang="ts">
import BasicText from '@/components/shared/text/BasicText.vue';
  
  defineProps<{
    image: string;
    title: string;
    description: string;
  }>()
</script>

<style lang="scss" scoped>
  .img-card {
    width: 100%;
    height: auto;
    aspect-ratio: 1.35/1;
    object-fit: cover;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      transition: all 4s ease-out;
    }
  }
</style>