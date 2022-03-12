<script lang="ts">
  export let src: string;

  let loaded = false;
</script>

<div class="sticker-picker-item" class:loaded on:click>
  <img {src} alt="" on:load={() => (loaded = true)} />
</div>

<style lang="sass">
  .sticker-picker-item
    position: relative
    display: flex
    aspect-ratio: 1/1
    transition: all .2s ease
    overflow: hidden

    img
      width: 100%
      height: 100%
      object-fit: contain
      z-index: 1
      transition: all .2s ease

    &:not(.loaded)
      border-radius: 1rem
      animation: shine 1s infinite ease-in-out alternate
      
      img
        opacity: 0

  @keyframes shine
    0%
      background-color: rgba(#fff, .1)
      
    100%
      background-color: rgba(#fff, .15)
</style>
