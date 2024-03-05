
<template>
  <div class="container grid grid-cols-2 lg:grid-cols-4 gap-4 items-center" data-aos="fade-up" data-aos-duration="1000">
    <canvas-arrow
      class="flex justify-center row-start-1"
      direction="right" 
      :disabled="[selectedItem?.id === LIST_FEEDBACK_DATA[0].id]" 
    />
    <ul class="flex flex-col row-start-2 lg:row-start-1 col-span-2 gap-10 items">
      <li v-for="(item, index) in LIST_FEEDBACK_DATA" :key="item.id"
        :class="['flex gap-8 flex-col item', (selectedItem && selectedItem.id === item.id) && 'active']">
        <div class="text-[24px] font-[fantasy]">{{ item.comment }}</div>

        <div class="flex w-full">
          <img src="/icons/quote.svg" alt="quote-feedback-logo" />
          <LineDown />
          <a class="flex-[0_0_auto]">Detail Feedback</a>
        </div>

        <div class="flex gap-8 items-center">
          <img class="rounded-[4rem] w-[18%]" :src="`/logo-feedback/${item.image}.webp`" alt="feedback-logo" />
          <div class="flex flex-col gap-2">
            <span class="uppercase">{{ item.name }}</span>
            <BasicText class-name="items-start text-[var(--dark-mode-secondary-text)]" :value=item.rank />
          </div>
        </div>
      </li>
    </ul>
    <canvas-arrow direction="left" class="flex justify-center"
        :disabled="[selectedItem?.id === LIST_FEEDBACK_DATA[LIST_FEEDBACK_DATA.length - 1].id]" />
  </div>
</template>

<script setup lang="ts">
import LineDown from "@/components/shared/LineDown.vue";
import { LIST_FEEDBACK_DATA } from './items';
import BasicText from "@/components/shared/text/BasicText.vue";
import { onMounted, ref } from "vue";
import type FeedbackLeaderType from "@/types/Feedback";

const selectedItem = ref<FeedbackLeaderType | null>(LIST_FEEDBACK_DATA[0]);

function clickArrowButton(direction: string) {
  const idxSelectItem = LIST_FEEDBACK_DATA.findIndex(item => selectedItem.value && item.id === selectedItem.value.id);
  if (idxSelectItem === -1) {
    selectedItem.value = null;
  }
  const idxNextSelectedItem = direction === 'left' ? idxSelectItem + 1 : idxSelectItem - 1;
  selectedItem.value = LIST_FEEDBACK_DATA[idxNextSelectedItem];
}

onMounted(() => {
  window.addEventListener('message', (event) => {
    if (event.data) {
      if (event.data.source === 'arrow') {
        clickArrowButton(event.data.data);
      }
    }
  })
});
</script>

<style lang="scss">
.items {
  position: relative;
  height: 460px;
  overflow: hidden;

  & .item {
    position: absolute;
    opacity: 0;
    transition: all .3s;
  }

  & .item.active {
    opacity: 1;
  }
}
</style>