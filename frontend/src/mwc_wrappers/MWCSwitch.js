import React from 'react';
import { createComponent } from '@lit/react';
import { MdSwitch } from '@material/web/switch/switch.js';

export const MWCSwitch = createComponent({
  tagName: 'md-switch',
  elementClass: MdSwitch,
  react: React,
  events: {
    // `md-switch` fires an `input` event when its state changes (selected or not)
    // and also a `change` event.
    // 'input' is often preferred for immediate feedback.
    // 'change' might be after interaction finishes.
    // Let's map `onChange` to the 'change' event, as it's a common name for selection changes.
    // Or map to 'input' if that's more aligned with how it was used with MUI.
    // The MdSwitch 'selected' property reflects its state. The event detail might also carry this.
    // According to MWC docs, 'change' is the one to listen for user interaction changes.
    onChange: 'change',
  },
});
