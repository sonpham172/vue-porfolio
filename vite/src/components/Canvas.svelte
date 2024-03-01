<script lang='ts'>
  import { createEventDispatcher } from 'svelte';
  import type { CanvasType } from './Canvas';

  export let width=500;
  export let height=500;
  export let value: null | CanvasType = null;
  export let styleElement: string;
  export let disabled;

  let canvas: HTMLCanvasElement | undefined;
  const dispatch = createEventDispatcher();

  $: {
    console.log('disabled', disabled);
    
  }

  $: {
    if(canvas) {
      let ctx = canvas.getContext('2d');
      value = {
        ctx: ctx,
        width: width,
        height: height,
        density: width/height
      };
    }
  }
</script>

<div class="canvas-wrapper">
  <canvas 
    style={`${styleElement || ''}`}
    data-disabled={disabled}
    class="canvas"
    width={width} 
    height={height} 
    id={'root-canvas'}
    bind:this={canvas}
    on:mouseover={(e) => {
      dispatch('hover');
    }}
    on:click={e => {
      dispatch('click');
    }}
  ></canvas>
</div>

<style lang="scss">
  .canvas {
    cursor: pointer;
  }
  :global([data-disabled="true"]) {
    opacity: 0.5;
    pointer-events: none;
  }
</style>