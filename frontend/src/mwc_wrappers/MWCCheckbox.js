import React from 'react';
import { createComponent } from '@lit/react';
import { MdCheckbox } from '@material/web/checkbox/checkbox.js';

export const MWCCheckbox = createComponent({
  tagName: 'md-checkbox',
  elementClass: MdCheckbox,
  react: React,
  events: {
    onChange: 'change', // MWC checkbox fires 'change' when its selected state changes
    // 'input' might also be available, but 'change' is standard for selection changes.
  },
});
