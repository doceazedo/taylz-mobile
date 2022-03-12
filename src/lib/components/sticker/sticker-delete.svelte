<script lang="ts">
  import { ButtonPrimary } from '$lib/components/buttons';
  import { IconTrash } from '$lib/components/icons';

  export let deleteBtn: HTMLDivElement,
    show = false,
    active = false;
</script>

<div class="sticker-delete" class:show>
  <div class="sticker-delete-inner" bind:this={deleteBtn}>
    <ButtonPrimary isDanger={true} isInverted={active}>
      <IconTrash /> Lixo
    </ButtonPrimary>
  </div>
</div>

<style lang="sass">
  .sticker-delete
    position: fixed
    top: 0
    right: 0
    display: flex
    transition: all .2s ease, bottom .3s ease, opacity .3s ease

    &-inner
      display: flex
      align-items: center
      height: 100%
      padding: 1.5rem

    &:not(.show)
      transform: translateX(1rem)
      opacity: 0
      pointer-events: none
</style>
