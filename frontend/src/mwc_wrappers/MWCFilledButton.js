import React from 'react';
import { createComponent } from '@lit/react';
import { MdFilledButton } from '@material/web/button/filled-button.js'; // Path based on existing MaterialCard.js

export const MWCFilledButton = createComponent({
  tagName: 'md-filled-button',
  elementClass: MdFilledButton,
  react: React,
  events: {
    // Standard HTMLButtonElement events like 'click' are generally handled by React automatically
    // if not specified here. However, for custom events fired by the component, you'd add them.
    // For example, if it fired a 'custom-action', you might have: onCustomAction: 'custom-action'
  },
});
