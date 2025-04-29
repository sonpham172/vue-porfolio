
<template>
  <div class="home-container">
    <div class="">
      <MyProject />
    </div>

    <!-- <HotProjectSection /> -->

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
import MyProject from '@/components/feature/section/MyProject.vue';
</script>

<style>
.home-container {
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 768px) {
    margin: 60px 0;
  }
}
</style>
