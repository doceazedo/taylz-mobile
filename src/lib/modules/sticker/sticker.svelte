<script lang="ts">
  import interact from 'interactjs';
  import { onMount } from 'svelte';
  import { browser } from '$app/env';
  import { Sticker } from '$lib/components';
  import { holdingSticker, isTrashActive } from './sticker.store';
  import type { Transform } from './sticker.types';

  export let src: string, key: number;

  let transform: Transform = {
    angle: 0,
    scale: 1,
  };
  let lastTransform = transform;
  let x = browser ? window.innerWidth / 2 - 64 : 0;
  let y = browser ? window.innerHeight / 2 - 64 : 0;
  let gestureArea: HTMLDivElement;
  let isHoldingThis = false;

  onMount(() => {
    if (!browser) return;

    interact(gestureArea)
      .gesturable({
        listeners: {
          start: (event) => {
            lastTransform.angle -= event.angle;
          },
          move: (event) => {
            transform = {
              angle: event.angle + lastTransform.angle,
              scale: event.scale * lastTransform.scale,
            };
            dragMoveListener(event);
          },
          end: () => {
            lastTransform = transform;
          },
        },
      })
      .draggable({
        listeners: {
          start: () => {
            $holdingSticker = key;
            isHoldingThis = true;
          },
          move: dragMoveListener,
          end: () => {
            $holdingSticker = null;
            isHoldingThis = false;
          },
        },
      });
  });

  $: lastTransform, console.log(lastTransform);

  const dragMoveListener = (event) => {
    x = x + event.dx;
    y = y + event.dy;
  };
</script>

<Sticker
  bind:gestureArea
  {x}
  {y}
  {transform}
  {src}
  isDeleting={isHoldingThis && $isTrashActive}
/>
