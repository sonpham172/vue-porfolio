<svelte:options tag="canvas-arrow" />
<script lang="ts">
  import type { CanvasType } from "components/Canvas";
  import Canvas from "components/Canvas.svelte";

  export let direction: 'left' | 'right' = 'left';

  let canvas: CanvasType;
  const initialRadius = 20;
  let radius = initialRadius;
  let animationFrame;
  let zoomStatus: 'IN' | 'OUT' | 'DONE';

  function handleMouseHover() { 
    if(!canvas) {
      return;
    }

    zoomStatus = 'IN';
    animationArrowCircle();
  }

  function drawCircle() {
    const {ctx, width, height} = canvas;
    ctx.beginPath();
    ctx.arc(45, 30, radius, 0, 2*Math.PI);
    ctx.stroke();
  }

  function animationArrowCircle() {
    const {ctx} = canvas;
    console.log('radius', radius, zoomStatus);
    if(zoomStatus === 'DONE') {
      cancelAnimationFrame(animationFrame);
      return;
    }

    switch (zoomStatus) {
      case 'IN':
        radius -= 2;
        if(radius === 10) zoomStatus = 'OUT';
        break;
      case 'OUT':
        radius += 2;
        if(radius === 20) zoomStatus = 'DONE';
        break;
    }

    ctx.clearRect(0, 0, 70, 55);
    drawArrow(0, 30, 50, 30);
    drawCircle();
    animationFrame = requestAnimationFrame(animationArrowCircle);
  }

  function drawArrow(fromx, fromy, tox, toy) {
    const {ctx, width, height} = canvas;
    let headlen = 10; // length of head in pixels
    let dx = tox - fromx;
    let dy = toy - fromy;
    let angle = Math.atan2(dy, dx);
    ctx.beginPath();
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    ctx.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    ctx.moveTo(tox, toy);
    ctx.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
    ctx.stroke();
  }

  $: {
    if(canvas) {
      drawCircle();
      drawArrow(0, 30, 50, 30);
    }
  }
</script>

<div class="hover:cursor-pointer">
  <Canvas width={70} height={55} bind:value={canvas} on:hover={handleMouseHover} />
</div>

<style>
  button {
    padding: 10px;
    color: #fff;
    font-size: 17px;
    border-radius: 5px;
    border: 1px solid #ccc;
    cursor: pointer;
  }
  .btn-solid {
    background: #20c997;
    border-color: #4cae4c;
  }
  .btn-outline {
    color: #20c997;
    background: transparent;
    border-color: #20c997;
  }
</style>