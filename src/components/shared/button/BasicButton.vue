<template>
  <div class="button-wrapper">
    <button class='buttonFi'>
      {{ value }}
    </button>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    value: string;
    className?: string;
  }>()
</script>

<style lang="scss" scoped>
  .button-wrapper {
    font-family: fantasy;
    text-align: center;

    & .buttonFi {
      background: transparent;
      border: 1px solid black;
      border-radius: 8px;
      padding: 12px 40px;
      cursor: pointer;
      position: relative;

      &:before {
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        border: none;
        border-radius: 8px;
        background: var(--dark-mode-secondary-text);
        z-index: -1;
        width: calc(100% + 2px);
        height: calc(100% + 2px);
      }

      &:hover {
        background: var(--primary-secondary);
        transition: .5s all ease-in-out;

        &:before {
          transition: .5s all ease-in-out;
          top: 0;
          left: 0;
          background: transparent;
        }
      }
    }
  }
</style>