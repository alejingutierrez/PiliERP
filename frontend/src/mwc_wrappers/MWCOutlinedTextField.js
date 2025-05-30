import React from 'react';
import { createComponent } from '@lit/react';
import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field.js';

export const MWCOutlinedTextField = createComponent({
  tagName: 'md-outlined-text-field',
  elementClass: MdOutlinedTextField,
  react: React,
  events: {
    onInput: 'input', // Standard input event
    onChange: 'change', // Standard change event
    // MWC text fields might use 'input' or 'change' for value updates.
    // 'keydown', 'keyup', 'keypress' can also be mapped if needed.
    // For controlled components, we might need to map specific events
    // that fire when the value is committed by the user.
    // The 'input' event is often used for real-time value changes.
    // The 'change' event might fire on blur or when Enter is pressed.
  },
});
