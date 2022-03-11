<script lang="ts">
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
  import { cameraState } from './camera.store';
  import { showStickersLayer } from '$lib/modules/sticker/sticker.store';

  const transition = {
    duration: 300,
    y: -32,
    opacity: 0,
  };
  let mute = false;
</script>

<div class="result-options">
  <header class="buttons" transition:fly={{ ...transition, y: -32 }}>
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

      <ButtonPrimary
        on:click={() => ($showStickersLayer = !$showStickersLayer)}
      >
        <IconSticker />
        Adesivos
      </ButtonPrimary>
    </div>

    <div class="buttons-column">
      <ButtonPrimary>
        Publicar
        <IconArrowRight />
      </ButtonPrimary>
    </div>
  </footer>
</div>

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
