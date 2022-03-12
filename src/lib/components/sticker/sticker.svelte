<script lang="ts">
  import { scale } from 'svelte/transition';
  import type { Transform } from '$lib/modules/sticker';

  export let gestureArea: HTMLDivElement,
    src: string,
    x: number,
    y: number,
    transform: Transform,
    isDeleting = false;
</script>

<div
  class="sticker"
  class:deleting={isDeleting}
  bind:this={gestureArea}
  style="top: {y}px; left: {x}px; transform: rotate({transform.angle}deg) scale({transform.scale})"
  transition:scale={{ duration: 200, start: 0.25, opacity: 0 }}
>
  <div class="sticker-inner">
    <img {src} alt="" />
  </div>
</div>

<style lang="sass">
  .sticker
    position: absolute
    width: 8rem
    height: 8rem
    overflow: visible
    z-index: 50

    &-inner
      width: 100%
      height: 100%
      padding: 1rem
      touch-action: none

      img
        width: 100%
        height: 100%
        object-fit: contain
        pointer-events: none
        transition: all .2s ease

    &.deleting &-inner
      animation: shake .2s alternate infinite linear

      img
        transform: scale(.75)

  @keyframes shake
    0%
      transform: rotate(-2deg)

    50%
      transform: rotate(2deg)
</style>
