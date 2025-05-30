import React from 'react';
import { MdIcon } from '@material/web/icon/md-icon.js';

// DESIGN_GUIDELINES.md colors for reference:
// Primary Main (`primary.main`): `#5C6AC4`
// Secondary Main (`secondary.main`): `#2C6ECB`
// Error (`error.main`): `#D82C0D`
// Warning (`warning.main`): `#EEC200`
// Success (`success.main`): `#36A269`
// Text Primary (`text.primary`): `#1A1B1C`
// Text Secondary (`text.secondary`): `#6D7175` (Often used for 'action' color in MUI)

const IconAtom = ({ icon, color = 'inherit', size = 'medium', sx = {} }) => {
  if (!icon) {
    return null;
  }

  const style = { ...sx };

  // Map MUI color names to actual color values
  switch (color) {
    case 'primary':
      style.color = '#5C6AC4'; // primary.main
      break;
    case 'secondary':
      style.color = '#2C6ECB'; // secondary.main
      break;
    case 'action':
      style.color = '#6D7175'; // text.secondary
      break;
    case 'error':
      style.color = '#D82C0D'; // error.main
      break;
    case 'disabled':
      style.color = '#B4B7BA'; // text.disabled
      break;
    case 'success':
      style.color = '#36A269'; // success.main
      break;
    case 'warning':
      style.color = '#EEC200'; // warning.main
      break;
    case 'inherit':
      style.color = 'inherit';
      break;
    default:
      // If 'color' is a direct hex or valid CSS color, use it. Otherwise, default.
      if (typeof color === 'string' && (color.startsWith('#') || color.startsWith('rgb'))) {
        style.color = color;
      } else {
        style.color = '#1A1B1C'; // text.primary as default if no match
      }
  }

  // Map MUI size to fontSize for MdIcon
  // MdIcon also uses --md-icon-size CSS custom property.
  let iconSizeValue = '24px'; // Default to medium
  if (size === 'small') {
    iconSizeValue = '20px';
  } else if (size === 'large') {
    iconSizeValue = '35px';
  } else if (typeof size === 'number') {
    iconSizeValue = `${size}px`;
  }
  style['--md-icon-size'] = iconSizeValue;
  style.fontSize = iconSizeValue; // Fallback for contexts where CSS var might not apply or for clarity

  // If 'icon' is a React element (e.g., an imported SVG component), pass it as children.
  // Otherwise, it's a string (Material Symbol name).
  if (React.isValidElement(icon)) {
    return <MdIcon style={style}>{icon}</MdIcon>;
  }

  return (
    <MdIcon style={style}>
      {/* Assumes 'icon' prop is the string name of a Material Symbol */}
      {icon}
    </MdIcon>
  );
};

export default IconAtom;
