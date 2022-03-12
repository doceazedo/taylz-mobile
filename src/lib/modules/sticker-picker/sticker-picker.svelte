<script lang="ts">
  import { StickerPicker } from '$lib/components/sticker-picker';
  import { stickersLibrary } from '$lib/fixtures';
  import { stickersList } from '$lib/modules/sticker/sticker.store';

  export let close: () => void;

  const addSticker = (src: string) => {
    stickersList.add(src);
    close();
  };
</script>

<StickerPicker {stickersLibrary} {addSticker} {close} />
