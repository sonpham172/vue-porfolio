<script setup lang="ts">
  let journalData = [
    {
      id: 1,
      image: 'journal1.webp',
      title: '6 class',
      subTitle: 'Still a child student'
    },
    {
      id: 2,
      image: 'journal2.webp',
      title: '9 class',
      subTitle: 'The best student at my scholl for Physics'
    },
    {
      id: 3,
      image: 'journal3.webp',
      title: 'University',
      subTitle: 'No money to do anything'
    },
    {
      id: 4,
      image: 'journal4.webp',
      title: 'Work',
      subTitle: 'My first job as a developer'
    }
  ];

</script>

<template>
  <div class="container my-journal">
    <div class="title">MY JOURNAL</div>
    <div class="journals">

      <div class="card" v-for="(item, index) in journalData" :key="item.id">
        <div><img :src="`images/${item.image}`"/></div>
        <div class="info">
          <span class="title">{{ item.title }}</span>
          <span class="sub-title">{{ item.subTitle }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .my-journal {
    display: flex;
    flex-direction: column;
    gap: 4em;

    & .title {
      font-size: 24px;
      line-height: 1.5;
      font-weight: 600;
    }

    & .journals {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      padding: 16px 20px;
      gap: 20px;

      @media (min-width: 768px) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
        
      }

      & .card {
        display: flex;
        flex-direction: column;
        gap: 10px;

        img {
          object-fit: cover;
          border-radius: 16px;
          transition: scale 1s ease-in-out;
          cursor: pointer;

          &:hover {
            scale: 1.1;
          }
        }

        & .info {
          display: flex;
          flex-direction: column;
          margin-top: 10px;

          & .title {
            font-size: 16px;
            line-height: 1.5;
            font-weight: 600;
          }
    
          & .sub-title {
            font-size: 14px;
            line-height: 1.5;
            color: #6B7280;
          }
        }
      }
    }
  }
</style>
