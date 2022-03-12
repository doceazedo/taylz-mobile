<script lang="ts">
  import { fade } from 'svelte/transition';
  import { ButtonPrimaryCircle, ButtonPrimary } from '$lib/components/buttons';
  import { IconX, IconSticker, IconSearch } from '$lib/components/icons';
  import { StickerPickerItem } from '.';

  export let stickersLibrary: string[],
    addSticker: (url: string) => void,
    close: () => void;
</script>

<div class="sticker-picker" transition:fade={{ duration: 100 }}>
  <header class="sticker-picker-header">
    <ButtonPrimaryCircle on:click={close}>
      <IconX />
    </ButtonPrimaryCircle>

    <ButtonPrimary>
      <IconSticker />
      Adesivos
    </ButtonPrimary>

    <ButtonPrimary isActive={false}>
      <IconSticker />
      GIFs
    </ButtonPrimary>
  </header>

  <div class="sticker-picker-search">
    <input type="text" value="Trending" />
    <div class="icon">
      <IconSearch />
    </div>
  </div>

  <ul class="sticker-picker-grid">
    {#each stickersLibrary as src}
      <StickerPickerItem {src} on:click={() => addSticker(src)} />
    {/each}
  </ul>
</div>

<style lang="sass">
  .sticker-picker
    position: fixed
    top: 0
    left: 0
    display: flex
    flex-direction: column
    gap: 1.5rem
    width: 100%
    aspect-ratio: 9/16
    padding: 1.5rem 0
    background-color: rgba(#fff, .3)
    backdrop-filter: blur(1.25rem)
    overflow-y: auto
    z-index: 51

    &-header
      display: flex
      gap: .75rem
      padding-left: 1.5rem

    &-search
      position: relative
      margin: 0 1.5rem

      input
        width: 100%
        height: 42px
        padding: 0 1rem
        background-color: #fff
        border: none
        border-radius: 1.5rem
        box-shadow: 0 0 .25rem rgba(#000, .25)
        outline: none

      .icon
        position: absolute
        top: 0
        right: 0
        display: flex
        justify-content: center
        align-items: center
        width: 42px
        height: 42px
        border-radius: 50%

    &-grid
      display: grid
      grid-template-columns: repeat(3, 1fr)
      grid-column-gap: .75rem
      grid-row-gap: .75rem
      padding: 0 1.5rem
</style>
