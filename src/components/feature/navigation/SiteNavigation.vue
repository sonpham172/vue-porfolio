<template>
  <header id="header" class="sticky top-0 shadow-lg transition-all duration-500">
    <div class="header-main container justify-between py-8 items-center hidden md:flex">
      <h1 class="text-[24px] font-[fantasy]"><a href="/">FINN PHAM</a></h1>
      <MenuBar />
    </div>
  </header>
  <div id="main-navigation" class="transition-all duration-500">
    <MenuBar />
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import MenuBar from './MenuBar.vue';

  onMounted(() => {
    let header = document.querySelector("header");
    const mainNavigateElm = document.querySelector('#main-navigation');
    if(window.innerWidth > 768) {
      // disappear menu bar in init at top
      mainNavigateElm?.classList.add("disappear");
    }
    window.onscroll = function () {
      let currentScrollPos = window.scrollY;
      if(window.innerWidth < 768) {
        // always show menu bar in mobile
        mainNavigateElm?.classList.replace("disappear", "show-animation");
      } else {
        // toggle between header and navigation is only available on PC
        //@ts-ignore
        header.classList.toggle("disappear", currentScrollPos > 100);
        mainNavigateElm?.classList.toggle("disappear", currentScrollPos <= 100);
        if(currentScrollPos > 100) {
          mainNavigateElm?.classList.add("show-animation");
          mainNavigateElm?.classList.remove("hide-animation");
        } else {
          mainNavigateElm?.classList.remove("show-animation");
          mainNavigateElm?.classList.add("hide-animation");
        }
      }
    };
  });
</script>

<style lang="scss" scoped>
  .disappear {
    opacity: 0;
    pointer-events: none;
  }

  .show-animation {
    animation: 1s top-bottom forwards;
    @keyframes top-bottom {
      0% {
        top: 0;
      }
      100% {
        top: 30px;
      }
    }
  }

  .hide-animation {
    animation: 1s bottom-top forwards;
    @keyframes bottom-top {
      0% {
        top: 30px;
      }
      100% {
        top: 0;
      }
    }
  }

  #main-navigation {
    display: flex;
    position: fixed;
    bottom: 1rem;
    background: rgba(200,200,200,.5);
    border-radius: 24px;
    justify-content: center;
    z-index: 2;
    left: 10%;
    right: 0;
    transform: translateX(-5%);
    overflow: hidden;
    padding: 4px 0;
    width: auto;
    backdrop-filter: blur(10px);

    @media (min-width: 768px) {
      // top: 20px;
      bottom: auto;
      left: 50%;
      transform: translateX(-50%);
      width: max-content;
      padding: 5px;
      // display: none;


    }
  }
</style>