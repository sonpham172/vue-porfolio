
<template>
  <div class="container grid grid-cols-2 gap-10">
    <BasicCard
      v-for="item in LIST_CARD_DATA" 
      :data-aos="item.aos"
      data-aos-duration="2000"
      :key="item.id" 
      :title="item.title" 
      :description="item.description" 
      :image="item.image" 
    />
  </div>
</template>

<script setup lang="ts">
import BasicCard from "../../../components/feature/card/BasicCard.vue";

const LIST_CARD_DATA = [
  {
    id: 1,
    image: 'umnai',
    path: 'umnai',
    title: 'Umnai',
    description: 'AI for humans',
    aos: "fade-up"
  },
  {
    id: 2,
    image: 'increment',
    path: 'increment',
    title: 'Increment',
    description: 'Plus is for progress',
    aos: "fade-down"
  },
  {
    id: 3,
    image: 'brand',
    path: 'brand',
    title: 'Paytrix',
    description: 'Curating financial solutions',
    aos: "fade-right"
  },
  {
    id: 4,
    image: 'business',
    path: 'business',
    title: 'Vioside',
    description: 'Evolve to simplicity',
    aos: "fade-left"
  }, 
  {
    id: 5,
    image: 'law',
    path: 'law',
    title: 'Vaia',
    description: 'Personalised legal services',
    aos: "fade-down"
  }
];
</script>

<style lang="scss">

</style>
