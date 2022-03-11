<script lang="ts">
  import { createRipple } from '.';
</script>

<button class="button" on:click={createRipple} on:click>
  <slot />
</button>

<style lang="sass">
  @import '../../../assets/sass/mixins'
  
  .button
    @include buttonPrimary
    justify-content: center
    width: 2.625rem
    border-radius: 50%
</style>
