import { writable } from 'svelte/store';

export const holdingSticker = writable<number>(null);
export const isTrashActive = writable(false);
export const showStickersLayer = writable(false);
