import {
  NativeModulesProxy,
  EventEmitter,
  Subscription,
} from 'expo-modules-core';

// Import the native module. On web, it will be resolved to p3color.web.ts
// and on native platforms to p3color.ts
import p3colorModule from './src/p3colorModule';
import P3colorView from './src/P3colorView';
import { ChangeEventPayload, P3colorViewProps } from './src/p3color.types';

// Get the native constant value.
export const PI = p3colorModule.PI;

export function hello(): string {
  return p3colorModule.hello();
}

export async function setValueAsync(value: string) {
  return await p3colorModule.setValueAsync(value);
}

const emitter = new EventEmitter(p3colorModule ?? NativeModulesProxy.p3color);

export function addChangeListener(
  listener: (event: ChangeEventPayload) => void
): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { P3colorView, P3colorViewProps, ChangeEventPayload };
