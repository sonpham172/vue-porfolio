<script lang="ts">
  import {Link, Route, Router} from 'svelte-navigator'
  import Arrow from "./wc/Arrow.wc.svelte";

  let dark = true;
</script>

<svelte:head>
  <script type="module" src="/src/wc/Arrow.wc.svelte"></script>
</svelte:head>

<main class="">
  <Arrow direction="left" disabled={true}/>
  <Arrow direction="right" disabled={false}/>
</main>

<style lang="scss">
  @use "src/styles/global.scss";
  @use "src/styles/colors.scss";

  main {
    // background: global.$dark-background;
    color: global.$dark-text;
    min-height: 100vh;

    padding: 8px;
  }

  main[data-theme="light"] {
    background: global.$light-background;
    color: global.$light-text;
  }

  pre {
    white-space: pre-wrap;
    border: 2px solid;
    padding: 8px;
    font-size: 12px;
    margin-top: 16px;
  }

  :global([data-disabled="true"]) {
    opacity: 0.5;
    pointer-events: none;
  }
</style>
