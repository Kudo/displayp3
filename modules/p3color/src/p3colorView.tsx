import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { P3colorViewProps } from './p3color.types';

const NativeView: React.ComponentType<P3colorViewProps> =
  requireNativeViewManager('p3color');

export default function P3colorView(props: P3colorViewProps) {
  return <NativeView {...props} />;
}
