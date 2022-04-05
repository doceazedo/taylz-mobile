<script lang="ts">
  import interact from 'interactjs';
  import { onMount } from 'svelte';
  import { browser } from '$app/env';
  import { CameraResult, Camera } from '$lib/components';
  import { CameraResultOptions } from '.';
  import { cameraState, cameraSide } from './camera.store';
  import { stickersList } from '$lib/modules/sticker/sticker.store';

  let stream: MediaStream;
  const width = 1080;
  const height = 1920;
  const aspectRatio = 16 / 9;

  const constraints: MediaStreamConstraints = {
    audio: false,
    video: { facingMode: 'user', aspectRatio },
  };

  let video: HTMLVideoElement;
  let canvas: HTMLCanvasElement;

  const takePicture = () => {
    const context = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    if ($cameraSide == 'front') {
      context.translate(width, 0);
      context.scale(-1, 1);
    }
    context.drawImage(video, 0, 0, width, height);

    $cameraState = 'EDIT';
  };

  const clearPicture = () => {
    if (!browser || !canvas) return;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  cameraState.subscribe((state) => {
    if (state != 'CAMERA') return;
    clearPicture();
    stickersList.clear();
  });

  const setupCamera = async () => {
    if (!navigator?.mediaDevices?.getUserMedia) {
      alert('NO CAMERA??');
      return;
    }
    await startStream(constraints);
  };

  const startStream = async (constraints: MediaStreamConstraints) => {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    video.srcObject = stream;
  };

  const switchCamera = async () => {
    stream.getTracks().forEach((track) => track.stop());

    $cameraSide = $cameraSide == 'front' ? 'back' : 'front';
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(
      (device) =>
        device.kind === 'videoinput' && device.label.includes($cameraSide),
    );

    await startStream({
      ...constraints,
      video: {
        deviceId: { exact: videoDevices?.[0]?.deviceId },
        aspectRatio,
      },
    });
  };

  onMount(async () => {
    if (!browser) return;

    await setupCamera();
    interact(video).on('doubletap', switchCamera);
  });
</script>

<Camera
  bind:video
  {takePicture}
  canTakePicture={$cameraState == 'CAMERA'}
  flipHorizontally={$cameraSide == 'front'}
  active={$cameraState == 'CAMERA'}
/>
<CameraResult bind:canvas />
{#if $cameraState == 'EDIT'}
  <CameraResultOptions />
{/if}
