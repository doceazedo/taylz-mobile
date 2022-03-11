<script lang="ts">
  import { CameraLayer, StickersLayer } from '$lib/modules';
  import { showStickersLayer } from '$lib/modules/sticker/sticker.store';
</script>

<CameraLayer />
{#if $showStickersLayer}
  <StickersLayer />
{/if}
