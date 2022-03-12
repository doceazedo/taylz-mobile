import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';
import type { Sticker } from './sticker.types';

export const holdingSticker = writable<string>(null);
export const isTrashActive = writable(false);

// const defaultStickersDeleteMeLater = [
//   {
//     id: uuidv4(),
//     src: '/amongus.png',
//   },
//   {
//     id: uuidv4(),
//     src: '/catjam.gif',
//   },
// ];

const createStickersList = () => {
  const { subscribe, update } = writable<Sticker[]>([]);

  return {
    subscribe,
    add: (src: string) => {
      update((list) => {
        list.push({
          id: uuidv4(),
          src,
        });
        return list;
      });
    },
    remove: (id: string) => {
      update((list) => {
        list = list.filter((item) => item.id != id);
        return list;
      });
    },
  };
};

export const stickersList = createStickersList();
