<script lang="ts">
  import { CameraLayer, StickersLayer } from '$lib/modules';
  import { cameraState } from '$lib/modules/camera/camera.store';
</script>

<CameraLayer />
{#if $cameraState == 'EDIT'}
  <StickersLayer />
{/if}
