<script lang="ts" setup>
import { ref } from "vue";

const result = ref('');
</script>

<template>
  <div class="project-detail">
    <p><strong>➤ July 2023 – Oct 2024</strong></p>
    <h2>TG.Game (Online Gaming Platform)</h2>

    <p>
      Led frontend development for TG.Game, a Telegram-based online gaming platform
      featuring cryptocurrency integration. TG.Game allows users to play top online
      games, access sportsbooks, and utilize the $TGB token—a native crypto token
      used within the platform for gameplay and transactions.
    </p>

    <p>
      Telegram bot: <strong>@TGBetOfficialBot</strong>
    </p>

    <h3>Technical Implementation:</h3>
    <ul>
      <li>Built interactive games using HTML5 Canvas and WebGL</li>
      <li>Integrated Telegram Bot API with webhook architecture to manage high interaction volumes daily</li>
      <li>Implemented Shadow DOM for widget isolation ensuring consistent UI in embedded contexts</li>
      <li>Optimized Svelte rendering performance across components</li>
      <li>Configured Vite build system with code splitting and tree shaking to reduce load times</li>
    </ul>

    <h3>Responsibilities:</h3>
    <ul>
      <li>Developed cross-browser compatibility for Canvas-based games</li>
      <li>Handled and enhanced SEO strategy for the TG.Game website</li>
      <li>
        <a href="https://1bitsoftware.atlassian.net/wiki/spaces/~712020fef501b17e0c4f90bcace39da8e66790/pages/329187338/Search+Engine+Optimization+SEO" target="_blank">
          View detailed SEO strategy
        </a>
      </li>
      <li>Collaborated with team to improve game mechanics</li>
      <li>Integrated games from multiple third-party providers</li>
      <li>Connected Web3 wallet functionality using Web3.js and MetaMask</li>
      <li>Assisted in Docker image creation and GitHub Actions for build automation</li>
      <li>Reviewed and maintained clean, scalable codebase</li>
    </ul>

    <h3>Technologies:</h3>
    <ul>
      <li>NextJS, ReactJS, Svelte, SvelteKit</li>
      <li>HTML5 Canvas, WebGL</li>
      <li>Telegram Bot API</li>
      <li>Web3.js, MetaMask</li>
      <li>Docker, Vite, WebSockets</li>
      <li>TypeScript, HTML, CSS3, JavaScript</li>
    </ul>

    <h3>Achievements:</h3>
    <ul>
      <li>Successfully built and launched multiple mini-games within the Telegram ecosystem</li>
      <li>Deepened expertise with Svelte and SvelteKit</li>
      <li>Gained advanced experience working with Canvas and game rendering performance</li>
      <li>Successfully integrated crypto wallet login and transactions</li>
      <li>Contributed to deployment pipeline and automation processes</li>
    </ul>
  </div>
</template>

<style scoped>
.project-detail {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  padding: 1rem;
}
.project-detail ul {
  margin: 0 0 1rem 1.5rem;
}
.project-detail a {
  color: #007acc;
  text-decoration: underline;
}
</style>
