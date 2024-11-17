

<template>
  <div class="container trusted-companies">
    <div class="title">WORKED AT COMPANY</div>
    <div class="companies">
      <img src="/images/companies/1bit.webp" alt="angelpad-logo" />
      <img src="/images/companies/geocomply.webp" alt="accelerator-logo" />
      <img src="/images/companies/aitech.webp" alt="techstars-logo" />
      <img src="/images/companies/fpt.webp" alt="ycombinator-logo" />
      <img src="/images/companies/gcs.webp" alt="500startups-logo" />
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
      flex-direction: row;
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
