<script lang="ts">
  export let canvas: HTMLCanvasElement;
</script>

<canvas class="camera-result" bind:this={canvas} />

<style lang="sass">
  .camera-result
    position: fixed
    top: 0
    width: 100%
    aspect-ratio: 9/16
    border-bottom-left-radius: 1rem
    border-bottom-right-radius: 1rem
    pointer-events: none
</style>
