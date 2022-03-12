<script lang="ts">
  import { scale } from 'svelte/transition';

  export let video: HTMLVideoElement,
    takePicture: () => void,
    canTakePicture: boolean,
    flipHorizontally: boolean,
    active: boolean;
</script>

{#if canTakePicture}
  <button
    class="shutter"
    on:click={takePicture}
    transition:scale={{
      duration: 200,
      start: 0.75,
    }}
  >
    <div class="shutter-inner" />
  </button>
{/if}

<div class="camera" class:flip={flipHorizontally} class:active>
  <!-- svelte-ignore a11y-media-has-caption -->
  <video bind:this={video} autoplay={true} />
</div>

<style lang="sass">
  .camera
    display: flex
    justify-content: center
    width: 100%
    aspect-ratio: 9/16
    overflow: hidden
    border-bottom-left-radius: 1rem
    border-bottom-right-radius: 1rem

    video
      width: auto
      height: 100%
      max-width: unset

    &.flip video
      transform: scaleX(-1)

    &:not(.active)
      display: none

  .shutter
    position: fixed
    bottom: 1rem
    left: calc(50% - 2.25rem)
    width: 4.5rem
    height: 4.5rem
    padding: 0.25rem
    background-color: transparent
    border: 3px solid #fff
    border-radius: 50%
    z-index: 10

    &-inner
      width: 100%
      height: 100%
      background-color: #fff
      border-radius: 50%
</style>
