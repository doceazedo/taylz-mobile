<script lang="ts">
  import { StickerDelete, Sticker } from '.';
  import { v4 as uuidv4 } from 'uuid';

  export let debug = false;

  let stickerUrl = '/amongus.png';

  let stickers = [
    {
      id: uuidv4(),
      src: '/amongus.png',
    },
    {
      id: uuidv4(),
      src: '/catjam.gif',
    },
  ];

  const addSticker = () => {
    stickers.push({
      id: uuidv4(),
      src: stickerUrl,
    });
    console.log(stickers);
    stickers = stickers;
  };

  const deleteSticker = (key: number) => {
    stickers.splice(key, 1);
    stickers = stickers;
  };
</script>

{#if debug}
  <div class="debug">
    <input type="text" bind:value={stickerUrl} />
    <button on:click={addSticker}> Add sticker </button>
  </div>
{/if}

{#each stickers as sticker, key (sticker)}
  <Sticker src={sticker.src} {key} />
{/each}

<StickerDelete {deleteSticker} />

<style lang="sass">
  .debug
    position: fixed
    top: .5rem
    left: .5rem
</style>
