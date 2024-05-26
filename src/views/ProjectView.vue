<script lang="ts" setup>
import {PROJECTS} from '@/constants/projects';
import { useRoute } from 'vue-router';

const route = useRoute(); 
const id = route.params.projectId;
const selectedProject = PROJECTS.find(project => project.id === id);
console.log('selectedProject', selectedProject);

</script>
<template>
  <div>
    project page {{$route.params.projectId}}
  </div>
</template>

<style lang="scss" scoped>
  
</style>