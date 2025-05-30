import React from 'react';
import { createComponent } from '@lit/react';
import { MdTextButton } from '@material/web/button/text-button.js';

export const MWCTextButton = createComponent({
  tagName: 'md-text-button',
  elementClass: MdTextButton,
  react: React,
  events: {},
});
