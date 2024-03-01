
<template>
   <div class="default-layout">
      <SiteNavigation />
     <RouterView />
   </div>
</template>
 
<script setup lang="ts">
import { RouterView } from 'vue-router';
import SiteNavigation from '../components/feature/navigation/SiteNavigation.vue';

</script>
 
<style>

</style>
 