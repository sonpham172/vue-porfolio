<template>
  <div class="about-container">
    <div class="hero-section">
      <div class="container mx-auto px-4">
        <BasicText 
          class-name="text-4xl md:text-6xl font-bold mb-6"
          value="About Me"
          is-fantasy-text
        />
        <BasicText 
          class-name="text-xl md:text-2xl text-primary-tertiary mb-8"
          value="Crafting digital experiences with passion and precision"
        />
      </div>
    </div>

    <div class="content-section">
      <div class="container mx-auto px-4 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="profile-section">
            <div class="profile-image-container">
              <!-- Replace with your actual image -->

              <div class="profile-image bg-gray-200 rounded-full w-64 h-64 mx-auto">
                <img src="/images/avatar.jpg" class="profile-image rounded-full w-64 h-64 mx-auto" alt="Profile avatar">

              </div>
            </div>
          </div>
          
          <div class="bio-section">
            <BasicText 
              class-name="text-2xl font-bold mb-6"
              value="Hello, I'm Finn (Senior Frontend Engineer)"
            />
            <BasicText 
              class-name="text-lg mb-6"
              value="A passionate developer and designer with a keen eye for detail and a love for creating beautiful, functional digital experiences."
            />
        
          </div>
        </div>

        <div class="experience-section mt-16">
          <BasicText 
            class-name="text-2xl font-bold mb-8"
            value="Experience"
          />
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="experience-card">
              <BasicText 
                class-name="text-xl font-bold mb-2"
                value="Senior Frontend Engineer"
              />
              <BasicText 
                class-name="text-primary-tertiary mb-4"
                value="2020 - Present"
              />
              <BasicText 
                class-name="text-gray-600"
                value="Leading development teams and creating innovative solutions for clients across various industries."
              />
            </div>
            <div class="experience-card">
              <BasicText 
                class-name="text-xl font-bold mb-2"
                value="Backend Developer"
              />
              <BasicText 
                class-name="text-primary-tertiary mb-4"
                value="2024 - 2025"
              />
              <BasicText 
                class-name="text-gray-600"
                value="Building robust server-side applications using Node.js and Express, developing RESTful APIs and implementing efficient database solutions."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BasicText from '@/components/shared/text/BasicText.vue';
</script>

<style scoped>
.about-container {
  @apply min-h-screen bg-white;
}

.hero-section {
  @apply py-20 bg-primary-text text-white;
}

.profile-image-container {
  @apply relative;
}

.profile-image {
  @apply object-cover;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.skill-tag {
  @apply px-4 py-2 bg-primary-secondary text-primary-text rounded-full text-sm font-medium;
}

.experience-card {
  @apply p-6 rounded-lg border border-primary-border hover:shadow-lg transition-shadow duration-300;
}

.content-section {
  @apply bg-background;
}
</style>