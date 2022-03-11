<script lang="ts">
  import { ButtonPrimary } from '$lib/components/buttons';
  import { IconTrash } from '$lib/components/icons';
  import { cameraHeight } from '$lib/modules/camera';

  export let deleteBtn: HTMLDivElement,
    show = false,
    active = false;
</script>

<div class="sticker-delete" class:show style="top: {$cameraHeight - 66}px">
  <div class="sticker-delete-inner" bind:this={deleteBtn}>
    <ButtonPrimary isDanger={true} isInverted={active}>
      <IconTrash /> Lixo
    </ButtonPrimary>
  </div>
</div>

<style lang="sass">
  .sticker-delete
    position: fixed
    display: flex
    width: 100%
    transition: all .2s ease, bottom .3s ease, opacity .3s ease
    z-index: 49

    &-inner
      display: flex
      align-items: center
      height: 100%
      padding: .75rem

    &:not(.show)
      transform: translateX(-1rem)
      opacity: 0
      pointer-events: none
</style>
