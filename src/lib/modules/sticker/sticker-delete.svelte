<script lang="ts">
  import interact from 'interactjs';
  import { onMount } from 'svelte';
  import { browser } from '$app/env';
  import { StickerDelete } from '$lib/components';
  import { holdingSticker, isTrashActive } from './sticker.store';
  import { stickersList } from './sticker.store';

  let deleteBtn: HTMLDivElement;

  onMount(() => {
    if (!browser) return;

    interact(deleteBtn).dropzone({
      accept: '.sticker',
      overlap: 0.1,
      ondragenter: () => {
        $isTrashActive = true;
      },
      ondragleave: () => {
        $isTrashActive = false;
      },
      ondrop: () => {
        stickersList.remove($holdingSticker);
        $holdingSticker = null;
        $isTrashActive = false;
      },
    });
  });
</script>

<StickerDelete
  bind:deleteBtn
  show={$holdingSticker != null}
  active={$isTrashActive}
/>
