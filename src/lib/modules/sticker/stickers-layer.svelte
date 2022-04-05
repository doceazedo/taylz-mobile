<script lang="ts">
  import { Sticker } from '.';
  import { stickersList } from './sticker.store';
</script>

<div class="stickers">
  {#each $stickersList as sticker, i (sticker)}
    <Sticker src={sticker.src} id={sticker.id} />
  {/each}
</div>

<div class="sticker-delete-wrapper">
  <!-- <StickerDelete {deleteSticker} /> -->
</div>

<style lang="sass">
  .stickers
    width: 100%
    aspect-ratio: 9/16
    
  .sticker-delete-wrapper
    position: fixed
    top: 0
    left: 0
    display: flex
    flex-direction: column
    justify-content: flex-end
    width: 100%
    aspect-ratio: 9/16
    pointer-events: none
    z-index: 49
</style>
