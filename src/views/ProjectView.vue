<script lang="ts" setup>
import {PROJECTS} from '@/constants/projects';
import { useRoute } from 'vue-router';
import {onMounted, ref} from "vue";

const result = ref('');

const route = useRoute(); 
const id = route.params.projectId;

onMounted(() => {
  const selectedProject = PROJECTS.find(project => project.id === id); 
  fetch(`/public/content/${selectedProject?.id}.html`).then(async(response) => {
    const resultRes = await response.text();
    result.value = resultRes;
    
  })
})

</script>
<template>

  <div v-html="result"></div>
</template>

<style lang="scss" scoped>
  
</style>