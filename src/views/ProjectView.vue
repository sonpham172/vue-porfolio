<script lang="ts" setup>
import { PROJECTS } from '@/constants/projects';
import { defineAsyncComponent, computed, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';


const asyncComponents = {
  ubo: defineAsyncComponent(() => import('@/components/shared/templates/ubo.vue')),
  saudi: defineAsyncComponent(() => import('@/components/shared/templates/saudi.vue')),
 ibit: defineAsyncComponent(() => import('@/components/shared/templates/ibit.vue')),
 butterfly: defineAsyncComponent(() => import('@/components/shared/templates/butterfly.vue')),
 airforce: defineAsyncComponent(() => import('@/components/shared/templates/airforce.vue')),
 aitech: defineAsyncComponent(() => import('@/components/shared/templates/aitech.vue')),
 keystroke: defineAsyncComponent(() => import('@/components/shared/templates/keystroke.vue')),
 fingerprint: defineAsyncComponent(() => import('@/components/shared/templates/fingerprint.vue')),
 hbm: defineAsyncComponent(() => import('@/components/shared/templates/hbm.vue')),
 seae: defineAsyncComponent(() => import('@/components/shared/templates/seae.vue')),
 smart: defineAsyncComponent(() => import('@/components/shared/templates/smart.vue')),
 tg: defineAsyncComponent(() => import('@/components/shared/templates/tg.vue'))
}


const componentToRender = ref<keyof typeof asyncComponents>('ibit')


const currentComponent = computed(() => {
 return asyncComponents[componentToRender.value]
})

const route = useRoute(); 
const id = route.params.projectId;


onMounted(() => {
  const selectedProject = PROJECTS.find(project => project.id === id); 
  componentToRender.value = selectedProject?.id as 'ibit' || 'ibit';
})

</script>
<template>
  <component :is="currentComponent"/>
</template>

<style lang="scss" scoped>
  
</style>