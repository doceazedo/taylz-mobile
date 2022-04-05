import { writable } from 'svelte/store';
import type { CameraState, CameraSide } from './camera.types';

export const cameraState = writable<CameraState>('CAMERA');
export const cameraSide = writable<CameraSide>('front');
