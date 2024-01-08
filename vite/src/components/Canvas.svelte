<script lang='ts'>
  import { createEventDispatcher } from 'svelte';
  import type { CanvasType } from './Canvas';

  export let width=500;
  export let height=500;
  export let value: null | CanvasType = null;

  let canvas: HTMLCanvasElement | undefined;
  const dispatch = createEventDispatcher();

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
    width={width} 
    height={height} 
    id='root-canvas' 
    bind:this={canvas}
    on:mouseover={(e) => {
      console.log('hover---');
      
      dispatch('hover');
    }}
  ></canvas>
</div>

<style>
</style>