<svelte:options tag="canvas-arrow" />
<script lang="ts">
  import type { CanvasType } from "components/Canvas";
  import Canvas from "components/Canvas.svelte";
  import { onMount } from "svelte";

  let canvas: CanvasType;
  const initialRadius = 20;
  let radius = initialRadius;
  let animationFrame;
  let zoomStatus: 'IN' | 'OUT' | 'DONE' | 'INIT';

  function handleMouseHover(event) { 
    const {ctx, width, height} = canvas;
    if(!canvas) {
      return;
    }

    const rect = ctx.canvas.getBoundingClientRect();
    // radius -= 2;
    // if(radius < 10) {
    //   radius = 10;
    // }

    // const distance = Math.sqrt((mouseX - 45) ** 2 + (mouseY - 30) ** 2);
    // console.log('distance', distance);
    
    // if (distance <= radius) {
    //   radius -= 2;
    //   if (radius < initialRadius * 0.5) {
    //     radius = initialRadius * 0.5;
    //   }
    //   animationArrowCircle(ctx);
    // }
    // ctx.clearRect(0, 0, width, height);
    zoomStatus = 'INIT';
    animationArrowCircle();
  }

  function drawCircle() {
    const {ctx, width, height} = canvas;
    // ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.arc(45, 30, radius, 0, 2*Math.PI);
    ctx.stroke();
  }

  function animationArrowCircle() {
    const {ctx} = canvas;
    // let diff = initialRadius - radius;
    // let easing = 1;
    // do {
    //   if(radius < 10) {
    //     radius -= 2;
    //     zoomStatus = 'IN';
    //   } else {
    //     if(radius === 20) {
    //       zoomStatus = 'DONE';
    //     } else {
    //       radius += 2;
    //       zoomStatus = 'OUT';
    //     }
    //   }

    //   ctx.clearRect(0, 0, 70, 55);
    //   drawArrow(0, 30, 50, 30);
    //   drawCircle();
    //   animationFrame = requestAnimationFrame(animationArrowCircle);
    // } while (zoomStatus === 'INIT' || (radius > 10 && zoomStatus === 'IN') || (radius <= 20 && zoomStatus === 'OUT'));
    if(radius > 10 && (zoomStatus === 'IN' || zoomStatus === 'INIT')) {
      radius -= 2;
      ctx.clearRect(0, 0, 70, 55);
      drawArrow(0, 30, 50, 30);
      drawCircle();
      zoomStatus = 'IN';
      animationFrame = requestAnimationFrame(animationArrowCircle);
    } else {
      zoomStatus = 'OUT';
      cancelAnimationFrame(animationFrame);
    }
  }

  function drawArrow(fromx, fromy, tox, toy) {
    const {ctx, width, height} = canvas;
    let headlen = 10; // length of head in pixels
    let dx = tox - fromx;
    let dy = toy - fromy;
    let angle = Math.atan2(dy, dx);
    // ctx.clearRect(0, 0, width, height);
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