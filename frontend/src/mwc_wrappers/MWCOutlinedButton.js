import React from 'react';
import { createComponent } from '@lit/react';
import { MdOutlinedButton } from '@material/web/button/outlined-button.js';

export const MWCOutlinedButton = createComponent({
  tagName: 'md-outlined-button',
  elementClass: MdOutlinedButton,
  react: React,
  events: {},
});
