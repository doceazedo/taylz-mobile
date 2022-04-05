<script lang="ts">
  import html2canvas from 'html2canvas';
  import { fly } from 'svelte/transition';
  import { ButtonPrimaryCircle, ButtonPrimary } from '$lib/components/buttons';
  import {
    IconX,
    IconSound,
    IconMute,
    IconEffects,
    IconSticker,
    IconArrowRight,
  } from '$lib/components/icons';
  import { cameraState, cameraSide } from './camera.store';
  import { StickerDelete } from '$lib/modules/sticker';
  import { StickerPicker } from '$lib/modules/sticker-picker';

  const transition = {
    duration: 300,
    y: -32,
    opacity: 0,
  };

  const toggleStickerPicker = () =>
    (isStickerPickerOpen = !isStickerPickerOpen);

  let mute = false;
  let isStickerPickerOpen = false;

  const screenshot = () => {
    console.log('printt');
    html2canvas(document.querySelector('.stickers'), {
      backgroundColor: null,
    }).then((stickersLayer) => {
      const cameraResult: HTMLCanvasElement =
        document.querySelector('.camera-result');

      const ctx = cameraResult.getContext('2d');
      ctx.save();
      if ($cameraSide == 'front') {
        ctx.translate(cameraResult.width, 0);
        ctx.scale(-1, 1);
      }
      ctx.drawImage(stickersLayer, 0, 0);
      ctx.restore();
      // document.body.appendChild(canvas);
    });
  };
</script>

<div class="result-options">
  <header class="buttons" transition:fly={{ ...transition, y: -32 }}>
    <StickerDelete />

    <ButtonPrimaryCircle on:click={() => ($cameraState = 'CAMERA')}>
      <IconX />
    </ButtonPrimaryCircle>

    <ButtonPrimaryCircle on:click={() => (mute = !mute)}>
      {#if mute}
        <IconSound />
      {:else}
        <IconMute />
      {/if}
    </ButtonPrimaryCircle>
  </header>

  <footer class="buttons" transition:fly={{ ...transition, y: 32 }}>
    <div class="buttons-column">
      <ButtonPrimary>
        <IconEffects />
        Efeitos
      </ButtonPrimary>

      <ButtonPrimary on:click={toggleStickerPicker}>
        <IconSticker />
        Adesivos
      </ButtonPrimary>
    </div>

    <div class="buttons-column" on:click={screenshot}>
      <ButtonPrimary>
        Publicar
        <IconArrowRight />
      </ButtonPrimary>
    </div>
  </footer>
</div>

{#if isStickerPickerOpen}
  <StickerPicker close={toggleStickerPicker} />
{/if}

<style lang="sass">
  .result-options
    display: flex
    flex-direction: column
    justify-content: space-between
    gap: 1rem
    position: fixed
    top: 0
    width: 100%
    aspect-ratio: 9/16
    z-index: 20

    .buttons
      display: flex
      align-items: flex-end
      padding: 1.5rem
      gap: .75rem

      .buttons-column
        display: flex
        flex-direction: column
        gap: .75rem

    footer.buttons
      justify-content: space-between
</style>
