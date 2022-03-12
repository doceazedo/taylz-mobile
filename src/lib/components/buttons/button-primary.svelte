<script lang="ts">
  import { createRipple } from '.';

  export let isActive = true,
    isDanger = false,
    isInverted = false;
</script>

<button
  class="button"
  class:active={isActive}
  class:danger={isDanger}
  class:invert={isInverted}
  on:click={createRipple}
  on:click
>
  <slot />
</button>

<style lang="sass">
  @import '../../../assets/sass/mixins'
  
  .button
    @include buttonPrimary
    padding: 0 1rem
    gap: .75rem
    border-radius: 4rem
    transition: all .2s ease

    &.danger
      color: #ff0000

      &.invert
        background-color: #ff0000
        color: #fff

        :global(svg)
          stroke: #fff
</style>
