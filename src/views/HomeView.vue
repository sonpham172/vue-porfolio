
<template>
  <div class="home-container">
    <div class="container">
      <BasicText class-name="mr-[30%]" value="We make brands humanly relatable" is-fantasy-text/>
      <BasicText 
      class-name="text-primary-tertiary mr-[30%] mt-4"
      value="We design and build brands and products for startups and scaleups in fintech, health tech, edtech, AI, VR and blockchain." />
    </div>

    <div class="container grid grid-cols-2 gap-10">
      <BasicCard 
        v-for="item in LIST_CARD_DATA" 
        :key="item.id" 
        :title="item.title" 
        :description="item.description" 
        :image="item.image" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import BasicText from '@/components/feature/text/BasicText.vue';
import BasicCard from '@/components/feature/card/BasicCard.vue';

const LIST_CARD_DATA = [
  {
    id: 1,
    image: 'umnai',
    path: 'umnai',
    title: 'Umnai',
    description: 'AI for humans'
  },
  {
    id: 2,
    image: 'increment',
    path: 'increment',
    title: 'Increment',
    description: 'Plus is for progress'
  },
  {
    id: 3,
    image: 'brand',
    path: 'brand',
    title: 'Paytrix',
    description: 'Curating financial solutions'
  },
  {
    id: 4,
    image: 'business',
    path: 'business',
    title: 'Vioside',
    description: 'Evolve to simplicity'
  }, 
  {
    id: 5,
    image: 'law',
    path: 'law',
    title: 'Vaia',
    description: 'Personalised legal services'
  }
];
</script>

<style>
.home-container {
  display: flex;
  margin: 160px 0;
  flex-direction: column;
  gap: 32px;
}
</style>
