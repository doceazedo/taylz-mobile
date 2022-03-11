import { writable } from 'svelte/store';
import type { CameraState } from './camera.types';

export const cameraHeight = writable<number>();
export const cameraState = writable<CameraState>('CAMERA');
