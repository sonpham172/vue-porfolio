

<template>
  <div class="container trusted-companies">
    <div class="title">WORKED AT COMPANY</div>
    <div class="companies">
      <img
      data-aos="fade-left" 
      data-aos-duration="2000"
      src="/images/companies/1bit.webp" alt="angelpad-logo" />
      <img 
      data-aos="fade-top" 
      data-aos-duration="2000"
      src="/images/companies/geocomply.webp" alt="accelerator-logo" />
      <img
      data-aos="fade-right" 
      data-aos-duration="2000"
      src="/images/companies/fpt.webp" alt="ycombinator-logo" />
    </div>
  </div>
</template>

<style lang="scss">
  .trusted-companies {
    display: flex;
    flex-direction: column;
    gap: 4em;

    & .title {
      font-size: 16px;
      font-weight: 700;
    }

    & .companies {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      overflow-x: scroll;
      gap: 2em;

      @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
      }
      img {
        width: 100%;
        height: 60px;
        object-fit: scale-down;
      }
    }
  }
</style>
