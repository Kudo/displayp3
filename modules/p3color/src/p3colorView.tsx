import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { p3colorViewProps } from './p3color.types';

const NativeView: React.ComponentType<p3colorViewProps> =
  requireNativeViewManager('p3color');

export default function p3colorView(props: p3colorViewProps) {
  return <NativeView {...props} />;
}
