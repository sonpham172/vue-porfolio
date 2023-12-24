
<template>
  <div class="container grid grid-cols-1 gap-10">
    <div
      v-for="item in LIST_FEEDBACK_DATA"
      :key="item.id"
      class="flex gap-8 flex-col"
    >
      <div>{{ item.comment }}</div>

      <div class="flex w-full">
        <img src="/icons/quote.svg" alt="quote-feedback-logo"/>
        <LineDown />
        <a class="flex-[0_0_auto]">Detail Feedback</a>
      </div>

      <div class="flex gap-8 items-center">
        <img class="rounded-[4rem]" :src="`/logo-feedback/${item.image}.webp`" alt="feedback-logo"/>
        <div class="flex flex-col gap-2">
          <span class="uppercase">{{ item.name }}</span>
          <BasicText class-name="items-start text-[var(--dark-mode-secondary-text)]" :value=item.rank />
        </div>
      </div>

      <div>
        <canvas-arrow />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import  LineDown from "@/components/shared/LineDown.vue";
import FeedbackLeaderType from "../../../types/Feedback";
import BasicText from "@/components/shared/text/BasicText.vue";

const LIST_FEEDBACK_DATA: FeedbackLeaderType[] = [
  {
    id: 1,
    image: 'tim-bolot',
    path: 'umnai',
    name: 'Mai Huynh Tan',
    rank: 'Team Leader TA GCS VietName',
    comment: "They were incredibly good at transforming abstract and inevitably still unhardened ideas into a crisp design — the branding as well as the UX — which made it all far more real, first to us founders, and soon after to everyone else."
  },
  // {
  //   id: 2,
  //   image: 'increment',
  //   path: 'increment',
  //   name: 'Ha Quang Chanh',
  //   rank: 'Senior Software Engineer',
  //   comment: 'The new brand was delivered seamlessly and was received extremely favourably by our clients and our investors, who have seen many rebranding exercises.'
  // },
  // {
  //   id: 3,
  //   image: 'brand',
  //   path: 'brand',
  //   name: 'Nguyen Ngoc Nguyen',
  //   rank: 'Team Leader KAP FPT Software',
  //   comment: '',
  // },
  // {
  //   id: 4,
  //   image: 'business',
  //   path: 'business',
  //   name: 'Nguyen Bao Ngoc',
  //   rank: 'Technical Architect FAAS GeoTech Hub VN',
  //   comment: '',
  // }, 
  // {
  //   id: 5,
  //   image: 'law',
  //   path: 'law',
  //   name: 'Le Nguyen Huynh Nhan',
  //   rank: 'Team Leader Fortune 1Bit Soft',
  //   comment: ''
  // }
];
</script>

<style>

</style>