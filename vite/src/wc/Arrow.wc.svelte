<svelte:options tag="canvas-arrow" />
<script lang="ts">
  let canvas: HTMLCanvasElement | undefined;

  $: {
    if(canvas) {
      let ctx = canvas.getContext('2d');

      console.log('ctx', ctx);
      ctx.beginPath();
      canvas_arrow(ctx, 10, 30, 200, 150);
      canvas_arrow(ctx, 100, 200, 400, 50);
      ctx.stroke();
      ctx.save();

      function canvas_arrow(context, fromx, fromy, tox, toy) {
        var headlen = 10; // length of head in pixels
        var dx = tox - fromx;
        var dy = toy - fromy;
        var angle = Math.atan2(dy, dx);
        context.moveTo(fromx, fromy);
        context.lineTo(tox, toy);
        context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
        context.moveTo(tox, toy);
        context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
      }
    }
  }
  console.log('a');
</script>

<div>
  <canvas width="500" height="500" id='root-canvas' bind:this={canvas}></canvas>
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