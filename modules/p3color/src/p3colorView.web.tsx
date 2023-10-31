import * as React from 'react';

import { p3colorViewProps } from './p3color.types';

export default function p3colorView(props: p3colorViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
