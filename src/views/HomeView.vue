
<template>
  <div class="home-container">
    <div class="container">
      <BasicText class-name="mr-[30%]" value="We make brands humanly relatable" is-fantasy-text/>
      <BasicText 
      class-name="text-primary-tertiary mr-[30%] mt-4"
      value="We design and build brands and products for startups and scaleups in fintech, health tech, edtech, AI, VR and blockchain." />
    </div>

    <HotProjectSection />

    <BasicButton value="All Project" />
    <LineDown />

    <TrustedCompany />
    <LineDown />

    <FeedbackLeader />
    <LineDown />

    <!-- <MyJournal /> -->
  </div>
</template>

<script setup lang="ts">
import BasicText from '@/components/shared/text/BasicText.vue';
import HotProjectSection from '@/components/feature/section/HotProjectSection.vue';
import BasicButton from '@/components/shared/button/BasicButton.vue';
import LineDown from '@/components/shared/LineDown.vue';
import FeedbackLeader from '@/components/feature/section/FeedbackLeader.vue';
import TrustedCompany from '@/components/feature/section/TrustedCompany.vue';
import MyJournal from '@/components/feature/section/MyJournal.vue';

</script>

<style>
.home-container {
  display: flex;
  margin: 40px 0;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 768px) {
    margin: 160px 0;
  }
}
</style>
