import React from 'react';
import { createComponent } from '@lit/react';
import { MdIcon } from '@material/web/icon/icon.js';

// It's crucial to ensure the Material Symbols font is loaded in the application.
// This is typically done by adding the following in your main HTML file (e.g., public/index.html):
// <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
// Or Material Symbols Rounded, Sharp, etc.

export const MWCIcon = createComponent({
  tagName: 'md-icon',
  elementClass: MdIcon,
  react: React,
  events: {},
});

// Usage: <MWCIcon>icon_name</MWCIcon> or <MWCIcon icon="icon_name" /> if the component supports an icon attribute.
// The standard way is <MWCIcon>settings</MWCIcon>
// Children will be slotted as the icon name.
